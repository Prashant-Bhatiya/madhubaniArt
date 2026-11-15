"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Artwork, MadhubaniStyle, AvailabilityStatus } from "@/types/artwork";
import { INITIAL_ARTWORKS } from "@/data/artworks";
import { fetchArtworks } from "@/lib/artworksStore";
import Logo from "@/components/Logo";
import {
  Lock,
  Unlock,
  Plus,
  Trash2,
  Edit,
  ArrowUp,
  ArrowDown,
  Upload,
  Save,
  Check,
  Eye,
  ArrowLeft,
  Sparkles,
  Download,
  AlertCircle,
  Image as ImageIcon,
} from "lucide-react";

const STYLES: MadhubaniStyle[] = [
  "Kachni",
  "Bharni",
  "Kohbar",
  "Godna",
  "Tantrik",
  "Interior & Contemporary",
];

const STATUSES: AvailabilityStatus[] = [
  "Available",
  "Exhibition",
  "Commission Only",
  "Sold",
];

export default function StudioAdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passcode, setPasscode] = useState<string>("");
  const [authError, setAuthError] = useState<string>("");

  const [artworks, setArtworks] = useState<Artwork[]>(INITIAL_ARTWORKS);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [notification, setNotification] = useState<string | null>(null);

  // Edit / Add modal state
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [activeForm, setActiveForm] = useState<Partial<Artwork>>({
    title: "",
    hindiTitle: "",
    style: "Kachni",
    description: "",
    story: "",
    dimensions: "24 x 36 inches",
    medium: "Natural Pigments & Ink on Handmade Paper",
    year: new Date().getFullYear(),
    imageUrl: "",
    price: "₹ 25,000",
    status: "Available",
    isFeatured: true,
    interiorSuitability: "Living Room Feature Wall",
  });

  // Verify auth on mount
  useEffect(() => {
    const savedAuth = sessionStorage.getItem("artisart_admin_auth") || sessionStorage.getItem("chitralekha_admin_auth");
    if (savedAuth === "true") {
      setIsAuthenticated(true);
    }
    loadArtworksData();
  }, []);

  const loadArtworksData = async () => {
    setIsLoading(true);
    try {
      const data = await fetchArtworks();
      if (data && data.length > 0) {
        setArtworks(data.sort((a, b) => a.order - b.order));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default master passcodes for Monika
    const p = passcode.trim().toLowerCase();
    if (
      p === "artisart" ||
      p === "monika123" ||
      p === "chitralekha" ||
      p === "8758752080"
    ) {
      setIsAuthenticated(true);
      sessionStorage.setItem("artisart_admin_auth", "true");
      setAuthError("");
    } else {
      setAuthError("Incorrect passcode. Please check with Monika.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("artisart_admin_auth");
    sessionStorage.removeItem("chitralekha_admin_auth");
  };

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 4000);
  };

  // Image File Upload -> Base64 Data URL for instant preview & persistence
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Please upload an image smaller than 5MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setActiveForm((prev) => ({
          ...prev,
          imageUrl: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Chronology / Reorder Functionality (Move Up)
  const handleMoveUp = async (index: number) => {
    if (index === 0) return;
    const updated = [...artworks];
    const temp = updated[index - 1];
    updated[index - 1] = updated[index];
    updated[index] = temp;

    // Recalculate order index
    const reordered = updated.map((item, i) => ({ ...item, order: i + 1 }));
    setArtworks(reordered);

    // Save to API
    try {
      await fetch("/api/artworks", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reorder", artworks: reordered }),
      });
      showNotification("Chronology updated successfully!");
    } catch {
      showNotification("Failed to sync order with server.");
    }
  };

  // Chronology / Reorder Functionality (Move Down)
  const handleMoveDown = async (index: number) => {
    if (index === artworks.length - 1) return;
    const updated = [...artworks];
    const temp = updated[index + 1];
    updated[index + 1] = updated[index];
    updated[index] = temp;

    const reordered = updated.map((item, i) => ({ ...item, order: i + 1 }));
    setArtworks(reordered);

    try {
      await fetch("/api/artworks", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reorder", artworks: reordered }),
      });
      showNotification("Chronology updated successfully!");
    } catch {
      showNotification("Failed to sync order with server.");
    }
  };

  // Delete Artwork
  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to remove "${title}" from the portfolio?`)) {
      return;
    }

    try {
      const res = await fetch(`/api/artworks?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        const remaining = artworks.filter((a) => a.id !== id);
        setArtworks(remaining);
        showNotification(`"${title}" deleted successfully.`);
      }
    } catch {
      showNotification("Error deleting artwork.");
    }
  };

  // Edit existing artwork
  const handleStartEdit = (art: Artwork) => {
    setActiveForm(art);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add new artwork mode
  const handleStartAdd = () => {
    setActiveForm({
      title: "",
      hindiTitle: "",
      style: "Kachni",
      description: "",
      story: "",
      dimensions: "24 x 36 inches",
      medium: "Natural Pigments & Ink on Handmade Silk Paper",
      year: new Date().getFullYear(),
      imageUrl: "",
      price: "₹ 25,000",
      status: "Available",
      isFeatured: false,
      order: artworks.length + 1,
      interiorSuitability: "Living Room Feature Wall",
    });
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Save Artwork (Add or Update)
  const handleSaveArtwork = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!activeForm.title || !activeForm.imageUrl) {
      alert("Please provide at least a title and an image.");
      return;
    }

    try {
      if (activeForm.id) {
        // Update existing
        const res = await fetch("/api/artworks", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ artwork: activeForm }),
        });
        if (res.ok) {
          const updatedList = artworks.map((item) =>
            item.id === activeForm.id ? (activeForm as Artwork) : item
          );
          setArtworks(updatedList);
          showNotification(`Updated "${activeForm.title}" successfully!`);
          setIsEditing(false);
        }
      } else {
        // Create new
        const newArt: Artwork = {
          ...(activeForm as Artwork),
          id: `chitralekha-${Date.now()}`,
          order: artworks.length + 1,
          createdDate: new Date().toISOString().split("T")[0],
        };

        const res = await fetch("/api/artworks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ artwork: newArt }),
        });

        if (res.ok) {
          setArtworks([...artworks, newArt]);
          showNotification(`Added "${newArt.title}" to portfolio!`);
          setIsEditing(false);
        }
      }
    } catch {
      showNotification("Failed to save artwork changes.");
    }
  };

  // Export JSON backup
  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(artworks, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `artisart-portfolio-backup-${new Date().toISOString().split("T")[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // ================= RENDER PASSCODE LOGIN =================
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-[#f4ede0] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-[#fdfaf5] p-8 rounded-3xl border-2 border-ochre-300 shadow-2xl text-center space-y-6">
          
          <div className="flex justify-center">
            <Logo variant="vertical" size="md" />
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-madder-100 text-madder-800 text-xs font-semibold uppercase tracking-widest">
              <Lock className="w-3.5 h-3.5" />
              <span>Artist Studio Access</span>
            </div>
            <h1 className="text-2xl font-display font-bold text-stone-900">
              Monika&apos;s Private Studio
            </h1>
            <p className="text-xs text-stone-600">
              Only for the artist owner to upload, edit, and reorder the portfolio chronology.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                Studio Passcode
              </label>
              <input
                type="password"
                required
                placeholder="Enter passcode..."
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-madder-600 focus:ring-1 focus:ring-madder-600 outline-none text-sm bg-white"
              />
              <span className="text-[10px] text-stone-500 block mt-1">
                Hint: <code>artisart</code> or <code>monika123</code> or <code>8758752080</code>
              </span>
            </div>

            {authError && (
              <p className="text-xs text-red-600 font-medium">{authError}</p>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-madder-700 hover:bg-madder-800 text-white rounded-xl text-xs font-bold uppercase tracking-widest shadow-md transition-colors"
            >
              Enter Studio Dashboard
            </button>
          </form>

          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-800 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Public Website</span>
            </Link>
          </div>

        </div>
      </main>
    );
  }

  // ================= RENDER ADMIN DASHBOARD =================
  return (
    <main className="min-h-screen bg-[#faf6ee] pb-24 text-stone-900">
      
      {/* Top Bar */}
      <header className="bg-white/95 backdrop-blur-md border-b border-ochre-200 sticky top-0 z-40 px-4 sm:px-8 py-3.5 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo size="sm" />
            <span className="hidden sm:inline-block text-xs font-bold uppercase tracking-wider bg-ochre-100 text-ochre-800 px-2.5 py-1 rounded">
              Studio Admin
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-300 text-xs font-medium text-stone-700 hover:bg-stone-50 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View Live Website</span>
            </Link>

            <button
              onClick={handleExportJSON}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-ochre-300 text-xs font-medium text-ochre-900 hover:bg-ochre-50 transition-colors"
              title="Download backup file of your entire portfolio"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Backup Data</span>
            </button>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 text-white text-xs font-medium hover:bg-stone-800 transition-colors"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Exit Studio</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Notification Banner */}
        {notification && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-800 text-white text-sm font-medium shadow-lg flex items-center justify-between animate-in fade-in">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-300" />
              <span>{notification}</span>
            </div>
            <button onClick={() => setNotification(null)} className="text-white/80 hover:text-white">
              ✕
            </button>
          </div>
        )}

        {/* Dashboard Title & Quick Stats */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-ochre-200">
          <div>
            <h1 className="text-3xl font-display font-bold text-stone-900">
              Portfolio &amp; Chronology Manager
            </h1>
            <p className="text-xs text-stone-600 mt-1">
              Add new Madhubani paintings, edit descriptions &amp; prices, and click the arrows (▲ ▼) to set the exact display order.
            </p>
          </div>

          <button
            onClick={handleStartAdd}
            className="inline-flex items-center gap-2 px-5 py-3 bg-madder-700 hover:bg-madder-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <Plus className="w-4 h-4" />
            <span>Upload New Painting</span>
          </button>
        </div>

        {/* ================= EDIT / ADD ARTWORK FORM ================= */}
        {isEditing && (
          <div className="mt-8 bg-white p-6 sm:p-8 rounded-2xl border-2 border-ochre-400 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-madder-600" />
                <h2 className="text-xl font-display font-bold text-stone-900">
                  {activeForm.id ? `Edit Painting: ${activeForm.title}` : "Upload New Painting"}
                </h2>
              </div>
              <button
                onClick={() => setIsEditing(false)}
                className="text-stone-500 hover:text-stone-800 text-sm font-semibold"
              >
                Cancel
              </button>
            </div>

            <form onSubmit={handleSaveArtwork} className="space-y-6">
              
              {/* Image Input Section */}
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  Artwork Photo *
                </label>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Preview Box */}
                  <div className="md:col-span-4">
                    <div className="relative h-56 w-full rounded-xl overflow-hidden bg-stone-200 border-2 border-dashed border-stone-400 flex items-center justify-center">
                      {activeForm.imageUrl ? (
                        <Image
                          src={activeForm.imageUrl}
                          alt="Preview"
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="text-center p-4 text-stone-500 space-y-1">
                          <ImageIcon className="w-8 h-8 mx-auto text-stone-400" />
                          <span className="text-xs block">No photo selected</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Upload Controls */}
                  <div className="md:col-span-8 space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-600 mb-1">
                        Upload from Device (Computer / Mobile)
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="w-full text-xs text-stone-600 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-madder-600 file:text-white hover:file:bg-madder-700 cursor-pointer"
                      />
                    </div>

                    <div className="text-center text-xs text-stone-400 font-bold uppercase">
                      — OR —
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-600 mb-1">
                        Paste Direct Image URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://images.unsplash.com/..."
                        value={activeForm.imageUrl || ""}
                        onChange={(e) => setActiveForm({ ...activeForm, imageUrl: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs outline-none focus:border-madder-600"
                      />
                    </div>
                  </div>

                </div>
              </div>

              {/* Text Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    English Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mithila Kalpavriksha (Tree of Life)"
                    value={activeForm.title || ""}
                    onChange={(e) => setActiveForm({ ...activeForm, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm outline-none focus:border-madder-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Hindi / Sanskrit Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. मिथिला कल्पवृक्ष"
                    value={activeForm.hindiTitle || ""}
                    onChange={(e) => setActiveForm({ ...activeForm, hindiTitle: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm outline-none focus:border-madder-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Madhubani Style *
                  </label>
                  <select
                    value={activeForm.style}
                    onChange={(e) => setActiveForm({ ...activeForm, style: e.target.value as MadhubaniStyle })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm outline-none focus:border-madder-600"
                  >
                    {STYLES.map((s) => (
                      <option key={s} value={s}>
                        {s} Style
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Availability Status *
                  </label>
                  <select
                    value={activeForm.status}
                    onChange={(e) => setActiveForm({ ...activeForm, status: e.target.value as AvailabilityStatus })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm outline-none focus:border-madder-600"
                  >
                    {STATUSES.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Price / Investment Tag
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ₹ 28,000 or Price on Request"
                    value={activeForm.price || ""}
                    onChange={(e) => setActiveForm({ ...activeForm, price: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm outline-none focus:border-madder-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Dimensions (Height x Width)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 24 x 36 inches"
                    value={activeForm.dimensions || ""}
                    onChange={(e) => setActiveForm({ ...activeForm, dimensions: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm outline-none focus:border-madder-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Medium & Material
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Fine Nib & Natural Dyes on Silk Paper"
                    value={activeForm.medium || ""}
                    onChange={(e) => setActiveForm({ ...activeForm, medium: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm outline-none focus:border-madder-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Creation Year
                  </label>
                  <input
                    type="number"
                    value={activeForm.year || 2024}
                    onChange={(e) => setActiveForm({ ...activeForm, year: parseInt(e.target.value) || 2024 })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm outline-none focus:border-madder-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Sacred Folklore & Symbolism Behind Artwork
                </label>
                <textarea
                  rows={2}
                  placeholder="Explain the cultural or mythological story (e.g. In Mithila lore, the fish symbolizes abundance...)"
                  value={activeForm.story || ""}
                  onChange={(e) => setActiveForm({ ...activeForm, story: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm outline-none focus:border-madder-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  General Artwork Description
                </label>
                <textarea
                  rows={2}
                  placeholder="Artistic description of lines, colors, and craftsmanship..."
                  value={activeForm.description || ""}
                  onChange={(e) => setActiveForm({ ...activeForm, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm outline-none focus:border-madder-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Interior Suitability
                </label>
                <input
                  type="text"
                  placeholder="e.g. Living Room Statement, Foyer Sanctuary, Master Bedroom"
                  value={activeForm.interiorSuitability || ""}
                  onChange={(e) => setActiveForm({ ...activeForm, interiorSuitability: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm outline-none focus:border-madder-600"
                />
              </div>

              {/* Toggles */}
              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="featuredToggle"
                  checked={activeForm.isFeatured || false}
                  onChange={(e) => setActiveForm({ ...activeForm, isFeatured: e.target.checked })}
                  className="w-4 h-4 text-madder-600 rounded border-stone-300 focus:ring-madder-500 cursor-pointer"
                />
                <label htmlFor="featuredToggle" className="text-xs font-semibold text-stone-800 cursor-pointer">
                  Feature this painting on the Home Showcase
                </label>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-stone-200">
                <button
                  type="submit"
                  className="px-6 py-3 bg-madder-700 hover:bg-madder-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Artwork to Portfolio</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-5 py-3 rounded-xl border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-100"
                >
                  Cancel
                </button>
              </div>

            </form>
          </div>
        )}

        {/* ================= CHRONOLOGY & ARTWORKS LIST ================= */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Total Paintings in Portfolio: {artworks.length}
            </span>
            <span className="text-xs text-ochre-800 font-medium">
              Tip: Use ▲ and ▼ to arrange the order visitors see in the gallery!
            </span>
          </div>

          <div className="space-y-3">
            {artworks.map((art, idx) => (
              <div
                key={art.id}
                className="bg-white p-4 sm:p-5 rounded-2xl border border-ochre-200 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                {/* Order Number + Chronology Reorder Buttons */}
                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                  <div className="flex flex-col gap-1">
                    <button
                      onClick={() => handleMoveUp(idx)}
                      disabled={idx === 0}
                      className={`p-1.5 rounded-md border text-stone-700 ${
                        idx === 0
                          ? "opacity-30 cursor-not-allowed bg-stone-100 border-stone-200"
                          : "hover:bg-ochre-100 border-ochre-300"
                      }`}
                      title="Move Up in Chronology"
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleMoveDown(idx)}
                      disabled={idx === artworks.length - 1}
                      className={`p-1.5 rounded-md border text-stone-700 ${
                        idx === artworks.length - 1
                          ? "opacity-30 cursor-not-allowed bg-stone-100 border-stone-200"
                          : "hover:bg-ochre-100 border-ochre-300"
                      }`}
                      title="Move Down in Chronology"
                    >
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <span className="w-7 h-7 rounded-full bg-stone-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                </div>

                {/* Thumbnail Image */}
                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                  <Image
                    src={art.imageUrl}
                    alt={art.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 text-center sm:text-left min-w-0">
                  <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-ochre-100 text-ochre-900 px-2 py-0.5 rounded">
                      {art.style}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-stone-100 text-stone-800 px-2 py-0.5 rounded">
                      {art.status}
                    </span>
                    {art.isFeatured && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-madder-100 text-madder-800 px-2 py-0.5 rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-stone-900 text-base mt-1 truncate">
                    {art.title}
                  </h3>
                  <p className="text-xs text-stone-500 truncate">
                    {art.dimensions} • {art.medium} • {art.price}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleStartEdit(art)}
                    className="p-2.5 rounded-lg border border-stone-300 hover:border-madder-600 hover:text-madder-600 text-stone-700 transition-colors"
                    title="Edit Details"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(art.id, art.title)}
                    className="p-2.5 rounded-lg border border-red-200 hover:bg-red-50 text-red-600 transition-colors"
                    title="Delete Artwork"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

    </main>
  );
}
