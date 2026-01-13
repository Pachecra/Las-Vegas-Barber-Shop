import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export const Location: React.FC = () => {
  return (
    <section className="py-0 md:py-24 bg-midnight-950">
      <div className="container mx-auto px-0 md:px-4 reveal">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 bg-midnight-900 md:rounded-2xl overflow-hidden border-y md:border border-midnight-800 shadow-2xl">

          {/* Interactive Google Map */}
          <div className="h-[300px] md:h-auto bg-midnight-800 relative group overflow-hidden min-h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.064562215162!2d8.6724!3d49.4122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797c1050adc19c3%3A0x6295556276701742!2sNightingalestra%C3%9Fe%201%2C%2069115%20Heidelberg!5e0!3m2!1sde!2sde!4v1709825432100!5m2!1sde!2sde&maptype=roadmap&style=feature:all|element:labels.text.fill|color:0x746855&style=feature:all|element:labels.text.stroke|visibility:off&style=feature:administrative.locality|element:labels.text.fill|color:0xd59563&style=feature:poi|element:labels.text.fill|color:0xd59563&style=feature:poi.park|element:geometry|color:0x263c3f&style=feature:poi.park|element:labels.text.fill|color:0x6b9a76&style=feature:road|element:geometry|color:0x38414e&style=feature:road|element:geometry.stroke|color:0x212a37&style=feature:road.highway|element:geometry|color:0x746855&style=feature:road.highway|element:geometry.stroke|color:0x1f2835&style=feature:road.highway|element:labels.text.fill|color:0xf3d19c&style=feature:transit|element:geometry|color:0x2f3948&style=feature:transit.station|element:labels.text.fill|color:0xd59563&style=feature:water|element:geometry|color:0x17263c&style=feature:water|element:labels.text.fill|color:0x515c6d&style=feature:water|element:labels.text.stroke|color:0x17263c"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.8)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="hover:filter-none transition-all duration-700"
              title="Las Vegas Barber Shop Standort"
            ></iframe>
            {/* Overlay hint to interact */}
            <div className="absolute bottom-4 right-4 bg-midnight-950/80 backdrop-blur-sm px-3 py-1 text-xs text-royal-400 rounded border border-royal-900 pointer-events-none">
              Interaktive Karte
            </div>
          </div>

          {/* Info */}
          <div className="p-6 sm:p-8 md:p-16 flex flex-col justify-center">
            <span className="text-royal-500 text-xs font-bold tracking-widest uppercase mb-6 block">Ihr Weg zu uns</span>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-10">{BUSINESS_INFO.name}</h2>

            <div className="space-y-10">
              <div className="flex gap-5 group">
                <div className="p-3 bg-midnight-800 rounded-lg group-hover:bg-royal-900/30 transition-colors">
                  <MapPin className="text-royal-500 shrink-0" />
                </div>
                <div>
                  <strong className="text-white block mb-2 text-lg">Adresse</strong>
                  <p className="text-gray-400 font-light">
                    {BUSINESS_INFO.address.split(',')[0]}<br />
                    {BUSINESS_INFO.address.split(',')[1]}
                  </p>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="p-3 bg-midnight-800 rounded-lg group-hover:bg-royal-900/30 transition-colors">
                  <Clock className="text-royal-500 shrink-0" />
                </div>
                <div>
                  <strong className="text-white block mb-2 text-lg">Öffnungszeiten</strong>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    Mo - Fr: <span className="text-gray-200">10:00 - 19:00 Uhr</span><br />
                    Sa: <span className="text-gray-200">10:00 - 16:00 Uhr</span><br />
                    <span className="text-royal-400/70">Sonntag geschlossen</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-midnight-800">
              <p className="text-sm text-gray-500">
                <span className="text-royal-500 font-bold">Hinweis:</span> Parkmöglichkeiten in unmittelbarer Umgebung vorhanden.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};