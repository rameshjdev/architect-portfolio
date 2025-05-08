import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Image column */}
        <div className="relative">
          <div className="bg-gray-200 w-full h-[500px] rounded-lg overflow-hidden">
            <img 
              src="/images/architect-portrait.jpg" 
              alt="Lakshmi Gayathri" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/images/lakshmi_profile.jpg";
              }}
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-800 flex items-center justify-center">
            <p className="text-white text-center">
              <span className="block text-3xl font-bold">5+</span>
              <span className="text-sm">Years Experience</span>
            </p>
          </div>
        </div>
        
        {/* Content column */}
        <div>
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-gray-800 mb-6"></div>
          
          <p className="text-gray-600 mb-6">
            I'm Lakshmi Gayathri, an architect passionate about creating spaces that blend functionality, 
            aesthetics, and sustainability. With over 5 years of experience in the field, I've worked on 
            a diverse range of projects from residential homes to commercial complexes.
          </p>
          
          <p className="text-gray-600 mb-8">
            My design philosophy centers around understanding the unique needs of each client and 
            translating them into architectural solutions that exceed expectations. I believe in the 
            power of thoughtful design to transform how we live and interact with our environment.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">My Approach</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-800 rounded-full mr-2"></span>
                  <span>Client-centered design</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-800 rounded-full mr-2"></span>
                  <span>Sustainable practices</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-800 rounded-full mr-2"></span>
                  <span>Innovative solutions</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Expertise</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-800 rounded-full mr-2"></span>
                  <span>Residential design</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-800 rounded-full mr-2"></span>
                  <span>Commercial spaces</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-800 rounded-full mr-2"></span>
                  <span>Interior architecture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}