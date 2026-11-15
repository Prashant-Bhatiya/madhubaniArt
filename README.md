# 🎨 Art is Art — Madhubani Art & Interior Sanctuary

**Art is Art** is a fine-art portfolio website and interior design showcase founded by **Monika** — an *Interior Designer and Ancient Art Artist*. The platform is dedicated to preserving and elevating authentic **Madhubani (Mithila) Folk Art** for modern luxury spaces, private collectors, and sacred architecture.

---

## 🌟 Brand & Artist Identity
* **Brand / Studio Name:** Art is Art
* **Artist:** Monika
* **Expertise:** Interior Designer & Ancient Art Artist
* **Art Form:** Madhubani (Mithila) Folk Art originating from Bihar, India & Nepal
* **Direct Inquiry & Commissions:** `+91 8758752080`

---

## 🖌️ Bespoke Logo & Symbolism
The custom **Art is Art Logo** combines:
1. **The Dynamic Artist Paintbrush:** Hand-drawn golden handle with a vermilion madder tip, symbolizing creative vitality.
2. **Sacred Madhubani Lotus (*Kamal*):** Represents cosmic purity, fertility, and auspicious beginnings.
3. **Mithila Twin Fish (*Matsya*):** Finely hatched with traditional *Kachni* line-work, bringing liquid prosperity and abundance.
4. **Radiating Sunburst (*Surya*):** Fine-line solar rays honoring the supreme life-giver of Mithila.

---

## 🚀 Key Features

### 1. Public Visitor Experience (Art Lovers & Collectors)
* **Header & Navigation:** Polished alignment with short titles (`Artworks`, `Styles`, `Interiors`, `About`, `Inquire`) preventing any awkward line wraps.
* **Mini Logo & Favicons:** Dedicated PNG and SVG icons for browser tabs, bookmarks, and mobile home screens (`favicon.png`, `apple-touch-icon.png`, `logo-mini.png`).
* **High-End Mithila Aesthetic:** Authentic terracotta madder (`#9E2A2B`), haldi gold (`#D48B14`), kohl black lines, and raw silk/parchment background textures.
* **Heritage Guide:** Visual and cultural exploration of the five core styles:
  * **Bharni:** Rich, vibrant color fills with mineral pigments.
  * **Kachni:** Fine bamboo-nib line hatching in monochrome/dual-tones.
  * **Godna:** Ancestral concentric tattoo talismans and tribal rhythm.
  * **Kohbar:** Sacred nuptial chamber blessing murals (*bans*, *kamal*, *mayur*).
  * **Tantrik:** Esoteric spiritual mandalas and sacred geometry.
* **Curated Gallery & Lightbox:**
  * Interactive style filters & availability tags (*Available, Exhibition, Commission Only, Sold*).
  * Lightbox modal displaying folklore/story behind each piece, dimensions, medium, year, and interior suitability.
  * Pre-formatted WhatsApp button directing inquiries straight to Monika at `8758752080`.
* **Interior Designer Showcase:** Demonstrating how Monika harmonizes ancient Madhubani art with modern residential, villa, and corporate wall acoustics.
* **SEO & Performance:** Built with Next.js App Router, complete OpenGraph tags, and Schema.org `ArtGallery` / `VisualArtwork` structured data.

### 2. Single-Owner Artist Studio (`/studio-admin`)
* **Discreet Access:** Accessible only via direct route `/studio-admin` or a subtle footer lock icon.
* **Passcode Protected:** Default passcodes: `artisart` / `monika123` / `8758752080`.
* **Chronology / Portfolio Reordering:** 1-click **▲ Move Up** and **▼ Move Down** buttons to reorder paintings in real-time.
* **Upload & Image Management:** Upload photos directly from phone/laptop or paste image links with live preview.
* **Artwork Metadata:** Update titles (English & Hindi), dimensions, stories, medium, prices, and "Featured" toggles.
* **Data Backup:** 1-click "Backup Data" export to save all artworks as a JSON file.

---

## 💻 Tech Stack
* **Framework:** [Next.js](https://nextjs.org/) (App Router, React 18, TypeScript)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) with custom Mithila design tokens
* **Image Processing:** [Sharp](https://sharp.pixelplumbing.com/) (crisp SVG to PNG generation)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Typography:** Playfair Display, Cormorant Garamond, Cinzel, Outfit

---

## 🛠️ Getting Started

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the website.

### 2. Open Artist Studio Admin
Navigate to:
```
http://localhost:3000/studio-admin
```
Enter passcode: `artisart` or `monika123`.

### 3. Generate Logos & PNGs
```bash
node scripts/generate-pngs.mjs
```
Generates all PNG assets into `public/`.
