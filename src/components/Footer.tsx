import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Phone, MessageCircle, MapPin, Lock, Sparkles, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#181413] text-stone-300 pt-20 pb-12 border-t-2 border-ochre-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-stone-800/80 items-start">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-5 space-y-5">
            <Logo variant="light" size="lg" />
            
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-md pt-1">
              <strong className="text-white font-semibold">Art is Art</strong> is an authentic Mithila folk art sanctuary 
              founded by <strong className="text-amber-200 font-semibold">Monika</strong> — Interior Designer &amp; Ancient Art Artist. 
              Preserving sacred Madhubani traditions while harmonizing them with modern spatial luxury and architectural serenity.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm text-amber-300/80 font-serif italic">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>&ldquo;Rooted in Ancient Mithila • Crafted for Modern Architecture&rdquo;</span>
            </div>
          </div>

          {/* Column 2: Madhubani Traditions */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-amber-300">
              Madhubani Traditions
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base">
              <li>
                <a href="#heritage" className="text-stone-300 hover:text-amber-300 transition-colors flex items-center gap-1.5 group">
                  <span className="text-amber-500/70 group-hover:text-amber-400">›</span>
                  <span>Bharni (Vibrant Color Fills)</span>
                </a>
              </li>
              <li>
                <a href="#heritage" className="text-stone-300 hover:text-amber-300 transition-colors flex items-center gap-1.5 group">
                  <span className="text-amber-500/70 group-hover:text-amber-400">›</span>
                  <span>Kachni (Delicate Line Hatching)</span>
                </a>
              </li>
              <li>
                <a href="#heritage" className="text-stone-300 hover:text-amber-300 transition-colors flex items-center gap-1.5 group">
                  <span className="text-amber-500/70 group-hover:text-amber-400">›</span>
                  <span>Godna (Ancient Tattoo Motifs)</span>
                </a>
              </li>
              <li>
                <a href="#heritage" className="text-stone-300 hover:text-amber-300 transition-colors flex items-center gap-1.5 group">
                  <span className="text-amber-500/70 group-hover:text-amber-400">›</span>
                  <span>Kohbar (Sacred Nuptial Chamber)</span>
                </a>
              </li>
              <li>
                <a href="#interiors" className="text-stone-300 hover:text-amber-300 transition-colors flex items-center gap-1.5 group">
                  <span className="text-amber-500/70 group-hover:text-amber-400">›</span>
                  <span>Interior Spatial Art &amp; Vastu</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Artist Inquiries */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-amber-300">
              Direct Artist Inquiries
            </h4>
            
            <p className="text-sm text-stone-300 leading-normal">
              For personal crafted paintings, custom wall dimensions, or architectural interior consultations:
            </p>

            <div className="space-y-3 pt-1">
              <a
                href="tel:8758752080"
                className="flex items-center gap-3 text-white hover:text-amber-300 font-semibold group transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-stone-800 text-ochre-400 flex items-center justify-center shrink-0 group-hover:bg-ochre-500 group-hover:text-stone-950 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-base sm:text-lg font-display tracking-wider">+91 8758752080</span>
              </a>

              <a
                href="https://wa.me/918758752080?text=Namaste%20Monika%2C%20I%20am%20inquiring%20about%20your%20Art%20is%20Art%20paintings."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-emerald-400 hover:text-emerald-300 font-medium group transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span className="text-sm sm:text-base">WhatsApp: +91 8758752080</span>
              </a>

              <div className="flex items-center gap-3 text-stone-400 text-sm">
                <div className="w-9 h-9 rounded-lg bg-stone-800/80 text-madder-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Mithila Heritage Studio • Global Shipping</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Discreet Artist Studio Entrance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-stone-400 gap-4">
          <p>© {currentYear} Art is Art. All rights reserved. Created with reverence for Mithila folk heritage.</p>

          <div className="flex items-center gap-5">
            <span className="text-stone-400">Curated by Monika</span>
            <span className="text-stone-600">•</span>
            {/* Subtle discreet portal to Studio Admin for Monika */}
            <Link
              href="/studio-admin"
              className="group inline-flex items-center gap-1.5 text-stone-400 hover:text-amber-400 transition-colors"
              title="Monika's Private Studio Portal"
            >
              <Lock className="w-3.5 h-3.5 group-hover:text-amber-400" />
              <span className="tracking-wider uppercase font-semibold text-xs">Artist Studio</span>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
