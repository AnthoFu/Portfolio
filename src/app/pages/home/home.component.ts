import { Component, OnInit, Inject, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SwipeableDirective } from '../../directives/swipeable.directive';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslateDataPipe } from '../../pipes/translate-data.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    SwipeableDirective, 
    ScrollRevealDirective,
    TranslatePipe, 
    TranslateDataPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private projectService = inject(ProjectService);
  private isBrowser: boolean;
  
  activeProjectSlide = 0;
  activeAboutSlide = 0;

  projects: Project[] = [];
  projectSlidesCount = 0;
  aboutSlidesCount = 3;

  topSkills = [
    { name: 'Angular', icon: 'devicon-angular-plain', color: '#DD0031' },
    { name: 'NestJS', icon: 'devicon-nestjs-plain', color: '#E0234E' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain', color: '#3178C6' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', color: '#336791' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain', color: '#339933' }
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.projects = this.projectService.getFeaturedProjects(3);
    this.projectSlidesCount = this.projects.length + 1; // +1 for "See More" card
  }

  scrollToIntro(): void {
    if (!this.isBrowser) return;
    const introElement = document.getElementById('intro');
    if (introElement) {
      introElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onProjectSwipe(direction: 'left' | 'right') {
    if (direction === 'left' && this.activeProjectSlide < this.projectSlidesCount - 1) {
      this.activeProjectSlide++;
    } else if (direction === 'right' && this.activeProjectSlide > 0) {
      this.activeProjectSlide--;
    }
  }

  onAboutSwipe(direction: 'left' | 'right') {
    if (direction === 'left' && this.activeAboutSlide < this.aboutSlidesCount - 1) {
      this.activeAboutSlide++;
    } else if (direction === 'right' && this.activeAboutSlide > 0) {
      this.activeAboutSlide--;
    }
  }
}

