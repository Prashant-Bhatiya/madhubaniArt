export type MadhubaniStyle = 
  | 'Bharni' 
  | 'Kachni' 
  | 'Godna' 
  | 'Kohbar' 
  | 'Tantrik' 
  | 'Interior & Contemporary';

export type AvailabilityStatus = 
  | 'Available' 
  | 'Exhibition' 
  | 'Commission Only' 
  | 'Sold';

export interface Artwork {
  id: string;
  title: string;
  hindiTitle?: string;
  style: MadhubaniStyle;
  description: string;
  story: string;
  dimensions: string; // e.g., "24 x 36 inches"
  medium: string; // e.g., "Natural Dyes & Acrylic on Handmade Silk Paper"
  year: number;
  imageUrl: string;
  price?: string; // e.g., "₹ 24,000" or "Inquire for price"
  status: AvailabilityStatus;
  isFeatured: boolean;
  order: number; // for chronology control by Monika
  interiorSuitability?: string; // e.g., "Living Room Statement, Foyer, Meditation Corner"
  createdDate: string;
}
