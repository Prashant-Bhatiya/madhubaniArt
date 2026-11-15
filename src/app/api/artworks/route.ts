import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Artwork } from "@/types/artwork";
import { INITIAL_ARTWORKS } from "@/data/artworks";

const dataFilePath = path.join(process.cwd(), "src", "data", "artworks-data.json");

function getStoredArtworks(): Artwork[] {
  try {
    if (fs.existsSync(dataFilePath)) {
      const fileData = fs.readFileSync(dataFilePath, "utf8");
      const parsed = JSON.parse(fileData);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.sort((a: Artwork, b: Artwork) => a.order - b.order);
      }
    }
  } catch (err) {
    console.error("Error reading artworks-data.json:", err);
  }
  // Initialize file with INITIAL_ARTWORKS
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(INITIAL_ARTWORKS, null, 2), "utf8");
  } catch (err) {
    console.error("Error writing initial artworks data:", err);
  }
  return INITIAL_ARTWORKS.sort((a, b) => a.order - b.order);
}

function saveArtworks(artworks: Artwork[]): boolean {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(artworks, null, 2), "utf8");
    return true;
  } catch (err) {
    console.error("Error saving artworks-data.json:", err);
    return false;
  }
}

export async function GET() {
  const artworks = getStoredArtworks();
  return NextResponse.json(artworks);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { artwork } = body;

    if (!artwork || !artwork.title) {
      return NextResponse.json({ error: "Invalid artwork details" }, { status: 400 });
    }

    const currentArtworks = getStoredArtworks();
    const newArtwork: Artwork = {
      ...artwork,
      id: artwork.id || `chitralekha-${Date.now()}`,
      order: artwork.order ?? currentArtworks.length + 1,
      createdDate: artwork.createdDate || new Date().toISOString().split("T")[0],
    };

    const updated = [...currentArtworks, newArtwork].sort((a, b) => a.order - b.order);
    saveArtworks(updated);

    return NextResponse.json({ success: true, artwork: newArtwork, artworks: updated });
  } catch {
    return NextResponse.json({ error: "Failed to create artwork" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, artworks, artwork } = body;

    // Bulk re-ordering update (Chronology update by Monika)
    if (action === "reorder" && Array.isArray(artworks)) {
      saveArtworks(artworks);
      return NextResponse.json({ success: true, artworks });
    }

    // Single artwork update
    if (artwork && artwork.id) {
      const current = getStoredArtworks();
      const updated = current.map((item) => (item.id === artwork.id ? { ...item, ...artwork } : item));
      saveArtworks(updated.sort((a, b) => a.order - b.order));
      return NextResponse.json({ success: true, artwork, artworks: updated });
    }

    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  } catch {
    return NextResponse.json({ error: "Failed to update artwork" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Missing artwork ID" }, { status: 400 });
    }

    const current = getStoredArtworks();
    const updated = current.filter((item) => item.id !== id);
    saveArtworks(updated);

    return NextResponse.json({ success: true, artworks: updated });
  } catch {
    return NextResponse.json({ error: "Failed to delete artwork" }, { status: 500 });
  }
}
