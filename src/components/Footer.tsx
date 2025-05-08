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
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-md text-align-justify">
              Creating thoughtful architectural experiences that balance aesthetics, functionality, and sustainability. Transforming spaces into meaningful environments.
            </p>
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