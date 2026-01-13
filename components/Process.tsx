import React from 'react';
import { PROCESS } from '../constants';

export const Process: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-midnight-950">
      <div className="container mx-auto px-4 reveal">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-serif text-3xl md:text-4xl text-white">So einfach läuft es ab</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-midnight-800 to-transparent z-0" />

          {PROCESS.map((step, index) => (
            <div key={index} className="relative z-10 bg-midnight-950 md:bg-transparent pt-4 md:pt-0 group">
              <div className="w-16 h-16 bg-midnight-900 border border-royal-900 group-hover:border-royal-500 text-royal-500 flex items-center justify-center font-serif text-xl font-bold rounded-2xl mb-6 mx-auto md:mx-0 shadow-lg transition-all duration-500 transform group-hover:scale-110">
                {step.number}
              </div>
              <h3 className="text-white font-bold text-lg mb-3 text-center md:text-left group-hover:text-royal-400 transition-colors">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed text-center md:text-left">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};