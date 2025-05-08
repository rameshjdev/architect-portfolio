import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className={`font-serif text-2xl font-bold transition-colors duration-300 ${
          isScrolled ? 'text-white' : 'text-white'
        }`}>
          <a href="#home" className="flex items-center">
            <span className="mr-2 text-teal-400">Lakshmi</span>
            <span className="text-sm font-light tracking-widest uppercase">Gayathri</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`relative text-sm uppercase tracking-wider font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-300 hover:text-teal-400' : 'text-white hover:text-teal-400'
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-teal-400 hover:after:w-full after:transition-all after:duration-300`}
            >
              {item}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 flex flex-col gap-1.5 transition-all ${
            isScrolled ? 'text-white' : 'text-white'
          }`}>
            <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
          </div>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-slate-900/95 backdrop-blur-sm shadow-lg transition-all duration-300 overflow-hidden ${
        mobileMenuOpen ? 'max-h-60 py-4' : 'max-h-0'
      }`}>
        <nav className="flex flex-col px-6">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="py-3 text-gray-300 hover:text-teal-400 border-b border-slate-800 last:border-0"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
