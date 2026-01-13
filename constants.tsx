import { ServiceItem, Review, ProcessStep } from './types';
import { Scissors, Clock, Award, ShieldCheck } from 'lucide-react';

export const BUSINESS_INFO = {
  name: "Las Vegas Barber Shop",
  address: "Nightingalestraße 1, 69115 Heidelberg",
  phone: "+491234567890", // Placeholder - owner to replace
  whatsapp: "491234567890", // Placeholder - owner to replace
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Las+Vegas+Barber+Shop+Nightingalestraße+1+69115+Heidelberg"
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Der Herrenhaarschnitt",
    description: "Klassisch oder modern. Perfekt abgestimmt auf Ihre Kopfform und Haarstruktur. Inklusive Haarwäsche und Styling."
  },
  {
    title: "Bartpflege & Rasur",
    description: "Präzise Konturen oder klassische Nassrasur mit heißen Kompressen. Pflege, die man sieht und fühlt."
  },
  {
    title: "Old School Service",
    description: "Traditionelles Handwerk. Keine Hektik, sondern volle Aufmerksamkeit für das Detail."
  }
];

export const REASONS = [
  {
    icon: <Clock className="w-6 h-6 text-royal-500" />,
    title: "Keine Massenabfertigung",
    text: "Wir nehmen uns Zeit. Ihr Termin gehört Ihnen. Keine Unterbrechungen, keine Eile."
  },
  {
    icon: <Scissors className="w-6 h-6 text-royal-500" />,
    title: "Meisterhafte Präzision",
    text: "Handwerk statt Fließband. Wir verstehen klassische Schnitte und moderne Ansprüche."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-royal-500" />,
    title: "Ruhige Atmosphäre",
    text: "Ein Ort zum Abschalten. Genießen Sie den Service in einem maskulinen, entspannten Ambiente."
  }
];

export const PROCESS: ProcessStep[] = [
  {
    number: "01",
    title: "Kontakt",
    description: "Kurze Nachricht per WhatsApp oder Anruf. Wir finden zeitnah einen Slot."
  },
  {
    number: "02",
    title: "Beratung",
    description: "Sie kommen an. Wir besprechen kurz und präzise, was zu Ihnen passt."
  },
  {
    number: "03",
    title: "Handwerk",
    description: "Lehnen Sie sich zurück. Wir arbeiten mit Ruhe und Präzision."
  },
  {
    number: "04",
    title: "Ergebnis",
    description: "Perfekter Sitz. Kein Nachbessern zu Hause nötig. Sie gehen zufrieden."
  }
];

export const REVIEWS: Review[] = [
  {
    author: "Markus W.",
    rating: 5,
    text: "Endlich ein Friseur, der sein Handwerk versteht. Keine Hektik, super Ergebnis. Genau das, was ich gesucht habe."
  },
  {
    author: "Thomas B.",
    rating: 5,
    text: "Top Atmosphäre, sehr professionell. Hier wird sich noch Zeit genommen. Der Schnitt sitzt auch nach Wochen noch."
  },
  {
    author: "Alexander K.",
    rating: 5,
    text: "Bester Barber in Heidelberg. Klassisch, ruhig, gut. Wer Qualität sucht, ist hier richtig."
  }
];