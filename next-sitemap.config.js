const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  changefreq: "weekly",
  sitemapSize: 7000,
  exclude: [],
  // Optionally, add custom transform for lastmod from data/file timestamps
  // See: https://github.com/iamvishnusankar/next-sitemap#custom-transform
  // Example for dynamic slugs:
  // transform: async (config, path) => {
  //   let lastmod = new Date().toISOString();
  //   // Custom logic for lastmod per path
  //   return { loc: path, lastmod };
  // },
};
