import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SwipeableDirective } from '../../directives/swipeable.directive';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SwipeableDirective, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  groupedProjects: { year: number, projects: Project[] }[] = [];
  activeProjectSlide = 0;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    this.groupProjectsByYear();
  }

  groupProjectsByYear(): void {
    const groups = this.projects.reduce((acc, project) => {
      const year = project.year;
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(project);
      return acc;
    }, {} as { [key: number]: Project[] });

    // Convert to sorted array (newest years first)
    this.groupedProjects = Object.keys(groups)
      .map(year => ({ year: parseInt(year), projects: groups[parseInt(year)] }))
      .sort((a, b) => b.year - a.year);
  }

  selectImage(projectIndex: number, imageIndex: number): void {
    this.projects[projectIndex].selectedImageIndex = imageIndex;
  }

  onProjectSwipe(direction: 'left' | 'right') {
    if (direction === 'left' && this.activeProjectSlide < this.projects.length - 1) {
      this.activeProjectSlide++;
    } else if (direction === 'right' && this.activeProjectSlide > 0) {
      this.activeProjectSlide--;
    }
  }
}
