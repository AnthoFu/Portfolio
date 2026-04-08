export interface Project {
  slug: string;
  title: string;
  period?: string;
  title_color?: string;
  description: string;
  challenge?: string;
  solution?: string;
  role?: string;
  technologies: string[];
  images: string[];
  selectedImageIndex: number;
  liveDemo?: string;
  repository?: string;
}
