import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reframe Studio | Sahadan dijitale üretim sistemi",
  description:
    "Reframe Studio; video, drone, kurgu, sosyal medya, AI ve web üretimini markalar için tek bir kreatif akışta birleştirir.",
  openGraph: {
    title: "Reframe Studio",
    description:
      "Markalar için sahadan dijitale uzanan kreatif üretim sistemleri.",
    type: "website"
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
