import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const languages = [
  { code: 'EN', name: 'English', status: 'active' },
  { code: 'FR', name: 'Français', status: 'placeholder' },
  { code: 'NL', name: 'Nederlands', status: 'active' },
  { code: 'ES', name: 'Español', status: 'placeholder' },
  { code: 'DE', name: 'Deutsch', status: 'placeholder' },
];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language: currentLang } = useLanguage();
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (code) => {
    const lowerCode = code.toLowerCase();
    // Preserve current hash if present
    navigate(`/${lowerCode}${location.hash}`, { replace: false });
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all text-xs font-medium text-slate-300"
      >
        <Globe size={14} className="text-indigo-400" />
        <span>{currentLang}</span>
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider font-bold text-slate-500">
            Select Language
          </div>
          {languages.map((lang) => (
            <button
              key={lang.code}
              disabled={lang.status === 'placeholder'}
              onClick={() => {
                if (lang.status !== 'placeholder') {
                  handleLanguageChange(lang.code);
                }
              }}
              className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors
                ${lang.status === 'placeholder' 
                  ? 'text-slate-600 cursor-not-allowed italic' 
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }
                ${currentLang === lang.code ? 'bg-indigo-500/10 text-indigo-400' : ''}
              `}
            >
              <span>{lang.name}</span>
              {lang.status === 'placeholder' && (
                <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-500 not-italic">
                  Soon
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
