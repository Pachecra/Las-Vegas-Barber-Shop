import React from 'react';
import { REASONS } from '../constants';

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-midnight-950 border-y border-midnight-900">
      <div className="container mx-auto px-4 reveal">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">Warum Las Vegas Barber Shop?</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Qualität ist kein Zufall, sondern das Ergebnis von Erfahrung und Einstellung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REASONS.map((reason, index) => (
            <div key={index} className="group p-8 bg-midnight-900/30 hover:bg-midnight-900 transition-all duration-500 rounded-lg border border-transparent hover:border-royal-500/20 hover:-translate-y-2">
              <div className="mb-6 p-4 inline-block bg-midnight-950 group-hover:bg-royal-900/20 rounded-xl border border-midnight-800 group-hover:border-royal-500/50 transition-all duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-serif text-white mb-4">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};