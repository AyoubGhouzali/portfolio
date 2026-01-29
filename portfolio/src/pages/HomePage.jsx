import { useState, useEffect, useRef } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Cpu,
  Smartphone,
  Zap,
  ArrowRight,
  Database,
  Cloud,
  Briefcase,
  GraduationCap,
  Award,
  Calendar
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import { projectsData } from '../data/projectsData';
import Preloader from '../components/Preloader';
import ProjectCard from '../components/ProjectCard';

const HomePage = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [loading, setLoading] = useState(true);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState(null); // 'sending', 'success', 'error'

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');

    // EmailJS configuration
    const SERVICE_ID = 'service_f6b0jlk';
    const TEMPLATE_ID = 'template_cjffv9a';
    const PUBLIC_KEY = '2JXxnYXulIE_bPDjrcQvG';

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id: PUBLIC_KEY,
          template_params: {
            from_name: contactName,
            from_email: contactEmail,
            message: contactMessage,
            to_email: 'ayoubghouzali04@gmail.com',
          },
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setContactName('');
        setContactEmail('');
        setContactMessage('');
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  // Refs for animation targets
  const preloaderRef = useRef(null);
  const progressBarRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroSubRef = useRef(null);
  const heroBtnRef = useRef(null);
  const splineRef = useRef(null);

  const skills = [
    { icon: <Code size={24} />, name: "Full-Stack", detail: "Spring Boot, React, Node" },
    { icon: <Cloud size={24} />, name: "DevOps", detail: "Docker, K8s, AWS, CI/CD, Terraform" },
    { icon: <Zap size={24} />, name: t.programmingLanguages, detail: "Python, R, Java, JS, SQL, C" },
    { icon: <Database size={24} />, name: "Database", detail: "PostgreSQL, MongoDB" },
    { icon: <Cpu size={24} />, name: "ML/AI", detail: "TensorFlow, Scikit" },
    { icon: <Smartphone size={24} />, name: "Mobile", detail: "Flutter" },
  ];

  const experiences = [
    {
      id: 1,
      role: { en: "Software Engineering Intern", fr: "Stage en Génie Logiciel" },
      company: "DTR",
      date: { en: "June 2025 - Sept 2025", fr: "Juin 2025 - Sept 2025" },
      desc: {
        en: "Built a humanitarian aid platform featuring a cross-platform Flutter mobile app with offline-first architecture, Mapbox geolocation for service discovery, multilingual support (Arabic, French, English), and a Next.js Admin Portal for NGOs to manage content dynamically via Supabase backend.",
        fr: "Developpement d'une plateforme d'aide humanitaire avec une app mobile Flutter multiplateforme (architecture offline-first), geolocalisation Mapbox, support multilingue (arabe, francais, anglais), et un portail admin Next.js pour les ONG via backend Supabase."
      },
      tech: ["Flutter", "Next.js", "Supabase", "Mapbox"]
    },
    {
      id: 2,
      role: { en: "Data Analysis Intern", fr: "Stage en Analyse de Données" },
      company: "CNRST",
      date: { en: "June 2024 - July 2024", fr: "Juin 2024 - Juil 2024" },
      desc: { 
        en: "Analyzed 10,000+ HPC cluster logs using Python and R to optimize system performance.", 
        fr: "Analyse de plus de 10 000 logs de cluster HPC avec Python et R pour l'optimisation des performances." 
      },
      tech: ["Python", "R", "HPC"]
    }
  ];

  const education = [
    {
      id: 1,
      type: "school",
      title: { en: "Software Engineering", fr: "Génie Logiciel" },
      institution: "ENSIAS",
      date: { en: "Sept 2023 - Present", fr: "Sept 2023 - Présent" },
      desc: { en: "National School of Computer Science and Systems Analysis.", fr: "École Nationale Supérieure d'Informatique et d'Analyse des Systèmes." }
    },
    {
      id: 2,
      type: "cert",
      title: { en: "Introduction to Artificial Intelligence", fr: "Introduction à l'Intelligence Artificielle" },
      institution: "IBM",
      date: "2024",
      desc: { en: "Fundamental concepts of AI, ML workflows, neural networks, and ethics.", fr: "Concepts fondamentaux de l'IA, workflows ML, réseaux de neurones et éthique." }
    }
  ];

  const startMainAnimations = (gsap) => {
    gsap.fromTo(heroTextRef.current,
      { opacity: 0, y: 100, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.5, ease: "power4.out", delay: 0.2 }
    );

    gsap.fromTo(heroSubRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.5 }
    );

    gsap.fromTo(heroBtnRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)", delay: 0.8 }
    );

    gsap.fromTo(splineRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 2, ease: "power2.out" }
    );

    gsap.to(".glow-orb", {
      y: -30,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 1
    });

    gsap.utils.toArray('.reveal-section').forEach(section => {
      gsap.fromTo(section,
        { opacity: 0, y: 50, filter: "blur(5px)" },
        {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1
        }
      );
    });

    gsap.fromTo('.project-card',
      { opacity: 0, y: 100, rotationX: 10 },
      {
        scrollTrigger: {
          trigger: '#projects',
          start: "top 70%"
        },
        opacity: 1,
        y: 0,
        rotationX: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out"
      }
    );
  };

  const initAnimations = () => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    if (!gsap) {
      setLoading(false);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      onComplete: () => {
        setLoading(false);
        startMainAnimations(gsap);
      }
    });

    tl.to(progressBarRef.current, {
      width: "100%",
      duration: 2,
      ease: "power2.inOut"
    })
    .to(preloaderRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.8,
      ease: "power3.inOut"
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.gsap && window.ScrollTrigger) {
        initAnimations();
      } else {
        setTimeout(initAnimations, 1000);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Preloader */}
      {loading && (
        <Preloader ref={preloaderRef} progressBarRef={progressBarRef} />
      )}

      {/* Hero Section */}
      <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div ref={splineRef} className="absolute inset-0 z-0 opacity-80 pointer-events-none">
          <iframe
            src='https://my.spline.design/retrofuturismbganimation-HAEtiLOVIdBYkLqnSBfI5Ub3/'
            frameBorder='0'
            width='100%'
            height='100%'
            title="Spline 3D Background"
            className="w-full h-full scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] z-10 pointer-events-none"></div>
        <div className="glow-orb absolute top-1/4 left-1/4 w-32 h-32 bg-orange-500/20 rounded-full blur-[100px] z-0"></div>
        <div className="glow-orb absolute bottom-1/4 right-1/4 w-48 h-48 bg-red-600/20 rounded-full blur-[120px] z-0" style={{ animationDelay: '-2s' }}></div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h2 ref={heroSubRef} className="text-sm md:text-base text-orange-500 tracking-[0.2em] uppercase mb-4 font-semibold">{t.heroSub}</h2>
          <h1 ref={heroTextRef} className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500">{t.heroTitle}</h1>
          <div ref={heroBtnRef} className="flex flex-col items-center gap-6">
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full backdrop-blur-md overflow-hidden transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)]">
              <span className="relative z-10 font-semibold text-lg">{t.hireMe}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
            <div className="flex items-center gap-4 text-xs font-medium text-gray-400 mt-4 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              <span className="opacity-50">{t.quickJump}:</span>
              {t.nav.slice(0, 3).map((link, i) => (
                <a key={link} href="#" onClick={(e) => scrollToSection(e, `#${['about', 'projects', 'experience'][i]}`)} className="hover:text-orange-500 transition-colors border-b border-transparent hover:border-orange-500 pb-0.5 cursor-pointer">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div onClick={(e) => scrollToSection(e, '#about')} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/30 cursor-pointer hover:text-white transition-colors">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 md:py-32 px-6 max-w-7xl mx-auto reveal-section">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full p-1 bg-gradient-to-br from-white/20 to-transparent">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-black bg-gray-800">
                <img src="/1762956420222.jpg" alt="Ayoub Profile" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110" />
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t.aboutTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">{t.aboutTitleHighlight}</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed">{t.aboutDesc}</p>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-orange-500/30 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-gray-400 group-hover:text-orange-500 transition-colors">{skill.icon}</div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold tracking-wide text-white">{skill.name}</span>
                    <span className="text-[10px] text-gray-400">{skill.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-black/50 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between reveal-section">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">{t.projectsTitle}</h2>
            <p className="text-gray-500">{t.projectsSub}</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button className="p-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all"><ArrowRight className="rotate-180 w-5 h-5" /></button>
            <button className="p-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all"><ArrowRight className="w-5 h-5" /></button>
          </div>
        </div>
        <div className="overflow-x-auto pb-12 px-6 hide-scrollbar cursor-grab active:cursor-grabbing">
          <div className="flex gap-6 w-max">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-24 px-6 max-w-7xl mx-auto reveal-section">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500">
                <Briefcase size={24} />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">{t.experienceTitle}</h2>
            </div>
            
            <div className="space-y-8 border-l-2 border-white/10 ml-4 pl-8 relative">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-[#050505] bg-gray-600 group-hover:bg-orange-500 transition-colors"></div>
                  
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all duration-300">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white">{exp.role[language]}</h3>
                      <span className="text-xs font-mono px-2 py-1 rounded bg-white/10 text-gray-400 flex items-center gap-1">
                        <Calendar size={12} /> {exp.date[language]}
                      </span>
                    </div>
                    <div className="text-orange-500 font-medium mb-4">{exp.company}</div>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {exp.desc[language]}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map(tech => (
                        <span key={tech} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-500 border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">{t.educationTitle}</h2>
            </div>

            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="mt-1">
                    {edu.type === 'school' ? (
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
                        <GraduationCap size={20} />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center">
                        <Award size={20} />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{edu.title[language]}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                      <span className="text-white">{edu.institution}</span>
                      <span>•</span>
                      <span>{edu.date[language] || edu.date}</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      {edu.desc[language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 max-w-4xl mx-auto relative reveal-section">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-orange-500/10 to-red-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">{t.contactTitle}</h2>
            <p className="text-gray-400">{t.contactSub}</p>
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-orange-500 transition-colors">{t.nameLabel}</label>
                <input
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="group">
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-orange-500 transition-colors">{t.emailLabel}</label>
                <input
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-orange-500 transition-colors">{t.messageLabel}</label>
              <textarea
                rows="4"
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all"
                placeholder={t.messagePlaceholder}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={submitStatus === 'sending'}
              className={`w-full py-4 rounded-lg font-bold text-lg tracking-wide transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group ${
                submitStatus === 'success'
                  ? 'bg-green-600'
                  : submitStatus === 'error'
                  ? 'bg-red-600'
                  : 'bg-gradient-to-r from-orange-600 to-red-600 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]'
              } ${submitStatus === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              <span className="relative z-10">
                {submitStatus === 'sending' && (language === 'en' ? 'Sending...' : 'Envoi...')}
                {submitStatus === 'success' && (language === 'en' ? 'Message Sent!' : 'Message Envoyé!')}
                {submitStatus === 'error' && (language === 'en' ? 'Error - Try Again' : 'Erreur - Réessayer')}
                {!submitStatus && t.sendBtn}
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </form>

          <div className="mt-12 flex justify-center space-x-8">
            <a href="https://github.com/AyoubGhouzali" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300">
              <Github size={24} strokeWidth={1.5} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300">
              <Linkedin size={24} strokeWidth={1.5} />
            </a>
            <a href="mailto:ayoubghouzali04@gmail.com" className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300">
              <Mail size={24} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;