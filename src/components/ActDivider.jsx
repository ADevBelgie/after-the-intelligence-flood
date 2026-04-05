import React from 'react';

const ActDivider = ({ act, title, id }) => {
  return (
    <div id={id} className="w-full py-24 md:py-32 my-12 border-y border-slate-800/50 bg-slate-900/10 transition-colors">
      <div className="prose-container flex flex-col items-center text-center">
        <span className="text-xs font-black uppercase tracking-[0.4em] text-indigo-500/80 mb-6 antialiased">
          {act}
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight leading-tight">
          {title}
        </h2>
        <div className="w-12 h-1 bg-slate-800 mt-12 rounded-full" />
      </div>
    </div>
  );
};

export default ActDivider;
