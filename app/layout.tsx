import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JRINK® — THE ORANGE CHAPTER",
  description:
    "An Independent Digital Brand Experience. The Art of Orange — An editorial study of citrus, character, and visual storytelling.",
  keywords: ["JRINK", "The Orange Chapter", "Editorial", "Citrus", "Luxury Beverage", "Independent Studio"],
  authors: [{ name: "JRINK STUDIO" }],
  openGraph: {
    title: "JRINK® — THE ORANGE CHAPTER",
    description: "An Independent Digital Brand Experience. Not just another orange.",
    type: "website",
    locale: "en_US",
    siteName: "JRINK® STUDIO",
  },
};

export const viewport: Viewport = {
  themeColor: "#070707",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-[#070707] text-[#F8F8F9]">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#070707] text-[#F8F8F9] antialiased selection:bg-[#F76707] selection:text-[#070707]">
        {children}
      </body>
    </html>
  );
}
