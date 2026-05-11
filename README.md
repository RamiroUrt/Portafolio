
![Logo](https://i.postimg.cc/qqhQRLxh/og-Image.png)


# Portfolio OS Experience

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Este es un portafolio de alta fidelidad diseñado bajo un concepto de **Sistema Operativo / Navegador interactivo**. El proyecto no solo muestra mis trabajos, sino que demuestra habilidades avanzadas en arquitectura de software, gestión de estado y experiencia de usuario (UX).

## 🚀 Filosofía de Desarrollo: AI-First
Este proyecto ha sido desarrollado siguiendo una mentalidad **AI-First**, integrando automatización y flujos de trabajo impulsados por IA para optimizar la lógica y la eficiencia del código.

## 🛠️ Arquitectura del Proyecto
El código está organizado siguiendo el principio de **Separación de Responsabilidades (SoC)** para garantizar que sea escalable y fácil de mantener:

### 📂 Estructura de Carpetas
* **`/views`**: El núcleo del contenido. Cada sección (Education, Experience, Projects, Resume) es un módulo independiente que separa su lógica principal de sus estilos específicos, facilitando la edición y escalabilidad.
* **`/components`**: Implementación de diseño atómico.
    * `layout/`: Estructura principal como `BrowserWindow` y `Header`.
    * `ui/`: Componentes básicos reutilizables (botones, inputs, iconos).
* **`/hooks`**: Lógica de negocio extraída en funciones personalizadas como `useNavigation` y `useTabOrder` para desacoplar la funcionalidad de la interfaz visual.
* **`/context`**: Gestión de estado global mediante Context API (Theme, I18n).
* **`/assets`**: Repositorio central de recursos estáticos (SVGs), constantes y configuración de internacionalización.
* **`/styles`**: Arquitectura CSS modular y organizada para soportar el sistema de diseño oscuro o fonts de manera consistente.
* **`/types`**: Definiciones de TypeScript organizadas y separadas en carpetas para una modularización total y tipado fuerte.

## 🎨 Características Principales
* **Navegación Lineal**: Sistema de pestañas interactivo con soporte para adelante/atrás que respeta el orden dinámico.
* **Drag & Drop**: Reordenamiento dinámico de pestañas mediante `react-dnd`.
* **Barra de Direcciones Funcional**: Navegación interna mediante entrada de URL, seleccionando automáticamente el contenido al hacer foco.
* **Estética Minimalista**: Diseño sofisticado basado en temas oscuros con acentos vibrantes, optimizado para una experiencia de escritorio premium.
