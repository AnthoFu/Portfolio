import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    {
      id: '17',
      title: {
        en: 'Nest: Scalable Backend Development with Node Course',
        es: 'Curso de Nest: Desarrollo Backend Escalable con Node'
      },
      platform: 'Udemy',
      issuer: 'Udemy',
      date: 'Feb. 2026',
      imageUrl: 'images/certificados/udemy/curso_udemy_NESTJS.png',
      pdfUrl: 'docs/certificados/udemy/curso_udemy_NESTJS.pdf',
      skills: ['NestJS', 'Node.js', 'Backend', 'TypeScript']
    },
    {
      id: '16',
      title: {
        en: 'JavaScript Engine (V8) and the Browser Course',
        es: 'Curso de JavaScript Engine (V8) y el Navegador'
      },
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'Sep. 2025',
      imageUrl: 'images/certificados/platzi/curso_platzi_JS_v8.png',
      pdfUrl: 'docs/certificados/platzi/curso_platzi_JS_v8.pdf',
      certificateUrl: 'https://platzi.com/p/anthony.fuentes2005/curso/1798-course/diploma/detalle/',
      skills: ['JavaScript', 'V8', 'Web Performance', 'Browsers']
    },
    {
      id: '15',
      title: {
        en: 'Data Structures with JavaScript Course',
        es: 'Curso de Estructuras de Datos con JavaScript'
      },
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'Ago. 2025',
      imageUrl: 'images/certificados/platzi/curso_platzi_estructuras_de_datos_js.png',
      pdfUrl: 'docs/certificados/platzi/curso_platzi_estructuras_de_datos_js.pdf',
      certificateUrl: 'https://platzi.com/p/anthony.fuentes2005/curso/2156-course/diploma/detalle/',
      skills: ['JavaScript', 'Algorithms', 'Data Structures']
    },
    {
      id: '14',
      title: {
        en: 'Asynchronism with JavaScript Course 2022',
        es: 'Curso de Asincronismo con JavaScript 2022'
      },
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'Jul. 2025',
      imageUrl: 'images/certificados/platzi/curso_platzi_asincronismo_js.png',
      pdfUrl: 'docs/certificados/platzi/curso_platzi_asincronismo_js.pdf',
      certificateUrl: 'https://platzi.com/p/anthony.fuentes2005/curso/3175-course/diploma/detalle/',
      skills: ['JavaScript', 'Promises', 'Async/Await', 'Event Loop']
    },
    {
      id: '13',
      title: {
        en: 'JavaScript Fundamentals Course',
        es: 'Curso de Fundamentos de JavaScript'
      },
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'Jul. 2025',
      imageUrl: 'images/certificados/platzi/curso_platzi_fundamentos_js.png',
      pdfUrl: 'docs/certificados/platzi/curso_platzi_fundamentos_js.pdf',
      certificateUrl: 'https://platzi.com/p/anthony.fuentes2005/curso/10266-course/diploma/detalle/',
      skills: ['JavaScript', 'Basics', 'Programming']
    },
    {
      id: '12',
      title: {
        en: 'Closures and Scope in JavaScript Course',
        es: 'Curso de Closures y Scope en JavaScript'
      },
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'Jul. 2025',
      imageUrl: 'images/certificados/platzi/curso_platzi_clousures_y_scopes_js.png',
      pdfUrl: 'docs/certificados/platzi/curso_platzi_clousures_y_scopes_js.pdf',
      certificateUrl: 'https://platzi.com/p/anthony.fuentes2005/curso/3213-course/diploma/detalle/',
      skills: ['JavaScript', 'Closures', 'Scope', 'Context']
    },
    {
      id: '11',
      title: {
        en: 'REST API with Javascript Course: Fundamentals',
        es: 'Curso de API REST con Javascript: Fundamentos'
      },
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'Jul. 2025',
      imageUrl: 'images/certificados/platzi/curso_platzi_api_rest_js.png',
      pdfUrl: 'docs/certificados/platzi/curso_platzi_api_rest_js.pdf',
      certificateUrl: 'https://platzi.com/p/anthony.fuentes2005/curso/2985-course/diploma/detalle/',
      skills: ['API REST', 'JavaScript', 'HTTP', 'Backend']
    },
    {
      id: '10',
      title: {
        en: 'Frontend Frameworks and Architectures Audio-course: Case Studies',
        es: 'Audiocurso de Frameworks y Arquitecturas Frontend: Casos de Estudio'
      },
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'Jun. 2025',
      imageUrl: 'images/certificados/platzi/curso_platzi_arquitectura_front-end.png',
      pdfUrl: 'docs/certificados/platzi/curso_platzi_arquitectura_front-end.pdf',
      certificateUrl: 'https://platzi.com/p/anthony.fuentes2005/curso/4623-course/diploma/detalle/',
      skills: ['Frontend', 'Architecture', 'Frameworks', 'Design Patterns']
    },
    {
      id: '9',
      title: {
        en: 'Introduction to AWS Course: Cloud Computing Fundamentals',
        es: 'Curso de Introducción a AWS: Fundamentos de Cloud Computing'
      },
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'Jun. 2025',
      imageUrl: 'images/certificados/platzi/curso_platzi_introduccion_a_AWS.png',
      pdfUrl: 'docs/certificados/platzi/curso_platzi_introduccion_a_AWS.pdf',
      skills: ['AWS', 'Cloud Computing', 'Infrastructure']
    },
    {
      id: '8',
      title: {
        en: 'Array Manipulation in JavaScript Course',
        es: 'Curso de Manipulación de Arrays en JavaScript'
      },
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'May. 2025',
      imageUrl: 'images/certificados/platzi/curso_platzi_manipulacion_de_arrays.png',
      pdfUrl: 'docs/certificados/platzi/curso_platzi_manipulacion_de_arrays.pdf',
      certificateUrl: 'https://platzi.com/p/anthony.fuentes2005/curso/2461-course/diploma/detalle/',
      skills: ['JavaScript', 'Arrays', 'Functional Programming']
    },
    {
      id: '7',
      title: {
        en: 'Project Management with Jira Course',
        es: 'Curso de Gestión de Proyectos con Jira'
      },
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'May. 2025',
      imageUrl: 'images/certificados/platzi/curso_platzi_jira.png',
      pdfUrl: 'docs/certificados/platzi/curso_platzi_jira.pdf',
      certificateUrl: 'https://platzi.com/p/anthony.fuentes2005/curso/11967-course/diploma/detalle/',
      skills: ['Jira', 'Agile', 'Project Management']
    },
    {
      id: '6',
      title: {
        en: 'Software Engineering Fundamentals Course',
        es: 'Curso de Fundamentos de Ingeniería de Software'
      },
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'May. 2025',
      imageUrl: 'images/certificados/platzi/curso_platzi_ingenieria_de_software.png',
      pdfUrl: 'docs/certificados/platzi/curso_platzi_ingenieria_de_software.pdf',
      certificateUrl: 'https://platzi.com/p/anthony.fuentes2005/curso/11997-course/diploma/detalle/',
      skills: ['Software Engineering', 'Fundamentals', 'System Design']
    },
    {
      id: '5',
      title: {
        en: 'React.js Course',
        es: 'Curso de React.js'
      },
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'May. 2025',
      imageUrl: 'images/certificados/platzi/curso_platzi_react.png',
      pdfUrl: 'docs/certificados/platzi/curso_platzi_react.pdf',
      certificateUrl: 'https://platzi.com/p/anthony.fuentes2005/curso/11887-course/diploma/detalle/',
      skills: ['React.js', 'Frontend', 'JavaScript', 'Components']
    },
    {
      id: '4',
      title: {
        en: 'Angular Course: Creating Web Applications',
        es: 'Curso de Angular: Creación de Aplicaciones Web'
      },
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'Abr. 2025',
      imageUrl: 'images/certificados/platzi/curso_platzi_angular.png',
      pdfUrl: 'docs/certificados/platzi/curso_platzi_angular.pdf',
      certificateUrl: 'https://platzi.com/p/anthony.fuentes2005/curso/8352-course/diploma/detalle/',
      skills: ['Angular', 'Frontend', 'TypeScript', 'Web Apps']
    },
    {
      id: '3',
      title: {
        en: 'CSS Animations Course',
        es: 'Curso de Animaciones con CSS'
      },
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'Abr. 2025',
      imageUrl: 'images/certificados/platzi/curso_platzi_animaciones_css.png',
      pdfUrl: 'docs/certificados/platzi/curso_platzi_animaciones_css.pdf',
      certificateUrl: 'https://platzi.com/p/anthony.fuentes2005/curso/2337-course/diploma/detalle/',
      skills: ['CSS', 'Animations', 'UI/UX']
    },
    {
      id: '2',
      title: {
        en: 'Design for Developers Course',
        es: 'Curso de Diseño para Developers'
      },
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'Abr. 2025',
      imageUrl: 'images/certificados/platzi/curso_platzi_diseno_para_developers.png',
      pdfUrl: 'docs/certificados/platzi/curso_platzi_diseno_para_developers.pdf',
      certificateUrl: 'https://platzi.com/p/anthony.fuentes2005/curso/1906-course/diploma/detalle/',
      skills: ['Design', 'UI/UX', 'Figma', 'Visuals']
    },
    {
      id: '1',
      title: {
        en: 'JavaScript Course: DOM Manipulation',
        es: 'Curso de JavaScript: Manipulación del DOM'
      },
      platform: 'Platzi',
      issuer: 'Platzi',
      date: 'Mar. 2025',
      imageUrl: 'images/certificados/platzi/curso_platzi_manipulacion_DOM_js.png',
      pdfUrl: 'docs/certificados/platzi/curso_platzi_manipulacion_DOM_js.pdf',
      certificateUrl: 'https://platzi.com/p/anthony.fuentes2005/curso/10135-course/diploma/detalle/',
      skills: ['JavaScript', 'DOM', 'Frontend', 'Interactivity']
    }
  ];

  getCourses(): Observable<Course[]> {
    return of(this.courses);
  }
}
