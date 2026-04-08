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
      period: 'February 2005 - Present',
      description: 'This is a slightly longer description than the previous one. It could be very descriptive or just talk about random things... I don\'t want to have all the code like spaghetti code!',
      challenge: 'The main challenge was creating an intuitive interface that allowed navigating through multiple images without losing context.',
      solution: 'I implemented an interactive thumbnail system and a swipe directive to improve the experience on mobile devices.',
      role: 'Full-Stack Developer',
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
      period: 'March 2024 - June 2024',
      description: 'An e-commerce solution with a modern touch, built with Angular and Firebase. Focuses on speed and user experience.',
      challenge: 'Managing the shopping cart state and real-time synchronization with the database.',
      solution: 'I used Firebase Realtime Database and Angular services to maintain reactivity throughout the application.',
      role: 'Frontend Developer',
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
      period: 'January 2023 - December 2023',
      description: 'University management system for students and staff, focusing on accessibility and clear data visualization.',
      challenge: 'Creating a complex system that was accessible to people with different visual abilities.',
      solution: 'I followed WCAG accessibility guidelines and used appropriate ARIA labels along with a high-contrast design.',
      role: 'Lead Developer',
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
