export interface Course {
  id: string;
  title: string;
  platform: string;
  issuer: string;
  date: string;
  imageUrl?: string;
  certificateUrl?: string;
  skills: string[];
}
