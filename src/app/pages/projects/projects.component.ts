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
  activeProjectSlide = 0;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  selectImage(projectIndex: number, imageIndex: number) {
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
