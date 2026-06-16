import rss from "@astrojs/rss";
import { getImage } from "astro:assets";
import { type CollectionEntry, getCollection } from "astro:content";
import imageAssetMap from "astro:asset-imports";
import { getSortedPosts } from "@/utils/getSortedPosts";
import { getPostUrl } from "@/utils/getPostPaths";
import config from "@/config";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;

function escapeAttribute(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function getContentImageImportId(imageSrc: string, filePath: string): string {
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  params.set("importer", filePath);
  return `${imageSrc}?${params.toString()}`;
}

function getAbsoluteUrl(src: string): string {
  return new URL(src, config.site.url).toString();
}

function getAbsoluteSrcset(srcset: string | undefined): string | undefined {
  if (!srcset) return srcset;

  return srcset
    .split(",")
    .map(candidate => {
      const parts = candidate.trim().split(/\s+/);
      if (parts.length === 0 || !parts[0]) return candidate;

      return [getAbsoluteUrl(parts[0]), ...parts.slice(1)].join(" ");
    })
    .join(", ");
}

async function resolveContentImages(
  html: string,
  filePath: string
): Promise<string> {
  const images = new Map<string, Awaited<ReturnType<typeof getImage>>>();

  for (const [, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    const decodedImagePath = JSON.parse(
      imagePath
        .replace(/&(?:#x22|quot);/g, '"')
        .replace(/&(?:#x27|apos);/g, "'")
    );

    const image = URL.canParse(decodedImagePath.src)
      ? await getImage(decodedImagePath)
      : await getImage({
          ...decodedImagePath,
          src: imageAssetMap.get(
            getContentImageImportId(decodedImagePath.src, filePath)
          ),
        });

    images.set(imagePath, image);
  }

  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = images.get(imagePath);
    if (!image) return full;

    const { index: _index, ...attributes } = image.attributes;
    const imageAttributes = {
      ...attributes,
      src: getAbsoluteUrl(image.src),
      srcset: getAbsoluteSrcset(image.srcSet.attribute),
    };

    return Object.entries(imageAttributes)
      .filter(([, value]) => value != null)
      .map(([key, value]) => `${key}="${escapeAttribute(String(value))}"`)
      .join(" ");
  });
}

async function getFeedContent(post: CollectionEntry<"posts">): Promise<string> {
  const html = post.rendered?.html ?? parser.render(post.body ?? "");

  const resolvedHtml =
    post.rendered?.metadata?.imagePaths?.length && post.filePath
      ? await resolveContentImages(html, post.filePath)
      : html;

  return sanitizeHtml(resolvedHtml, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: [
        "src",
        "srcset",
        "sizes",
        "alt",
        "title",
        "width",
        "height",
        "loading",
        "decoding",
      ],
    },
  });
}

export async function GET() {
  const posts = await getCollection("posts");
  const sortedPosts = getSortedPosts(posts);

  return rss({
    title: config.site.title,
    description: config.site.description,
    site: config.site.url,
    items: await Promise.all(
      sortedPosts.map(async post => ({
        link: getPostUrl(post.id, post.filePath),
        title: post.data.title,
        pubDate: new Date(post.data.modDatetime ?? post.data.pubDatetime),
        content: await getFeedContent(post),
      }))
    ),
  });
}
