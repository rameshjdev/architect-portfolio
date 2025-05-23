import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-primary">About Me</h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 items-center">
          {/* Image column */}
          <div className="relative order-2 md:order-1">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/images/architect-portrait.jpg" 
                alt="Lakshmi Gayathri" 
                className="w-full h-[300px] sm:h-[400px] md:h-[550px] object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/images/lakshmi_profile.jpg";
                }}
              />
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -right-4 sm:-right-6 md:-right-8 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-primary rounded-lg shadow-xl flex items-center justify-center transform rotate-3 transition-transform hover:rotate-0 duration-300">
              <p className="text-white text-center">
                <span className="block text-2xl sm:text-3xl md:text-4xl font-bold">5+</span>
                <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">Years Experience</span>
              </p>
            </div>
          </div>
          
          {/* Content column */}
          <div className="order-1 md:order-2">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 md:mb-6 text-primary">Architect & Designer</h3>
            
            <p className="text-primary/80 mb-4 sm:mb-6 md:mb-8 leading-relaxed text-justify text-sm sm:text-base">
              I'm an Architect and Designer with over 5 years of professional experience, 
              combining strong technical expertise, creative design thinking, and a project management mindset. 
              My work bridges traditional architectural principles with modern digital tools like AutoCAD, Revit, 
              and SketchUp to deliver precise, code-compliant, and client-aligned design solutions.
            </p>
            
            <p className="text-primary/80 mb-6 sm:mb-8 md:mb-10 leading-relaxed text-justify text-sm sm:text-base">
              My design philosophy centers around understanding the unique needs of each client and 
              translating them into architectural solutions that exceed expectations. I believe in the 
              power of thoughtful design to transform how we live and interact with our environment.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px] duration-300 border border-primary/10 hover:border-accent/20">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 text-primary flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  My Approach
                </h3>
                <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base">
                  <li className="flex items-center">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-accent rounded-full mr-1.5 sm:mr-2 md:mr-3"></span>
                    <span className="text-primary/80">Client-centered design</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-accent rounded-full mr-1.5 sm:mr-2 md:mr-3"></span>
                    <span className="text-primary/80">Sustainable practices</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-accent rounded-full mr-1.5 sm:mr-2 md:mr-3"></span>
                    <span className="text-primary/80">Innovative solutions</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-accent rounded-full mr-1.5 sm:mr-2 md:mr-3"></span>
                    <span className="text-primary/80">Design precision</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-accent rounded-full mr-1.5 sm:mr-2 md:mr-3"></span>
                    <span className="text-primary/80">Collaborative communication</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-accent rounded-full mr-1.5 sm:mr-2 md:mr-3"></span>
                    <span className="text-primary/80">A balance of practical execution</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px] duration-300 border border-primary/10 hover:border-accent/20">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 text-primary flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Expertise
                </h3>
                <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base">
                  <li className="flex items-center">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-accent rounded-full mr-1.5 sm:mr-2 md:mr-3"></span>
                    <span className="text-primary/80">Architectural Design</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-accent rounded-full mr-1.5 sm:mr-2 md:mr-3"></span>
                    <span className="text-primary/80">Project Management</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-accent rounded-full mr-1.5 sm:mr-2 md:mr-3"></span>
                    <span className="text-primary/80">Construction Site Execution</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-accent rounded-full mr-1.5 sm:mr-2 md:mr-3"></span>
                    <span className="text-primary/80">Interior architecture</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-accent rounded-full mr-1.5 sm:mr-2 md:mr-3"></span>
                    <span className="text-primary/80">Teaching & Mentoring</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-accent rounded-full mr-1.5 sm:mr-2 md:mr-3"></span>
                    <span className="text-primary/80">Heritage and Environmental Design</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}