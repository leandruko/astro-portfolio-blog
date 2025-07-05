// src/data/projects.js
export const projects = [
  {
    id: 'analisis-sismos-chile',
    title: 'Análisis de sismos en Chile 2000-2024',
    description: 'En este proyecto se realiza un análisis exhaustivo de los sismos en Chile entre los años 2000 y 2024, con el objetivo de identificar patrones, realizar inferencias y presentar conclusiones basadas en la información disponible. Se exploran y visualizan los datos para entender las características y tendencias.',
    image: '/images/sismo-chile.webp',
    technologies: ['Python', 'Pandas','Jupyter'],
    githubUrl: 'https://github.com/leandruko/sismos-Chile'
  },
  {
    id: 'morosidad-sistema-financiero',
    title: 'Morosidad sistema financiero',
    description: 'En este proyecto se realiza un análisis de datos y aplicar modelos de machine learning para predecir si un usuario será deudor en el sistema financiero. A través del análisis exploratorio de datos y la implementación de algoritmos de clasificación, buscamos encontrar patrones que nos permitan hacer predicciones precisas sobre la morosidad de los clientes.',
    image: '/images/morosidad.jpeg',
    technologies: ['Python', 'Pandas','Seaborn','Mathplotlib','Scikit-learn','Jupyter'],
    githubUrl: 'https://github.com/leandruko/Morosidad-Sistema-Financiero',
  },
  {
    id: 'cancer-pulmon',
    title: 'Cáncer de pulmón',
    description: 'Proyecto realizado con el objetivo de predecir si una persona tiene cáncer al pulmón, basándonos en el dataset lung cáncer de Kaggle, aplicando análisis de datos, limpieza y modelos de machine learning',
    image: '/images/cancer.webp',
    technologies: ['Python', 'Scikit-learn', 'Jupyter'],
    githubUrl: 'https://github.com/leandruko/lung-cancer'
  },
  // Añade más proyectos aquí siguiendo la misma estructura
];