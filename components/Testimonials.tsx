import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-midnight-900">
      <div className="container mx-auto px-4 max-w-6xl reveal">
        <div className="flex flex-col items-center mb-16">
          <div className="flex gap-1 text-royal-500 mb-4">
            {[1, 2, 3, 4, 5].map((i) => <Star key={i} fill="currentColor" size={24} />)}
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-white text-center">
            Vertrauen von über 200 Kunden
          </h2>
          <p className="text-gray-400 mt-4 text-center">4.7 Sterne Durchschnittsbewertung</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <div key={index} className="bg-midnight-950 p-8 rounded-xl border border-midnight-800 relative hover:border-royal-900 transition-all duration-300">
              <div className="flex gap-1 text-royal-600 mb-6 text-xs">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} fill="currentColor" size={14} />)}
              </div>
              <p className="text-gray-300 italic mb-8 font-serif leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-midnight-800 rounded-full flex items-center justify-center text-sm font-bold text-royal-400 border border-midnight-700">
                    {review.author.charAt(0)}
                </div>
                <span className="text-xs font-bold text-white uppercase tracking-widest">{review.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};