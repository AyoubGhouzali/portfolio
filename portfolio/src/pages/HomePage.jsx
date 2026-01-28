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
  Sparkles,
  Loader2,
  Database,
  Cloud
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import { callGemini } from '../utils/geminiApi';
import { projectsData } from '../data/projectsData';
import Preloader from '../components/Preloader';
import ProjectCard from '../components/ProjectCard';

const HomePage = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [loading, setLoading] = useState(true);
  const [contactMessage, setContactMessage] = useState("");
  const [isPolishing, setIsPolishing] = useState(false);

  // Refs for animation targets
  const preloaderRef = useRef(null);
  const progressBarRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroSubRef = useRef(null);
  const heroBtnRef = useRef(null);
  const splineRef = useRef(null);

  const skills = [
    { icon: <Code size={24} />, name: "Full-Stack", detail: "Spring Boot, React, Node" },
    { icon: <Cloud size={24} />, name: "DevOps", detail: "Docker, K8s, AWS" },
    { icon: <Zap size={24} />, name: "Automation", detail: "CI/CD, Terraform" },
    { icon: <Database size={24} />, name: "Data", detail: "PostgreSQL, MongoDB" },
    { icon: <Cpu size={24} />, name: "ML/AI", detail: "TensorFlow, Scikit" },
    { icon: <Smartphone size={24} />, name: "Mobile", detail: "Flutter" },
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
      // Cleanup ScrollTrigger on unmount
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handlePolishMessage = async () => {
    if (!contactMessage.trim() || isPolishing) return;

    setIsPolishing(true);
    const systemPrompt = language === 'en'
      ? "You are an expert copywriter. Rewrite the following message to be more professional, concise, and persuasive, suitable for a business inquiry to a developer. Keep the tone polite but impactful."
      : "Vous etes un expert en redaction. Reecrivez le message suivant pour qu'il soit plus professionnel, concis et persuasif, adapte a une demande commerciale pour un developpeur. Gardez un ton poli mais impactant.";

    const promptText = language === 'en'
      ? `Rewrite this message: "${contactMessage}"`
      : `Reecris ce message: "${contactMessage}"`;

    const polished = await callGemini(promptText, systemPrompt);

    if (!polished.includes("Systems offline")) {
      setContactMessage(polished.replace(/"/g, ''));
    }
    setIsPolishing(false);
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
                <a key={link} href="#" onClick={(e) => scrollToSection(e, `#${['about', 'projects', 'contact'][i]}`)} className="hover:text-orange-500 transition-colors border-b border-transparent hover:border-orange-500 pb-0.5 cursor-pointer">
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
            <div className="absolute top-0 right-10 md:right-20 animate-spin-slow">
              <div className="bg-black border border-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-orange-500">ENSIAS</div>
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

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 max-w-4xl mx-auto relative reveal-section">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-orange-500/10 to-red-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">{t.contactTitle}</h2>
            <p className="text-gray-400">{t.contactSub}</p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-orange-500 transition-colors">{t.nameLabel}</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all" placeholder="John Doe" />
              </div>
              <div className="group">
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-orange-500 transition-colors">{t.emailLabel}</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all" placeholder="john@example.com" />
              </div>
            </div>

            <div className="group relative">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs uppercase tracking-wider text-gray-500 group-focus-within:text-orange-500 transition-colors">{t.messageLabel}</label>
                <button
                  type="button"
                  onClick={handlePolishMessage}
                  disabled={isPolishing || !contactMessage}
                  className="flex items-center gap-1 text-[10px] uppercase font-bold text-orange-500 hover:text-white transition-colors disabled:opacity-50"
                >
                  {isPolishing ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
                  {isPolishing ? t.optimizing : t.polishBtn}
                </button>
              </div>
              <textarea
                rows="4"
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all"
                placeholder={t.messagePlaceholder}
              ></textarea>
              <div className={`absolute -inset-[1px] bg-gradient-to-r from-orange-500 to-red-600 rounded-lg -z-10 opacity-0 transition-opacity duration-500 ${isPolishing ? 'opacity-50 blur-sm' : ''}`}></div>
            </div>

            <button type="button" className="w-full py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg font-bold text-lg tracking-wide hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
              <span className="relative z-10">{t.sendBtn}</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </form>

          <div className="mt-12 flex justify-center space-x-8">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300">
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
