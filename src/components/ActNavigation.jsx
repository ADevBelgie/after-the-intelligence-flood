import React, { useState, useEffect } from 'react';

const acts = [
  { id: 'act1', title: 'Act I', subtitle: 'The Two Squeezes' },
  { id: 'act2', title: 'Act II', subtitle: 'The Reliability Reckoning' },
  { id: 'act3', title: 'Act III', subtitle: 'The Epistemic Floor' },
];

const ActNavigation = () => {
  const [activeAct, setActiveAct] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sidebar only after scrolling past the title
      const titleHeight = 600; // Rough estimate for now
      setIsVisible(window.scrollY > titleHeight);

      // Intersection Observer logic for active act
      const elements = acts.map(act => document.getElementById(act.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = elements.length - 1; i >= 0; i--) {
        const el = elements[i];
        if (el && scrollPosition >= el.offsetTop) {
          setActiveAct(acts[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-40 animate-in fade-in duration-500">
      <div className="flex flex-col gap-8 border-l border-slate-800 pl-6">
        {acts.map((act) => (
          <a
            key={act.id}
            href={`#${act.id}`}
            className="group flex flex-col gap-1 transition-all"
          >
            <span className={`text-[10px] uppercase tracking-[0.2em] transition-colors
              ${activeAct === act.id ? 'text-indigo-400 font-bold' : 'text-slate-500 group-hover:text-slate-400'}
            `}>
              {act.title}
            </span>
            <span className={`text-xs transition-colors
              ${activeAct === act.id ? 'text-slate-200' : 'text-slate-500 group-hover:text-slate-400'}
            `}>
              {act.subtitle}
            </span>
            {activeAct === act.id && (
              <div className="absolute left-0 w-[2px] h-10 bg-indigo-500 -translate-x-[25px] rounded-full shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
            )}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default ActNavigation;
