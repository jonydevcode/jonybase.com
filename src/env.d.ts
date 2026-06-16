/// <reference types="astro/client" />

declare module "astro:asset-imports" {
  const assetImports: Map<string, import("astro").ImageMetadata>;
  export default assetImports;
}
