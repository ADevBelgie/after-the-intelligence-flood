import React, { useEffect } from 'react';
import { Routes, Route, useParams, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const SUPPORTED_LANGUAGES = ['en', 'nl'];
const DEFAULT_LANGUAGE = 'en';

const LanguageSync = ({ children }) => {
  const { lang } = useParams();
  const { setLanguage, language: currentLang } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (lang) {
      const upperLang = lang.toUpperCase();
      if (SUPPORTED_LANGUAGES.includes(lang.toLowerCase())) {
        if (upperLang !== currentLang) {
          setLanguage(upperLang);
        }
      } else {
        // Invalid language, fallback to default
        navigate(`/${DEFAULT_LANGUAGE}${location.hash}`, { replace: true });
      }
    }
  }, [lang, currentLang, setLanguage, navigate, location.hash]);

  return children;
};

const RootRedirect = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // 1. Check localStorage
    const savedLang = localStorage.getItem('site_language')?.toLowerCase();
    if (savedLang && SUPPORTED_LANGUAGES.includes(savedLang)) {
      navigate(`/${savedLang}`, { replace: true });
      return;
    }

    // 2. Check browser language
    const browserLang = navigator.language.split('-')[0].toLowerCase();
    if (SUPPORTED_LANGUAGES.includes(browserLang)) {
      navigate(`/${browserLang}`, { replace: true });
      return;
    }

    // 3. Fallback
    navigate(`/${DEFAULT_LANGUAGE}`, { replace: true });
  }, [navigate]);

  return null;
};

const LanguageRouter = ({ children }) => {
  return (
    <Routes>
      {/* Root redirect */}
      <Route path="/" element={<RootRedirect />} />
      
      {/* Language routes */}
      <Route 
        path="/:lang/*" 
        element={
          <LanguageSync>
            {children}
          </LanguageSync>
        } 
      />

      {/* Trailing slash or unknown fix */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default LanguageRouter;
