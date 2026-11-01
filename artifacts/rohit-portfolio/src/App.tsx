import React from 'react';
import { ThemeProvider, useTheme } from '@/context/ThemeContext';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { TechStack } from '@/components/TechStack';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { Experience } from '@/components/Experience';
import { WhatIDo } from '@/components/WhatIDo';
import { CurrentlyLearning } from '@/components/CurrentlyLearning';
import { PersonalitySection } from '@/components/PersonalitySection';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function PortfolioContent() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      isDark
        ? 'bg-[#070A12] text-[#F1F5F9] selection:bg-cyan-500/30 selection:text-cyan-200'
        : 'bg-[#FAF9F7] text-[#18181B] selection:bg-rose-500/20 selection:text-rose-900'
    }`}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Tech Stack */}
        <TechStack />

        {/* 4. Featured Projects */}
        <FeaturedProjects />

        {/* 5. Experience / Achievements */}
        <Experience />

        {/* 6. What I Do */}
        <WhatIDo />

        {/* 7. Currently Learning */}
        <CurrentlyLearning />

        {/* 8. Personality Section */}
        <PersonalitySection />

        {/* 9. Contact Section */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}

export default App;