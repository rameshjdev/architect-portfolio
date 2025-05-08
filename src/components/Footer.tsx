import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 mix-blend-soft-light"></div>
      
      {/* Accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-teal-500 via-teal-400 to-emerald-400"></div>
      
      <div className="container mx-auto px-6 py-16">
        {/* Main footer content with animation */}
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          {/* Column 1: Branding */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <div className="flex items-center mb-6">
              <h3 className="text-2xl font-serif font-medium text-white">
                <span className="text-teal-400">Lakshmi</span> Gayathri
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-md">
              Creating thoughtful architectural experiences that balance aesthetics, functionality, and sustainability. Transforming spaces into meaningful environments.
            </p>
            
            {/* Social links with hover effects */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.linkedin.com/in/lakshmi-gayathri-bayana-9128129b/" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-800/50 text-slate-400 hover:bg-teal-500/20 hover:text-teal-400 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-800/50 text-slate-400 hover:bg-teal-500/20 hover:text-teal-400 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-800/50 text-slate-400 hover:bg-teal-500/20 hover:text-teal-400 transition-all duration-300"
                aria-label="Behance"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                </svg>
              </a>
            </div>
          </motion.div>
          
          {/* Column 2: Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <h4 className="text-sm font-medium mb-6 text-white uppercase tracking-wider after:content-[''] after:block after:w-8 after:h-0.5 after:bg-teal-400 after:mt-2">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="text-slate-400 hover:text-teal-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-teal-400 mr-2 transition-colors"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-teal-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-teal-400 mr-2 transition-colors"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-teal-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-teal-400 mr-2 transition-colors"></span>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-teal-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-teal-400 mr-2 transition-colors"></span>
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
          
          {/* Column 3: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <h4 className="text-sm font-medium mb-6 text-white uppercase tracking-wider after:content-[''] after:block after:w-8 after:h-0.5 after:bg-teal-400 after:mt-2">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start text-slate-400 group">
                <div className="mt-1 mr-3 p-2 rounded-md bg-slate-800/50 text-teal-400 group-hover:bg-teal-500/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-white text-sm mb-1">Email</span>
                  <a href="mailto:gayathriarch2024@gmail.com" className="hover:text-teal-400 transition-colors">gayathriarch2024@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start text-slate-400 group">
                <div className="mt-1 mr-3 p-2 rounded-md bg-slate-800/50 text-teal-400 group-hover:bg-teal-500/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-white text-sm mb-1">Phone</span>
                  <a href="tel:+17049044900" className="hover:text-teal-400 transition-colors">+1 (704) 904-4900</a>
                </div>
              </li>
              <li className="flex items-start text-slate-400 group">
                <div className="mt-1 mr-3 p-2 rounded-md bg-slate-800/50 text-teal-400 group-hover:bg-teal-500/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-white text-sm mb-1">Location</span>
                  <span>Charlotte, NC</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
        
        {/* Bottom section with copyright and back to top */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-slate-500 text-sm mb-4 md:mb-0"
          >
            © {currentYear} <span className="text-teal-400">Lakshmi Gayathri</span>. All rights reserved.
          </motion.div>
          
          <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            href="#home"
            className="group flex items-center text-sm text-slate-500 hover:text-teal-400 transition-colors"
          >
            <span className="mr-2">Back to top</span>
            <span className="p-1 rounded-full border border-slate-700 group-hover:border-teal-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;