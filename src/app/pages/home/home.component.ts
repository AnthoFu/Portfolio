import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SwipeableDirective } from '../../directives/swipeable.directive';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, SwipeableDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  activeProjectSlide = 0;
  activeAboutSlide = 0;

  projects: Project[] = [];
  projectSlidesCount = 0;
  aboutSlidesCount = 3;
  showScrollTop = false;

  topSkills = [
    { name: 'Angular', icon: 'devicon-angular-plain', color: '#DD0031' },
    { name: 'NestJS', icon: 'devicon-nestjs-plain', color: '#E0234E' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain', color: '#3178C6' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', color: '#336791' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain', color: '#339933' }
  ];

  constructor(
    private projectService: ProjectService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    this.projectSlidesCount = this.projects.length + 1; // +1 for "See More" card
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.showScrollTop = window.scrollY > 500;
    }
  }

  scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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

  downloadCV() {
    // Placeholder for CV download
    alert('CV Download coming soon!');
  }
}
