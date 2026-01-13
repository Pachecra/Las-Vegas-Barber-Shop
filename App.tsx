import React from 'react';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

function App() {
  return (
    <main className="min-h-screen bg-midnight-950 text-gray-200">
      <Hero />
      <ProblemSolution />
      <Features />
      <Services />
      <Process />
      <Testimonials />
      <Location />
      <Footer />
      <StickyCTA />
    </main>
  );
}

export default App;