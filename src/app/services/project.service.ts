import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      slug: 'project-bla-bla',
      title: 'Project bla bla bla',
      year: 2025,
      period: 'February 2005 - Present',
      shortDescription: 'This is a brief summary of the project, perfect for the main cards.',
      fullDescription: 'This is a more detailed and extensive description that only appears when you open the project modal. Here you can talk about the process, challenges, and more.',
      technologies: ['Angular', 'SCSS', 'TypeScript'],
      images: [
        'images/banner-pc.png',
        'images/banner-cel.png',
        'images/Anthofu_photo-1.jpeg'
      ],
      selectedImageIndex: 0,
      liveDemo: 'https://example.com',
      repository: 'https://github.com/AnthoFu'
    },
    {
      slug: 'anthos-shop',
      title: 'Antho\'s Shop',
      year: 2024,
      period: 'March 2024 - June 2024',
      shortDescription: 'An e-commerce solution with a modern touch, built with Angular and Firebase.',
      fullDescription: 'Detailed explanation of Antho\'s Shop. This e-commerce project focuses on speed and user experience, using Firebase Realtime Database and Angular services to maintain reactivity throughout the application.',
      technologies: ['Angular', 'Firebase', 'TailwindCSS'],
      images: [
        'images/banner-pc.png',
        'images/banner-cel.png',
        'images/logo_btc.png'
      ],
      selectedImageIndex: 0,
      liveDemo: 'https://example.com',
      repository: 'https://github.com/AnthoFu'
    },
    {
      slug: 'unexca-system',
      title: 'UNEXCA System',
      year: 2023,
      period: 'January 2023 - December 2023',
      shortDescription: 'University management system focusing on accessibility and clear data visualization.',
      fullDescription: 'Full description of the UNEXCA system. It was designed to be accessible to everyone, following WCAG guidelines and using appropriate ARIA labels along with a high-contrast design.',
      technologies: ['Angular', 'PHP', 'PostgreSQL'],
      images: [
        'images/banner-pc.png',
        'images/banner-cel.png',
        'images/logo_canguro.png'
      ],
      selectedImageIndex: 0,
      liveDemo: 'https://example.com',
      repository: 'https://github.com/AnthoFu'
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectBySlug(slug: string): Project | undefined {
    return this.projects.find(p => p.slug === slug);
  }
}
