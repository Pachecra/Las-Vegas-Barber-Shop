import React from 'react';
import { Check, X } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-midnight-950">
      <div className="container mx-auto px-4 reveal">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* Problem Side */}
          <div className="order-2 md:order-1 opacity-80">
            <h3 className="font-serif text-2xl md:text-3xl text-gray-400 mb-8 border-l-4 border-midnight-800 pl-6">
              Kennen Sie das?
            </h3>
            <ul className="space-y-8">
              <li className="flex items-start gap-4 group">
                <X className="text-red-900/70 mt-1 shrink-0 group-hover:text-red-700 transition-colors" size={24} />
                <div>
                  <strong className="block text-gray-300 group-hover:text-white transition-colors">Lange Wartezeiten trotz Termin</strong>
                  <p className="text-sm text-gray-500">Ihre Zeit ist zu wertvoll, um im Wartebereich Zeitschriften zu lesen.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <X className="text-red-900/70 mt-1 shrink-0 group-hover:text-red-700 transition-colors" size={24} />
                <div>
                  <strong className="block text-gray-300 group-hover:text-white transition-colors">Hektische Abfertigung</strong>
                  <p className="text-sm text-gray-500">In 15 Minuten durchgeschleust. Das Ergebnis: Unsaubere Kanten.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <X className="text-red-900/70 mt-1 shrink-0 group-hover:text-red-700 transition-colors" size={24} />
                <div>
                  <strong className="block text-gray-300 group-hover:text-white transition-colors">Wechselnde Qualität</strong>
                  <p className="text-sm text-gray-500">Jedes Mal ein anderer Friseur, jedes Mal ein anderes (Glücks-)Ergebnis.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Solution Side */}
          <div className="order-1 md:order-2 bg-midnight-900 p-8 md:p-12 rounded-2xl border border-midnight-800 shadow-[0_0_50px_rgba(59,130,246,0.05)] relative hover:shadow-[0_0_50px_rgba(59,130,246,0.1)] transition-all duration-500">
            <div className="absolute -top-3 -right-3 w-20 h-20 bg-royal-500/10 rounded-full blur-2xl"></div>
            
            <span className="text-royal-500 text-sm font-bold tracking-widest uppercase mb-2 block">Die Alternative</span>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">
              Konsistenz & Ruhe im <br/>
              <span className="italic text-royal-400">Las Vegas Barber Shop</span>
            </h2>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-royal-900/50 flex items-center justify-center shrink-0 mt-1">
                    <Check className="text-royal-400" size={14} />
                </div>
                <div>
                  <strong className="block text-white">Ihr Termin gehört Ihnen</strong>
                  <p className="text-sm text-gray-400">Pünktlicher Start. Volle Aufmerksamkeit. Kein Stress.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-royal-900/50 flex items-center justify-center shrink-0 mt-1">
                    <Check className="text-royal-400" size={14} />
                </div>
                <div>
                  <strong className="block text-white">Präzision statt Tempo</strong>
                  <p className="text-sm text-gray-400">Wir schneiden so lange, bis es perfekt ist. Nicht bis die Uhr klingelt.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-royal-900/50 flex items-center justify-center shrink-0 mt-1">
                    <Check className="text-royal-400" size={14} />
                </div>
                <div>
                  <strong className="block text-white">Persönlicher Ansprechpartner</strong>
                  <p className="text-sm text-gray-400">Wir kennen Ihren Kopf, Ihren Stil und Ihre Vorlieben.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};