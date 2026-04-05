import React from 'react';

const PullQuote = ({ quote }) => {
  return (
    <figure className="my-16 md:my-24 border-l-2 border-indigo-500 pl-8 md:pl-12 -ml-4 md:-ml-8 transition-all">
      <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-slate-100 tracking-tight italic">
        {quote}
      </blockquote>
    </figure>
  );
};

export default PullQuote;
