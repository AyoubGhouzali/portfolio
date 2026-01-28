import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const Navbar = ({ loading = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const t = translations[language];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(id);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.querySelector(id);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  const sections = ['about', 'projects', 'experience', 'contact'];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${loading ? 'opacity-0' : 'opacity-100'} backdrop-blur-md bg-black/30 border-b border-white/5`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div
            className="text-2xl font-bold tracking-tighter cursor-pointer"
            onClick={(e) => scrollToSection(e, '#hero')}
          >
            A<span className="text-orange-500">.</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
            {t.nav.map((item, index) => {
              const href = `#${sections[index]}`;
              return (
                <a
                  key={item}
                  href={href}
                  onClick={(e) => scrollToSection(e, href)}
                  className="hover:text-orange-500 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              );
            })}
            <a
              href={t.files.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 text-xs uppercase tracking-wider block text-center"
            >
              {t.resume}
            </a>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-xs font-bold text-orange-500 hover:text-white transition-colors"
            >
              <Languages size={14} />
              {language.toUpperCase()}
            </button>
          </div>
          <button onClick={toggleMenu} className="md:hidden text-white">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {t.nav.map((item, index) => {
          const href = `#${sections[index]}`;
          return (
            <a
              key={item}
              href={href}
              onClick={(e) => scrollToSection(e, href)}
              className="text-3xl font-light tracking-tight hover:text-orange-500 transition-colors"
            >
              {item}
            </a>
          );
        })}
        <a
          href={t.files.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-light tracking-tight hover:text-orange-500 transition-colors border border-white/20 px-8 py-3 rounded-full"
        >
          {t.resume}
        </a>
        <button
          onClick={toggleLanguage}
          className="text-xl font-bold text-orange-500 flex items-center gap-2"
        >
          <Languages /> {language === 'en' ? 'Switch to French' : 'Passer en Anglais'}
        </button>
      </div>
    </>
  );
};

export default Navbar;