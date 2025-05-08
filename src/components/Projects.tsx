import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  year: string;
}

export default function Projects() {
  // Sample project data - replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: "Modern Residential Complex",
      category: "Residential",
      image: "/images/modern_residential.jpg",
      description: "A contemporary residential complex designed with sustainability in mind, featuring open spaces and natural light.",
      year: "2023"
    },
    {
      id: 2,
      title: "Urban Office Tower",
      category: "Commercial",
      image: "/images/urban_office_tower.jpg",
      description: "A sleek office tower in the heart of the city, balancing functionality with aesthetic appeal.",
      year: "2022"
    },
    {
      id: 3,
      title: "Cultural Arts Center",
      category: "Public",
      image: "/images/cultural_architecture_center.jpg",
      description: "A vibrant cultural center that serves as a hub for artistic expression and community gatherings.",
      year: "2021"
    },
  ];

  // Categories for filtering
  const categories = ["All", "Residential", "Commercial", "Public"];
  const [activeCategory, setActiveCategory] = React.useState("All");
  
  // State for modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtered projects based on active category
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
    
  // Function to open modal with project details
  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600 font-sans">
            Explore my diverse portfolio of architectural projects, each designed with precision, 
            creativity, and a deep understanding of spatial dynamics.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-teal-400 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <span className="text-xs font-medium text-teal-400 bg-slate-900/50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <p className="text-white mt-2 text-sm">{project.year}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-slate-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm font-sans">
                  {project.description}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => openProjectDetails(project)}
                    className="inline-flex items-center text-teal-500 text-sm font-medium hover:text-teal-600 transition-colors"
                  >
                    View Project Details
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Project Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 text-slate-800 hover:bg-white hover:text-slate-900 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Hero image */}
              <div className="relative h-72 md:h-96 w-full">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-6 md:p-8">
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-teal-400 bg-slate-900/50 rounded-full">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-slate-200 text-sm md:text-base">Completed in {selectedProject.year}</p>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Main content */}
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Project Overview</h3>
                    <p className="text-slate-600 mb-6">
                      {selectedProject.description}
                    </p>
                    <p className="text-slate-600 mb-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
                    </p>
                    
                    {/* Project gallery */}
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Project Gallery</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <img src={selectedProject.image} alt="Gallery 1" className="rounded-lg w-full h-40 object-cover" />
                      <img src={selectedProject.image} alt="Gallery 2" className="rounded-lg w-full h-40 object-cover" />
                      <img src={selectedProject.image} alt="Gallery 3" className="rounded-lg w-full h-40 object-cover" />
                      <img src={selectedProject.image} alt="Gallery 4" className="rounded-lg w-full h-40 object-cover" />
                    </div>
                  </div>
                  
                  {/* Sidebar */}
                  <div className="md:col-span-1">
                    <div className="bg-slate-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-slate-800 mb-4">Project Details</h3>
                      <ul className="space-y-3">
                        <li className="flex justify-between">
                          <span className="text-slate-500">Client:</span>
                          <span className="text-slate-800 font-medium">ABC Corporation</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-slate-500">Location:</span>
                          <span className="text-slate-800 font-medium">New York, NY</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-slate-500">Year:</span>
                          <span className="text-slate-800 font-medium">{selectedProject.year}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-slate-500">Size:</span>
                          <span className="text-slate-800 font-medium">12,500 sq ft</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-slate-500">Category:</span>
                          <span className="text-slate-800 font-medium">{selectedProject.category}</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-slate-800 mb-4">Key Features</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-slate-600">Sustainable materials</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-slate-600">Energy-efficient design</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-slate-600">Natural lighting optimization</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-slate-600">Smart home integration</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Call to action */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <p className="text-slate-600 mb-4 sm:mb-0">
                      Interested in a similar project? Let's discuss your ideas.
                    </p>
                    <a
                      href="#contact"
                      onClick={closeModal}
                      className="inline-flex items-center justify-center px-6 py-3 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 transition-colors"
                    >
                      Contact Us
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}