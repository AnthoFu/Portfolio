import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

interface TechItem {
  name: string;
  icon: string;
  color: string;
  textColor?: string;
}

interface TechCategory {
  title: string;
  items: TechItem[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  private courseService = inject(CourseService);
  courses: Course[] = [];

  techStack: TechCategory[] = [
    {
      title: 'Languages',
      items: [
        { name: 'JavaScript', icon: 'devicon-javascript-plain', color: '#F7DF1E', textColor: '#000' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain', color: '#3178C6', textColor: '#FFF' },
        { name: 'Python', icon: 'devicon-python-plain', color: '#3776AB', textColor: '#FFF' },
        { name: 'SQL', icon: 'fa-solid fa-database', color: '#336791', textColor: '#FFF' }
      ]
    },
    {
      title: 'Front-end',
      items: [
        { name: 'Angular', icon: 'devicon-angular-plain', color: '#DD0031', textColor: '#FFF' },
        { name: 'React', icon: 'devicon-react-original', color: '#61DAFB', textColor: '#000' },
        { name: 'React Native', icon: 'devicon-react-original', color: '#61DAFB', textColor: '#000' },
        { name: 'HTML5', icon: 'devicon-html5-plain', color: '#E34F26', textColor: '#FFF' },
        { name: 'CSS3', icon: 'devicon-css3-plain', color: '#1572B6', textColor: '#FFF' },
        { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original', color: '#06B6D4', textColor: '#FFF' }
      ]
    },
    {
      title: 'Back-end',
      items: [
        { name: 'Node.js', icon: 'devicon-nodejs-plain', color: '#339933', textColor: '#FFF' },
        { name: 'Odoo', icon: 'images/odoo_logo.svg', color: '#D1C4CD', textColor: '#714B67' },
        { name: 'NestJS', icon: 'devicon-nestjs-plain', color: '#E0234E', textColor: '#FFF' }
      ]
    },
    {
      title: 'Databases',
      items: [
        { name: 'MongoDB', icon: 'devicon-mongodb-plain', color: '#47A248', textColor: '#FFF' },
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', color: '#4169E1', textColor: '#FFF' },
        { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain', color: '#CC2927', textColor: '#FFF' }
      ]
    },
    {
      title: 'Cloud y DevOps',
      items: [
        { name: 'Amazon S3', icon: 'devicon-amazonwebservices-plain-wordmark', color: '#FF9900', textColor: '#000' },
        { name: 'AWS Lambda', icon: 'devicon-amazonwebservices-plain-wordmark', color: '#FF9900', textColor: '#000' },
        
        { name: 'Git', icon: 'devicon-git-plain', color: '#F05032', textColor: '#FFF' },
        { name: 'GitHub', icon: 'devicon-github-original', color: '#181717', textColor: '#FFF' }
      ]
    },
    {
      title: 'Tools and methodologies',
      items: [
        { name: 'Figma', icon: 'devicon-figma-plain', color: '#F24E1E', textColor: '#FFF' },
        { name: 'Expo', icon: 'devicon-expo-original', color: '#000', textColor: '#FFF' },
        { name: 'Google Play Console', icon: 'devicon-google-plain', color: '#4285F4', textColor: '#FFF' },
        { name: 'Jupyter', icon: 'devicon-jupyter-plain', color: '#F37626', textColor: '#FFF' },
        { name: 'Jira', icon: 'devicon-jira-plain', color: '#0052CC', textColor: '#FFF' },
        { name: 'ClickUp', icon: 'fa-solid fa-list-check', color: '#7B68EE', textColor: '#FFF' },
        { name: 'Miro', icon: 'fa-solid fa-chalkboard-user', color: '#FFD700', textColor: '#000' },
        { name: 'Scrum', icon: 'fa-solid fa-arrows-spin', color: '#0089D1', textColor: '#FFF' }
      ]
    }
  ];

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }
}
