import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Project bla bla bla',
      description: 'Project bla bla bla, para el bla bla bla y el bla bla bla, bla bla bla y bla bla bla.',
      images: [
        'images/banner-pc.png',
        'images/banner-cel.png',
        'images/Anthofu_photo-1.jpeg'
      ],
      selectedImageIndex: 0
    }
  ];

  selectImage(projectIndex: number, imageIndex: number) {
    this.projects[projectIndex].selectedImageIndex = imageIndex;
  }
}
