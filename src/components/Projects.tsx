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
  pdfFiles?: { name: string; url: string }[];
}

export default function Projects() {
  // Sample project data - replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
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
      longDescription: "The residence exemplifies modern urban living with a fusion of minimalist form, sustainable elements, and refined aesthetics. The use of natural textures (wood, stone, and concrete finishes) juxtaposed with clean lines and sharp geometry creates a timeless architectural expression.The design maximizes functionality, spatial flow, and daylight penetration, integrating indoor-outdoor harmony through balconies, vertical garden walls, and planter beds."
    },
    {
      id: 2,
      title: "Telangana Housing Society",
      image: "/images/telengana_housing.jpeg",
      description: "This project is a high-density residential development designed to provide sustainable and affordable urban housing.",
      year: "2022",
      client: "TechCorp Solutions",
      location: "Mumbai, India",
      size: "85,000 sq ft",
      keyFeatures: [
        "LEED Platinum certified",
        "Automated building management",
        "Green roof system",
        "Advanced HVAC systems",
        "Smart parking solutions",
        "Collaborative workspaces"
      ],
      gallery: [
        "/images/self_sufficient.jpeg",
        "/images/site_analysis.jpeg",
        "/images/site_introduction.jpeg",
        "/images/site_plan.jpeg"
      ],
      longDescription: "This project is a high-density residential development designed to provide sustainable and affordable urban housing. It integrates livability, walkability, and community-centric design principles to meet the growing demand for equitable urban living.",
      pdfFiles: [
        {
          name: "Site Analysis",
          url: "/docs/site_analysis.pdf"
        },
        {
          name: "Site Introduction",
          url: "/docs/site_introduction.pdf"
        },
        {
          name: "Self Sufficienct Report",
          url: "/docs/self_sufficient.pdf"
        }
      ]
    },
    {
      id: 3,
      title: "Cultural Arts Center",
      image: "/images/cultural_architecture_center.jpg",
      description: "A vibrant cultural center that serves as a hub for artistic expression and community gatherings.",
      year: "2021",
      client: "Ministry of Culture",
      location: "Delhi, India",
      size: "65,000 sq ft",
      keyFeatures: [
        "Acoustic optimization",
        "Flexible performance spaces",
        "Digital art galleries",
        "Community workshop areas",
        "Outdoor amphitheater",
        "Heritage preservation zones"
      ],
      gallery: [
        "/images/cultural_architecture_center.jpg",
        "/images/cultural_center_2.jpg",
        "/images/cultural_center_3.jpg",
        "/images/cultural_center_4.jpg"
      ],
      longDescription: "The Cultural Arts Center is a celebration of India's rich artistic heritage while embracing modern design principles. The center features multiple performance spaces, including a main auditorium with perfect acoustics and a flexible black box theater. The design incorporates traditional architectural elements with contemporary materials, creating a space that honors the past while looking to the future. The center serves as a hub for artists, performers, and community members to come together and celebrate culture."
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
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
                    <p className="text-white mt-2 text-sm">{project.year}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-slate-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm font-sans text-justify">
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
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm overflow-y-auto"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-white rounded-xl shadow-2xl overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/90 text-slate-800 hover:bg-white hover:text-slate-900 transition-colors shadow-md"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="flex flex-col md:flex-row">
                {/* Left side - Hero image and gallery */}
                <div className="md:w-7/12 relative">
                  <div className="h-72 md:h-[600px] relative">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-8">
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2 drop-shadow-md">
                        {selectedProject.title}
                      </h2>
                      <p className="text-slate-200 text-sm md:text-base drop-shadow-sm">Completed in {selectedProject.year}</p>
                    </div>
                  </div>
                  
                  {/* Project gallery - visible on mobile only */}
                  <div className="p-6 md:hidden">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Project Gallery</h3>
                    <div className="relative">
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <img 
                          src={selectedProject.gallery[currentImageIndex]} 
                          alt={`Gallery ${currentImageIndex + 1}`} 
                          className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={openLightbox}
                        />
                        {/* Navigation buttons */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                          }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all"
                        >
                          <svg className="w-6 h-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all"
                        >
                          <svg className="w-6 h-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                      {/* Thumbnail navigation */}
                      <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                        {selectedProject.gallery.map((image, index) => (
                          <button
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(index);
                            }}
                            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden ${
                              currentImageIndex === index ? 'ring-2 ring-teal-500' : ''
                            }`}
                          >
                            <img 
                              src={image} 
                              alt={`Thumbnail ${index + 1}`} 
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right side - Content */}
                <div className="md:w-5/12 p-6 md:p-8 md:overflow-y-auto md:max-h-[600px] custom-scrollbar">
                  {/* Project Overview */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-serif font-semibold text-slate-800 mb-4 flex items-center">
                      <span className="w-8 h-1 bg-teal-400 mr-3"></span>
                      Project Overview
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed text-justify">
                      {selectedProject.longDescription}
                    </p>
                  </div>
                  
                  {/* Project Details */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-serif font-semibold text-slate-800 mb-4 flex items-center">
                      <span className="w-8 h-1 bg-teal-400 mr-3"></span>
                      Project Details
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Client</span>
                        <p className="text-slate-800 font-medium mt-1">{selectedProject.client}</p>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Location</span>
                        <p className="text-slate-800 font-medium mt-1">{selectedProject.location}</p>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Year</span>
                        <p className="text-slate-800 font-medium mt-1">{selectedProject.year}</p>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Size</span>
                        <p className="text-slate-800 font-medium mt-1">{selectedProject.size}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Key Features */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-serif font-semibold text-slate-800 mb-4 flex items-center">
                      <span className="w-8 h-1 bg-teal-400 mr-3"></span>
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.keyFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start p-3 bg-slate-50 rounded-lg border border-slate-100">
                          <div className="bg-teal-400/20 p-2 rounded-full mr-3">
                            <svg className="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Project Gallery - Desktop only */}
                  <div className="hidden md:block mb-8">
                    <h3 className="text-2xl font-serif font-semibold text-slate-800 mb-4 flex items-center">
                      <span className="w-8 h-1 bg-teal-400 mr-3"></span>
                      Project Gallery
                    </h3>
                    <div className="relative">
                      <div className="relative h-64 rounded-lg overflow-hidden">
                        <img 
                          src={selectedProject.gallery[currentImageIndex]} 
                          alt={`Gallery ${currentImageIndex + 1}`} 
                          className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={openLightbox}
                        />
                        {/* Navigation buttons */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                          }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all"
                        >
                          <svg className="w-6 h-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all"
                        >
                          <svg className="w-6 h-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                      {/* Thumbnail navigation */}
                      <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                        {selectedProject.gallery.map((image, index) => (
                          <button
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(index);
                            }}
                            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden ${
                              currentImageIndex === index ? 'ring-2 ring-teal-500' : ''
                            }`}
                          >
                            <img 
                              src={image} 
                              alt={`Thumbnail ${index + 1}`} 
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* PDF Documents Section */}
                  {selectedProject.pdfFiles && selectedProject.pdfFiles.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-2xl font-serif font-semibold text-slate-800 mb-4 flex items-center">
                        <span className="w-8 h-1 bg-teal-400 mr-3"></span>
                        Project Documents
                      </h3>
                      <div className="grid grid-cols-1 gap-3">
                        {selectedProject.pdfFiles.map((pdf, index) => (
                          <a
                            key={index}
                            href={pdf.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100 hover:bg-slate-100 transition-colors group"
                          >
                            <div className="bg-red-400/20 p-2 rounded-full mr-3">
                              <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <span className="text-slate-700 font-medium">{pdf.name}</span>
                            </div>
                            <svg className="h-5 w-5 text-slate-400 group-hover:text-slate-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Project Gallery - Mobile only */}
                  <div className="p-6 md:hidden">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Project Gallery</h3>
                    <div className="relative">
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <img 
                          src={selectedProject.gallery[currentImageIndex]} 
                          alt={`Gallery ${currentImageIndex + 1}`} 
                          className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={openLightbox}
                        />
                        {/* Navigation buttons */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                          }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all"
                        >
                          <svg className="w-6 h-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all"
                        >
                          <svg className="w-6 h-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                      {/* Thumbnail navigation */}
                      <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                        {selectedProject.gallery.map((image, index) => (
                          <button
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(index);
                            }}
                            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden ${
                              currentImageIndex === index ? 'ring-2 ring-teal-500' : ''
                            }`}
                          >
                            <img 
                              src={image} 
                              alt={`Thumbnail ${index + 1}`} 
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Lightbox */}
                  <AnimatePresence>
                    {isLightboxOpen && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={closeLightbox}
                      >
                        <div className="relative w-full h-full flex items-center justify-center">
                          <img
                            src={selectedProject.gallery[currentImageIndex]}
                            alt={`Gallery ${currentImageIndex + 1}`}
                            className="max-w-full max-h-[90vh] object-contain"
                          />
                          {/* Close button */}
                          <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                          >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                          {/* Navigation buttons */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              prevImage();
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                          >
                            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              nextImage();
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                          >
                            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                          {/* Image counter */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
                            {currentImageIndex + 1} / {selectedProject.gallery.length}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Call to action */}
                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <div className="flex flex-col">
                      <a
                        href="#contact"
                        onClick={closeModal}
                        className="inline-flex items-center justify-center px-6 py-3 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-300"
                      >
                        Contact Me
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}