import type { Metadata } from "next";
import { site } from "@/data/content";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.name} · ${site.alias}`,
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
