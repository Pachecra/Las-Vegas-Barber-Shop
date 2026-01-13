import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section className="py-24 bg-midnight-900 relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-midnight-950/20 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10 reveal">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-royal-500 text-xs font-bold tracking-widest uppercase mb-2 block">Unser Angebot</span>
            <h2 className="font-serif text-4xl text-white">Leistungen</h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm text-right md:text-left">
            Kein Schnickschnack. Nur das, was ein Mann für ein gepflegtes Äußeres braucht.
          </p>
        </div>

        <div className="space-y-6">
          {SERVICES.map((service, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-8 border-b border-midnight-800 hover:border-royal-500/50 hover:bg-midnight-800/50 transition-all duration-300 group rounded-lg">
              <h3 className="font-serif text-2xl text-gray-200 group-hover:text-royal-400 transition-colors w-full md:w-1/3 mb-4 md:mb-0">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base w-full md:w-1/2 font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-xs text-gray-500 uppercase tracking-widest opacity-60">Preise fair & transparent vor Ort</p>
        </div>
      </div>
    </section>
  );
};