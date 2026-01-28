import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ProjectCard = ({ project }) => {
  const { language } = useLanguage();

  return (
    <Link
      to={`/project/${project.id}`}
      className="project-card relative w-[300px] md:w-[400px] h-[450px] rounded-2xl overflow-hidden group border border-white/10 bg-[#0a0a0a] block"
    >
      <div className="h-2/3 w-full overflow-hidden">
        <div className="w-full h-full bg-gray-800 relative">
          <img
            src={project.thumbnail}
            alt={project.title[language]}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gray-900 text-gray-700 font-mono text-xs p-4 text-center">${project.title[language]}</div>`;
            }}
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
        </div>
      </div>
      <div className="h-1/3 p-6 relative bg-white/5 backdrop-blur-xl border-t border-white/5 flex flex-col justify-between group-hover:bg-white/10 transition-colors">
        <div>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/10 text-orange-300 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold mb-1 group-hover:text-orange-500 transition-colors">
            {project.title[language]}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-2">
            {project.shortDesc[language]}
          </p>
        </div>
        <div className="absolute top-0 right-6 -translate-y-1/2 bg-orange-500 text-black p-3 rounded-full opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.5)]">
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
