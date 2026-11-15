import React from "react";

interface LogoProps {
  variant?: "horizontal" | "vertical" | "icon-only" | "light";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Logo({
  variant = "horizontal",
  className = "",
  size = "md",
}: LogoProps) {
  // Dimension scales
  const sizeMap = {
    sm: { icon: 34, text: "text-lg", sub: "text-[9px]" },
    md: { icon: 46, text: "text-2xl", sub: "text-[10px]" },
    lg: { icon: 64, text: "text-3xl", sub: "text-xs" },
    xl: { icon: 92, text: "text-4xl", sub: "text-sm" },
  };

  const currentSize = sizeMap[size];

  // The Master SVG Artwork of Paintbrush + Madhubani Lotus, Fish, and Fine-line Sunburst
  const Emblem = (
    <svg
      width={currentSize.icon}
      height={currentSize.icon}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105"
      aria-label="Chitralekha Art Logo Emblem"
    >
      <defs>
        <linearGradient id="brushGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F6CB68" />
          <stop offset="50%" stopColor="#D48B14" />
          <stop offset="100%" stopColor="#8D4A0D" />
        </linearGradient>
        <linearGradient id="madderRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DC4444" />
          <stop offset="60%" stopColor="#9E2A2B" />
          <stop offset="100%" stopColor="#450D0E" />
        </linearGradient>
      </defs>

      {/* Decorative Outer Mithila Kachni Dot Border Circle */}
      <circle
        cx="50"
        cy="50"
        r="46"
        stroke="#D48B14"
        strokeWidth="1.2"
        strokeDasharray="2 3"
        opacity="0.85"
      />
      <circle
        cx="50"
        cy="50"
        r="42"
        stroke="#9E2A2B"
        strokeWidth="0.8"
        opacity="0.5"
      />

      {/* Sacred Madhubani Sun Rays radiating */}
      <g stroke="#D48B14" strokeWidth="0.8" opacity="0.65">
        <line x1="50" y1="4" x2="50" y2="10" />
        <line x1="50" y1="90" x2="50" y2="96" />
        <line x1="4" y1="50" x2="10" y2="50" />
        <line x1="90" y1="50" x2="96" y2="50" />
        <line x1="18" y1="18" x2="22" y2="22" />
        <line x1="78" y1="78" x2="82" y2="82" />
        <line x1="18" y1="82" x2="22" y2="78" />
        <line x1="78" y1="22" x2="82" y2="18" />
      </g>

      {/* Stylized Traditional Madhubani Fish Motif (Matsya - symbolizing fertility & grace) */}
      <path
        d="M25 45 C32 36, 45 38, 48 45 C45 52, 32 54, 25 45 Z"
        fill="none"
        stroke="#9E2A2B"
        strokeWidth="1.5"
      />
      <circle cx="30" cy="45" r="1.5" fill="#D48B14" />
      {/* Kachni fine hatching on the fish body */}
      <line x1="34" y1="41" x2="34" y2="49" stroke="#9E2A2B" strokeWidth="0.8" />
      <line x1="38" y1="40" x2="38" y2="50" stroke="#9E2A2B" strokeWidth="0.8" />
      <line x1="42" y1="42" x2="42" y2="48" stroke="#9E2A2B" strokeWidth="0.8" />
      <path d="M25 45 L20 40 M25 45 L20 50" stroke="#9E2A2B" strokeWidth="1.2" />

      {/* Sacred Lotus (Kamal) Blossom Base */}
      <path
        d="M50 72 C46 64, 40 62, 38 68 C42 74, 48 74, 50 72 Z"
        fill="#9E2A2B"
        opacity="0.85"
      />
      <path
        d="M50 72 C54 64, 60 62, 62 68 C58 74, 52 74, 50 72 Z"
        fill="#9E2A2B"
        opacity="0.85"
      />
      <path
        d="M50 72 C48 60, 52 60, 50 72 Z"
        fill="#D48B14"
      />

      {/* The Dynamic Artist Paint Brush */}
      {/* Brush Handle (Slanted dynamically from top-right to center) */}
      <path
        d="M78 16 L74 12 C72 10, 68 12, 66 14 L48 42 L52 46 L76 22 C78 20, 80 18, 78 16 Z"
        fill="url(#brushGold)"
        stroke="#1A1615"
        strokeWidth="0.8"
      />

      {/* Metallic Ferrule of the Brush */}
      <path
        d="M48 42 L52 46 L46 52 L42 48 Z"
        fill="#17565E"
        stroke="#1A1615"
        strokeWidth="0.8"
      />

      {/* Brush Bristles with dripping creative paint tip */}
      <path
        d="M42 48 L46 52 C44 57, 40 60, 36 62 C38 56, 40 52, 42 48 Z"
        fill="url(#madderRed)"
        stroke="#1A1615"
        strokeWidth="0.8"
      />

      {/* Creative Paint Swirl / Flow of artistic inspiration */}
      <path
        d="M36 62 C34 66, 30 68, 27 67 C24 66, 22 63, 24 59 C26 55, 32 54, 38 56"
        fill="none"
        stroke="#D48B14"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Glowing Creative Droplets */}
      <circle cx="28" cy="74" r="1.5" fill="#9E2A2B" />
      <circle cx="68" cy="38" r="1.5" fill="#D48B14" />
      <circle cx="76" cy="46" r="1.2" fill="#17565E" />
    </svg>
  );

  if (variant === "icon-only") {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {Emblem}
      </div>
    );
  }

  const isLight = variant === "light";

  return (
    <div
      className={`group inline-flex items-center gap-3 select-none ${
        variant === "vertical" ? "flex-col text-center" : "flex-row"
      } ${className}`}
    >
      {Emblem}

      <div className="flex flex-col tracking-wider">
        {/* Main Brand Title */}
        <span
          className={`font-display font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${
            currentSize.text
          } ${
            isLight
              ? "text-amber-100 group-hover:text-amber-300"
              : "text-stone-900 group-hover:text-madder-700"
          }`}
          style={{ letterSpacing: "0.22em" }}
        >
          Chitralekha
        </span>

        {/* Artistic Tagline & Monika Credentials */}
        <div
          className={`flex items-center gap-1.5 uppercase font-medium tracking-[0.18em] ${
            currentSize.sub
          } ${isLight ? "text-amber-200/80" : "text-ochre-700"}`}
        >
          <span>Madhubani Art</span>
          <span className="inline-block w-1 h-1 rounded-full bg-madder-600"></span>
          <span>Interiors</span>
          <span className="inline-block w-1 h-1 rounded-full bg-ochre-500"></span>
          <span className="font-semibold text-madder-600">By Monika</span>
        </div>
      </div>
    </div>
  );
}
