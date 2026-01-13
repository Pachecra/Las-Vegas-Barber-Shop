import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export const StickyCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full p-4 z-50 md:hidden bg-gradient-to-t from-midnight-950 via-midnight-950/95 to-transparent pb-6 pt-8 animate-fade-in-up">
      <a 
        href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
        className="flex items-center justify-center gap-3 w-full bg-royal-600 text-white font-bold py-4 rounded-sm shadow-2xl hover:bg-royal-500 transition-colors uppercase tracking-wider text-sm border border-royal-500/20"
      >
        <MessageCircle size={20} />
        Termin buchen (WhatsApp)
      </a>
    </div>
  );
};