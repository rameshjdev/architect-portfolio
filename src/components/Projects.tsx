import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  year: string;
  client: string;
  location: string;
  size: string;
  keyFeatures: string[];
  gallery: string[];
  longDescription: string;
}

export default function Projects() {
  // Sample project data - replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: "Residential And Community Center",
      image: "/images/community-center.jpg",
      description: "A vibrant Community center that serves as a hub for artistic expression and community gatherings.",
      year: "2020",
      client: "Sunitha",
      location: "Chikkamagaluru, India",
      size: "1.5 Acres",
      keyFeatures: [
        "Corss Ventilation",
        "Blend With Nature",
        "Natural Lighting And Ventilation",
        "Learning Spaces"
      ],
      gallery: [
        "/images/center1.jpg",
        "/images/center2.jpg",
        "/images/center3.jpg",
        "/images/center4.jpg",
        "/images/center5.jpg",
        "/images/center6.jpg",
        "/images/center7.jpg",
        "/images/center8.jpg",
        "/images/center9.jpg",
        "/images/center10.jpg",
        "/images/center11.jpg",
        "/images/center12.jpg",
        
      ],
      longDescription: "This site is located in Chikkamagaluru and has an area about 1.5 acres which accommodates a residential and community center.The comuunitey center is usewd as a anganwadi center to conduct skill development programs for the local community.The project was mainly designed using the existing trees and the courtyards provided acheives the purpose of corss ventilation and natural lighting and ventilation."
    },
    {
      id: 2,
      title: "Neeraja Srinivas Residency",
      image: "/images/elevation1.jpg",
      description: "The residence exemplifies modern urban living with a fusion of minimalist form, sustainable elements, and refined aesthetics.",
      year: "2020",
      client: "Neeraja Srinivas",
      location: "Vijayawada, India",
      size: "4,500 sq ft",
      keyFeatures: [
        "Modern Architecture",
        "Natural Lighting",
        "Natural ventilation design",
        "Energy Efficient",
        "Functional Design"
      ],
      gallery: [
          "/images/neeraja1.jpg",
          "/images/neeraja2.jpg",
          "/images/neeraja3.jpg",
          "/images/neeraja4.jpg",
          "/images/neeraja5.jpg",
          "/images/neeraja6.jpg",
          "/images/neeraja7.jpg",
          "/images/neeraja8.jpg",
          "/images/neeraja9.jpg",
          "/images/neeraja13.jpg",
          
      ],
      longDescription: "The residence exemplifies modern urban living with a fusion of minimalist form, sustainable elements, and refined aesthetics. The use of natural textures (wood, stone, and concrete finishes) juxtaposed with clean lines and sharp geometry creates a timeless architectural expression.The design maximizes functionality, spatial flow, and daylight penetration."
    },
    {
      id: 3,
      title: "Divisional Mescom Office",
      image: "/images/telengana_housing.jpeg",
      description: "This project is a high-density residential development designed to provide sustainable and affordable social housing.",
      year: "2019",
      client: "Telangana Government",
      location: "Kollur, Telangana, India",
      size: "111 Acres",
      keyFeatures: [
        "Sustainability",
        "Energy Efficient",
        "Blend Of Built and Green Spaces",
        "Self Sufficient Community Design"
      ],
      gallery: [
        "/images/site_analysis.jpeg",
        "/images/site_introduction.jpg",
        "/images/self_sufficient.jpeg",
      ],
      longDescription: "This project is a high-density residential development designed to provide sustainable and affordable social housing. It integrates livability, walkability, and community-centric design principles to meet the growing demand for equitable urban living.",
    },
    {
      id: 4,
      title: "Kollur 2BHK Housing",
      image: "/images/telengana_housing.jpeg",
      description: "This project is a high-density residential development designed to provide sustainable and affordable social housing.",
      year: "2017",
      client: "Telangana Government",
      location: "Kollur, Telangana, India",
      size: "111 Acres",
      keyFeatures: [
        "Sustainability",
        "Energy Efficient",
        "Blend Of Built and Green Spaces",
        "Self Sufficient Community Design"
      ],
      gallery: [
        "/images/site_analysis.jpeg",
        "/images/site_introduction.jpg",
        "/images/self_sufficient.jpeg",
      ],
      longDescription: "This project is a high-density residential development designed to provide sustainable and affordable social housing. It integrates livability, walkability, and community-centric design principles to meet the growing demand for equitable urban living.",
    },
  ];
  
  // State for modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add state for gallery carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Add state for lightbox
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Function to handle next image
  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === selectedProject.gallery.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Function to handle previous image
  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? selectedProject.gallery.length - 1 : prevIndex - 1
      );
    }
  };

  // Function to open modal with project details
  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
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

  // Function to open lightbox
  const openLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Function to close lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-20 bg-primary/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-primary/80 font-sans">
            Explore my diverse portfolio of architectural projects, each designed with precision, 
            creativity, and a deep understanding of spatial dynamics.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="flex overflow-x-auto pb-8 gap-8 snap-x snap-mandatory scrollbar-hide">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="group flex-none w-[350px] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-accent/20 snap-center"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <p className="text-white mt-2 text-sm">{project.year}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-primary/80 text-sm font-sans text-justify">
                  {project.description}
                </p>
                <div className="mt-4 pt-4 border-t border-primary/10">
                  <button
                    onClick={() => openProjectDetails(project)}
                    className="inline-flex items-center text-accent text-sm font-medium hover:text-accent/80 transition-colors"
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

        {/* Project Details Modal */}
        <AnimatePresence>
          {isModalOpen && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-primary/95 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-2xl"
              >
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 text-primary hover:text-accent transition-colors z-10"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Project content */}
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left column - Gallery */}
                    <div className="space-y-4">
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <img
                          src={selectedProject.gallery[currentImageIndex]}
                          alt={selectedProject.title}
                          className="w-full h-full object-cover cursor-pointer"
                          onClick={openLightbox}
                        />
                        {/* Navigation arrows */}
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/80 text-white hover:bg-primary transition-colors"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/80 text-white hover:bg-primary transition-colors"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                      {/* Thumbnail gallery */}
                      <div className="grid grid-cols-5 gap-2">
                        {selectedProject.gallery.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`aspect-video rounded-md overflow-hidden ${
                              index === currentImageIndex
                                ? 'ring-2 ring-accent'
                                : 'ring-1 ring-primary/20'
                            }`}
                          >
                            <img
                              src={image}
                              alt={`${selectedProject.title} - Image ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Right column - Project details */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-serif font-bold text-primary mb-2">
                          {selectedProject.title}
                        </h3>
                        <p className="text-primary/80">{selectedProject.longDescription}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-primary/60 mb-1">Year</h4>
                          <p className="text-primary">{selectedProject.year}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-primary/60 mb-1">Client</h4>
                          <p className="text-primary">{selectedProject.client}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-primary/60 mb-1">Location</h4>
                          <p className="text-primary">{selectedProject.location}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-primary/60 mb-1">Size</h4>
                          <p className="text-primary">{selectedProject.size}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-primary mb-3">Key Features</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {selectedProject.keyFeatures.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-center text-primary/80"
                            >
                              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lightbox */}
        <AnimatePresence>
          {isLightboxOpen && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-primary/95 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-6xl aspect-video"
              >
                <button
                  onClick={closeLightbox}
                  className="absolute -top-12 right-0 p-2 text-white hover:text-accent transition-colors z-10"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <img
                  src={selectedProject.gallery[currentImageIndex]}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain rounded-lg"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}