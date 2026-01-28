export const projectsData = [
  {
    id: 1,
    slug: "smart-recruitment-platform",
    title: {
      en: "Smart Recruitment Platform",
      fr: "Plateforme de Recrutement Intelligent"
    },
    shortDesc: {
      en: "AI platform matching candidates using NLP & TensorFlow.",
      fr: "Plateforme IA automatisant le matching avec NLP."
    },
    fullDesc: {
      en: "A comprehensive AI-powered recruitment platform that automates candidate matching using Natural Language Processing and TensorFlow machine learning models. The system analyzes resumes, job descriptions, and candidate profiles to provide intelligent matching scores and recommendations.",
      fr: "Une plateforme de recrutement complete basee sur l'IA qui automatise la correspondance des candidats en utilisant le traitement du langage naturel et les modeles d'apprentissage automatique TensorFlow. Le systeme analyse les CV, les descriptions de poste et les profils des candidats."
    },
    thumbnail: "/projects/project-1/hero.jpg",
    images: [
      { src: "/projects/project-1/hero.jpg", caption: { en: "Dashboard Overview", fr: "Vue d'ensemble du tableau de bord" } },
      { src: "/projects/project-1/screenshot-1.jpg", caption: { en: "Candidate Matching", fr: "Correspondance des candidats" } },
      { src: "/projects/project-1/screenshot-2.jpg", caption: { en: "Analytics Dashboard", fr: "Tableau de bord analytique" } }
    ],
    architecture: {
      diagram: "/projects/project-1/architecture.png",
      description: {
        en: "Microservices architecture with React frontend, Spring Boot backend, and TensorFlow ML service for intelligent matching.",
        fr: "Architecture microservices avec frontend React, backend Spring Boot et service ML TensorFlow pour le matching intelligent."
      }
    },
    tags: ["React.js", "Spring Boot", "TensorFlow"],
    techStack: {
      frontend: ["React.js", "Redux", "Tailwind CSS"],
      backend: ["Spring Boot", "Java 17", "REST API"],
      database: ["PostgreSQL", "Redis"],
      ml: ["TensorFlow", "Python", "spaCy"],
      devops: ["Docker", "GitHub Actions"]
    },
    features: {
      en: [
        "AI-powered resume parsing and analysis",
        "Intelligent candidate-job matching algorithm",
        "Real-time analytics dashboard",
        "Automated interview scheduling"
      ],
      fr: [
        "Analyse de CV basee sur l'IA",
        "Algorithme de correspondance intelligent",
        "Tableau de bord analytique en temps reel",
        "Planification automatisee des entretiens"
      ]
    },
    links: {
      github: "https://github.com/ayoub/recruitment-platform",
      live: null
    },
    status: "completed",
    date: "2024-06"
  },
  {
    id: 2,
    slug: "cosmotracker",
    title: {
      en: "CosmoTracker",
      fr: "CosmoTracker"
    },
    shortDesc: {
      en: "Astronomy Web App with real-time visualization.",
      fr: "App Web d'Astronomie avec visualisation temps reel."
    },
    fullDesc: {
      en: "An interactive astronomy web application that provides real-time visualization of celestial bodies, star maps, and astronomical events. Users can track planets, satellites, and explore the cosmos with detailed information and stunning visualizations.",
      fr: "Une application web d'astronomie interactive qui fournit une visualisation en temps reel des corps celestes, des cartes stellaires et des evenements astronomiques."
    },
    thumbnail: "/projects/project-2/hero.jpg",
    images: [
      { src: "/projects/project-2/hero.jpg", caption: { en: "Star Map Interface", fr: "Interface de carte stellaire" } },
      { src: "/projects/project-2/screenshot-1.jpg", caption: { en: "Planet Tracking", fr: "Suivi des planetes" } }
    ],
    architecture: {
      diagram: "/projects/project-2/architecture.png",
      description: {
        en: "Full-stack application with Spring Boot REST API, React frontend with WebGL visualizations, and PostgreSQL database.",
        fr: "Application full-stack avec API REST Spring Boot, frontend React avec visualisations WebGL et base de donnees PostgreSQL."
      }
    },
    tags: ["Spring Boot", "React.js", "PostgreSQL"],
    techStack: {
      frontend: ["React.js", "Three.js", "WebGL"],
      backend: ["Spring Boot", "Java"],
      database: ["PostgreSQL"],
      apis: ["NASA API", "Astronomy APIs"],
      devops: ["Docker"]
    },
    features: {
      en: [
        "Real-time celestial body tracking",
        "Interactive 3D star maps",
        "Astronomical event notifications",
        "Detailed planet information"
      ],
      fr: [
        "Suivi en temps reel des corps celestes",
        "Cartes stellaires 3D interactives",
        "Notifications d'evenements astronomiques",
        "Informations detaillees sur les planetes"
      ]
    },
    links: {
      github: "https://github.com/ayoub/cosmotracker",
      live: null
    },
    status: "completed",
    date: "2024-04"
  },
  {
    id: 3,
    slug: "urban-transport-system",
    title: {
      en: "Urban Transport System",
      fr: "Gestion Transport Urbain"
    },
    shortDesc: {
      en: "Microservices architecture with Apache Kafka.",
      fr: "Architecture microservices avec Apache Kafka."
    },
    fullDesc: {
      en: "A scalable urban transport management system built with microservices architecture. Uses Apache Kafka for real-time event streaming, enabling efficient route optimization, vehicle tracking, and passenger management across the city.",
      fr: "Un systeme de gestion du transport urbain evolutif construit avec une architecture microservices. Utilise Apache Kafka pour le streaming d'evenements en temps reel."
    },
    thumbnail: "/projects/project-3/hero.jpg",
    images: [
      { src: "/projects/project-3/hero.jpg", caption: { en: "System Dashboard", fr: "Tableau de bord systeme" } },
      { src: "/projects/project-3/screenshot-1.jpg", caption: { en: "Route Management", fr: "Gestion des itineraires" } }
    ],
    architecture: {
      diagram: "/projects/project-3/architecture.png",
      description: {
        en: "Event-driven microservices with Apache Kafka message broker, containerized with Docker and orchestrated with Kubernetes.",
        fr: "Microservices orientes evenements avec broker de messages Apache Kafka, containerises avec Docker et orchestres avec Kubernetes."
      }
    },
    tags: ["Kafka", "Microservices", "Docker"],
    techStack: {
      backend: ["Spring Boot", "Node.js"],
      messaging: ["Apache Kafka", "RabbitMQ"],
      database: ["MongoDB", "Redis"],
      devops: ["Docker", "Kubernetes", "Helm"]
    },
    features: {
      en: [
        "Real-time vehicle tracking",
        "Dynamic route optimization",
        "Event-driven architecture",
        "Scalable microservices design"
      ],
      fr: [
        "Suivi des vehicules en temps reel",
        "Optimisation dynamique des itineraires",
        "Architecture orientee evenements",
        "Conception microservices evolutive"
      ]
    },
    links: {
      github: "https://github.com/ayoub/urban-transport",
      live: null
    },
    status: "completed",
    date: "2024-03"
  },
  {
    id: 4,
    slug: "career-predictor",
    title: {
      en: "Career Predictor",
      fr: "Predicteur de Carriere"
    },
    shortDesc: {
      en: "ML model predicting roles/salaries (85% accuracy).",
      fr: "Modele ML predisant roles/salaires (85% precision)."
    },
    fullDesc: {
      en: "A machine learning application that predicts career paths and salary ranges based on skills, experience, and market trends. Built with Python and Scikit-learn, achieving 85% prediction accuracy through ensemble methods.",
      fr: "Une application de machine learning qui predit les parcours professionnels et les fourchettes de salaires en fonction des competences, de l'experience et des tendances du marche."
    },
    thumbnail: "/projects/project-4/hero.jpg",
    images: [
      { src: "/projects/project-4/hero.jpg", caption: { en: "Prediction Interface", fr: "Interface de prediction" } },
      { src: "/projects/project-4/screenshot-1.jpg", caption: { en: "Analytics View", fr: "Vue analytique" } }
    ],
    architecture: {
      diagram: "/projects/project-4/architecture.png",
      description: {
        en: "ML pipeline with data preprocessing, feature engineering, model training, and Streamlit frontend for interactive predictions.",
        fr: "Pipeline ML avec preprocessing des donnees, feature engineering, entrainement du modele et frontend Streamlit pour les predictions interactives."
      }
    },
    tags: ["Python", "Scikit-learn", "Streamlit"],
    techStack: {
      ml: ["Scikit-learn", "Pandas", "NumPy"],
      frontend: ["Streamlit"],
      backend: ["Python", "Flask"],
      data: ["Matplotlib", "Seaborn"]
    },
    features: {
      en: [
        "Career path prediction",
        "Salary range estimation",
        "Skills gap analysis",
        "Market trend insights"
      ],
      fr: [
        "Prediction de parcours professionnel",
        "Estimation de fourchette salariale",
        "Analyse des lacunes en competences",
        "Apercu des tendances du marche"
      ]
    },
    links: {
      github: "https://github.com/ayoub/career-predictor",
      live: null
    },
    status: "completed",
    date: "2024-02"
  },
  {
    id: 5,
    slug: "internal-research-tools",
    title: {
      en: "Internal Research Tools",
      fr: "Outils de Recherche Internes"
    },
    shortDesc: {
      en: "DTR Internship: Data management tools.",
      fr: "Stage DTR : Gestion de donnees de recherche."
    },
    fullDesc: {
      en: "Internal web tools developed during DTR internship for managing research data. Built with Spring Boot backend and modern frontend, enabling researchers to efficiently organize, search, and analyze their data.",
      fr: "Outils web internes developpes lors du stage DTR pour la gestion des donnees de recherche. Construits avec un backend Spring Boot et un frontend moderne."
    },
    thumbnail: "/projects/project-5/hero.jpg",
    images: [
      { src: "/projects/project-5/hero.jpg", caption: { en: "Data Management Interface", fr: "Interface de gestion des donnees" } }
    ],
    architecture: {
      diagram: "/projects/project-5/architecture.png",
      description: {
        en: "Monolithic Spring Boot application with PostgreSQL database and REST API for data management operations.",
        fr: "Application monolithique Spring Boot avec base de donnees PostgreSQL et API REST pour les operations de gestion des donnees."
      }
    },
    tags: ["Spring Boot", "PostgreSQL"],
    techStack: {
      backend: ["Spring Boot", "Java"],
      database: ["PostgreSQL"],
      frontend: ["Thymeleaf", "Bootstrap"]
    },
    features: {
      en: [
        "Research data organization",
        "Advanced search capabilities",
        "Data export functionality",
        "User access management"
      ],
      fr: [
        "Organisation des donnees de recherche",
        "Capacites de recherche avancees",
        "Fonctionnalite d'export de donnees",
        "Gestion des acces utilisateurs"
      ]
    },
    links: {
      github: null,
      live: null
    },
    status: "completed",
    date: "2025-06"
  },
  {
    id: 6,
    slug: "hpc-log-analysis",
    title: {
      en: "HPC Log Analysis",
      fr: "Analyse Logs HPC"
    },
    shortDesc: {
      en: "CNRST Internship: Analyzing 10k+ logs.",
      fr: "Stage CNRST : Analyse de 10k+ logs."
    },
    fullDesc: {
      en: "High-Performance Computing log analysis project developed during CNRST internship. Analyzed over 10,000 log entries using Python and R to identify patterns, optimize resource usage, and improve system performance.",
      fr: "Projet d'analyse de logs de calcul haute performance developpe lors du stage CNRST. Analyse de plus de 10 000 entrees de logs avec Python et R."
    },
    thumbnail: "/projects/project-6/hero.jpg",
    images: [
      { src: "/projects/project-6/hero.jpg", caption: { en: "Log Analysis Dashboard", fr: "Tableau de bord d'analyse des logs" } }
    ],
    architecture: {
      diagram: "/projects/project-6/architecture.png",
      description: {
        en: "Data pipeline for log ingestion, processing with Python/R scripts, and visualization with custom dashboards.",
        fr: "Pipeline de donnees pour l'ingestion des logs, traitement avec scripts Python/R et visualisation avec tableaux de bord personnalises."
      }
    },
    tags: ["Python", "R", "HPC"],
    techStack: {
      analysis: ["Python", "R", "Pandas"],
      visualization: ["Matplotlib", "ggplot2"],
      data: ["Log parsing", "Data cleaning"]
    },
    features: {
      en: [
        "Large-scale log processing",
        "Pattern recognition",
        "Resource usage optimization",
        "Performance metrics visualization"
      ],
      fr: [
        "Traitement de logs a grande echelle",
        "Reconnaissance de patterns",
        "Optimisation de l'utilisation des ressources",
        "Visualisation des metriques de performance"
      ]
    },
    links: {
      github: null,
      live: null
    },
    status: "completed",
    date: "2024-07"
  }
];
