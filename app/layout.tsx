import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"), // ✅ Change to your real domain in production
  title: "Creator Cartel - All-In-One Creator Workspace",
  description:
    "Discover vital content insights, coordinate team schedules, and streamline workflows with tools designed specifically for content creators and their teams.",
  keywords:
    "creator workspace, content creator tools, creator collaboration, viral content insights, creator analytics",
  authors: [{ name: "Creator Cartel" }],
  openGraph: {
    type: "website",
    title: "Creator Cartel - All-In-One Creator Workspace",
    description:
      "Strength in creativity, power in numbers. Join the creator movement.",
    images: ["/og-image.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Creator Cartel - All-In-One Creator Workspace",
    description:
      "Strength in creativity, power in numbers. Join the creator movement.",
    images: ["/og-image.png"],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: "#f97316",

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
