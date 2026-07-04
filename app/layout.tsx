import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://reframe-studio.netlify.app";
const siteDescription =
  "Reframe Studio; video, drone, kurgu, sosyal medya, AI ve web üretimini markalar için tek bir kreatif üretim akışında birleştirir.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Reframe Studio | Sahadan dijitale üretim sistemi",
    template: "%s | Reframe Studio"
  },
  description: siteDescription,
  alternates: {
    canonical: "/"
  },
  // Temporary production placeholders live in public/ and can be swapped for branded assets later.
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "Reframe Studio | Sahadan dijitale üretim sistemi",
    description: siteDescription,
    url: "/",
    siteName: "Reframe Studio",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Reframe Studio - Sahadan dijitale üretim sistemi"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Reframe Studio | Sahadan dijitale üretim sistemi",
    description: siteDescription,
    images: ["/og-image.svg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
