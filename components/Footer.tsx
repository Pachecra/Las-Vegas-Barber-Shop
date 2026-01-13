import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { Button } from './Button';
import { BUSINESS_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-midnight-950 pt-16 md:pt-24 pb-12 border-t border-midnight-900">
      <div className="container mx-auto px-4 text-center reveal">

        {/* Final CTA */}
        <div className="max-w-2xl mx-auto mb-12 md:mb-20">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
            Bereit für ein Upgrade?
          </h2>
          <p className="text-gray-400 mb-10 font-light">
            Qualität spricht sich herum. Sichern Sie sich Ihren Termin rechtzeitig.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              external
              variant="primary"
              icon={<MessageCircle size={20} />}
            >
              Termin vereinbaren
            </Button>
            <Button
              href={`tel:${BUSINESS_INFO.phone}`}
              variant="secondary"
              icon={<Phone size={20} />}
            >
              {BUSINESS_INFO.phone}
            </Button>
          </div>
        </div>

        {/* Legal / Copyright */}
        <div className="border-t border-midnight-900 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-royal-500 transition-colors">Impressum</a>
            <a href="#" className="hover:text-royal-500 transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};