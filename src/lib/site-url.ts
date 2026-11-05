// The public URL used for link previews, the sitemap, and robots.txt.
// Set NEXT_PUBLIC_SITE_URL once the site has a custom domain. Until then, Vercel's
// production URL is used on Vercel, and localhost everywhere else.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");
