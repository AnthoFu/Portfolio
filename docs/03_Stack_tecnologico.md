# Fase 1: Decisión del Stack Tecnológico

*Última actualización: 23/06/2025*

Este documento describe el stack tecnológico seleccionado para el desarrollo del portfolio de AnthoFu. La elección se ha basado en los objetivos del proyecto, las habilidades que se desean demostrar y la búsqueda de un flujo de trabajo moderno y eficiente.

---

## Stack Seleccionado

| Categoría | Tecnología Elegida | Razón Principal |
| :--- | :--- | :--- |
| **Framework** | **Angular (v20+)** | Demostrar dominio de un framework robusto y demandado. |
| **Estilos** | **Tailwind CSS + SCSS** | Un enfoque híbrido para combinar rapidez y potencia. |
| **Hosting** | **Firebase Hosting** | Rendimiento, CI/CD y sinergia con el ecosistema de Google. |

---

## 1. Framework: Angular

Se ha elegido **Angular** como el framework principal para la construcción de la aplicación.

*   **Ventajas Clave:**
    *   **Arquitectura Opinada:** Proporciona una estructura clara y consistente para proyectos grandes y pequeños.
    *   **TypeScript por Defecto:** Fomenta un código más limpio, mantenible y menos propenso a errores.
    *   **Ecosistema Completo:** Incluye soluciones integradas para enrutamiento, gestión de estado y peticiones HTTP.
    *   **Relevancia en el Mercado:** Es una habilidad muy valorada en el sector corporativo y en equipos de desarrollo consolidados.

## 2. Estilos: Enfoque Híbrido (Tailwind CSS + SCSS)

Se implementará una estrategia de estilos dual para aprovechar lo mejor de ambos mundos.

*   **Tailwind CSS (Herramienta Principal):**
    *   **Uso:** Para el 90% del trabajo de estilización, incluyendo layouts (Grid, Flexbox), espaciado, tipografía y colores.
    -   **Objetivo:** Agilizar el desarrollo, mantener la consistencia visual a través del archivo `tailwind.config.js` y facilitar el diseño responsivo.

*   **SCSS (Herramienta Complementaria):**
    *   **Uso:** Para casos específicos donde las clases de utilidad de Tailwind no son la mejor opción.
    *   **Casos de Uso:**
        *   **Estilos Globales (`styles.scss`):** Definir estilos base para `body`, `::selection`, etc.
        *   **Componentes Complejos:** Crear clases específicas para componentes con múltiples estados (ej: `.btn-special`).
        *   **Animaciones (`@keyframes`):** Definir animaciones personalizadas de forma legible.

## 3. Hosting y Despliegue: Firebase Hosting

La aplicación se alojará en **Firebase Hosting**.

*   **Ventajas Clave:**
    *   **Rendimiento:** Sirve el contenido a través de una CDN global, garantizando tiempos de carga muy bajos.
    *   **Integración con Angular:** El despliegue se puede automatizar fácilmente usando el CLI de Angular y GitHub Actions.
    *   **Seguridad:** Ofrece certificados SSL gratuitos y automáticos.
    *   **Escalabilidad:** Se integra con otros servicios de Firebase (Firestore, Functions) si el proyecto crece en el futuro.