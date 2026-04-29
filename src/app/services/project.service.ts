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
      featured: true,
      period: 'Sep 2025 - Present',
      shortDescription: 'Modernizing and optimizing my personal portfolio with Angular 18 and a focus on UX/UI.',
      fullDescription: 'In this version, I am implementing advanced features like project grouping by year, unified design systems, and advanced animations using the latest Angular features.',
      technologies: ['Angular', 'SCSS', 'TypeScript'],
      images: ['images/banner-pc.png', 'images/banner-cel.png', 'images/Anthofu_Icon.png'],
      selectedImageIndex: 0,
      liveDemo: 'https://anthofu-portfolio.firebaseapp.com',
      repository: 'https://github.com/AnthoFu'
    },

    {
      slug: 'anthocito-discord-bot',
      title: 'Anthocito Bot - Discord Assistant',
      year: 2025,
      status: 'active',
      period: 'March 2024 - March 2026',
      shortDescription: 'A multifunctional Discord bot built with TypeScript and Node.js, featuring a modular architecture, dynamic command handling, and MongoDB integration.',
      fullDescription: 'Anthocito is a comprehensive Discord bot developed to manage servers, provide utility tools, and offer interactive minigames. What started as a JavaScript project evolved into a robust, type-safe TypeScript application.\n\nTechnical Highlights:\nI designed a highly modular architecture utilizing dynamic handlers for slash commands and Discord API events. This ensures the codebase remains clean and easily extensible as new features are added. Data persistence is managed through MongoDB and Mongoose schemas, providing reliable storage for server configurations and user statistics. \n\nResults:\nThe project currently serves as a solid, production-ready foundation with fully functional moderation and utility commands. It is optimized for continuous deployment on cloud platforms like Render, demonstrating a complete backend development lifecycle from local testing to live production.',
      technologies: ['TypeScript', 'Node.js', 'Discord.js', 'MongoDB', 'Mongoose'],
      images: ['images/anthocito-banner.png', 'images/AnthoFu-Icon_2.png'],
      selectedImageIndex: 0,
      repository: 'https://github.com/anthofu/anthocito'
    },

    {
      slug: "teslo-shop",
      title: "Teslo Shop - Fullstack E-commerce API",
      year: 2026,
      status: "completed",
      featured: true,
      period: "January 2026 - February 2026",
      shortDescription: "A complete e-commerce backend solution featuring a NestJS REST API, PostgreSQL integration, and real-time WebSockets.",
      fullDescription: "Teslo Shop is a robust and scalable e-commerce platform built with modern backend technologies. The project features a comprehensive RESTful API powered by NestJS, with advanced implementations of JWT authentication, custom authorization decorators, and TypeORM for efficient PostgreSQL database management. It also includes a specialized WebSocket service to handle real-time communication and a dedicated client for live interaction.\n\nTechnical Challenges:\nThe main challenge was implementing a secure and flexible authentication and authorization system using JWT and Passport, ensuring granular access control across different user roles. Additionally, managing complex product data with multiple image relationships required a sophisticated database schema and efficient file upload handling with Multer. Integrating real-time features with Socket.io while maintaining strict type safety across the entire system was another significant architectural focus.\n\nResults:\nThe project delivers a production-ready API with full CRUD capabilities, automated database seeding, and a documented structure using Swagger. It provides a powerful and extensible foundation for modern e-commerce applications, complemented by a Vite-based WebSocket client for real-time monitoring and interaction.",
      technologies: ["NestJS", "PostgreSQL", "TypeORM", "WebSockets", "JWT","TypeScript", "Vite"],
      images: ["images/banner-pc.png", "images/banner-cel.png", "static/products/100042301_0_2000.jpg"],
      selectedImageIndex: 0,
      repository: "https://github.com/AnthoFu/04-teslo-shop",
      liveDemo: "https://anthofu-chatter.netlify.app"
    },

    {
      slug: 'financiame-mobile-app',
      title: 'FinanciaMe - Personal Finance Manager',
      year: 2025,
      status: 'active',
      featured: true,
      period: 'August 2025 - Present',
      shortDescription: 'I developed an offline-first mobile application using React Native and Zustand to help users manage multi-currency finances, track expenses, and reach savings goals with real-time exchange rates.',
      fullDescription: 'FinanciaMe was born from the need for a robust, offline-first personal finance tool tailored for users in multi-currency environments, such as Venezuela. Young professionals often struggle to consolidate balances across different currencies (USD, VES, USDT). This application provides a unified view of their financial health by fetching real-time exchange rates while keeping all sensitive data securely on the device.\n\nTechnical Challenges:\nThe primary challenge was implementing a reliable offline-first architecture. I utilized Zustand with custom persistence logic and migration strategies to ensure data integrity across app updates. Managing complex financial logic, such as multi-currency transfers with commissions and automated recurring expenses, required a strict state management pattern to prevent balance inconsistencies. Additionally, creating a smooth, interactive user experience with Expo Reanimated and custom UI components was essential for user engagement.\n\nResults:\nThe final product is a high-performance, type-safe mobile application built with TypeScript and Expo. Key technologies include Zustand for lightweight state management and React Native Chart Kit for data visualization. The app features a comprehensive budgeting system, savings tracking, and an automated notification system for fixed expenses, making it a complete solution for modern financial management.',
      technologies: ['React Native', 'TypeScript', 'Zustand', 'Expo', 'Reanimated'],
      images: ['images/screenshot-home.jpg', 'images/screenshot-billeteras.jpg', 'images/screenshot-metas.jpg'],
      selectedImageIndex: 0,
      repository:'https://github.com/AnthoFu/FinanciaMe',
      liveDemo:'https://play.google.com/store/apps/details?id=com.anthofu.FinanciaMe'
    },

    {
      slug: 'anthofu-fake-store-angular',
      title: 'AnthoFu\'s Fake Store',
      year: 2025,
      status: 'completed',
      period: 'February 2025 - April 2025',
      shortDescription: 'A dynamic e-commerce frontend built with Angular 17, featuring external REST API integration, reactive state management with Signals, and category filtering.',
      fullDescription: 'Developed as the main project for an intensive Angular 17 course, this application is a fully functional e-commerce frontend. It seamlessly connects to the Platzi FakeAPI to fetch and render a comprehensive product catalog. Users can explore items, filter by categories, view detailed product pages, and interact with a real-time shopping cart where the total automatically updates.\n\nTechnical Highlights:\nThis project showcases the implementation of modern Angular 17 features. I utilized Signals for efficient and reactive state management across components, allowing for seamless cart updates. The UI benefits from the modern control flow syntax (@if, @for, @switch) for cleaner, more readable templates. Additionally, I focused on frontend performance optimization by implementing advanced routing techniques like Lazy Loading and component prefetching. The architecture is highly modular, relying on reusable components, custom pipes, and robust dependency injection.',
      technologies: ['Angular 17', 'TypeScript', 'REST API', 'Signals', 'Vercel'],
      images: ['images/ecommerce-banner-pc.png', 'images/ecommerce-banner-cel.png'],
      selectedImageIndex: 0,
      liveDemo: 'https://anthofu-ecommerce.vercel.app',
      repository: 'https://github.com/AnthoFu/Angular-17-Platzi'
    },

    {
      slug: 'unexca-prototype-website',
      title: 'UNEXCA Prototype Website',
      year: 2025,
      status: 'completed',
      period: 'November 2024 - March 2025',
      shortDescription: 'I led the development of a modern, intuitive prototype website for UNEXCA, utilizing vanilla web technologies and integrating the Meta API for real-time social media updates.',
      fullDescription: 'As the lead developer, I guided a team over four key months to modernize the digital presence of the Universidad Nacional Experimental de la Gran Caracas (UNEXCA), in association with Universidad Nacional Experimental Francisco de Miranda.\n\nOur main objective was to build an intuitive and engaging platform. I focused on leading the team to deliver features that empower the university community:\n\n• Real-Time Information: We integrated the Meta API to fetch and display the latest social media news directly on the homepage.\n• Simplified Navigation: We structured a clear interface so users can easily find Academic Programs, News, and all campus locations.\n• Institutional Identity: We developed dedicated sections highlighting the university\'s values, history, and mission.\n\nBuilt entirely with vanilla web technologies, this project is in constant evolution, successfully laying the foundation for future functionalities like a virtual thesis library.',
      technologies: ['HTML5', 'CSS', 'JavaScript', 'Meta API', 'Project Management'],
      images: ['images/unexca-banner-pc.png', 'images/unexca-banner-cel.png'],
      selectedImageIndex: 0,
      liveDemo: 'https://unexca-website.netlify.app'
    },

    {
      slug: 'legacy-project',
      title: 'Old Portfolio',
      year: 2024,
      status: 'completed',
      period: 'June 2024 - September 2024',
      shortDescription: 'My very first portfolio built with vanilla HTML/CSS/JS.',
      fullDescription: 'This is where everything started. A simple but effective way to showcase my first steps in the development world.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      images: ['images/banner-pc.png', 'images/banner-cel.png', 'images/Anthofu_Icon.png'],
      selectedImageIndex: 0,
      repository:'https://github.com/AnthoFu/Portfolio/tree/main/archive/legacy'
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getFeaturedProjects(limit: number = 3): Project[] {
    return this.projects
      .filter(p => p.featured)
      .sort((a, b) => b.year - a.year) // Ordenamos por mas reciente primero
      .slice(0, limit);
  }

  getProjectBySlug(slug: string): Project | undefined {
    return this.projects.find(p => p.slug === slug);
  }
}
