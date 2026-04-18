import React, { useState } from 'react';
import { Share2, Link, Twitter, Linkedin, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const ShareRow = ({ url, title }) => {
  const [copied, setCopied] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].common;

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareX = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  const shareLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  };

  return (
    <div className="flex flex-col items-center gap-6 py-16 border-t border-slate-800/50 mt-24">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
        <Share2 size={14} />
        <span>{t.share}</span>
      </div>
      
      <div className="flex items-center gap-4">
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-all text-xs font-medium text-slate-300 group"
          title={t.copy_link}
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Link size={14} className="group-hover:text-indigo-400 transition-colors" />}
          <span>{copied ? t.copied : t.copy_link}</span>
        </button>

        <button
          onClick={shareX}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-all text-xs font-medium text-slate-300 group"
          title="Share on X"
        >
          <Twitter size={14} className="group-hover:text-sky-400 transition-colors" />
          <span>X / Twitter</span>
        </button>

        <button
          onClick={shareLinkedIn}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-all text-xs font-medium text-slate-300 group"
          title="Share on LinkedIn"
        >
          <Linkedin size={14} className="group-hover:text-blue-500 transition-colors" />
          <span>LinkedIn</span>
        </button>
      </div>
    </div>
  );
};

export default ShareRow;
