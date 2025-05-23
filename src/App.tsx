import Header from './components/Header';
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen w-full font-sans text-slate-800 overflow-x-hidden">
      <Header />
      <main className="relative w-full">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
