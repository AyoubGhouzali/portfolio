export const projectsData = [
  {
    id: 1,
    slug: "cosmotracker",
    title: {
      en: "CosmoTracker",
      fr: "CosmoTracker"
    },
    shortDesc: {
      en: "Full-stack astronomy app with NASA APOD & interactive star maps.",
      fr: "App astronomie full-stack avec NASA APOD et cartes stellaires."
    },
    fullDesc: {
      en: "A production-grade, full-stack astronomy application for enthusiasts to explore the cosmos. Features real-time celestial event tracking, daily NASA imagery (APOD), interactive star maps, and secure user authentication with JWT. Built with Java Spring Boot 3 backend and React/TypeScript frontend, complete with Docker containerization and Prometheus/Grafana monitoring.",
      fr: "Une application d'astronomie full-stack de niveau production pour explorer le cosmos. Inclut le suivi des evenements celestes en temps reel, les images NASA quotidiennes (APOD), des cartes stellaires interactives et une authentification securisee JWT. Construite avec Spring Boot 3 et React/TypeScript, avec conteneurisation Docker et monitoring Prometheus/Grafana."
    },
    thumbnail: "/projects/cosmotracker/hero.jpg",
    images: [
      { src: "/projects/cosmotracker/hero.jpg", caption: { en: "Interactive Star Map", fr: "Carte stellaire interactive" } },
      { src: "/projects/cosmotracker/screenshot-1.jpg", caption: { en: "NASA APOD Integration", fr: "Integration NASA APOD" } },
      { src: "/projects/cosmotracker/screenshot-2.jpg", caption: { en: "Celestial Events Calendar", fr: "Calendrier des evenements celestes" } }
    ],
    architecture: {
      diagram: "/projects/cosmotracker/architecture.png",
      description: {
        en: "Layered RESTful architecture with Spring Boot 3 backend (Controller, Service, Repository), React/TypeScript frontend with Vite, PostgreSQL database, and full DevOps pipeline including Docker multi-stage builds, Prometheus metrics, and Grafana dashboards.",
        fr: "Architecture RESTful en couches avec backend Spring Boot 3, frontend React/TypeScript avec Vite, base PostgreSQL, et pipeline DevOps complet incluant Docker multi-stage, metriques Prometheus et tableaux de bord Grafana."
      }
    },
    tags: ["Spring Boot 3", "React", "TypeScript", "Docker"],
    techStack: {
      frontend: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "React Router v6", "Lucide React"],
      backend: ["Spring Boot 3.3.4", "Java 17", "Spring Security", "JWT Auth", "JUnit 5", "Mockito"],
      database: ["PostgreSQL", "H2 (Testing)"],
      apis: ["NASA Open APIs (APOD)"],
      devops: ["Docker", "Docker Compose", "Prometheus", "Grafana", "Nginx", "GitHub Actions"]
    },
    features: {
      en: [
        "NASA APOD daily astronomy pictures with explanations",
        "Interactive star map visualization",
        "Celestial event tracking calendar",
        "Secure JWT authentication system",
        "User favorites management",
        "Real-time monitoring with Prometheus/Grafana",
        "Fully responsive design"
      ],
      fr: [
        "Images astronomiques NASA APOD quotidiennes",
        "Visualisation interactive de la carte stellaire",
        "Calendrier de suivi des evenements celestes",
        "Systeme d'authentification JWT securise",
        "Gestion des favoris utilisateur",
        "Monitoring temps reel Prometheus/Grafana",
        "Design entierement responsive"
      ]
    },
    links: {
      github: "https://github.com/AyoubGhouzali/CosmoTracker",
      live: null
    },
    status: "completed",
    date: "2024-04"
  },
  {
    id: 2,
    slug: "support-ai",
    title: {
      en: "Support AI",
      fr: "Support IA"
    },
    shortDesc: {
      en: "Enterprise AI SaaS for automated customer support with RAG.",
      fr: "SaaS IA entreprise pour support client automatise avec RAG."
    },
    fullDesc: {
      en: "A production-ready enterprise AI SaaS platform that automates customer support using Retrieval-Augmented Generation (RAG). Features a Django REST Framework backend, FastAPI AI microservice with LangChain/Pinecone RAG pipeline, and React/Vite frontend. Includes custom knowledge base management, hybrid AI responses, conversation analytics, and seamless human escalation.",
      fr: "Une plateforme SaaS IA entreprise prete pour la production qui automatise le support client via la Generation Augmentee par Recuperation (RAG). Comprend un backend Django REST Framework, un microservice IA FastAPI avec pipeline RAG LangChain/Pinecone, et un frontend React/Vite. Inclut la gestion de base de connaissances personnalisee, les reponses IA hybrides et l'escalade humaine."
    },
    thumbnail: "/projects/support-ai/hero.jpg",
    images: [
      { src: "/projects/support-ai/hero.jpg", caption: { en: "Chat Interface", fr: "Interface de chat" } },
      { src: "/projects/support-ai/screenshot-1.jpg", caption: { en: "Knowledge Base Management", fr: "Gestion de la base de connaissances" } },
      { src: "/projects/support-ai/screenshot-2.jpg", caption: { en: "Analytics Dashboard", fr: "Tableau de bord analytique" } }
    ],
    architecture: {
      diagram: "/projects/support-ai/architecture.png",
      description: {
        en: "Microservices architecture with Django REST Framework backend handling authentication and business logic, FastAPI AI microservice for RAG-powered responses using LangChain and Pinecone vector database, React/Vite frontend with real-time chat, PostgreSQL for data persistence, and Redis for caching and session management.",
        fr: "Architecture microservices avec backend Django REST Framework pour l'authentification et la logique metier, microservice IA FastAPI pour les reponses RAG via LangChain et base vectorielle Pinecone, frontend React/Vite avec chat temps reel, PostgreSQL pour la persistance et Redis pour le cache."
      }
    },
    tags: ["Django", "FastAPI", "LangChain", "React"],
    techStack: {
      frontend: ["React 18", "Vite", "Tailwind CSS", "React Router v6"],
      backend: ["Django REST Framework", "FastAPI", "Python 3.11", "JWT Auth"],
      database: ["PostgreSQL", "Redis", "Pinecone Vector DB"],
      ai: ["LangChain", "OpenAI API", "RAG Pipeline", "Embeddings"],
      devops: ["Docker", "Docker Compose", "Nginx"]
    },
    features: {
      en: [
        "Custom knowledge base with document upload",
        "RAG-powered intelligent responses",
        "Real-time chat with WebSocket support",
        "Conversation analytics and insights",
        "Human agent escalation workflow",
        "Multi-tenant SaaS architecture",
        "JWT authentication and role-based access"
      ],
      fr: [
        "Base de connaissances personnalisee avec upload de documents",
        "Reponses intelligentes alimentees par RAG",
        "Chat temps reel avec support WebSocket",
        "Analytiques et insights des conversations",
        "Workflow d'escalade vers agents humains",
        "Architecture SaaS multi-tenant",
        "Authentification JWT et acces base sur les roles"
      ]
    },
    links: {
      github: "https://github.com/AyoubGhouzali/support_ai",
      live: null
    },
    status: "completed",
    date: "2024-05"
  },
  {
    id: 3,
    slug: "cv-analyzer",
    title: {
      en: "CV Analyzer",
      fr: "Analyseur de CV"
    },
    shortDesc: {
      en: "AI-powered career assistant with ML job/salary predictions.",
      fr: "Assistant carriere IA avec predictions ML emploi/salaire."
    },
    fullDesc: {
      en: "A sophisticated AI-powered career assistant that helps job seekers optimize their applications and understand their market value. Combines advanced PDF parsing, Machine Learning for job classification and salary prediction using XGBoost and RandomForest, with a Streamlit interface. Analyzes uploaded resumes, extracts key skills/experience, recommends suitable roles, and estimates salary ranges.",
      fr: "Un assistant carriere sophistique base sur l'IA qui aide les chercheurs d'emploi a optimiser leurs candidatures et comprendre leur valeur sur le marche. Combine l'analyse PDF avancee, le Machine Learning pour la classification d'emplois et la prediction de salaires avec XGBoost et RandomForest, avec une interface Streamlit."
    },
    thumbnail: "/projects/cv-analyzer/hero.jpg",
    images: [
      { src: "/projects/cv-analyzer/hero.jpg", caption: { en: "Resume Upload Interface", fr: "Interface d'upload de CV" } },
      { src: "/projects/cv-analyzer/architecture.png", caption: { en: "System Architecture", fr: "Architecture du systeme" } }
    ],
    architecture: {
      diagram: "/projects/cv-analyzer/architecture.png",
      description: {
        en: "Microservices architecture with FastAPI backend serving ML inference APIs, Streamlit frontend for user interaction, custom PDF parsing module, TF-IDF vectorization for NLP, and Docker Compose for containerized deployment.",
        fr: "Architecture microservices avec backend FastAPI servant les APIs d'inference ML, frontend Streamlit pour l'interaction utilisateur, module d'analyse PDF personnalise, vectorisation TF-IDF pour le NLP, et Docker Compose pour le deploiement containerise."
      }
    },
    tags: ["FastAPI", "XGBoost", "Streamlit", "Docker"],
    techStack: {
      frontend: ["Streamlit", "Plotly"],
      backend: ["FastAPI", "Python 3.11", "Uvicorn"],
      ml: ["XGBoost", "Scikit-learn", "RandomForest", "Ridge Regression", "TF-IDF"],
      data: ["Pandas", "NumPy", "pdfminer", "pypdf"],
      devops: ["Docker", "Docker Compose"]
    },
    features: {
      en: [
        "Automated CV parsing from PDF resumes",
        "Smart job role recommendations",
        "Salary range prediction with XGBoost",
        "Skills extraction and analysis",
        "Interactive dashboard with real-time results",
        "RESTful API for ML inference",
        "Containerized deployment with Docker"
      ],
      fr: [
        "Analyse automatique de CV depuis PDF",
        "Recommandations intelligentes de postes",
        "Prediction de fourchette salariale avec XGBoost",
        "Extraction et analyse des competences",
        "Tableau de bord interactif en temps reel",
        "API RESTful pour l'inference ML",
        "Deploiement containerise avec Docker"
      ]
    },
    links: {
      github: "https://github.com/AyoubGhouzali/cv-analyzer",
      live: null
    },
    status: "completed",
    date: "2024-02"
  },
  {
    id: 4,
    slug: "migrant-help",
    title: {
      en: "Migrant-e-s Help",
      fr: "Migrant-e-s Help"
    },
    shortDesc: {
      en: "Humanitarian aid platform with Flutter app & Next.js admin portal.",
      fr: "Plateforme d'aide humanitaire avec app Flutter et portail admin Next.js."
    },
    fullDesc: {
      en: "A comprehensive humanitarian digital solution to assist migrants and refugees in accessing essential services. Features a cross-platform Flutter mobile app with offline-first architecture, Mapbox geolocation for service discovery, multilingual support (Arabic, French, English), and a Next.js Admin Portal for NGOs to manage content dynamically via Supabase backend.",
      fr: "Une solution numerique humanitaire complete pour aider les migrants et refugies a acceder aux services essentiels. Comprend une app mobile Flutter multiplateforme avec architecture offline-first, geolocalisation Mapbox, support multilingue (arabe, francais, anglais), et un portail admin Next.js pour les ONG via backend Supabase."
    },
    thumbnail: "/projects/migrant-help/hero.jpg",
    images: [
      { src: "/projects/migrant-help/hero.jpg", caption: { en: "Mobile App Interface", fr: "Interface de l'application mobile" } },
      { src: "/projects/migrant-help/screenshot-1.jpg", caption: { en: "Admin Portal Dashboard", fr: "Tableau de bord du portail admin" } },
      { src: "/projects/migrant-help/screenshot-2.jpg", caption: { en: "Geolocation Services Map", fr: "Carte des services geolocalisee" } }
    ],
    architecture: {
      diagram: "/projects/migrant-help/architecture.png",
      description: {
        en: "Dual-platform architecture with Flutter mobile app (offline-first, Mapbox SDK, OneSignal notifications), Next.js 14 Admin Portal with React 19, and Supabase backend providing PostgreSQL database, authentication, and media storage.",
        fr: "Architecture double plateforme avec app mobile Flutter (offline-first, Mapbox SDK, notifications OneSignal), portail admin Next.js 14 avec React 19, et backend Supabase fournissant base PostgreSQL, authentification et stockage media."
      }
    },
    tags: ["Flutter", "Next.js 14", "Supabase", "Mapbox"],
    techStack: {
      mobile: ["Flutter", "Dart", "Mapbox SDK", "OneSignal"],
      frontend: ["Next.js 14", "React 19", "Tailwind CSS", "Zod"],
      backend: ["Supabase", "PostgreSQL", "Supabase Auth", "Supabase Storage"],
      features: ["Offline-first Architecture", "i18n (AR/FR/EN)", "Push Notifications"]
    },
    features: {
      en: [
        "Offline access to essential guides and maps",
        "Geolocation search for nearby aid services",
        "Multilingual support (Arabic, French, English)",
        "Real-time push notifications for updates",
        "Admin portal for NGO content management",
        "Interactive Mapbox service locator",
        "Cross-platform mobile app (iOS, Android, Web)"
      ],
      fr: [
        "Acces hors ligne aux guides et cartes essentiels",
        "Recherche geolocalisee des services d'aide",
        "Support multilingue (arabe, francais, anglais)",
        "Notifications push en temps reel",
        "Portail admin pour la gestion de contenu ONG",
        "Localisateur de services Mapbox interactif",
        "App mobile multiplateforme (iOS, Android, Web)"
      ]
    },
    links: {
      github: "https://github.com/AyoubGhouzali/migrant-help",
      live: null
    },
    status: "in-progress",
    date: "2024-03"
  }
];
