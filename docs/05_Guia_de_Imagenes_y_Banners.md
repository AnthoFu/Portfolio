# Guía de Estándares de Imágenes y Banners - AnthoFu Portfolio
*Última actualización: 24/09/2026*


Esta guía establece las dimensiones, proporciones y formatos estándar para todos los recursos visuales del portafolio, garantizando una visualización nítida y consistente tanto en dispositivos móviles como en pantallas de escritorio.

---

## 📐 1. Proporciones y Tamaños Estándar

| Tipo de Recurso | Aspect Ratio | Resolución Recomendada | Resolución Mínima | Formatos Admitidos |
| :--- | :---: | :---: | :---: | :---: |
| **Banners de Proyectos (Cards y Detalle)** | **16:9** | `1920 x 1080 px` | `1280 x 720 px` | `.webp`, `.png`, `.jpg` |
| **Capturas de Apps Móviles** | **9:16** (o 9:18) | `1080 x 1920 px` | `720 x 1280 px` | `.webp`, `.png`, `.jpg` |
| **Hero Banner (Desktop)** | **16:9** | `1920 x 1080 px` | `1440 x 810 px` | `.png`, `.webp`, `.jpg` |
| **Hero Banner (Mobile)** | **3:4** o **9:16** | `750 x 1000 px` | `600 x 800 px` | `.png`, `.webp`, `.jpg` |
| **Fotos de Perfil** | **1:1** (Cuadrado) | `800 x 800 px` | `400 x 400 px` | `.webp`, `.png`, `.jpeg` |
| **Logotipos de Empresas / Tecnologías** | **1:1** o libre | `512 x 512 px` | `200 x 200 px` | `.svg`, `.png` |
| **Certificados (Diplomas)** | **16:11** / A4 | `1754 x 1240 px` | `1200 x 850 px` | `.png`, `.webp` (desde PDF a 150 DPI) |

---

## 🎨 2. Reglas de Diseño para Banners de Proyectos

1. **Aspect Ratio Universal 16:9:**
   - Todos los contenedores de tarjetas de proyectos (`.card-image`) y el visor del modal de detalles (`.main-image`) utilizan `aspect-ratio: 16 / 9; object-fit: cover; object-position: center top;`.
   - Mantener los elementos focales clave (títulos del proyecto, interfaces o elementos centrales) dentro del **área segura central (80% del lienzo)** para evitar cortes al adaptarse a diferentes anchos de pantalla.

2. **Optimización de Archivos:**
   - Peso máximo sugerido por imagen de proyecto: **< 350 KB**.
   - Se recomienda el formato **WebP** o **PNG comprimido** (vía TinyPNG u `oxipng`).

---

## 📂 3. Estructura de Carpetas

```
public/
├── images/
│   ├── banners/              # Banners hero para PC y Móvil
│   ├── anthofu/              # Fotos de perfil y logos personales
│   ├── certificados/         # Imágenes PNG de diplomas (Platzi, Udemy, etc.)
│   │   ├── platzi/
│   │   └── udemy/
│   ├── logos/                # Logos de empresas / tecnologías
│   └── [nombre-proyecto]/    # Carpeta con capturas 16:9 de cada proyecto
│       ├── [proyecto]_banner.png
│       ├── [proyecto]_detail_1.png
│       └── [proyecto]_detail_2.png
└── docs/
    └── certificados/         # Archivos PDF originales de los certificados
```
