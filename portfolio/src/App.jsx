import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Code, 
  Cpu, 
  Globe, 
  Layers, 
  Smartphone, 
  Zap, 
  ArrowRight,
  Menu,
  X,
  MessageSquare,
  Sparkles,
  Send,
  Bot,
  Loader2,
  RefreshCw
} from 'lucide-react';

const apiKey = ""; // API Key injected at runtime

const LoadScripts = () => {
  useEffect(() => {
    const scripts = [
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
    ];

    scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      document.body.appendChild(script);
    });
  }, []);
  return null;
};

// --- GEMINI API HELPER ---
const callGemini = async (prompt, systemContext = "") => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
  
  const payload = {
    contents: [{
      parts: [{ text: prompt }]
    }],
    systemInstruction: {
      parts: [{ text: systemContext }]
    }
  };

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  
  for (let i = 0; i < 3; i++) { // Retry up to 3 times
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "Transmission interrupted. Please try again.";
    } catch {
      if (i === 2) return "Systems offline. Unable to reach AI core.";
      await delay(1000 * Math.pow(2, i)); // Exponential backoff
    }
  }
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // AI State
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', text: "Systems online. I am Milad's AI interface. Ask me anything about his skills or projects." }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isChatThinking, setIsChatThinking] = useState(false);
  
  const [contactMessage, setContactMessage] = useState("");
  const [isPolishing, setIsPolishing] = useState(false);
  
  // Refs for animation targets
  const preloaderRef = useRef(null);
  const progressBarRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroSubRef = useRef(null);
  const heroBtnRef = useRef(null);
  const splineRef = useRef(null);
  const chatEndRef = useRef(null);
  
  // Data for Context
  const projects = [
    { id: 1, title: "Neon Finance", desc: "DeFi Dashboard", img: "project-1.jpg", tags: ["React", "D3.js"] },
    { id: 2, title: "Cyber eCommerce", desc: "NextGen Shopping", img: "project-2.jpg", tags: ["Next.js", "Stripe"] },
    { id: 3, title: "Orbit AI", desc: "Machine Learning UI", img: "project-3.jpg", tags: ["Python", "TensorFlow"] },
    { id: 4, title: "Velocity Chat", desc: "Real-time Messaging", img: "project-4.jpg", tags: ["Socket.io", "Node"] },
    { id: 5, title: "Flux Social", desc: "Media Platform", img: "project-5.jpg", tags: ["Vue", "Firebase"] },
    { id: 6, title: "Zenith Health", desc: "Medical Tracker", img: "project-6.jpg", tags: ["React Native", "API"] },
  ];

  const skills = [
    { icon: <Code size={24} />, name: "Frontend" },
    { icon: <Zap size={24} />, name: "Performance" },
    { icon: <Globe size={24} />, name: "SEO" },
    { icon: <Cpu size={24} />, name: "Backend" },
    { icon: <Layers size={24} />, name: "UX/UI" },
    { icon: <Smartphone size={24} />, name: "Mobile" },
  ];

  const startMainAnimations = useCallback((gsap) => {
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
  }, []);

  const initAnimations = useCallback(() => {
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
  }, [startMainAnimations]);

  // Load GSAP
  useEffect(() => {
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const timer = setTimeout(() => {
      if (window.gsap && window.ScrollTrigger) {
        initAnimations();
      } else {
        setTimeout(initAnimations, 1000);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [initAnimations]);

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, chatOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMenuOpen(false); 
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 100; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  // --- AI HANDLERS ---

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!chatInput.trim() || isChatThinking) return;

    const userMsg = chatInput;
    setChatMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setChatInput("");
    setIsChatThinking(true);

    const systemPrompt = `
      You are an AI assistant for Milad's portfolio website. 
      Tone: Futuristic, professional, slightly witty, matching a "Cyberpunk/High-Tech" aesthetic.
      
      Milad's Skills: ${skills.map(s => s.name).join(', ')}.
      Milad's Projects: 
      ${projects.map(p => `- ${p.title}: ${p.desc} using ${p.tags.join(', ')}`).join('\n')}
      
      Bio: Creative developer obsessed with motion, interactivity, and clean code. Builds immersive web experiences.
      
      Answer briefly and enthusiastically. If asked for contact info, direct them to the contact section.
    `;

    const response = await callGemini(userMsg, systemPrompt);
    
    setChatMessages(prev => [...prev, { role: 'assistant', text: response }]);
    setIsChatThinking(false);
  };

  const handlePolishMessage = async () => {
    if (!contactMessage.trim() || isPolishing) return;
    
    setIsPolishing(true);
    const systemPrompt = "You are an expert copywriter. Rewrite the following message to be more professional, concise, and persuasive, suitable for a business inquiry to a developer. Keep the tone polite but impactful.";
    
    const polished = await callGemini(`Rewrite this message: "${contactMessage}"`, systemPrompt);
    
    // Simple check to ensure we don't replace with error message if it fails
    if (!polished.includes("Systems offline")) {
      setContactMessage(polished.replace(/"/g, '')); // Remove quotes if added
    }
    setIsPolishing(false);
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white font-['Inter'] overflow-x-hidden selection:bg-orange-500 selection:text-black">
      <LoadScripts />

      {/* --- PRELOADER --- */}
      {loading && (
        <div ref={preloaderRef} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black">
          <div className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600 animate-pulse">
            MILAD
          </div>
          <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden relative">
            <div ref={progressBarRef} className="absolute left-0 top-0 h-full bg-gradient-to-r from-orange-500 to-red-600 w-0" />
          </div>
          <div className="mt-4 text-xs text-gray-500 tracking-widest uppercase">Initializing Core Systems...</div>
        </div>
      )}

      {/* --- NAVIGATION --- */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${loading ? 'opacity-0' : 'opacity-100'} backdrop-blur-md bg-black/30 border-b border-white/5`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter cursor-pointer" onClick={(e) => scrollToSection(e, '#hero')}>
            M<span className="text-orange-500">.</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
            {['About', 'Projects', 'Services', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={(e) => scrollToSection(e, `#${item.toLowerCase()}`)} className="hover:text-orange-500 transition-colors duration-300 relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="px-5 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 text-xs uppercase tracking-wider">
              Resume
            </button>
          </div>
          <button onClick={toggleMenu} className="md:hidden text-white">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {['About', 'Projects', 'Services', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={(e) => scrollToSection(e, `#${item.toLowerCase()}`)} className="text-3xl font-light tracking-tight hover:text-orange-500 transition-colors">
            {item}
          </a>
        ))}
      </div>

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div ref={splineRef} className="absolute inset-0 z-0 opacity-80 pointer-events-none">
             <iframe src='https://my.spline.design/retrofuturismbganimation-HAEtiLOVIdBYkLqnSBfI5Ub3/' frameBorder='0' width='100%' height='100%' title="Spline 3D Background" className="w-full h-full scale-110"></iframe>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] z-10 pointer-events-none"></div>
        <div className="glow-orb absolute top-1/4 left-1/4 w-32 h-32 bg-orange-500/20 rounded-full blur-[100px] z-0"></div>
        <div className="glow-orb absolute bottom-1/4 right-1/4 w-48 h-48 bg-red-600/20 rounded-full blur-[120px] z-0" style={{animationDelay: '-2s'}}></div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h2 ref={heroSubRef} className="text-sm md:text-base text-orange-500 tracking-[0.2em] uppercase mb-4 font-semibold">Future Ready Developer</h2>
          <h1 ref={heroTextRef} className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500">Hi, I’m Milad</h1>
          <div ref={heroBtnRef} className="flex flex-col items-center gap-6">
             <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full backdrop-blur-md overflow-hidden transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)]">
               <span className="relative z-10 font-semibold text-lg">Hire Me</span>
               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
               <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             </a>
             <div className="flex items-center gap-4 text-xs font-medium text-gray-400 mt-4 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
               <span className="opacity-50">Quick Jump:</span>
               {['Projects', 'About', 'Contact'].map((link) => (
                 <a key={link} href={`#${link.toLowerCase()}`} onClick={(e) => scrollToSection(e, `#${link.toLowerCase()}`)} className="hover:text-orange-500 transition-colors border-b border-transparent hover:border-orange-500 pb-0.5 cursor-pointer">
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

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="relative py-24 md:py-32 px-6 max-w-7xl mx-auto reveal-section">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full p-1 bg-gradient-to-br from-white/20 to-transparent">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-black bg-gray-800">
                <img src="1762956420222.jpg" alt="Milad Profile" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110" />
              </div>
            </div>
            <div className="absolute top-0 right-10 md:right-20 animate-spin-slow">
               <div className="bg-black border border-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-orange-500">DEV</div>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Digital Dreams</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed">I'm a creative developer obsessed with motion, interactivity, and clean code. I build immersive web experiences that not only look futuristic but perform flawlessly across the multiverse of devices.</p>
            <div className="grid grid-cols-3 gap-4">
              {skills.map((skill, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-orange-500/30 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-gray-400 group-hover:text-orange-500 transition-colors mb-2">{skill.icon}</div>
                  <span className="text-xs font-medium tracking-wide text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-24 bg-black/50 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between reveal-section">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">Selected Works</h2>
            <p className="text-gray-500">Swipe to explore the gallery</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button className="p-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all"><ArrowRight className="rotate-180 w-5 h-5" /></button>
            <button className="p-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all"><ArrowRight className="w-5 h-5" /></button>
          </div>
        </div>
        <div className="overflow-x-auto pb-12 px-6 hide-scrollbar cursor-grab active:cursor-grabbing">
          <div className="flex gap-6 w-max">
             {projects.map((project) => (
               <div key={project.id} className="project-card relative w-[300px] md:w-[400px] h-[450px] rounded-2xl overflow-hidden group border border-white/10 bg-[#0a0a0a]">
                 <div className="h-2/3 w-full overflow-hidden">
                   <div className="w-full h-full bg-gray-800 relative">
                     <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gray-900 text-gray-700">Image ${project.id}</div>`; }} />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                   </div>
                 </div>
                 <div className="h-1/3 p-6 relative bg-white/5 backdrop-blur-xl border-t border-white/5 flex flex-col justify-between group-hover:bg-white/10 transition-colors">
                   <div>
                     <div className="flex gap-2 mb-3">
                       {project.tags.map(tag => (
                         <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/10 text-orange-300 border border-white/5">{tag}</span>
                       ))}
                     </div>
                     <h3 className="text-xl font-bold mb-1 group-hover:text-orange-500 transition-colors">{project.title}</h3>
                     <p className="text-sm text-gray-400">{project.desc}</p>
                   </div>
                   <div className="absolute top-0 right-6 -translate-y-1/2 bg-orange-500 text-black p-3 rounded-full opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.5)]">
                     <ArrowRight className="w-5 h-5" />
                   </div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION + AI POLISH --- */}
      <section id="contact" className="py-32 px-6 max-w-4xl mx-auto relative reveal-section">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-orange-500/10 to-red-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">Let's Build the Future</h2>
            <p className="text-gray-400">Have an idea? Let's turn it into reality.</p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-orange-500 transition-colors">Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all" placeholder="John Doe" />
              </div>
              <div className="group">
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-orange-500 transition-colors">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all" placeholder="john@example.com" />
              </div>
            </div>
            
            <div className="group relative">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs uppercase tracking-wider text-gray-500 group-focus-within:text-orange-500 transition-colors">Message</label>
                <button 
                  type="button" 
                  onClick={handlePolishMessage}
                  disabled={isPolishing || !contactMessage}
                  className="flex items-center gap-1 text-[10px] uppercase font-bold text-orange-500 hover:text-white transition-colors disabled:opacity-50"
                >
                  {isPolishing ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
                  {isPolishing ? 'Optimizing...' : 'Holo-Refine ✨'}
                </button>
              </div>
              <textarea 
                rows="4" 
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all" 
                placeholder="Draft your messy thoughts here, and let AI polish them..."
              ></textarea>
              {/* Glow effect for AI interaction */}
              <div className={`absolute -inset-[1px] bg-gradient-to-r from-orange-500 to-red-600 rounded-lg -z-10 opacity-0 transition-opacity duration-500 ${isPolishing ? 'opacity-50 blur-sm' : ''}`}></div>
            </div>

            <button type="button" className="w-full py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg font-bold text-lg tracking-wide hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
              <span className="relative z-10">Send Transmission</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </form>

          <div className="mt-12 flex justify-center space-x-8">
            {[Github, Linkedin, Twitter, Mail].map((Icon, idx) => (
              <a key={idx} href="#" className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300">
                <Icon size={24} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- GEMINI CHAT WIDGET --- */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end pointer-events-none">
        {/* Chat Window */}
        <div className={`pointer-events-auto mb-4 w-80 md:w-96 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 origin-bottom-right ${chatOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'}`}>
          <div className="p-4 border-b border-white/10 bg-gradient-to-r from-orange-900/20 to-red-900/20 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-orange-500" />
              <span className="font-semibold text-sm">Neural Link</span>
            </div>
            <button onClick={() => setChatMessages([])} className="text-gray-500 hover:text-white" title="Reset Memory"><RefreshCw size={14} /></button>
          </div>
          
          <div className="h-80 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {chatMessages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-xs md:text-sm leading-relaxed ${msg.role === 'user' ? 'bg-orange-600/20 text-orange-100 border border-orange-500/30 rounded-tr-none' : 'bg-white/5 text-gray-300 border border-white/10 rounded-tl-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isChatThinking && (
              <div className="flex justify-start">
                 <div className="bg-white/5 px-4 py-3 rounded-2xl rounded-tl-none flex gap-1">
                   <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce"></div>
                   <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                   <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                 </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="p-3 border-t border-white/10 flex gap-2">
            <input 
              type="text" 
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask about Milad..." 
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-500/50 transition-colors"
            />
            <button type="submit" disabled={!chatInput.trim() || isChatThinking} className="p-2 bg-orange-600 hover:bg-orange-500 rounded-lg text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              <Send size={16} />
            </button>
          </form>
        </div>

        {/* Toggle Button */}
        <button 
          onClick={() => setChatOpen(!chatOpen)}
          className="pointer-events-auto group relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-600 to-red-600 rounded-full shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:scale-110 transition-transform duration-300"
        >
          {chatOpen ? <X className="text-white" /> : <MessageSquare className="text-white" />}
          
          {/* Ping Animation for attention */}
          {!chatOpen && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </span>
          )}
        </button>
      </div>

      {/* --- FOOTER --- */}
      <footer className="py-8 text-center text-xs text-gray-600 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center opacity-20 pointer-events-none">
           <div className="w-96 h-96 bg-orange-500/20 blur-[100px] rounded-full"></div>
        </div>
        <div className="relative z-10">
          <p>© {new Date().getFullYear()} Milad. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
             <a href="#" className="hover:text-orange-500 transition-colors">Privacy</a>
             <a href="#" className="hover:text-orange-500 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes spin-slow { from { transform: rotate(0deg) translateX(50px) rotate(0deg); } to { transform: rotate(360deg) translateX(50px) rotate(-360deg); } }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default App;