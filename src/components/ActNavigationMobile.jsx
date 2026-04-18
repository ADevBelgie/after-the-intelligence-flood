import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const ActNavigationMobile = () => {
  const { language } = useLanguage();
  const acts = translations[language].acts;
  const navStrings = translations[language].nav;
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 lg:hidden w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-lg shadow-indigo-500/20 z-50 animate-in fade-in zoom-in duration-300 active:scale-95 transition-transform"
      >
        <Menu size={20} />
      </button>

      {/* Bottom Sheet Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] lg:hidden animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="absolute bottom-0 left-0 w-full bg-slate-900 rounded-t-3xl p-6 pb-12 border-t border-slate-800 animate-in slide-in-from-bottom duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Chapters</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {acts.map((act) => (
                <a
                  key={act.id}
                  href={`#${act.id}`}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between p-4 rounded-2xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 transition-all active:scale-[0.98]"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold">{act.label.split(' \u2014 ')[0]}</span>
                    <span className="text-sm text-slate-200 font-medium">{act.subtitle}</span>
                  </div>
                  <ChevronRight size={16} className="text-slate-600 group-hover:text-slate-400 transition-colors" />
                </a>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col gap-4">
              <a 
                href="https://ai-strategic-report-april-2026.vercel.app" 
                className="text-xs text-center text-slate-500 hover:text-indigo-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                ← {navStrings.report}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ActNavigationMobile;
