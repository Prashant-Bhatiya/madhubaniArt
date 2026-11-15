import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chitralekha | Authentic Madhubani Art & Interior Design by Monika",
  description:
    "Explore authentic handcrafted Madhubani (Mithila) art by Monika — Interior Designer & Ancient Art Artist. Bespoke Kachni, Bharni, Godna, and Kohbar paintings harmonized for luxury living spaces and sacred interiors.",
  keywords: [
    "Madhubani art",
    "Mithila painting",
    "Chitralekha",
    "Chitralekha Art",
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
  authors: [{ name: "Monika", url: "https://chitralekhaart.com" }],
  creator: "Monika - Chitralekha",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://chitralekhaart.com",
    siteName: "Chitralekha Art",
    title: "Chitralekha | Authentic Madhubani Folk Art & Interiors by Monika",
    description:
      "Handcrafted Madhubani art and architectural interior murals by Monika. Discover Kachni line-hatching, vibrant Bharni mythologies, and sacred Kohbar chambers.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Chitralekha Madhubani Art by Monika",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chitralekha | Madhubani Art & Interiors by Monika",
    description:
      "Traditional Mithila paintings crafted with natural dyes and bamboo nibs for modern interior sanctuaries.",
  },
  icons: {
    icon: "/favicon.ico",
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
    name: "Chitralekha Art Studio",
    founder: {
      "@type": "Person",
      name: "Monika",
      jobTitle: "Interior Designer & Ancient Art Artist",
      telephone: "+91-8758752080",
    },
    telephone: "+91-8758752080",
    description:
      "Chitralekha is an authentic sanctuary for traditional Madhubani (Mithila) art and custom interior murals curated by Monika.",
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
      </head>
      <body className="antialiased bg-[#faf7f2] text-stone-900 selection:bg-madder-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
