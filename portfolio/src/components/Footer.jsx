import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="py-8 text-center text-xs text-gray-600 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center opacity-20 pointer-events-none">
        <div className="w-96 h-96 bg-orange-500/20 blur-[100px] rounded-full"></div>
      </div>
      <div className="relative z-10">
        <p>&copy; {new Date().getFullYear()} Ayoub Ghouzali. {t.footerRights}</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="#" className="hover:text-orange-500 transition-colors">{t.privacy}</a>
          <a href="#" className="hover:text-orange-500 transition-colors">{t.terms}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
