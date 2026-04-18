import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const DiscoveryCallout = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <div className="flex justify-center mb-12">
      <a 
        href="https://ai-strategic-report-april-2026.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 hover:border-indigo-500/40 transition-all text-xs font-semibold text-indigo-400 animate-in slide-in-from-top-4 duration-700"
      >
        <span>{t.discovery_cta}</span>
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};

export default DiscoveryCallout;
