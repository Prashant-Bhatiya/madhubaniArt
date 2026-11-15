import React from "react";

interface LogoProps {
  variant?: "horizontal" | "vertical" | "icon-only" | "light" | "mini";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Logo({
  variant = "horizontal",
  className = "",
  size = "md",
}: LogoProps) {
  const sizeMap = {
    sm: { icon: 38, text: "text-lg", sub: "text-[9px]" },
    md: { icon: 48, text: "text-xl sm:text-2xl", sub: "text-[9.5px] sm:text-[10.5px]" },
    lg: { icon: 60, text: "text-2xl sm:text-3xl", sub: "text-xs" },
    xl: { icon: 84, text: "text-3xl sm:text-4xl", sub: "text-sm" },
  };

  const currentSize = sizeMap[size];

  // The Artist Paintbrush + Madhubani Lotus, Fish, and Sacred Sunburst Emblem
  const Emblem = (
    <svg
      width={variant === "mini" ? 32 : currentSize.icon}
      height={variant === "mini" ? 32 : currentSize.icon}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      aria-label="Art is Art Brand Emblem"
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

      {/* Decorative Outer Mithila Kachni Dot Border */}
      <circle
        cx="50"
        cy="50"
        r="46"
        stroke="#D48B14"
        strokeWidth="1.4"
        strokeDasharray="2 3"
        opacity="0.9"
      />
      <circle
        cx="50"
        cy="50"
        r="41"
        stroke="#9E2A2B"
        strokeWidth="0.9"
        opacity="0.6"
      />

      {/* Sacred Solar Fine Rays */}
      <g stroke="#D48B14" strokeWidth="0.8" opacity="0.6">
        <line x1="50" y1="4" x2="50" y2="10" />
        <line x1="50" y1="90" x2="50" y2="96" />
        <line x1="4" y1="50" x2="10" y2="50" />
        <line x1="90" y1="50" x2="96" y2="50" />
      </g>

      {/* Stylized Traditional Madhubani Fish Motif (Matsya) */}
      <path
        d="M25 45 C32 36, 45 38, 48 45 C45 52, 32 54, 25 45 Z"
        fill="none"
        stroke="#9E2A2B"
        strokeWidth="1.5"
      />
      <circle cx="30" cy="45" r="1.5" fill="#D48B14" />
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

      {/* Slanted Artist Paintbrush */}
      <path
        d="M78 16 L74 12 C72 10, 68 12, 66 14 L48 42 L52 46 L76 22 C78 20, 80 18, 78 16 Z"
        fill="url(#brushGold)"
        stroke="#1A1615"
        strokeWidth="0.8"
      />
      {/* Ferrule */}
      <path
        d="M48 42 L52 46 L46 52 L42 48 Z"
        fill="#17565E"
        stroke="#1A1615"
        strokeWidth="0.8"
      />
      {/* Bristles with vermilion tip */}
      <path
        d="M42 48 L46 52 C44 57, 40 60, 36 62 C38 56, 40 52, 42 48 Z"
        fill="url(#madderRed)"
        stroke="#1A1615"
        strokeWidth="0.8"
      />
      {/* Swirling Creative Stroke */}
      <path
        d="M36 62 C34 66, 30 68, 27 67 C24 66, 22 63, 24 59 C26 55, 32 54, 38 56"
        fill="none"
        stroke="#D48B14"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );

  if (variant === "icon-only" || variant === "mini") {
    return (
      <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>
        {Emblem}
      </div>
    );
  }

  const isLight = variant === "light";

  return (
    <div
      className={`group inline-flex items-center gap-3.5 select-none leading-none ${
        variant === "vertical" ? "flex-col text-center" : "flex-row items-center"
      } ${className}`}
    >
      <div className="shrink-0 flex items-center justify-center">
        {Emblem}
      </div>

      <div className="flex flex-col justify-center min-w-0">
        {/* Main Brand Title: Art is Art */}
        <div className="whitespace-nowrap">
          <span
            className={`font-display font-extrabold tracking-[0.16em] uppercase transition-colors duration-200 block ${
              currentSize.text
            } ${
              isLight
                ? "text-amber-100 group-hover:text-amber-300"
                : "text-stone-900 group-hover:text-madder-700"
            }`}
          >
            Art is Art
          </span>
        </div>

        {/* Unified Tagline - Single clean line, strictly no wrap */}
        <div
          className={`flex items-center gap-1.5 uppercase font-medium tracking-[0.14em] whitespace-nowrap mt-1 ${
            currentSize.sub
          } ${isLight ? "text-amber-200/90" : "text-stone-700"}`}
        >
          <span className="text-ochre-700 font-semibold">Madhubani Art</span>
          <span className="inline-block w-1 h-1 rounded-full bg-madder-600 shrink-0" />
          <span className="text-stone-600">Interiors</span>
          <span className="inline-block w-1 h-1 rounded-full bg-ochre-500 shrink-0" />
          <span className="font-bold text-madder-700">By Monika</span>
        </div>
      </div>
    </div>
  );
}
