# Fase 1: Inventario de Contenido

*Última actualización: 27/07/2025*

Este documento es el inventario central de todo el contenido (textos, imágenes, enlaces) necesario para cada página del portfolio. Sirve como fuente de verdad para las fases de diseño y desarrollo, y se actualiza para reflejar las decisiones de diseño.

---

**Objetivo:** Captar la atención con una identidad visual fuerte, presentarme brevemente y guiar al usuario hacia las secciones clave.

### Bloque 1: Hero Section (`HeroComponent`)
- [x] **Identidad Visual:**
  - **Imagen de Fondo:** Imagen con código JavaScript.
  - **Logo Principal:** Logo de "AnthoFu" en grande, en color naranja.
- [x] **Texto Principal:**
  - **Título/Cargo:** "Desarrollador Front-End".

---

### Bloque 2: Bio Rápida (`QuickBioComponent`)
- [x] **Objetivo:** Presentarme de forma rápida y visual justo después de la sección Hero.
- **Contenido:**
  - **Elemento 1 (Cuadro Izquierdo): Fotografía Profesional**
    - [ ] **Tarea:** Necesito conseguir una foto profesional (headshot) que encaje con el estilo oscuro/tech del sitio.
  - **Elemento 2 (Rectángulo Derecho): Descripción Breve**
    - [x] **Título:** "¡Hello, World! Soy AnthoFu 🦊"
    - [x] **Texto/Borrador:** "Un desarrollador de software apasionado por la tecnología y la creación de soluciones digitales. Me especializo en el ecosistema de Angular, siempre buscando un código limpio y una experiencia de usuario impecable. ¡Explora mis proyectos y hablemos!"
    
*Nota: Este texto es un borrador. Puede ser más corto o más largo según encaje en el diseño final.*

---

### Bloque 3: Navegación Principal (`IntroCardsComponent`)
- [x] **Objetivo:** Actuar como la navegación principal de la página de inicio.
- **Contenido:** Tres tarjetas de navegación grandes.
  - **Tarjeta 1:**
    - **Texto:** "proyectos"
    - **Enlace:** Navegará a la ruta `/projects`.
  - **Tarjeta 2:**
    - **Texto:** "colaboraciones"
    - **Enlace:** *(Decisión pendiente: Enlazará a la sección de Experiencia Laboral en la página `/about`)*.
  - **Tarjeta 3:**
    - **Texto:** "sobre mi"
    - **Enlace:** Navegará a la ruta `/about`.

---

### Bloque 4: Proyectos Destacados (`FeaturedProjectsComponent`)
- [x] **Título de la sección:** "Proyectos Destacados".
- **Contenido:** Una galería con 3 proyectos clave. Cada proyecto será una instancia de `ProjectCardComponent`.
  - **Proyecto 1: Página Web Oficial de la UNEXCA** 🏛️🎓
    - **Imagen/Placeholder:** Espacio visual para la imagen del proyecto.
    - **Enlace/Texto:** "palabra/enlace" (se reemplazará por el título y enlace real).
  - **Proyecto 2: AnthoFu's E-Commerce** 🛍️🛒
    - **Imagen/Placeholder:** Espacio visual para la imagen del proyecto.
    - **Enlace/Texto:** "palabra/enlace" (se reemplazará por el título y enlace real).
  - **Proyecto 3: AnimationLand** 🐇🎮
    - **Imagen/Placeholder:** Espacio visual para la imagen del proyecto.
    - **Enlace/Texto:** "palabra/enlace" (se reemplazará por el título y enlace real).

---

## Página: `/about` (Sobre Mí)

**Objetivo:** Contar mi historia, mostrar mi personalidad y listar mis habilidades técnicas de forma clara.

### Bloque 1: Introducción Personal
- [ ] **Fotografía:** Necesito conseguir una foto profesional pero accesible.
- [x] **Párrafo Narrativo:** "Hola, soy Anthony Fuentes. Desde pequeño me ha gustado ver código, la primera vez que manipulé uno fue con el 'inspeccionar' de Chrome en una pagina de juegos online. Intenté cambiar la cantidad de dinero de una moneda virtual que tenía la página pero nunca se guardaba, jajaja. Me gusta mucho la tecnología; ser capaz de crear cualquier cosa mediante código es emocionante, y la sensación de ver una app web en producción o que la gente utilice un programa que he hecho es increíble. ♥️"

### Bloque 2: Habilidades (Skills)
- [x] **Título de la sección:** "Habilidades Técnicas"
- [x] **Lista de Habilidades:**
  - **Lenguajes:** Python, HTML5, CSS, JavaScript, PHP.
  - **Frameworks:** Angular, React, Jupyter, TailwindCSS.
  - **Herramientas y Plataformas:** Git, GitHub, Jira, Firebase, Vercel, Netlify, Canva, Miro.

### Bloque 3: Experiencia y CV
- [x] **Experiencia Laboral:**
  - **Cargo:** Desarrollador de Tecnologías de Información
  - **Empresa:** Canguro
  - **Periodo:** Noviembre 2023 - Actualidad
  - **Descripción:** "Trabajando en una de las mayores empresas de venta de accesorios tecnológicos de Venezuela. Mis responsabilidades incluyen:"
    - Desarrollo de aplicaciones web.
    - Administración de bases de datos.
    - Manejo de automatizaciones con AWS Lambda.
    - Mantenimiento de aplicaciones existentes.
    - Colaboración en la migración del ERP de Odoo 15 a Odoo 17.
    - Creación de reglas de automatización en Odoo.
    - Gestión de permisos y roles para usuarios en Odoo 17.
- [x] **Botón:** "Descargar mi CV" (Tengo que tener actualizado el PDF o un enlace a la versión más reciente).

---

## Página: `/projects` (Galería de Proyectos)

**Objetivo:** Mostrar un resumen visual de todos mis proyectos.

### Bloque 1: Título e Introducción
- [x] **Título:** "Mis Proyectos"
- [x] **Párrafo corto:** "Aquí hay una selección de proyectos en los que he trabajado. Cada uno fue un desafío único y una oportunidad para aprender."

### Bloque 2: Galería de Proyectos
- [ ] **Definir la "Tarjeta de Proyecto" para cada uno de los 4 proyectos seleccionados.** Cada tarjeta debe contener:
  - Una imagen principal o GIF.
  - Título del proyecto.
  - Resumen de 1-2 frases.
  - Lista de 2-3 tecnologías clave (ej: `Angular`, `Firebase`, `TailwindCSS`).

---

## Página: `/projects/[nombre-proyecto]` (Detalle de Proyecto)

**Objetivo:** Profundizar en un proyecto específico.

- [ ] **Tarea Pendiente:** Rellenar la siguiente plantilla para cada uno de los 4 proyectos.

```markdown
### Título del Proyecto: [Nombre del Proyecto]
*   **Subtítulo:** [Resumen de 1 frase del proyecto]
*   **Enlaces:** [Live Demo] | [Repositorio]
*   **El Desafío:** [¿Qué problema había que resolver?]
*   **Mi Solución:** [¿Cómo lo resolví? ¿Qué decisiones técnicas tomé?]
*   **Mi Rol:** [¿Qué hice yo exactamente?]
*   **Stack Tecnológico:** [Lista detallada]
*   **Galería Visual:** [Necesito 2-4 imágenes/GIFs]
*   **Aprendizajes:** [¿Qué aprendí en este proyecto?]
```
---


## Componentes Globales / Layout

Esta sección describe elementos que aparecen en múltiples páginas o forman parte del layout principal.

### Barra de Navegación Lateral (`SidebarComponent`)
- [x] **Elemento 1: Logo.** Enlace a la página de inicio (`/`).
- [x] **Elemento 2: Navegación Principal.**
    - Icono Home -> `/`
    - Icono Sobre Mí -> `/about`
    - Icono Proyectos -> `/projects`

### Contacto Flotante (`FloatingContactComponent`)
- [x] **Objetivo:** Proporcionar acceso directo y persistente a mis perfiles y email, reemplazando la página de contacto tradicional.
- [x] **Diseño:** Tres círculos naranjas, probablemente en la esquina inferior derecha.
- **Contenido:**
  - **Círculo 1:** Icono de LinkedIn.
    - **Acción:** Enlazar a mi perfil de LinkedIn.
  - **Círculo 2:** Icono de Email.
    - **Acción:** Abrir el cliente de correo del usuario con mi email pre-rellenado (`mailto:anthony.fuentes2005@gmail.com`).
  - **Círculo 3:** Icono de GitHub.
    - **Acción:** Enlazar a mi perfil de GitHub.