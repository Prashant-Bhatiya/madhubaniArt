"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, Send, Sparkles, CheckCircle2, Clock } from "lucide-react";

export default function InquirySection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    styleInterest: "Kachni Style",
    roomType: "Living Room Feature Wall",
    dimensions: "Approx 24 x 36 inches",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const artistPhone = "8758752080";
  const internationalPhone = "918758752080";

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Namaste Monika!%0A%0A*New Art Commission Inquiry via Chitralekha:*%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Contact:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Style of Interest:* ${encodeURIComponent(formData.styleInterest)}%0A` +
      `*Space / Room:* ${encodeURIComponent(formData.roomType)}%0A` +
      `*Desired Size:* ${encodeURIComponent(formData.dimensions)}%0A` +
      `*Message:* ${encodeURIComponent(formData.message || "I would love to discuss a custom painting for my home.")}`;

    const whatsappUrl = `https://wa.me/${internationalPhone}?text=${text}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="py-24 bg-[#f4ece0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#fefcf9] rounded-3xl border-2 border-ochre-300 shadow-2xl p-6 sm:p-10 lg:p-12 overflow-hidden relative">
          
          {/* Subtle Decorative Motif */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-madder-800">
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" />
              <polygon points="50,10 60,40 90,50 60,60 50,90 40,60 10,50 40,40" fill="currentColor" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            
            {/* Left Column: Direct Contact & Commission Info */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-madder-100 text-madder-800 text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Custom Commissions & Inquiries</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 leading-tight">
                Commission a <span className="text-madder-700 font-serif italic">Personal Crafted</span> Painting
              </h2>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                Looking for a signature Madhubani painting tailored to your interior palette, family heritage, or sacred Vastu orientation? 
                Monika works directly with art enthusiasts, interior architects, and homeowners worldwide.
              </p>

              {/* Direct Phone / WhatsApp Card */}
              <div className="p-5 rounded-2xl bg-[#f8f2e6] border border-ochre-300 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-madder-700 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold block">
                      Direct Artist Line
                    </span>
                    <a
                      href={`tel:${artistPhone}`}
                      className="text-2xl font-display font-bold text-stone-900 hover:text-madder-700 transition-colors"
                    >
                      +91 {artistPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-ochre-200">
                  <div className="w-10 h-10 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold block">
                      Instant WhatsApp
                    </span>
                    <a
                      href={`https://wa.me/${internationalPhone}?text=Namaste%20Monika%2C%20I%20would%20like%20to%20inquire%20about%20a%20personal%20crafted%20Madhubani%20painting.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-emerald-800 hover:underline"
                    >
                      Chat Directly with Monika →
                    </a>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-2 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Worldwide safe archival packaging in solid cylinder tubes / wooden crates.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Includes Certificate of Authenticity signed by Monika.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-ochre-600 shrink-0" />
                  <span>Handcrafted turn-around: 2 to 4 weeks depending on size & style.</span>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Commission Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-ochre-200 shadow-sm">
              
              <h3 className="text-xl font-display font-bold text-stone-900 mb-1">
                Tell Monika About Your Space
              </h3>
              <p className="text-xs text-stone-500 mb-6">
                Fill the brief details below to send an instant pre-formatted inquiry to Monika&apos;s WhatsApp.
              </p>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-madder-600 focus:ring-1 focus:ring-madder-600 text-sm outline-none bg-stone-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Phone Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-madder-600 focus:ring-1 focus:ring-madder-600 text-sm outline-none bg-stone-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Preferred Madhubani Style
                    </label>
                    <select
                      value={formData.styleInterest}
                      onChange={(e) => setFormData({ ...formData, styleInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-madder-600 focus:ring-1 focus:ring-madder-600 text-sm outline-none bg-stone-50/50"
                    >
                      <option value="Kachni Style (Fine Monochrome Line-Work)">Kachni (Fine Line-Work)</option>
                      <option value="Bharni Style (Vibrant Colors & Deities)">Bharni (Vibrant Color Fills)</option>
                      <option value="Kohbar Ghar (Sacred Nuptial Mandala)">Kohbar (Nuptial Chamber)</option>
                      <option value="Godna Style (Tattoo & Tribal Motifs)">Godna (Tattoo & Earth Motifs)</option>
                      <option value="Tantrik Mandala (Spiritual Sacred Geometry)">Tantrik Mandala</option>
                      <option value="Interior Architectural Large Wall Panel">Architectural Large Wall Panel</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Space / Intended Room
                    </label>
                    <select
                      value={formData.roomType}
                      onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-madder-600 focus:ring-1 focus:ring-madder-600 text-sm outline-none bg-stone-50/50"
                    >
                      <option value="Living Room Feature Wall">Living Room Feature Wall</option>
                      <option value="Foyer & Entryway Sanctuary">Foyer & Entryway</option>
                      <option value="Pooja / Meditation Corner">Pooja / Meditation Room</option>
                      <option value="Master Bedroom Suite">Master Bedroom Suite</option>
                      <option value="Dining Room Focal Point">Dining Room</option>
                      <option value="Executive Office / Boardroom">Office / Hospitality</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Approximate Wall / Canvas Dimensions
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 24x36 inches, or 4x6 feet"
                    value={formData.dimensions}
                    onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-madder-600 focus:ring-1 focus:ring-madder-600 text-sm outline-none bg-stone-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Vision or Personal Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Share any preferred motifs (e.g. Tree of Life, Surya, Radha-Krishna, Peacock), color tone preferences, or interior details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-madder-600 focus:ring-1 focus:ring-madder-600 text-sm outline-none bg-stone-50/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-madder-700 to-madder-800 hover:from-madder-800 hover:to-madder-900 text-white rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Commission Request to Monika (WhatsApp)</span>
                </button>

                {submitted && (
                  <p className="text-center text-xs text-emerald-700 font-medium pt-2">
                    ✓ WhatsApp opened with your inquiry details! Monika will respond promptly.
                  </p>
                )}

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
