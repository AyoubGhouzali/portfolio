import { X, Download, FileText, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const ResumeViewer = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const t = translations[language];

  const labels = {
    en: {
      title: 'Resume Preview',
      titleShort: 'Resume',
      download: 'Download',
      loading: 'Loading document...'
    },
    fr: {
      title: 'Aperçu du CV',
      titleShort: 'CV',
      download: 'Télécharger',
      loading: 'Chargement du document...'
    }
  };

  const l = labels[language];
  const resumePath = t.files.resume;

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-2 md:p-6 animate-in fade-in duration-200">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-5xl h-[85vh] md:h-[90vh] bg-[#1a1a1a] rounded-xl md:rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 border-b border-white/10 bg-[#050505] z-10">
          <div className="flex items-center gap-2 text-white font-bold text-base md:text-lg">
            <FileText className="text-orange-500" size={20} />
            <span className="hidden xs:inline">{l.title}</span>
            <span className="xs:hidden">{l.titleShort}</span>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <a
              href={resumePath}
              download
              className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs md:text-sm font-medium rounded-lg transition-colors"
            >
              <Download size={14} className="md:w-4 md:h-4" />
              <span>{l.download}</span>
            </a>

            {/* Mobile-friendly fallback: Open in new tab if iframe fails */}
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
              title="Open in new tab"
            >
              <ExternalLink size={20} />
            </a>

            <button
              onClick={onClose}
              className="p-1 md:p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} className="md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* PDF Content */}
        <div className="flex-1 bg-gray-800 relative w-full h-full">
          <iframe
            src={`${resumePath}#view=FitH`}
            className="w-full h-full block"
            title={l.title}
          />
          {/* Loading/Fallback state underneath the iframe */}
          <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center text-gray-500 gap-4">
            <Loader2 size={32} className="animate-spin" />
            <p>{l.loading}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple loader component for the fallback
const Loader2 = ({ className, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

export default ResumeViewer;
