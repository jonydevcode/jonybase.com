const config = {
  site: {
    url: "https://jonybase.com/",
    title: "@jonydevcode",
    description: "My space on the internet.",
    author: "@jonydevcode",
    profile: "https://jonybase.com/",
    lang: "en",
    timezone: "Asia/Singapore",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  socials: {
    github: "https://github.com/jonydevcode",
    x: "https://x.com/jonydevcode",
  },
} as const;

export default config;
