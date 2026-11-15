import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        madder: {
          50: "#fdf2f2",
          100: "#fde2e2",
          200: "#fbc9c9",
          400: "#dc4444",
          500: "#b84a39",
          600: "#9e2a2b",
          700: "#801d1e",
          800: "#691718",
          900: "#450d0e",
        },
        ochre: {
          50: "#fef9ee",
          100: "#fdf0d2",
          200: "#fae0a2",
          300: "#f6cb68",
          400: "#f0b135",
          500: "#d48b14",
          600: "#b3680c",
          700: "#8d4a0d",
          800: "#733b11",
          900: "#603112",
        },
        indigoMithila: {
          50: "#f0f7fa",
          100: "#dcedf4",
          500: "#17565e",
          700: "#123b42",
          900: "#0b2327",
        },
        parchment: {
          50: "#fdfcf9",
          100: "#faf6ee",
          200: "#f5eee0",
          300: "#ebe1ce",
          400: "#ded0b6",
          500: "#caa77d",
        },
        kohl: "#1a1615",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "parchment-pattern": "radial-gradient(#d48b14 0.5px, transparent 0.5px)",
      },
    },
  },
  plugins: [],
};
export default config;
