// src/data/projects.js
export const projects = [
  {
    id: 'analisis-ventas-retail',
    title: 'Análisis de Ventas para Retail',
    description: 'Construcción de un dashboard interactivo para analizar tendencias de ventas, rendimiento de productos y comportamiento del cliente en una cadena de tiendas retail.',
    image: '/images/projects/ventas-retail-thumb.webp', // Asegúrate de tener una imagen aquí
    technologies: ['Python', 'Pandas', 'SQL', 'Tableau'],
    githubUrl: 'https://github.com/tu-usuario/analisis-ventas-retail',
    demoUrl: 'https://tu-demo.com/dashboard-ventas-retail', // Opcional
  },
  {
    id: 'pipeline-etl-ecommerce',
    title: 'Pipeline ETL para E-commerce',
    description: 'Diseño e implementación de un pipeline ETL robusto para ingestar y transformar datos de ventas, inventario y usuarios de una plataforma de e-commerce a un data warehouse.',
    image: '/images/projects/etl-ecommerce-thumb.webp',
    technologies: ['Python', 'Apache Airflow', 'PostgreSQL', 'AWS S3', 'Glue'],
    githubUrl: 'https://github.com/tu-usuario/pipeline-etl-ecommerce',
    // demoUrl: '', // No aplica si es solo backend
  },
  {
    id: 'modelado-riesgo-credito',
    title: 'Modelado de Riesgo de Crédito',
    description: 'Desarrollo de un modelo de machine learning para predecir el riesgo de impago en solicitudes de crédito, mejorando la precisión de las decisiones financieras.',
    image: '/images/projects/riesgo-credito-thumb.webp',
    technologies: ['Python', 'Scikit-learn', 'SQL', 'Jupyter', 'Streamlit'],
    githubUrl: 'https://github.com/tu-usuario/modelado-riesgo-credito',
    demoUrl: 'https://tu-demo.com/riesgo-credito-app', // Opcional
  },
  // Añade más proyectos aquí siguiendo la misma estructura
];