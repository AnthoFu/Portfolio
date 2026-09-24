export interface Course {
  id: string;
  title: string | Record<'en' | 'es', string>;
  platform: string;
  issuer: string;
  date: string;
  imageUrl?: string;
  certificateUrl?: string;
  pdfUrl?: string;
  skills: string[];
}
