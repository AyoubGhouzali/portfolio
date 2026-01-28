import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Bot, RefreshCw, Send, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import { callGemini } from '../utils/geminiApi';

const ChatWidget = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const chatEndRef = useRef(null);
  const prevLanguageRef = useRef(language);

  const getInitialMessage = (lang) => [{
    role: 'assistant',
    text: lang === 'en'
      ? "Systems online. I am Ayoub's AI interface. Ask me anything about his skills or projects."
      : "Systemes en ligne. Je suis l'interface IA d'Ayoub. Posez-moi des questions sur ses competences ou ses projets."
  }];

  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState(() => getInitialMessage(language));
  const [chatInput, setChatInput] = useState("");
  const [isChatThinking, setIsChatThinking] = useState(false);

  // Reset chat when language changes
  if (prevLanguageRef.current !== language) {
    prevLanguageRef.current = language;
    setChatMessages(getInitialMessage(language));
  }

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, chatOpen]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!chatInput.trim() || isChatThinking) return;

    const userMsg = chatInput;
    setChatMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setChatInput("");
    setIsChatThinking(true);

    const systemPrompt = `
      You are an AI assistant for Ayoub Ghouzali's portfolio website.
      Language: Respond in ${language === 'en' ? 'English' : 'French'}.
      Tone: Futuristic, professional, slightly witty, matching a "Cyberpunk/High-Tech" aesthetic.

      Ayoub's Profile:
      - Role: Junior Full-Stack/DevOps Engineer
      - Education: Software Engineering at ENSIAS (Mohammed V University, Sept 2023 - Present)
      - Location: Rabat, MA
      - Contact: ayoubghouzali04@gmail.com, +212 623574168

      Skills:
      - Backend: Spring Boot, Node.js, Python, Django, Express.js
      - Frontend: React.js
      - Mobile: Flutter
      - Cloud/DevOps: Docker, AWS, Git, GitHub Actions, GitLab, Terraform, Kubernetes
      - Databases: PostgreSQL, MongoDB, MySQL
      - AI/ML: TensorFlow, Scikit-learn, Langchain

      Projects:
      - Smart Recruitment Platform (React, Spring Boot, TensorFlow)
      - CosmoTracker (Astronomy App - Spring Boot, React)
      - Urban Transport Management System (Microservices, Kafka, Docker)
      - Career & Salary Predictor (Python, Scikit-learn, Streamlit)

      Experience:
      - DTR (Internship, June-Sept 2025): Internal web tools, Spring Boot.
      - CNRST (Internship, June-July 2024): HPC log analysis, Python/R.

      Bio: Passionate about automation and Cloud, combining strong development background with operational skills. Looking for a 6-month DevOps internship.

      Answer briefly and enthusiastically.
    `;

    const response = await callGemini(userMsg, systemPrompt);
    setChatMessages(prev => [...prev, { role: 'assistant', text: response }]);
    setIsChatThinking(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      <div className={`pointer-events-auto mb-4 w-80 md:w-96 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 origin-bottom-right ${chatOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'}`}>
        <div className="p-4 border-b border-white/10 bg-gradient-to-r from-orange-900/20 to-red-900/20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-orange-500" />
            <span className="font-semibold text-sm">Neural Link</span>
          </div>
          <button
            onClick={() => setChatMessages(getInitialMessage(language))}
            className="text-gray-500 hover:text-white"
            title="Reset Memory"
          >
            <RefreshCw size={14} />
          </button>
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
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
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
            placeholder={t.chatPlaceholder}
            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-500/50 transition-colors"
          />
          <button
            type="submit"
            disabled={!chatInput.trim() || isChatThinking}
            className="p-2 bg-orange-600 hover:bg-orange-500 rounded-lg text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
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
  );
};

export default ChatWidget;
