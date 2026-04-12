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
  activeProjects: Project[] = [];
  activeProjectsIndex = 0;
  
  groupedProjects: { year: number, projects: Project[], activeIndex: number }[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    this.activeProjects = this.projects.filter(p => p.status === 'active');
    this.groupProjectsByYear();
  }

  groupProjectsByYear(): void {
    const completedProjects = this.projects.filter(p => p.status !== 'active');
    const groups = completedProjects.reduce((acc, project) => {
      const year = project.year;
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(project);
      return acc;
    }, {} as { [key: number]: Project[] });

    // Convert to sorted array (newest years first)
    this.groupedProjects = Object.keys(groups)
      .map(year => ({ 
        year: parseInt(year), 
        projects: groups[parseInt(year)],
        activeIndex: 0 
      }))
      .sort((a, b) => b.year - a.year);
  }

  selectImage(projectIndex: number, imageIndex: number): void {
    this.projects[projectIndex].selectedImageIndex = imageIndex;
  }

  onActiveSwipe(direction: 'left' | 'right') {
    if (direction === 'left' && this.activeProjectsIndex < this.activeProjects.length - 1) {
      this.activeProjectsIndex++;
    } else if (direction === 'right' && this.activeProjectsIndex > 0) {
      this.activeProjectsIndex--;
    }
  }

  onYearSwipe(direction: 'left' | 'right', groupIndex: number) {
    const group = this.groupedProjects[groupIndex];
    if (direction === 'left' && group.activeIndex < group.projects.length - 1) {
      group.activeIndex++;
    } else if (direction === 'right' && group.activeIndex > 0) {
      group.activeIndex--;
    }
  }
}
