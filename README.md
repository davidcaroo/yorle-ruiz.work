# 🚀 Portfolio Profesional - Yorleidys Ruiz

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23.22-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

> **Portfolio profesional moderno y responsivo** de Yorleidys Ruiz, Ingeniera Informática especializada en desarrollo web full-stack. Construido con React, TypeScript, Vite y tecnologías de vanguardia.

---

## 📋 Tabla de Contenidos

- [🎯 Sobre el Proyecto](#-sobre-el-proyecto)
- [✨ Características](#-características)
- [🛠️ Stack Tecnológico](#️-stack-tecnológico)
- [🏗️ Arquitectura](#️-arquitectura)
- [🚀 Instalación y Configuración](#-instalación-y-configuración)
- [📱 Secciones del Portfolio](#-secciones-del-portfolio)
- [🎨 Sistema de Diseño](#-sistema-de-diseño)
- [📊 Proyectos Destacados](#-proyectos-destacados)
- [🔧 Scripts Disponibles](#-scripts-disponibles)
- [📂 Estructura del Proyecto](#-estructura-del-proyecto)
- [🌐 Despliegue](#-despliegue)
- [👨‍💻 Sobre la Desarrolladora](#-sobre-la-desarrolladora)
- [📄 Licencia](#-licencia)

---

## 🎯 Sobre el Proyecto

Este portfolio representa la **identidad digital profesional** de Yorleidys Ruiz, una Ingeniera Informática con más de 1 año de experiencia en desarrollo web. El sitio web sirve como **showcase** de sus habilidades técnicas, proyectos realizados y servicios ofrecidos.

### 🎪 **Demo en Vivo**
🔗 [Ver Portfolio](https://yorleidys-ruiz-portfolio.vercel.app) *(URL de ejemplo)*

### 🎬 **Características Principales**
- **Diseño moderno** con animaciones fluidas
- **Tema oscuro/claro** con persistencia
- **Totalmente responsivo** para todos los dispositivos
- **Animaciones avanzadas** con Framer Motion
- **Optimizado para SEO** y rendimiento
- **Arquitectura escalable** y mantenible

---

## ✨ Características

### 🌟 **Funcionalidades Destacadas**

- **🎨 Sistema de Temas Avanzado**
  - Modo oscuro/claro con transiciones suaves
  - Persistencia en localStorage
  - Paleta de colores personalizada

- **🎭 Animaciones Profesionales**
  - Animaciones de entrada y scroll reveal
  - Micro-interacciones en componentes UI
  - Efectos de blob animados en el hero
  - Transiciones fluidas entre secciones

- **📱 Diseño Responsivo**
  - Mobile-first approach
  - Optimizado para tablets y desktop
  - Navegación móvil intuitiva

- **⚡ Optimización de Rendimiento**
  - Lazy loading de imágenes
  - Intersection Observer para animaciones
  - Bundle optimizado con Vite
  - Carga progresiva de contenido

### 🔧 **Funcionalidades Técnicas**

- **Navegación inteligente** con scroll suave
- **Filtros dinámicos** para proyectos
- **Modal de detalles** para proyectos
- **Formulario de contacto** funcional
- **Links sociales** integrados
- **Descarga de CV** directa

---

## 🛠️ Stack Tecnológico

### **Frontend Core**
```json
{
  "react": "^18.3.1",
  "typescript": "^5.5.3",
  "vite": "^5.4.2"
}
```

### **Styling & UI**
```json
{
  "tailwindcss": "^3.4.1",
  "framer-motion": "^12.23.22",
  "lucide-react": "^0.344.0",
  "postcss": "^8.4.35",
  "autoprefixer": "^10.4.18"
}
```

### **Backend & Services**
```json
{
  "@supabase/supabase-js": "^2.57.4"
}
```

### **Development Tools**
```json
{
  "eslint": "^9.9.1",
  "typescript-eslint": "^8.3.0",
  "@vitejs/plugin-react": "^4.3.1"
}
```

---

## 🏗️ Arquitectura

### **Patrones de Diseño Implementados**

- **🏛️ Component Architecture**: Componentes modulares y reutilizables
- **🎭 Context Pattern**: Manejo de estado global para temas
- **🪝 Custom Hooks**: Lógica reutilizable encapsulada
- **📊 Data Layer**: Separación clara entre datos y presentación
- **🎨 Design System**: Componentes UI consistentes

### **Principios Aplicados**

- **Separation of Concerns**: Clara división de responsabilidades
- **DRY (Don't Repeat Yourself)**: Reutilización de componentes
- **SOLID Principles**: Especialmente Single Responsibility
- **Performance First**: Optimizaciones desde el diseño

---

## 🚀 Instalación y Configuración

### **Prerrequisitos**
```bash
Node.js >= 18.0.0
npm >= 9.0.0
```

### **1. Clonar el Repositorio**
```bash
git clone https://github.com/yorleidys/portfolio.git
cd portfolio
```

### **2. Instalar Dependencias**
```bash
npm install
```

### **3. Configurar Variables de Entorno** *(opcional)*
```bash
# Crear archivo .env.local
cp .env.example .env.local
```

### **4. Ejecutar en Desarrollo**
```bash
npm run dev
```

### **5. Abrir en el Navegador**
```
http://localhost:5173
```

---

## 📱 Secciones del Portfolio

### 🏠 **Hero Section**
- **Presentación personal** con animaciones de blob
- **Call-to-action** buttons con micro-interacciones
- **Links sociales** prominentes
- **Animaciones de entrada** escalonadas

### 👨‍💻 **Sobre Mí**
- **Biografía profesional** de Yorleidys Ruiz
- **Experiencia** y especialización
- **Foto profesional** con efectos hover
- **Información de contacto** destacada

### 🎯 **Habilidades Técnicas**
```javascript
// Categorías de skills
const skillCategories = [
  "Lenguajes", 
  "Frameworks & CMS", 
  "Bases de Datos", 
  "Herramientas"
];

// Niveles de proficiencia
const skillLevels = {
  "PHP": 90,
  "JavaScript": 85,
  "Laravel": 85,
  "WordPress": 90,
  "React": 75
};
```

### 💼 **Proyectos**
- **8 proyectos destacados** con filtros por categoría
- **Tecnologías utilizadas** para cada proyecto
- **Enlaces en vivo** y repositorios
- **Modal de detalles** con información completa

### 🛠️ **Servicios**
1. **Desarrollo Web** - Sitios corporativos y aplicaciones
2. **Tiendas Online** - E-commerce completo con WooCommerce
3. **WordPress Development** - Temas y plugins personalizados

### 📞 **Contacto**
- **Formulario funcional** con validación
- **Información de contacto** completa
- **Integración con redes sociales**
- **Mapa de ubicación** (Cartagena, Colombia)

---

## 🎨 Sistema de Diseño

### **Paleta de Colores**

```css
/* Primary Colors - Violeta/Púrpura */
--primary-50: #f5f3ff;
--primary-500: #8b5cf6;
--primary-700: #6d28d9;
--primary-900: #4c1d95;

/* Accent Colors - Cyan */
--accent-400: #22d3ee;
--accent-500: #06b6d4;
--accent-600: #0891b2;

/* Dark Mode */
--dark-700: #374151;
--dark-800: #1f2937;
--dark-900: #111827;
```

### **Tipografía**
- **Font Family**: System fonts optimizados
- **Weights**: 400 (Regular), 600 (Semibold), 700 (Bold)
- **Scales**: Escalas tipográficas responsivas

### **Animaciones Personalizadas**

```css
/* Blob Animation */
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

/* Float Animation */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

---

## 📊 Proyectos Destacados

### 🌟 **Proyectos Principales**

1. **🏢 Propuesta Docutech** (2024)
   - **Categoría**: Desarrollo Web
   - **Tech Stack**: WordPress, Laravel, PHP, MySQL
   - **Descripción**: Plataforma corporativa optimizada para rendimiento y SEO

2. **🛒 Ektla** (2024)
   - **Categoría**: E-commerce
   - **Tech Stack**: WordPress, WooCommerce, PHP, JavaScript
   - **Descripción**: Tienda online con pasarelas de pago seguras

3. **🚛 Transportes Lakes** (2024)
   - **Categoría**: Sitio Corporativo
   - **Tech Stack**: WordPress, PHP, JavaScript
   - **Descripción**: Web corporativa con sistema de cotizaciones

### 📈 **Estadísticas del Portfolio**
- **8 proyectos** completados
- **4 categorías** diferentes
- **6+ tecnologías** dominadas
- **100% proyectos** responsivos

---

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo con HMR

# Construcción
npm run build        # Build optimizado para producción
npm run preview      # Preview del build de producción

# Calidad de Código
npm run lint         # ESLint para análisis de código
npm run typecheck    # Verificación de tipos TypeScript

# Utilidades
npm run clean        # Limpiar archivos de build
npm run analyze      # Análizar bundle size
```

---

## 📂 Estructura del Proyecto

```
portfolio-yorleidys/
├── 📁 public/                    # Archivos estáticos
│   ├── vite.svg                 # Favicon
│   └── cv-yorleidys-ruiz.pdf    # CV descargable
│
├── 📁 src/                      # Código fuente
│   ├── 📁 components/           # Componentes React
│   │   ├── 📁 common/          # Componentes reutilizables
│   │   │   ├── LoadingSpinner.jsx
│   │   │   └── SocialLinks.jsx
│   │   ├── 📁 layout/          # Componentes de layout
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── 📁 sections/        # Secciones del portfolio
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Services.jsx
│   │   │   └── Contact.jsx
│   │   └── 📁 ui/              # Componentes UI base
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── ProjectCard.jsx
│   │       ├── SectionTitle.jsx
│   │       └── ServiceCard.jsx
│   │
│   ├── 📁 context/             # React Context
│   │   └── ThemeContext.jsx    # Manejo de temas
│   │
│   ├── 📁 data/                # Datos del portfolio
│   │   ├── profile.json        # Información personal
│   │   ├── projects.json       # Datos de proyectos
│   │   ├── skills.json         # Habilidades técnicas
│   │   └── services.json       # Servicios ofrecidos
│   │
│   ├── 📁 hooks/               # Custom hooks
│   │   └── useScrollAnimation.js
│   │
│   ├── 📁 utils/               # Utilidades
│   │   └── constants.js        # Constantes globales
│   │
│   ├── App.jsx                 # Componente principal
│   ├── main.tsx               # Punto de entrada
│   ├── index.css              # Estilos globales
│   └── vite-env.d.ts          # Tipos de Vite
│
├── 📄 eslint.config.js         # Configuración ESLint
├── 📄 postcss.config.js        # Configuración PostCSS
├── 📄 tailwind.config.js       # Configuración Tailwind
├── 📄 tsconfig.json           # Configuración TypeScript
├── 📄 vite.config.ts          # Configuración Vite
├── 📄 package.json            # Dependencias y scripts
└── 📄 README.md               # Este archivo
```

---

## 🌐 Despliegue

### **Opciones de Despliegue Recomendadas**

#### 🚀 **Vercel** (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel --prod
```

#### 🌊 **Netlify**
```bash
# Build para producción
npm run build

# Subir carpeta dist/ a Netlify
```

#### 🐙 **GitHub Pages**
```bash
# Configurar en vite.config.ts
base: '/portfolio/'

# Build y deploy
npm run build
npm run deploy
```

### **Variables de Entorno Producción**
```env
VITE_SITE_URL=https://tu-dominio.com
VITE_SUPABASE_URL=tu_supabase_url
VITE_SUPABASE_ANON_KEY=tu_supabase_key
```

---

## 👨‍💻 Sobre la Desarrolladora

### **Yorleidys Ruiz**
🎓 **Ingeniera Informática** | 🚀 **Desarrolladora Web Full-Stack**

#### 📍 **Ubicación**
Cartagena de Indias, Colombia

#### 💼 **Especialización**
- **Backend**: PHP, Laravel, MySQL
- **Frontend**: React, JavaScript, HTML5, CSS3
- **CMS**: WordPress, WooCommerce
- **Herramientas**: Git, Firebase, Bootstrap

#### 🌟 **Experiencia**
- **1+ año** en desarrollo web profesional
- **8 proyectos** completados exitosamente
- **Especialización** en WordPress y Laravel
- **Enfoque** en soluciones innovadoras y optimización

#### 📞 **Contacto Profesional**
- **📧 Email**: yorle170203@gmail.com
- **📱 Teléfono**: +57 302 259 4141
- **💼 LinkedIn**: [yorleidys-ruiz](https://www.linkedin.com/in/yorleidys-ruiz-71a7a4239/)
- **💻 GitHub**: [Próximamente]

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes, por favor abre un issue primero para discutir qué te gustaría cambiar.

### **Proceso de Contribución**
1. Fork del repositorio
2. Crear feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit de cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 🙏 Agradecimientos

- **React Team** por el framework excepcional
- **Vercel** por Vite y las herramientas de desarrollo
- **Tailwind CSS** por el sistema de utilidades
- **Framer** por Motion library
- **Unsplash** por las imágenes placeholder

---

<div align="center">

### ⭐ Si te gusta este proyecto, ¡dale una estrella!

**Desarrollado con ❤️ por [Yorleidys Ruiz](https://github.com/yorleidys)**

`Ingeniera Informática | Desarrolladora Web Full-Stack`

</div>

---

> **Nota**: Este README está en constante actualización. Para la versión más reciente, visita el [repositorio oficial](https://github.com/yorleidys/portfolio).