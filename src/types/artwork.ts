export type ArtCategory = 
  | 'Madhubani Folk Mandalas' 
  | 'Dhammapada & Calligraphy' 
  | 'Buddha & Meditative Serenity' 
  | 'Vipassana & Bodhi Murals';

export type AvailabilityStatus = 
  | 'Original Artwork' 
  | 'Available' 
  | 'Commission Only';

export interface Artwork {
  id: string;
  title: string;
  hindiTitle?: string;
  category: ArtCategory;
  description: string;
  verseOrStory?: string;
  medium: string;
  year?: number;
  imageUrl: string;
  status: AvailabilityStatus;
  isFeatured: boolean;
  order: number;
  signedBy?: string; // e.g. "Monika Yadav" or "Monika Shah"
  createdDate: string;
}
