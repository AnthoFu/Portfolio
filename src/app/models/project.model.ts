export interface Project {
  slug: string;
  title: string;
  year: number;
  status?: 'active' | 'completed';
  period?: string;
  title_color?: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  images: string[]; // Idealmente exactamente 3 fotos
  selectedImageIndex: number;
  liveDemo?: string;
  repository?: string;
  // Campos antiguos para retrocompatibilidad opcional
  description?: string;
  challenge?: string;
  solution?: string;
  role?: string;
}
