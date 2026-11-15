import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://artisart.in"),
  title: "Art is Art | Authentic Madhubani Art & Interior Design by Monika",
  description:
    "Explore authentic handcrafted Madhubani (Mithila) art by Monika — Interior Designer & Ancient Art Artist. Art is Art curates bespoke Kachni, Bharni, Godna, and Kohbar paintings harmonized for luxury living spaces and sacred interiors.",
  keywords: [
    "Art is Art",
    "Art is Art Monika",
    "Madhubani art",
    "Mithila painting",
    "Monika artist",
    "Ancient art artist",
    "Interior designer Madhubani art",
    "Kachni painting",
    "Bharni style painting",
    "Kohbar nuptial mural",
    "Godna tattoo art Bihar",
    "Handmade Indian folk art",
    "Custom Madhubani paintings",
    "Vastu art paintings",
  ],
  authors: [{ name: "Monika", url: "https://artisart.in" }],
  creator: "Monika - Art is Art",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://artisart.in",
    siteName: "Art is Art",
    title: "Art is Art | Authentic Madhubani Folk Art & Interiors by Monika",
    description:
      "Handcrafted Madhubani art and architectural interior murals by Monika. Discover Kachni line-hatching, vibrant Bharni mythologies, and sacred Kohbar chambers.",
    images: [
      {
        url: "/logo.png",
        width: 840,
        height: 180,
        alt: "Art is Art - Madhubani Art & Interiors by Monika",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Art is Art | Madhubani Art & Interiors by Monika",
    description:
      "Traditional Mithila paintings crafted with natural dyes and bamboo nibs for modern interior sanctuaries.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ArtGallery",
    name: "Art is Art",
    founder: {
      "@type": "Person",
      name: "Monika",
      jobTitle: "Interior Designer & Ancient Art Artist",
      telephone: "+91-8758752080",
    },
    telephone: "+91-8758752080",
    description:
      "Art is Art is an authentic sanctuary for traditional Madhubani (Mithila) folk art and custom interior murals curated by Monika.",
    genre: "Madhubani Folk Art",
    areaServed: "Worldwide",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="antialiased bg-[#faf7f2] text-stone-900 selection:bg-madder-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
