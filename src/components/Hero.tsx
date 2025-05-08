import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  
  // Array of background media (images and video) for the carousel
  const backgroundMedia = [
    { type: 'video', src: '/videos/architecture-showcase.mp4', poster: '/images/building1.jpg' },
    { type: 'image', src: '/images/building1.jpg' },
    { type: 'image', src: '/images/building2.jpg' },
    { type: 'image', src: '/images/building3.jpg' },
    { type: 'image', src: '/images/building4.jpg' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate media every 8 seconds (longer for video)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMediaIndex((prevIndex) => 
        prevIndex === backgroundMedia.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  // Function to handle dot click
  const handleDotClick = (index: number) => {
    setCurrentMediaIndex(index);
  };

  // Add state for video controls
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  // Function to toggle play/pause
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Function to open video in fullscreen
  const openFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax effect and media carousel */}
      {backgroundMedia.map((media, index) => (
        <div 
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentMediaIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            transform: `translateY(${scrollY * 0.15}px)`,
            transition: 'transform 0.1s ease-out, opacity 1s ease-in-out',
          }}
        >
          {media.type === 'video' ? (
            <video 
              ref={videoRef}
              muted 
              loop 
              playsInline
              poster={media.poster}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'brightness(1.05) contrast(1.05)' }}
            >
              <source src={media.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div 
              className="absolute inset-0 w-full h-full"
              style={{ 
                backgroundImage: `url('${media.src}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(1.05) contrast(1.05)'
              }}
            ></div>
          )}
        </div>
      ))}
      
      {/* Navigation dots for the carousel */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {backgroundMedia.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentMediaIndex 
                ? 'bg-teal-400 ring-2 ring-teal-400 ring-offset-2 ring-offset-slate-900/50' 
                : 'bg-white/30 hover:bg-teal-400/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Video controls (only shown when video is active) */}
      {backgroundMedia[currentMediaIndex].type === 'video' && (
        <div className="absolute bottom-44 left-1/2 transform -translate-x-1/2 z-30">
          <div className="px-4 py-3 bg-slate-900/70 text-white rounded-lg backdrop-blur-sm flex items-center gap-4 shadow-lg">
            <button 
              onClick={togglePlayPause}
              className="p-2.5 rounded-full bg-teal-500/90 hover:bg-teal-500 transition-colors flex items-center justify-center"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              )}
            </button>
            
            <button 
              onClick={openFullscreen}
              className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
              aria-label="View full screen"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </button>
            
            <span className="text-sm font-medium ml-1">Watch Video</span>
          </div>
        </div>
      )}
      
      {/* Sophisticated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/75 to-slate-700/60 z-10"></div>
      
      {/* Geometric pattern overlay for texture */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 z-10"></div>
      
      {/* Hero content container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text content - takes 7 columns on large screens */}
          <motion.div 
            className="lg:col-span-7 text-white space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block"
            >
              <span className="text-sm uppercase tracking-[0.25em] font-sans font-light border-b border-teal-400 pb-1">
                Architect & Interior Designer
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Lakshmi <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">Gayathri</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl font-sans font-light max-w-xl leading-relaxed text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Creating thoughtful architectural experiences that balance 
              <span className="relative inline-block px-1">
                <span className="relative z-10">aesthetics</span>
                <span className="absolute bottom-1 left-0 w-full h-2 bg-teal-500/20 rounded-sm"></span>
              </span>, 
              <span className="relative inline-block px-1">
                <span className="relative z-10">functionality</span>
                <span className="absolute bottom-1 left-0 w-full h-2 bg-teal-500/20 rounded-sm"></span>
              </span>, and 
              <span className="relative inline-block px-1">
                <span className="relative z-10">sustainability</span>
                <span className="absolute bottom-1 left-0 w-full h-2 bg-teal-500/20 rounded-sm"></span>
              </span>.
            </motion.p>
            
            <motion.div
              className="pt-4 flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <a 
                href="#projects" 
                className="group px-8 py-3 bg-teal-500 text-white font-medium rounded-sm hover:bg-teal-600 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-teal-500/20"
              >
                View Projects
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="#contact" 
                className="group px-8 py-3 border border-teal-400 text-white font-medium rounded-sm hover:bg-white hover:text-slate-900 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </a>
            </motion.div>
            
            {/* Professional stats */}
            <motion.div 
              className="pt-8 grid grid-cols-3 gap-4 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <div>
                <h3 className="text-3xl font-bold text-teal-400">5+</h3>
                <p className="text-sm text-gray-300">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-teal-400">40+</h3>
                <p className="text-sm text-gray-300">Projects Completed</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image showcase - takes 5 columns on large screens */}
          <motion.div 
            className="hidden lg:block lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative h-[500px] w-full rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="/images/villa.jpg" 
                  alt="Featured architectural project" 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white max-w-xs">
                  <p className="text-sm font-light text-teal-300">Featured Project</p>
                  <h3 className="text-xl font-medium">Modern Minimalist Villa</h3>
                  <p className="text-sm text-gray-300 mt-1">Award-winning residential design with sustainable features</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-teal-400"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-teal-400"></div>
              
              {/* Floating badge */}
              {/* <div className="absolute -right-6 top-1/4 bg-white text-slate-900 px-4 py-2 rounded-sm shadow-lg transform rotate-90 origin-left">
                <span className="text-xs font-medium uppercase tracking-wider">Est. 2018</span>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Elegant scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.8, 0.4, 0.8]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white text-xs uppercase tracking-widest mb-2 font-light">Explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
            <motion.div 
              className="w-1.5 h-1.5 bg-teal-400 rounded-full"
              animate={{ 
                y: [0, 12, 0]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 2
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Modern navigation dots */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 z-20 hidden lg:block">
        <div className="flex flex-col space-y-6">
          <a 
            href="#home" 
            className="group flex items-center space-x-4"
          >
            <span className="w-3 h-3 rounded-full bg-teal-400 ring-2 ring-teal-400 ring-offset-2 ring-offset-slate-900/50"></span>
            <span className="text-white text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">Home</span>
          </a>
          <a 
            href="#about" 
            className="group flex items-center space-x-4"
          >
            <span className="w-3 h-3 rounded-full bg-white/30 group-hover:bg-teal-400/50 transition-all"></span>
            <span className="text-white text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">About</span>
          </a>
          <a 
            href="#projects" 
            className="group flex items-center space-x-4"
          >
            <span className="w-3 h-3 rounded-full bg-white/30 group-hover:bg-teal-400/50 transition-all"></span>
            <span className="text-white text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">Projects</span>
          </a>
          <a 
            href="#contact" 
            className="group flex items-center space-x-4"
          >
            <span className="w-3 h-3 rounded-full bg-white/30 group-hover:bg-teal-400/50 transition-all"></span>
            <span className="text-white text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">Contact</span>
          </a>
        </div>
      </div>
    </section>
  );
}
