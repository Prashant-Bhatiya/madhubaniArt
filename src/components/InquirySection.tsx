"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, Sparkles, Box, ShieldCheck, Clock, Mail } from "lucide-react";

export default function InquirySection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    styleInterest: "Kachni Style (Fine Monochrome Line-Work)",
    roomType: "Living Room Feature Wall",
    dimensions: "Approx 24 x 36 inches",
    message: "",
  });

  const [lastAction, setLastAction] = useState<"whatsapp" | "gmail" | null>(null);

  const artistPhone = "8758752080";
  const internationalPhone = "918758752080";
  const artistEmail = "savmon15@gmail.com";

  const getInquiryBody = () => {
    return (
      `Namaste Monika,\n\n` +
      `I would like to inquire about a handcrafted Madhubani painting from Art is Art:\n\n` +
      `• Full Name: ${formData.name || "(Not specified)"}\n` +
      `• Contact Phone/WhatsApp: ${formData.phone || "(Not specified)"}\n` +
      `• Preferred Style: ${formData.styleInterest}\n` +
      `• Intended Space: ${formData.roomType}\n` +
      `• Desired Dimensions: ${formData.dimensions || "(Flexible)"}\n` +
      `• Personal Message / Vision: ${formData.message || "(Please share available catalog and details)"}\n\n` +
      `Thank you!`
    );
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Please enter your name and contact phone number.");
      return;
    }

    const text = encodeURIComponent(getInquiryBody());
    const whatsappUrl = `https://wa.me/${internationalPhone}?text=${text}`;
    window.open(whatsappUrl, "_blank");
    setLastAction("whatsapp");
  };

  const handleGmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Please enter your name and contact phone number.");
      return;
    }

    const subject = encodeURIComponent(`Art is Art - Painting Commission Inquiry from ${formData.name}`);
    const body = encodeURIComponent(getInquiryBody());

    const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${artistEmail}&su=${subject}&body=${body}`;
    window.open(gmailWebUrl, "_blank");
    setLastAction("gmail");
  };

  return (
    <section id="inquiry" className="py-20 lg:py-28 bg-[#f4ece0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Card */}
        <div className="bg-[#fefcf9] rounded-3xl border-2 border-ochre-300 shadow-xl p-6 sm:p-10 lg:p-12 relative">
          
          {/* Main 2-Column Split: Perfectly Balanced & Height-Aligned */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            
            {/* Left Column: Context & Direct Contact Details */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-madder-100 text-madder-800 text-xs sm:text-sm font-semibold uppercase tracking-widest self-start">
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

              {/* Direct Contacts Card (Phone, WhatsApp & Gmail) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#f8f2e6] border border-ochre-300 shadow-xs space-y-4 mt-auto">
                
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-madder-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-stone-500 font-bold block">
                      Direct Artist Line
                    </span>
                    <a
                      href={`tel:${artistPhone}`}
                      className="text-xl sm:text-2xl font-display font-bold text-stone-900 hover:text-madder-700 transition-colors"
                    >
                      +91 {artistPhone}
                    </a>
                  </div>
                </div>

                {/* Email / Gmail */}
                <div className="pt-3 border-t border-ochre-200/80 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-stone-900 text-amber-300 flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-stone-500 font-bold block">
                      Official Studio Email
                    </span>
                    <a
                      href={`mailto:${artistEmail}`}
                      className="text-sm sm:text-base font-bold text-stone-900 hover:text-madder-700 hover:underline break-all"
                    >
                      {artistEmail}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="pt-3 border-t border-ochre-200/80 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-stone-500 font-bold block">
                      Instant WhatsApp
                    </span>
                    <a
                      href={`https://wa.me/${internationalPhone}?text=Namaste%20Monika%2C%20I%20would%20like%20to%20inquire%20about%20a%20painting%20from%20Art%20is%20Art.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-emerald-800 hover:text-emerald-900 hover:underline"
                    >
                      Chat Directly with Monika →
                    </a>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Interactive Form with WhatsApp & Gmail Options */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-ochre-200 shadow-md flex flex-col justify-between h-full">
              
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-900">
                    Tell Monika About Your Space
                  </h3>
                  <p className="text-sm text-stone-600 mt-1">
                    Fill in your details below and choose whether to send your inquiry directly via WhatsApp or Gmail.
                  </p>
                </div>

                <form className="space-y-4 sm:space-y-5">
                  
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

                  {/* Action Buttons */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Button 1: WhatsApp */}
                    <button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="w-full py-3.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-200" />
                      <span>Inquire via WhatsApp</span>
                    </button>

                    {/* Button 2: Gmail Inquiry */}
                    <button
                      type="button"
                      onClick={handleGmailSubmit}
                      className="w-full py-3.5 px-4 bg-gradient-to-r from-madder-700 to-madder-800 hover:from-madder-800 hover:to-madder-900 text-white rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-amber-200" />
                      <span>Inquire via Gmail</span>
                    </button>
                  </div>

                  {lastAction === "whatsapp" && (
                    <p className="text-center text-xs sm:text-sm text-emerald-700 font-semibold pt-1">
                      ✓ WhatsApp opened with your inquiry! Monika will respond promptly.
                    </p>
                  )}
                  {lastAction === "gmail" && (
                    <p className="text-center text-xs sm:text-sm text-madder-700 font-semibold pt-1">
                      ✓ Gmail opened addressed to savmon15@gmail.com with your formatted details!
                    </p>
                  )}

                </form>
              </div>

            </div>

          </div>

          {/* Trust Indicators Banner across the bottom - Anchors Both Columns */}
          <div className="mt-10 pt-8 border-t border-ochre-200/80 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3.5 p-4 bg-white/80 rounded-2xl border border-ochre-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-madder-50 text-madder-700 flex items-center justify-center shrink-0">
                <Box className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-stone-900">Archival Packaging</h5>
                <p className="text-xs text-stone-600 mt-0.5">Solid cylinder tubes &amp; custom wooden crates</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 bg-white/80 rounded-2xl border border-ochre-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-stone-900">Certificate of Authenticity</h5>
                <p className="text-xs text-stone-600 mt-0.5">Individually signed by Monika</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 bg-white/80 rounded-2xl border border-ochre-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-ochre-50 text-ochre-700 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-stone-900">Handcrafted Timeline</h5>
                <p className="text-xs text-stone-600 mt-0.5">2 to 4 weeks depending on artwork size &amp; style</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
