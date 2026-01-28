export const projectsData = [
  {
    id: 1,
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
      fr: "Une application web d'astronomie interactive qui fournit une visualisation en temps reel des corps celestes, des cartes stellaires et des evenements astronomiques. Les utilisateurs peuvent suivre les planetes, les satellites et explorer le cosmos."
    },
    thumbnail: "/projects/cosmotracker/hero.jpg",
    images: [
      { src: "/projects/cosmotracker/hero.jpg", caption: { en: "Star Map Interface", fr: "Interface de carte stellaire" } },
      { src: "/projects/cosmotracker/screenshot-1.jpg", caption: { en: "Planet Tracking", fr: "Suivi des planetes" } }
    ],
    architecture: {
      diagram: "/projects/cosmotracker/architecture.png",
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
      github: "https://github.com/AyoubGhouzali/cosmotracker",
      live: null
    },
    status: "completed",
    date: "2024-04"
  },
  {
    id: 2,
    slug: "ai-support-system",
    title: {
      en: "AI Support System",
      fr: "Systeme de Support IA"
    },
    shortDesc: {
      en: "Intelligent customer support chatbot with NLP.",
      fr: "Chatbot de support client intelligent avec NLP."
    },
    fullDesc: {
      en: "An AI-powered customer support system that uses Natural Language Processing to understand and respond to user queries. The system learns from interactions, provides instant responses, and escalates complex issues to human agents when needed.",
      fr: "Un systeme de support client base sur l'IA qui utilise le traitement du langage naturel pour comprendre et repondre aux requetes des utilisateurs. Le systeme apprend des interactions et fournit des reponses instantanees."
    },
    thumbnail: "/projects/ai-support/hero.jpg",
    images: [
      { src: "/projects/ai-support/hero.jpg", caption: { en: "Chat Interface", fr: "Interface de chat" } },
      { src: "/projects/ai-support/screenshot-1.jpg", caption: { en: "Analytics Dashboard", fr: "Tableau de bord analytique" } }
    ],
    architecture: {
      diagram: "/projects/ai-support/architecture.png",
      description: {
        en: "Microservices architecture with Python NLP backend, React frontend, and MongoDB for conversation history storage.",
        fr: "Architecture microservices avec backend NLP Python, frontend React et MongoDB pour le stockage de l'historique des conversations."
      }
    },
    tags: ["Python", "NLP", "React.js"],
    techStack: {
      frontend: ["React.js", "Tailwind CSS", "Socket.io"],
      backend: ["Python", "FastAPI", "LangChain"],
      database: ["MongoDB", "Redis"],
      ml: ["OpenAI API", "Transformers", "spaCy"],
      devops: ["Docker", "AWS"]
    },
    features: {
      en: [
        "Natural language understanding",
        "Context-aware responses",
        "Multi-language support",
        "Human agent escalation"
      ],
      fr: [
        "Comprehension du langage naturel",
        "Reponses contextuelles",
        "Support multilingue",
        "Escalade vers agents humains"
      ]
    },
    links: {
      github: "https://github.com/AyoubGhouzali/ai-support-system",
      live: null
    },
    status: "completed",
    date: "2024-05"
  },
  {
    id: 3,
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
      fr: "Une application de machine learning qui predit les parcours professionnels et les fourchettes de salaires en fonction des competences, de l'experience et des tendances du marche. Construite avec Python et Scikit-learn."
    },
    thumbnail: "/projects/career-predictor/hero.jpg",
    images: [
      { src: "/projects/career-predictor/hero.jpg", caption: { en: "Prediction Interface", fr: "Interface de prediction" } },
      { src: "/projects/career-predictor/screenshot-1.jpg", caption: { en: "Analytics View", fr: "Vue analytique" } }
    ],
    architecture: {
      diagram: "/projects/career-predictor/architecture.png",
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
      github: "https://github.com/AyoubGhouzali/career-predictor",
      live: null
    },
    status: "completed",
    date: "2024-02"
  },
  {
    id: 4,
    slug: "migrant-help",
    title: {
      en: "Migrant Help",
      fr: "Aide aux Migrants"
    },
    shortDesc: {
      en: "Mobile app providing resources for migrants.",
      fr: "Application mobile d'aide aux migrants."
    },
    fullDesc: {
      en: "A mobile application designed to help migrants access essential resources, information, and services. Features include multilingual support, emergency contacts, legal resources, job listings, and community connections to help with integration.",
      fr: "Une application mobile concue pour aider les migrants a acceder aux ressources essentielles, informations et services. Inclut un support multilingue, contacts d'urgence, ressources juridiques et offres d'emploi."
    },
    thumbnail: "/projects/migrant-help/hero.jpg",
    images: [
      { src: "/projects/migrant-help/hero.jpg", caption: { en: "App Home Screen", fr: "Ecran d'accueil" } },
      { src: "/projects/migrant-help/screenshot-1.jpg", caption: { en: "Resources Section", fr: "Section ressources" } }
    ],
    architecture: {
      diagram: "/projects/migrant-help/architecture.png",
      description: {
        en: "React Native mobile app with Node.js backend API, MongoDB database, and Firebase for push notifications.",
        fr: "Application mobile React Native avec API backend Node.js, base de donnees MongoDB et Firebase pour les notifications push."
      }
    },
    tags: ["React Native", "Node.js", "MongoDB"],
    techStack: {
      mobile: ["React Native", "Expo"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB", "Firebase"],
      services: ["Google Maps API", "Translation API"],
      devops: ["Docker", "Heroku"]
    },
    features: {
      en: [
        "Multilingual interface (10+ languages)",
        "Emergency contacts and hotlines",
        "Legal resources and guidance",
        "Job and housing listings",
        "Community forum and support"
      ],
      fr: [
        "Interface multilingue (10+ langues)",
        "Contacts et lignes d'urgence",
        "Ressources et conseils juridiques",
        "Offres d'emploi et logement",
        "Forum communautaire et support"
      ]
    },
    links: {
      github: "https://github.com/AyoubGhouzali/migrant-help",
      live: null
    },
    status: "completed",
    date: "2024-03"
  }
];
