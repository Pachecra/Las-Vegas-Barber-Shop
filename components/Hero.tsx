import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { Button } from './Button';
import { BUSINESS_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image - Selected to match the 'Red Chair / Checkered Floor' vibe of the screenshot */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503951914875-befbb71334d7?auto=format&fit=crop&q=80" 
          alt="Las Vegas Barber Shop Interior" 
          className="w-full h-full object-cover opacity-50 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          style={{ objectPosition: 'center bottom' }} 
        />
        {/* Dark Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-midnight-950/80 to-royal-900/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midnight-950/50 to-midnight-950" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl reveal active">
        <span className="inline-block py-1 px-3 border border-royal-500/50 rounded-full text-royal-400 text-xs tracking-[0.2em] uppercase mb-8 backdrop-blur-md bg-midnight-950/30">
          Heidelberg • Est. Premium
        </span>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight drop-shadow-2xl">
          Handwerk. <br/>
          <span className="text-royal-500 bg-clip-text text-transparent bg-gradient-to-r from-royal-400 to-royal-600">Charakter.</span> Stil.
        </h1>
        
        <p className="font-sans text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Schluss mit Massenabfertigung. Im Las Vegas Barber Shop erleben Sie klassischen Service, 
          der Ihren Anspruch an Qualität und Ruhe respektiert.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Button 
            href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} 
            external 
            variant="primary"
            icon={<MessageCircle size={20} />}
          >
            Termin per WhatsApp
          </Button>
          
          <Button 
            href={`tel:${BUSINESS_INFO.phone}`} 
            variant="outline"
            icon={<Phone size={20} />}
          >
            Jetzt Anrufen
          </Button>
        </div>
      </div>
    </section>
  );
};