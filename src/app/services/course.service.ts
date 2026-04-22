import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    {
      id: '16',
      title: 'Curso de JavaScript Engine (V8) y el Navegador',
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'Sep. 2025',
      skills: ['JavaScript', 'V8', 'Web Performance', 'Browsers']
    },
    {
      id: '15',
      title: 'Curso de Estructuras de Datos con JavaScript',
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'Ago. 2025',
      skills: ['JavaScript', 'Algorithms', 'Data Structures']
    },
    {
      id: '14',
      title: 'Curso de Asincronismo con JavaScript 2022',
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'Jul. 2025',
      skills: ['JavaScript', 'Promises', 'Async/Await', 'Event Loop']
    },
    {
      id: '13',
      title: 'Curso de Fundamentos de JavaScript',
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'Jul. 2025',
      skills: ['JavaScript', 'Basics', 'Programming']
    },
    {
      id: '12',
      title: 'Curso de Closures y Scope en JavaScript',
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'Jul. 2025',
      skills: ['JavaScript', 'Closures', 'Scope', 'Context']
    },
    {
      id: '11',
      title: 'Curso de API REST con Javascript: Fundamentos',
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'Jul. 2025',
      skills: ['API REST', 'JavaScript', 'HTTP', 'Backend']
    },
    {
      id: '10',
      title: 'Audiocurso de Frameworks y Arquitecturas Frontend: Casos de Estudio',
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'Jun. 2025',
      skills: ['Frontend', 'Architecture', 'Frameworks', 'Design Patterns']
    },
    {
      id: '9',
      title: 'Curso de Introducción a AWS: Fundamentos de Cloud Computing',
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'Jun. 2025',
      skills: ['AWS', 'Cloud Computing', 'Infrastructure']
    },
    {
      id: '8',
      title: 'Curso de Manipulación de Arrays en JavaScript',
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'May. 2025',
      skills: ['JavaScript', 'Arrays', 'Functional Programming']
    },
    {
      id: '7',
      title: 'Curso de Gestión de Proyectos con Jira',
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'May. 2025',
      skills: ['Jira', 'Agile', 'Project Management']
    },
    {
      id: '6',
      title: 'Curso de Fundamentos de Ingeniería de Software',
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'May. 2025',
      skills: ['Software Engineering', 'Fundamentals', 'System Design']
    },
    {
      id: '5',
      title: 'Curso de React.js',
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'May. 2025',
      skills: ['React.js', 'Frontend', 'JavaScript', 'Components']
    },
    {
      id: '4',
      title: 'Curso de Angular: Creación de Aplicaciones Web',
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'Abr. 2025',
      skills: ['Angular', 'Frontend', 'TypeScript', 'Web Apps']
    },
    {
      id: '3',
      title: 'Curso de Animaciones con CSS',
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'Abr. 2025',
      skills: ['CSS', 'Animations', 'UI/UX']
    },
    {
      id: '2',
      title: 'Curso de Diseño para Developers',
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'Abr. 2025',
      skills: ['Design', 'UI/UX', 'Figma', 'Visuals']
    },
    {
      id: '1',
      title: 'Curso de JavaScript: Manipulación del DOM',
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'Mar. 2025',
      skills: ['JavaScript', 'DOM', 'Frontend', 'Interactivity']
    }
  ];

  getCourses(): Observable<Course[]> {
    return of(this.courses);
  }
}
