"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, Send, Sparkles, CheckCircle2, Clock, ShieldCheck, Box } from "lucide-react";

export default function InquirySection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    styleInterest: "Kachni Style (Fine Monochrome Line-Work)",
    roomType: "Living Room Feature Wall",
    dimensions: "Approx 24 x 36 inches",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const artistPhone = "8758752080";
  const internationalPhone = "918758752080";

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Namaste Monika!%0A%0A*New Art Commission Inquiry via Art is Art:*%0A` +
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
    <section id="inquiry" className="py-20 lg:py-28 bg-[#f4ece0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#fefcf9] rounded-3xl border-2 border-ochre-300 shadow-xl p-6 sm:p-10 lg:p-14 overflow-hidden relative">
          
          {/* Subtle Decorative Motif */}
          <div className="absolute top-0 right-0 w-72 h-72 opacity-5 pointer-events-none select-none">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-madder-800">
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" />
              <polygon points="50,10 60,40 90,50 60,60 50,90 40,60 10,50 40,40" fill="currentColor" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start relative z-10">
            
            {/* Left Column: Direct Contact & Commission Info */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-7">
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-madder-100 text-madder-800 text-xs sm:text-sm font-semibold uppercase tracking-widest">
                  <Sparkles className="w-4 h-4 text-madder-700" />
                  <span>Custom Commissions &amp; Inquiries</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 leading-[1.2]">
                  Commission a <span className="text-madder-700 font-serif italic">Personal Crafted</span> Painting
                </h2>

                <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
                  Looking for a signature Madhubani masterpiece tailored to your interior palette, family heritage, or sacred Vastu orientation? 
                  Monika works directly with art enthusiasts, interior architects, and homeowners worldwide.
                </p>
              </div>

              {/* Direct Phone & WhatsApp Highlight Box */}
              <div className="p-6 rounded-2xl bg-[#f8f2e6] border border-ochre-300/90 shadow-sm space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-madder-700 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-stone-500 font-bold block">
                      Direct Artist Line
                    </span>
                    <a
                      href={`tel:${artistPhone}`}
                      className="text-2xl sm:text-3xl font-display font-bold text-stone-900 hover:text-madder-700 transition-colors"
                    >
                      +91 {artistPhone}
                    </a>
                  </div>
                </div>

                <div className="pt-3 border-t border-ochre-200/80 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-md">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-stone-500 font-bold block">
                      Instant WhatsApp
                    </span>
                    <a
                      href={`https://wa.me/${internationalPhone}?text=Namaste%20Monika%2C%20I%20would%20like%20to%20inquire%20about%20a%20personal%20crafted%20Madhubani%20painting.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-emerald-800 hover:text-emerald-900 hover:underline"
                    >
                      Chat Directly with Monika →
                    </a>
                  </div>
                </div>
              </div>

              {/* Balanced, Clean Trust Cards with Readable Font Size */}
              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3 p-3.5 bg-white/80 rounded-xl border border-ochre-200/70 shadow-xs">
                  <Box className="w-5 h-5 text-madder-600 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-stone-800 leading-snug">
                    Worldwide safe archival packaging in solid cylinder tubes or custom wooden crates.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-white/80 rounded-xl border border-ochre-200/70 shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-stone-800 leading-snug">
                    Includes official Certificate of Authenticity individually signed by Monika.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-white/80 rounded-xl border border-ochre-200/70 shadow-xs">
                  <Clock className="w-5 h-5 text-ochre-600 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-stone-800 leading-snug">
                    Handcrafted turn-around: 2 to 4 weeks depending on artwork size &amp; style details.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Commission Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-ochre-200 shadow-md">
              
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-900">
                  Tell Monika About Your Space
                </h3>
                <p className="text-sm text-stone-600 mt-1">
                  Fill the brief details below to send an instant pre-formatted inquiry to Monika&apos;s WhatsApp.
                </p>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-madder-600 focus:ring-1 focus:ring-madder-600 text-sm sm:text-base outline-none bg-stone-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Phone Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-madder-600 focus:ring-1 focus:ring-madder-600 text-sm sm:text-base outline-none bg-stone-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Preferred Madhubani Style
                    </label>
                    <select
                      value={formData.styleInterest}
                      onChange={(e) => setFormData({ ...formData, styleInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-madder-600 focus:ring-1 focus:ring-madder-600 text-sm sm:text-base outline-none bg-stone-50/50"
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Space / Intended Room
                    </label>
                    <select
                      value={formData.roomType}
                      onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-madder-600 focus:ring-1 focus:ring-madder-600 text-sm sm:text-base outline-none bg-stone-50/50"
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
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Approximate Wall / Canvas Dimensions
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 24 x 36 inches, or 4 x 6 feet"
                    value={formData.dimensions}
                    onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-madder-600 focus:ring-1 focus:ring-madder-600 text-sm sm:text-base outline-none bg-stone-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Vision or Personal Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Share preferred motifs (e.g. Tree of Life, Surya, Radha-Krishna, Peacock), color tone preferences, or interior details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-madder-600 focus:ring-1 focus:ring-madder-600 text-sm sm:text-base outline-none bg-stone-50/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-madder-700 to-madder-800 hover:from-madder-800 hover:to-madder-900 text-white rounded-xl font-bold text-sm sm:text-base tracking-wider uppercase shadow-lg shadow-madder-900/20 flex items-center justify-center gap-2.5 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Send Commission Request to Monika (WhatsApp)</span>
                </button>

                {submitted && (
                  <p className="text-center text-sm text-emerald-700 font-semibold pt-2">
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
