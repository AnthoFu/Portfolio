# Guía de Contenido para Proyectos 🚀

Esta guía define los estándares para mantener la consistencia visual y técnica en el portafolio de AnthoFu.

## 📝 Propiedades de Texto

### 1. Título (`title`)
*   **Límite recomendado:** 3 a 6 palabras.
*   **Objetivo:** Ser directo y memorable. Evita nombres de archivos o términos técnicos excesivos.
*   **Ejemplo:** "Antho's Shop - E-commerce Rereactivo"

### 2. Descripción Corta (`shortDescription`)
*   **Ubicación:** Home Cards y Projects Gallery.
*   **Límite recomendado:** 20 - 30 palabras (aprox. 150-200 caracteres).
*   **Objetivo:** Explicar el "QUÉ" del proyecto de forma rápida. Debe enganchar al usuario para que haga clic en "Saber más".
*   **Consejo:** Usa verbos de acción (Desarrollé, Implementé, Optimicé).

### 3. Descripción Larga (`fullDescription`)
*   **Ubicación:** Modal de Detalles.
*   **Límite recomendado:** 100 - 250 palabras.
*   **Estructura sugerida:**
    1.  **Contexto (1 párrafo):** ¿Por qué existe este proyecto?
    2.  **Retos Técnicos (1 párrafo):** ¿Qué dificultades encontraste y cómo las resolviste?
    3.  **Resultados (1 párrafo):** ¿Qué tecnologías brillaron aquí? (ej. Manejo de estado con RxJS).

---

## 🖼️ Imágenes (`images`)

*   **Cantidad ideal:** Exactamente 3 fotos por proyecto.
*   **Orden sugerido:**
    1.  **Portada:** Una imagen limpia y atractiva (PC o Tablet).
    2.  **Funcionalidad:** Un screenshot de la característica más compleja.
    3.  **Mobile/Responsive:** Una captura del diseño adaptado a móviles.
*   **Formato:** WebP o PNG optimizado para carga rápida.

---

## 🛠️ Tecnologías (`technologies`)

*   **Límite recomendado:** 3 a 5 tecnologías clave.
*   **Criterio:** No listes todo (evita poner HTML/CSS si usas Angular). Pon las que definen el stack principal del proyecto.
*   **Ejemplo:** `['Angular', 'NestJS', 'PostgreSQL', 'TailwindCSS']`

---

## 💡 Ejemplo de Estructura JSON

```typescript
{
  slug: 'nombre-del-proyecto',
  title: 'Título Impactante',
  shortDescription: 'Breve resumen de 25 palabras que explica el valor principal del software...',
  fullDescription: 'Descripción detallada de 150 palabras que profundiza en la arquitectura, los retos de integración con la base de datos y cómo se optimizó el rendimiento...',
  technologies: ['Tecnología 1', 'Tecnología 2', 'Tecnología 3'],
  images: [
    'images/proyecto-principal.png',
    'images/proyecto-detalle.png',
    'images/proyecto-mobile.png'
  ],
  selectedImageIndex: 0
}
```
