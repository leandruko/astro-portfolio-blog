// src/data/projects.js

export const projects = [
    {
    id: "modo-piola",
    title: "Modo Piola Hub",
    category: "profesional", 
    description: "Landing page con el fin de mostrar redes sociales.",
    image: "/images/modopiola.png",
    technologies: ["Astro", "Tailwind", "CSS", "JS"],
    demoUrl: "https://www.modopiola.cl/",
  },
  {
    id: "Davton",
    title: "Davton DJ",
    category: "profesional", 
    description: "Landing page desarrollada para DJ Davton.",
    image: "/images/davton.png",
    technologies: ["Astro", "Tailwind", "CSS","JS"],
    demoUrl: "https://www.davton.cl/",
  },
  {
    id: "cimasur",
    title: "Sistema de trazabilidad Cimasur",
    category: "profesional", 
    description: "Sistema creado con el fin de registrar informacion de logista en la empresa.",
    image: "/images/cimasur.png",
    technologies: ["DJANGO", "JS", "PYTHON", "POSTGRES"],
  },
  {
    id: "analisis-sismos-chile",
    title: "Análisis de sismos en Chile 2000-2024",
    category: "personal", // Proyecto de análisis de datos/investigación
    description: "Proyecto se realiza un análisis de los sismos en Chile entre los años 2000 y 2024.",
    image: "/images/sismo-chile.webp",
    technologies: [
      "Python",
      "Pandas",
      "Seaborn",
      "Mathplotlib",
      "Scikit-learn",
    ],
    githubUrl: "https://github.com/leandruko/sismos-Chile",
  },
  {
    id: "morosidad-financiero",
    title: "Morosidad sistema financiero",
    category: "personal", // Modelado predictivo (Data Science)
    description: "Análisis de datos para predecir si alguien será deudor.",
    image: "/images/morosidad.jpeg",
    technologies: [
      "Python",
      "Pandas",
      "Seaborn",
      "Mathplotlib",
      "Scikit-learn",
      "Jupyter",
    ],
    githubUrl: "https://github.com/leandruko/Morosidad-Sistema-Financiero",
  },
  {
    id: "cancer-pulmon",
    title: "Cáncer de pulmón",
    category: "personal", // Proyecto de clasificación/estudio
    description: "Desarrollado con el objetivo de predecir si una persona tiene cáncer al pulmón.",
    image: "/images/cancer.webp",
    technologies: [
      "Python",
      "Pandas",
      "Seaborn",
      "Mathplotlib",
      "Scikit-learn",
    ],
    githubUrl: "https://github.com/leandruko/lung-cancer",
  },
];