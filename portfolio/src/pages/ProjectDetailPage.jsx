import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ArrowLeft, ExternalLink, Github, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import { projectsData } from '../data/projectsData';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const pageRef = useRef(null);
  const t = translations[language];

  // Find project by id (numeric) or slug (string)
  const project = projectsData.find(p =>
    p.id === parseInt(id) || p.slug === id
  );

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // GSAP animations for page entrance
  useEffect(() => {
    const gsap = window.gsap;
    if (!gsap || !pageRef.current) return;

    gsap.fromTo(pageRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-orange-500 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={pageRef} className="pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back Navigation */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          {t.backToProjects}
        </button>

        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video bg-gray-900">
          <img
            src={project.thumbnail}
            alt={project.title[language]}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-gray-600 font-mono text-xl">${project.title[language]}</div>`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Title & Tags */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {project.title[language]}
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            {project.fullDesc[language]}
          </p>
        </div>

        {/* Action Buttons */}
        {(project.links?.live || project.links?.github) && (
          <div className="flex gap-4 mb-12">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {t.viewLive}
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                {t.viewCode}
              </a>
            )}
          </div>
        )}

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{t.techStack}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(project.techStack).map(([category, techs]) => (
              <div key={category} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-sm font-bold uppercase text-orange-500 mb-2">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map(tech => (
                    <span key={tech} className="text-sm text-gray-300 bg-white/5 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{t.features}</h2>
          <ul className="space-y-3">
            {project.features[language].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Architecture */}
        {project.architecture && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{t.architecture}</h2>
            <div className="rounded-xl overflow-hidden bg-white/5 border border-white/10">
              <img
                src={project.architecture.diagram}
                alt="Architecture diagram"
                className="w-full"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<div class="w-full h-48 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-gray-600 font-mono">Architecture Diagram</div>`;
                }}
              />
            </div>
            <p className="mt-4 text-gray-400">
              {project.architecture.description[language]}
            </p>
          </section>
        )}

        {/* Image Gallery */}
        {project.images && project.images.length > 1 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">{t.gallery}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((img, idx) => {
                const isArchitecture = img.src.includes('architecture');
                return (
                  <div
                    key={idx}
                    className={`rounded-xl overflow-hidden bg-gray-900 border border-white/10 ${
                      isArchitecture ? 'md:col-span-2 lg:col-span-3' : ''
                    }`}
                  >
                    <div className={isArchitecture ? '' : 'aspect-[9/16] bg-black flex items-center justify-center'}>
                      <img
                        src={img.src}
                        alt={img.caption[language]}
                        className={isArchitecture ? 'w-full' : 'w-full h-full object-contain'}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-gray-600 font-mono text-sm">${img.caption[language]}</div>`;
                        }}
                      />
                    </div>
                    <p className="p-3 text-sm text-gray-400 text-center">
                      {img.caption[language]}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
