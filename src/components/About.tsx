import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3">About Me</h2>
          <div className="w-24 h-1 bg-slate-800 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <div className="relative order-2 md:order-1">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/images/architect-portrait.jpg" 
                alt="Lakshmi Gayathri" 
                className="w-full h-[550px] object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/images/lakshmi_profile.jpg";
                }}
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-slate-800 rounded-lg shadow-xl flex items-center justify-center transform rotate-3 transition-transform hover:rotate-0 duration-300">
              <p className="text-white text-center">
                <span className="block text-4xl font-bold">5+</span>
                <span className="text-sm uppercase tracking-wider">Years Experience</span>
              </p>
            </div>
          </div>
          
          {/* Content column */}
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-semibold mb-6 text-slate-800">Architect & Designer</h3>
            
            <p className="text-slate-600 mb-8 leading-relaxed text-justify">
            I'm a multifaceted Architect and Designer with over 5 years of professional experience, 
            combining strong technical expertise, creative design thinking, and a project management mindset. 
            Your work bridges traditional architectural principles with modern digital tools like AutoCAD, Revit, 
            and SketchUp to deliver precise, code-compliant, and client-aligned design solutions.
            </p>
            
            <p className="text-slate-600 mb-10 leading-relaxed text-justify">
              My design philosophy centers around understanding the unique needs of each client and 
              translating them into architectural solutions that exceed expectations. I believe in the 
              power of thoughtful design to transform how we live and interact with our environment.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px] duration-300">
                <h3 className="text-xl font-semibold mb-4 text-slate-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  My Approach
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-800 rounded-full mr-3"></span>
                    <span className="text-slate-600">Client-centered design</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-800 rounded-full mr-3"></span>
                    <span className="text-slate-600">Sustainable practices</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-800 rounded-full mr-3"></span>
                    <span className="text-slate-600">Innovative solutions</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-800 rounded-full mr-3"></span>
                    <span className="text-slate-600">Design precision</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-800 rounded-full mr-3"></span>
                    <span className="text-slate-600">Collaborative communication</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-800 rounded-full mr-3"></span>
                    <span className="text-slate-600">A balance of practical execution</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px] duration-300">
                <h3 className="text-xl font-semibold mb-4 text-slate-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Expertise
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-800 rounded-full mr-3"></span>
                    <span className="text-slate-600">Architectural Design</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-800 rounded-full mr-3"></span>
                    <span className="text-slate-600">Project Management</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-800 rounded-full mr-3"></span>
                    <span className="text-slate-600">Construction Site Execution</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-800 rounded-full mr-3"></span>
                    <span className="text-slate-600">Interior architecture</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-800 rounded-full mr-3"></span>
                    <span className="text-slate-600">Teaching & Mentoring</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-800 rounded-full mr-3"></span>
                    <span className="text-slate-600">Heritage and Environmental Design</span>
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