import type { Metadata } from "next";
import { contact, site } from "@/data/content";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const title = `${site.name} · ${site.alias}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    title,
    description: site.description,
    siteName: title,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
};

// Structured data so search engines can link this page to the same person on other sites.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: site.alias,
  description: site.description,
  url: siteUrl,
  sameAs: contact.links.filter((link) => link.href.startsWith("https://")).map((link) => link.href),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
