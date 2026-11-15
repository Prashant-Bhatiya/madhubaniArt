"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Short, polished navigation titles
  const navLinks = [
    { label: "Artworks", href: "#gallery" },
    { label: "Styles", href: "#heritage" },
    { label: "Interiors", href: "#interiors" },
    { label: "About", href: "#about" },
    { label: "Inquire", href: "#inquiry" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#faf6ee]/95 backdrop-blur-md shadow-sm py-2.5 border-b border-ochre-200/90"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo with optimized alignment */}
          <Link href="/" className="focus:outline-none flex items-center shrink-0">
            <Logo size={isScrolled ? "sm" : "md"} />
          </Link>

          {/* Desktop Navigation with Short Titles */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-stone-700 hover:text-madder-700 text-xs lg:text-sm font-semibold tracking-wider uppercase transition-colors duration-150 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-madder-600 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact & Inquiry Quick CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/918758752080?text=Namaste%20Monika%2C%20I%20am%20interested%20in%20your%20Art%20is%20Art%20Madhubani%20paintings%20and%20interior%20designs."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-madder-700 to-madder-800 text-white rounded-full text-xs font-semibold tracking-wider uppercase shadow-sm hover:from-madder-800 hover:to-madder-900 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-amber-200" />
              <span>Inquire: 8758752080</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-stone-700 hover:text-madder-700 hover:bg-ochre-100/70 focus:outline-none shrink-0"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf6ee] border-b border-ochre-300 shadow-xl px-6 pt-3 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-800 hover:text-madder-700 text-sm font-semibold tracking-wider uppercase py-2 border-b border-ochre-100 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-ochre-500">→</span>
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a
                href="tel:8758752080"
                className="flex items-center justify-center gap-2 py-2.5 bg-stone-900 text-white rounded-lg text-xs font-semibold uppercase tracking-wider"
              >
                <Phone className="w-4 h-4 text-ochre-400" />
                <span>Call: +91 8758752080</span>
              </a>
              <a
                href="https://wa.me/918758752080?text=Namaste%20Monika%2C%20I%20am%20inquiring%20about%20Art%20is%20Art%20paintings."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 bg-emerald-700 text-white rounded-lg text-xs font-semibold uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Monika</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
