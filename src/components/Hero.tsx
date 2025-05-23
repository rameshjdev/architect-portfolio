import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Array of background media (images and video) for the carousel
  const backgroundMedia = [
    { type: 'video', src: '/videos/architecture-showcase.mp4', poster: '/images/building1.jpg' },
    { type: 'image', src: '/images/neeraja1.jpg' },
    { type: 'image', src: '/images/neeraja2.jpg' },
    { type: 'image', src: '/images/neeraja3.jpg' },
    { type: 'image', src: '/images/neeraja4.jpg' },

  ];

  // Add state for video controls
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const fullscreenVideoRef = React.useRef<HTMLVideoElement>(null);

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
      if (!isVideoModalOpen) {
        setCurrentMediaIndex((prevIndex) => 
          prevIndex === backgroundMedia.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isVideoModalOpen]);

  // Function to handle dot click
  const handleDotClick = (index: number) => {
    setCurrentMediaIndex(index);
  };

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

  // Function to open video modal
  const openVideoModal = () => {
    setIsVideoModalOpen(true);
    // Pause the background carousel
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Function to close video modal
  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    if (fullscreenVideoRef.current) {
      fullscreenVideoRef.current.pause();
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax effect and media carousel */}
      <div ref={carouselRef} className="absolute inset-0 z-0">
        {backgroundMedia.map((media, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
              index === currentMediaIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              transform: `translateY(${scrollY * 0.15}px)`,
              transition: 'transform 0.1s ease-out, opacity 1.5s ease-in-out',
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
      </div>
      
      {/* Enhanced gradient overlay with more depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/80 to-slate-700/70 z-10"></div>
      
      {/* Geometric pattern overlay with improved texture */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-8 mix-blend-soft-light z-10"></div>
      
      {/* Animated light beam effect */}
      <div className="absolute inset-0 overflow-hidden z-10 opacity-20 pointer-events-none">
        <motion.div 
          className="absolute -inset-[10%] bg-gradient-to-r from-transparent via-teal-400/30 to-transparent rotate-12 blur-3xl"
          animate={{ 
            x: ['-100%', '200%'],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 15,
            ease: "linear"
          }}
        />
      </div>
      
      {/* Navigation dots for the carousel with improved styling */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-30 flex space-x-4">
        {backgroundMedia.map((media, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`group relative w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentMediaIndex 
                ? 'bg-teal-400 ring-2 ring-teal-400 ring-offset-2 ring-offset-slate-900/50' 
                : 'bg-white/30 hover:bg-teal-400/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {media.type === 'video' && (
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900/80 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-sm">
                Video
              </span>
            )}
          </button>
        ))}
      </div>
      
      {/* Video controls with enhanced design */}
      {backgroundMedia[currentMediaIndex].type === 'video' && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-44 left-1/2 transform -translate-x-1/2 z-30"
        >
          <div className="px-5 py-3 bg-slate-900/80 text-white rounded-xl backdrop-blur-md flex items-center gap-4 shadow-xl border border-white/10">
            <button 
              onClick={togglePlayPause}
              className="p-3 rounded-full bg-teal-500 hover:bg-teal-400 transition-colors flex items-center justify-center shadow-lg shadow-teal-500/20"
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
              onClick={openVideoModal}
              className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
              aria-label="Watch in fullscreen"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </button>
            
            <div className="flex flex-col">
              <span className="text-sm font-medium">Watch Showcase</span>
              <span className="text-xs text-teal-300">Click for fullscreen experience</span>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video"
            >
              <button 
                onClick={closeVideoModal}
                className="absolute -top-12 right-0 p-2 text-white hover:text-teal-400 transition-colors z-10"
                aria-label="Close video"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <video 
                ref={fullscreenVideoRef}
                className="w-full h-full object-cover rounded-lg shadow-2xl"
                controls
                autoPlay
                src={backgroundMedia[0].src}
                poster={backgroundMedia[0].poster}
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Hero content container with improved layout */}
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
                Architect &  Designer
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
                href="/docs/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-3 border border-teal-400 text-white font-medium rounded-sm hover:bg-white hover:text-slate-900 transition-all duration-300 relative overflow-hidden flex items-center gap-2"
              >
                <span className="relative z-10">Download CV</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 relative z-10" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                </svg>
                <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </a>
            </motion.div>
            
            {/* Professional stats with enhanced design */}
            <motion.div 
              className="pt-8 grid grid-cols-3 gap-4 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <div className="group">
                <h3 className="text-3xl font-bold text-teal-400 group-hover:text-teal-300 transition-colors">5+</h3>
                <p className="text-sm text-gray-300">Years Experience</p>
              </div>
              <div className="group">
                <h3 className="text-3xl font-bold text-teal-400 group-hover:text-teal-300 transition-colors">10+</h3>
                <p className="text-sm text-gray-300">Projects Completed</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image showcase with enhanced design */}
          <motion.div 
            className="hidden lg:block lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="relative">
              {/* Main image with enhanced styling */}
              <div className="relative h-[500px] w-full rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="/images/elevation2.jpg" 
                  alt="Featured architectural project" 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white max-w-xs">
                </div>
              </div>
              
              {/* Enhanced decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-teal-400"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-teal-400"></div>
              
              {/* Animated accent element */}
              <motion.div 
                className="absolute -right-8 top-1/4 h-32 w-2 bg-gradient-to-b from-teal-400 to-emerald-300 rounded-full"
                animate={{ 
                  height: ['8rem', '10rem', '8rem'],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Elegant scroll indicator with enhanced animation */}
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

      {/* Modern navigation dots with enhanced interaction */}
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
