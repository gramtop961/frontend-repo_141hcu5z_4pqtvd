import React from 'react';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Showcase from './components/Showcase.jsx';
import ContactCTA from './components/ContactCTA.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0b10] text-white antialiased">
      <Hero />
      <Services />
      <Showcase />
      <ContactCTA />
    </div>
  );
}

export default App;
