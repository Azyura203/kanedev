import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import KaneDev from './components/KaneDev';
import EchOS from './components/EchOS';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Terminal from './components/Terminal';
import { useState, useEffect } from 'react';

function App() {
  const [showEchOS, setShowEchOS] = useState(false);
  
  // Check if the URL has #echos
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash === '#echos' || hash === '#echOS') {
        setShowEchOS(true);
      } else {
        setShowEchOS(false);
      }
    };

    // Check on mount and when hash changes
    checkHash(); // Check immediately
    window.addEventListener('hashchange', checkHash);

    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, []);

  if (showEchOS) {
    return (
      <ThemeProvider>
        <div className="min-h-screen bg-background text-foreground">
        <EchOS />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        
        <main>
          <section id="home">
            <Hero />
          </section>
          
          <section id="about">
            <About />
          </section>
          
          <section id="projects">
            <Projects />
          </section>
          
          <section id="kanedev">
            <KaneDev />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </main>
        
        <Footer />
        <Terminal />
      </div>
    </ThemeProvider>
  );
}

export default App;