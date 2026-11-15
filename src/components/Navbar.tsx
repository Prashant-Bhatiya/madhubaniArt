"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, Sparkles, MessageCircle } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Portfolio", href: "#gallery" },
    { label: "Madhubani Styles", href: "#heritage" },
    { label: "Interiors & Vastu", href: "#interiors" },
    { label: "Artist Monika", href: "#about" },
    { label: "Commission Art", href: "#inquiry" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#faf6ee]/95 backdrop-blur-md shadow-md py-3 border-b border-ochre-200"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="focus:outline-none">
            <Logo size={isScrolled ? "sm" : "md"} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-stone-700 hover:text-madder-600 text-sm font-medium tracking-wider uppercase transition-colors duration-200 hover:scale-105"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact & Inquiry Quick CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/918758752080?text=Namaste%20Monika%2C%20I%20am%20interested%20in%20your%20Chitralekha%20Madhubani%20Artworks%20and%20Interiors."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-madder-600 to-madder-700 text-white rounded-full text-xs font-semibold tracking-wider uppercase shadow-sm hover:from-madder-700 hover:to-madder-800 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 text-amber-200" />
              <span>Inquire Art: 8758752080</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-stone-700 hover:text-madder-600 hover:bg-ochre-100/60 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf6ee] border-b border-ochre-300 shadow-xl px-6 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-800 hover:text-madder-600 text-base font-medium py-2 border-b border-ochre-100"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:8758752080"
                className="flex items-center justify-center gap-2 py-2.5 bg-stone-900 text-white rounded-lg text-sm font-medium"
              >
                <Phone className="w-4 h-4 text-ochre-400" />
                <span>Call Artist: +91 8758752080</span>
              </a>
              <a
                href="https://wa.me/918758752080?text=Namaste%20Monika%2C%20I%20am%20interested%20in%20your%20Chitralekha%20Madhubani%20Artworks."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 bg-emerald-700 text-white rounded-lg text-sm font-medium"
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
