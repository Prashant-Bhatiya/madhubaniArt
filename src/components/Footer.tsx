import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Phone, MessageCircle, MapPin, Brush, Lock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#181413] text-stone-400 pt-16 pb-12 border-t-2 border-ochre-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="light" size="md" />
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm mt-3">
              <strong>Chitralekha</strong> is a dedicated Mithila folk art sanctuary led by 
              <strong> Monika</strong> — Interior Designer & Ancient Art Artist. 
              Reviving centuries of sacred Madhubani heritage through traditional hand-drawn paintings 
              harmonized for modern luxury living spaces.
            </p>
            <div className="pt-2 text-xs text-amber-200/70 font-serif italic">
              &ldquo;Rooted in Mithila • Crafted for Modern Architecture&rdquo;
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-200">
              Madhubani Traditions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#heritage" className="hover:text-amber-300 transition-colors">
                  Bharni (Vibrant Color Fills)
                </a>
              </li>
              <li>
                <a href="#heritage" className="hover:text-amber-300 transition-colors">
                  Kachni (Delicate Line Hatching)
                </a>
              </li>
              <li>
                <a href="#heritage" className="hover:text-amber-300 transition-colors">
                  Godna (Ancient Tattoo Motifs)
                </a>
              </li>
              <li>
                <a href="#heritage" className="hover:text-amber-300 transition-colors">
                  Kohbar (Sacred Nuptial Chamber)
                </a>
              </li>
              <li>
                <a href="#interiors" className="hover:text-amber-300 transition-colors">
                  Interior Spatial Art & Vastu
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-200">
              Direct Artist Inquiries
            </h4>
            <p className="text-xs text-stone-400">
              Personal crafted paintings & architectural wall consultations:
            </p>
            <div className="space-y-2 pt-1 text-xs">
              <a
                href="tel:8758752080"
                className="flex items-center gap-2 text-white hover:text-amber-300 font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-ochre-400" />
                <span>+91 8758752080</span>
              </a>
              <a
                href="https://wa.me/918758752080?text=Namaste%20Monika%2C%20I%20am%20inquiring%20about%20your%20Madhubani%20Artworks."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: +91 8758752080</span>
              </a>
              <div className="flex items-center gap-2 text-stone-400">
                <MapPin className="w-3.5 h-3.5 text-madder-500" />
                <span>Mithila Traditions • Contemporary Studio</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with subtle, discreet Artist Studio entrance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {currentYear} Chitralekha Art. All rights reserved. Created with reverence for Mithila folk heritage.</p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-stone-600">Curated by Monika</span>
            
            {/* Subtle discreet portal to Studio Admin for Monika (no prominent login button) */}
            <Link
              href="/studio-admin"
              className="group inline-flex items-center gap-1.5 text-stone-600 hover:text-amber-400 transition-colors p-1"
              title="Monika's Private Studio Portal"
            >
              <Lock className="w-3 h-3 group-hover:text-amber-400" />
              <span className="text-[11px] tracking-wider uppercase">Artist Studio</span>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
