import React from 'react';
import { Cpu, ArrowLeft } from 'lucide-react';
import ReadingProgressBar from './components/ReadingProgressBar';
import LanguageSelector from './components/LanguageSelector';
import ActNavigation from './components/ActNavigation';
import ActNavigationMobile from './components/ActNavigationMobile';
import PullQuote from './components/PullQuote';
import ActDivider from './components/ActDivider';
import ShareRow from './components/ShareRow';
import DiscoveryCallout from './components/DiscoveryCallout';
import LanguageRouter from './components/LanguageRouter';
import { useLanguage } from './context/LanguageContext';
import { translations } from './data/translations';

const AppContent = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const renderTextWithLink = (text, linkText) => {
    if (!text.includes('{link}')) return text;
    const parts = text.split('{link}');
    return (
      <>
        {parts[0]}
        <a 
          href="https://ai-strategic-report-april-2026.vercel.app" 
          className="text-indigo-400 hover:text-indigo-300 transition-colors font-semibold not-italic underline decoration-indigo-500/30 underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText || t.hero.link_text}
        </a>
        {parts[1]}
      </>
    );
  };

  const renderContent = (content) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'p':
          return (
            <p key={index} className={item.className || 'mb-6'}>
              {renderTextWithLink(item.text, item.link_text)}
            </p>
          );
        case 'h3':
          return (
            <h3 key={index} id={item.id} className="text-2xl font-bold text-white mb-6 mt-16 tracking-tight">
              {item.text}
            </h3>
          );
        case 'quote':
          return <PullQuote key={index} quote={item.text} />;
        default:
          return null;
      }
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
      <ReadingProgressBar />
      
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 w-full h-16 border-b border-slate-900 bg-slate-950/80 backdrop-blur-md z-[90] flex items-center px-4 md:px-8 justify-between">
        <a 
          href="https://ai-strategic-report-april-2026.vercel.app" 
          className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-indigo-400 transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span className="hidden sm:inline tracking-widest uppercase">{t.nav.report}</span>
        </a>
        
        <div className="flex items-center gap-6">
          <LanguageSelector />
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="pt-32 pb-24">
        {/* Desktop Sidebar Navigation */}
        <ActNavigation />

        <main className="prose-container">
          {/* TITLE SECTION */}
          <section className="mb-24 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 uppercase leading-[1.1]">
              {t.hero.title_part1} <br />
              <span className="text-indigo-500 font-extrabold">{t.hero.title_accent}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-medium mb-12 italic tracking-tight">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-slate-500 font-medium mb-12">
              <div className="flex items-center gap-2">
                <span>{t.footer.author}</span>
              </div>
              <div className="hidden md:block text-slate-700">•</div>
              <div className="flex items-center gap-2">
                <span className="bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-[10px] text-slate-400 uppercase tracking-widest font-bold">{t.hero.read_time}</span>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/50 text-slate-400 text-sm md:text-base italic leading-relaxed shadow-xl shadow-slate-950/50 mb-12">
              {renderTextWithLink(t.hero.intro_quote, t.hero.link_text)}
            </div>

            <DiscoveryCallout />

          </section>

          {/* ACT I */}
          <article id="act1" className="mb-8">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-indigo-500 mb-8">{t.acts[0].title}</h2>
            <p className="mb-8 font-medium text-slate-100 italic md:text-xl">{t.acts[0].subtitle}</p>
            <div className="w-16 h-px bg-slate-800 mb-12" />
            {renderContent(t.acts[0].content)}
          </article>
        </main>

        {/* ACT II */}
        <ActDivider 
          act={t.acts[1].label.split(' \u2014 ')[0]} 
          title={t.acts[1].title.split(' \u2014 ')[1]} 
          id="act2" 
        />

        <main className="prose-container">
          <article id="act2-interior" className="my-12">
            <p className="mb-8 font-medium text-slate-100 md:text-xl italic">{t.acts[1].subtitle}</p>
            {renderContent(t.acts[1].content)}
          </article>
        </main>

        {/* ACT III */}
        <ActDivider 
          act={t.acts[2].label.split(' \u2014 ')[0]} 
          title={t.acts[2].title.split(' \u2014 ')[1]} 
          id="act3" 
        />

        <main className="prose-container">
          <article id="act3-interior" className="my-12">
            <p className="mb-8 font-medium text-slate-100 md:text-xl italic">{t.acts[2].subtitle}</p>
            {renderContent(t.acts[2].content)}
            
            <ShareRow 
              url="https://after-the-intelligence-flood.vercel.app" 
              title={`${t.hero.title_part1} ${t.hero.title_accent}`}
            />
          </article>
        </main>
      </div>

      {/* Footer */}
      <footer className="py-24 border-t border-slate-900 bg-slate-950">
        <div className="prose-container text-center">
          <div className="flex items-center justify-center gap-3 mb-8 opacity-50">
            <Cpu className="text-indigo-500" size={24} />
            <div className="h-4 w-px bg-slate-800" />
            <span className="text-xs font-black tracking-[0.3em] uppercase antialiased">
              {t.footer.tagline}
            </span>
          </div>
          <p className="text-sm text-slate-500 mb-8 max-w-sm mx-auto leading-relaxed">
            {t.footer.author}<br />
            {t.footer.license}
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-600">
            <a href="https://ai-strategic-report-april-2026.vercel.app" className="hover:text-indigo-400 transition-colors uppercase tracking-widest">{t.nav.report}</a>
            <a href="#" className="hover:text-indigo-400 transition-colors uppercase tracking-widest">{t.nav.research}</a>
            <a href="#" className="hover:text-indigo-400 transition-colors uppercase tracking-widest">{t.nav.methodology}</a>
            <a href="#" className="hover:text-indigo-400 transition-colors uppercase tracking-widest">{t.nav.privacy}</a>
          </div>
        </div>
      </footer>

      {/* Mobile Navigation */}
      <ActNavigationMobile />
    </div>
  );
};

const App = () => {
  return (
    <LanguageRouter>
      <AppContent />
    </LanguageRouter>
  );
};

export default App;
