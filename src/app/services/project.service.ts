import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      slug: 'portfolio-v2',
      title: 'AnthoFu Portfolio v2',
      year: 2026,
      status: 'active',
      period: 'March 2026 - Present',
      shortDescription: 'Modernizing and optimizing my personal portfolio with Angular 18 and a focus on UX/UI.',
      fullDescription: 'In this version, I am implementing advanced features like project grouping by year, unified design systems, and advanced animations using the latest Angular features.',
      technologies: ['Angular', 'SCSS', 'TypeScript'],
      images: ['images/banner-pc.png', 'images/banner-cel.png', 'images/Anthofu_Icon.png'],
      selectedImageIndex: 0,
      liveDemo: 'https://anthofu.com',
      repository: 'https://github.com/AnthoFu'
    },
    {
      slug: 'ai-chat-app',
      title: 'AI Chat Assistant',
      year: 2026,
      status: 'active',
      period: 'Jan 2026 - Present',
      shortDescription: 'Collaborative AI assistant with real-time streaming and code highlighting.',
      fullDescription: 'Developing a high-performance chat interface using Genkit and Gemini API, focused on developer productivity and seamless integration.',
      technologies: ['Genkit', 'Firebase', 'Angular'],
      images: ['images/banner-pc.png', 'images/banner-cel.png', 'images/Anthofu_photo-1.jpeg'],
      selectedImageIndex: 0,
      repository: 'https://github.com/AnthoFu'
    },
    {
      slug: 'project-bla-bla',
      title: 'Project Alpha',
      year: 2025,
      status: 'completed',
      period: 'August 2025 - Dec 2025',
      shortDescription: 'Internal management tool for data analysis and reporting.',
      fullDescription: 'Comprehensive dashboard built for data visualization using D3.js and Angular, providing deep insights into business metrics.',
      technologies: ['Angular', 'D3.js', 'Node.js'],
      images: ['images/banner-pc.png', 'images/banner-cel.png', 'images/Anthofu_photo-1.jpeg'],
      selectedImageIndex: 0
    },
    {
      slug: 'project-beta',
      title: 'Project Beta',
      year: 2025,
      status: 'completed',
      period: 'May 2025 - July 2025',
      shortDescription: 'A secure authentication system with multi-factor support.',
      fullDescription: 'Implemented a robust auth system from scratch, ensuring top-tier security standards and smooth user onboarding.',
      technologies: ['NestJS', 'PostgreSQL', 'JWT'],
      images: ['images/banner-pc.png', 'images/banner-cel.png', 'images/Anthofu_photo-2.jpeg'],
      selectedImageIndex: 0
    },
    {
      slug: 'project-gamma',
      title: 'Project Gamma',
      year: 2025,
      status: 'completed',
      period: 'Jan 2025 - April 2025',
      shortDescription: 'Personal blog engine with markdown support and SSR.',
      fullDescription: 'Custom built blog engine focusing on SEO and performance, utilizing Angular SSR for fast initial loads.',
      technologies: ['Angular', 'Express', 'MongoDB'],
      images: ['images/banner-pc.png', 'images/banner-cel.png', 'images/Anthofu_Icon.png'],
      selectedImageIndex: 0
    },
    {
      slug: 'anthos-shop',
      title: 'Antho\'s Shop',
      year: 2024,
      status: 'completed',
      period: 'March 2024 - June 2024',
      shortDescription: 'An e-commerce solution with a modern touch, built with Angular and Firebase.',
      fullDescription: 'Detailed explanation of Antho\'s Shop. This e-commerce project focuses on speed and user experience, using Firebase Realtime Database and Angular services to maintain reactivity throughout the application.',
      technologies: ['Angular', 'Firebase', 'TailwindCSS'],
      images: ['images/banner-pc.png', 'images/banner-cel.png', 'images/logo_btc.png'],
      selectedImageIndex: 0
    },
    {
      slug: 'delivery-app',
      title: 'Fast Delivery',
      year: 2024,
      status: 'completed',
      period: 'Jan 2024 - Feb 2024',
      shortDescription: 'Mobile application for local delivery tracking and orders.',
      fullDescription: 'A React Native application that allows users to track their deliveries in real-time using Google Maps API.',
      technologies: ['React Native', 'Node.js', 'Google Maps'],
      images: ['images/banner-cel.png', 'images/banner-pc.png', 'images/logo_canguro.png'],
      selectedImageIndex: 0
    },
    {
      slug: 'unexca-system',
      title: 'UNEXCA System',
      year: 2023,
      status: 'completed',
      period: 'January 2023 - December 2023',
      shortDescription: 'University management system focusing on accessibility and clear data visualization.',
      fullDescription: 'Full description of the UNEXCA system. It was designed to be accessible to everyone, following WCAG guidelines and using appropriate ARIA labels along with a high-contrast design.',
      technologies: ['Angular', 'PHP', 'PostgreSQL'],
      images: ['images/banner-pc.png', 'images/banner-cel.png', 'images/logo_canguro.png'],
      selectedImageIndex: 0
    },
    {
      slug: 'legacy-project',
      title: 'Old Portfolio',
      year: 2022,
      status: 'completed',
      period: '2022',
      shortDescription: 'My very first portfolio built with vanilla HTML/CSS/JS.',
      fullDescription: 'This is where everything started. A simple but effective way to showcase my first steps in the development world.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      images: ['images/banner-pc.png', 'images/banner-cel.png', 'images/Anthofu_Icon.png'],
      selectedImageIndex: 0
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectBySlug(slug: string): Project | undefined {
    return this.projects.find(p => p.slug === slug);
  }
}
