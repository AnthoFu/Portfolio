import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SwipeableDirective } from '../../directives/swipeable.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SwipeableDirective],
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
    },
    {
      title: 'Antho\'s Shop',
      description: 'An e-commerce solution with a modern touch, built with Angular and Firebase.',
      images: [
        'images/banner-pc.png',
        'images/banner-cel.png',
        'images/logo_btc.png'
      ],
      selectedImageIndex: 0
    },
    {
      title: 'UNEXCA System',
      description: 'University management system for students and staff, focusing on accessibility.',
      images: [
        'images/banner-pc.png',
        'images/banner-cel.png',
        'images/logo_canguro.png'
      ],
      selectedImageIndex: 0
    }
  ];

  selectImage(projectIndex: number, imageIndex: number) {
    this.projects[projectIndex].selectedImageIndex = imageIndex;
  }
}
