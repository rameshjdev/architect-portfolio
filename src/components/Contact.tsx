import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [activeField, setActiveField] = useState<string | null>(null);

  // Clear success and error messages after a timeout
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    
    if (success || error) {
      timer = setTimeout(() => {
        setSuccess(false);
        setError('');
      }, 3000); // 5 seconds
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [success, error]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    // Replace these with your actual EmailJS credentials
    const serviceId = 'service_cx8xmzh';
    const templateId = 'template_21ic92i';
    const publicKey = 'Ks8mVvPltMlzOkKeL';

    emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setSuccess(true);
        setLoading(false);
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
        setError('Failed to send message. Please try again later.');
        setLoading(false);
      });
  };

  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-200 rounded-full opacity-30 translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-[0.25em] font-sans font-light text-teal-600 mb-3 inline-block">
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-300 mx-auto"></div>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg">
            I'm interested in freelance opportunities and collaborations. If you have a project that needs creative architectural solutions, let's connect.
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Contact Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-5 bg-white rounded-2xl shadow-xl p-8 lg:p-10 transform transition-all hover:shadow-2xl duration-300 border border-slate-100"
          >
            <h3 className="text-2xl font-serif font-semibold mb-8 text-slate-800 relative">
              Contact Information
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-teal-400 mt-2"></span>
            </h3>
            
            <div className="space-y-8 mt-10">
              <motion.div 
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-start group"
              >
                <div className="bg-gradient-to-br from-teal-500 to-teal-400 p-4 rounded-xl mr-5 shadow-md shadow-teal-100 group-hover:shadow-teal-200 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-1">Email</h4>
                  <a href="mailto:gayathriarch2024@gmail.com" className="text-slate-800 hover:text-teal-600 transition-colors text-lg font-medium">
                    gayathriarch2024@gmail.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-start group"
              >
                <div className="bg-gradient-to-br from-teal-500 to-teal-400 p-4 rounded-xl mr-5 shadow-md shadow-teal-100 group-hover:shadow-teal-200 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-1">Phone</h4>
                  <a href="tel:+17049044900" className="text-slate-800 hover:text-teal-600 transition-colors text-lg font-medium">
                    +1 (704) 904-4900
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-start group"
              >
                <div className="bg-gradient-to-br from-teal-500 to-teal-400 p-4 rounded-xl mr-5 shadow-md shadow-teal-100 group-hover:shadow-teal-200 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-slate-800 text-lg font-medium">Charlotte, NC</p>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-100">
              <h4 className="text-sm font-medium text-slate-600 uppercase tracking-wider mb-6">Connect With Me</h4>
              <div className="flex space-x-5">
                <a 
                  href="https://www.linkedin.com/in/lakshmi-gayathri-bayana-9128129b/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-white hover:bg-teal-50 text-teal-600 p-3 rounded-lg transition-colors shadow-md hover:shadow-lg border border-slate-100"
                  aria-label="LinkedIn Profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="bg-white hover:bg-teal-50 text-teal-600 p-3 rounded-lg transition-colors shadow-md hover:shadow-lg border border-slate-100"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="bg-white hover:bg-teal-50 text-teal-600 p-3 rounded-lg transition-colors shadow-md hover:shadow-lg border border-slate-100"
                  aria-label="Behance"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Availability indicator */}
            <div className="mt-12 pt-8 border-t border-slate-100">
              <div className="flex items-center">
                <span className="relative flex h-3 w-3 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
                </span>
                <span className="text-slate-700">Available for new projects</span>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-7 bg-white rounded-2xl shadow-xl p-8 lg:p-10 transform transition-all hover:shadow-2xl duration-300 border border-slate-100"
          >
            <h3 className="text-2xl font-serif font-semibold mb-8 text-slate-800 relative">
              Send a Message
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-teal-400 mt-2"></span>
            </h3>
            
            {success && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-5 bg-teal-50 border-l-4 border-teal-500 text-teal-700 rounded-lg flex items-center"
              >
                <div className="bg-teal-100 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Message Sent!</h4>
                  <p>Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              </motion.div>
            )}
            
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-5 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-lg flex items-center"
              >
                <div className="bg-red-100 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Something went wrong</h4>
                  <p>{error}</p>
                </div>
              </motion.div>
            )}
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label 
                    htmlFor="name" 
                    className={`text-sm font-medium block mb-2 transition-colors ${
                      activeField === 'name' ? 'text-teal-600' : 'text-slate-700'
                    }`}
                  >
                    Full Name
                  </label>
                  <div className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                    activeField === 'name' ? 'ring-2 ring-teal-400' : 'ring-1 ring-slate-200'
                  }`}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3.5 border-0 focus:outline-none focus:ring-0 bg-slate-50"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label 
                    htmlFor="email" 
                    className={`text-sm font-medium block mb-2 transition-colors ${
                      activeField === 'email' ? 'text-teal-600' : 'text-slate-700'
                    }`}
                  >
                    Email Address
                  </label>
                  <div className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                    activeField === 'email' ? 'ring-2 ring-teal-400' : 'ring-1 ring-slate-200'
                  }`}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3.5 border-0 focus:outline-none focus:ring-0 bg-slate-50"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <label 
                  htmlFor="subject" 
                  className={`text-sm font-medium block mb-2 transition-colors ${
                    activeField === 'subject' ? 'text-teal-600' : 'text-slate-700'
                  }`}
                >
                  Subject
                </label>
                <div className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                  activeField === 'subject' ? 'ring-2 ring-teal-400' : 'ring-1 ring-slate-200'
                }`}>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus('subject')}
                    onBlur={handleBlur}
                    className="w-full px-4 py-3.5 border-0 focus:outline-none focus:ring-0 bg-slate-50"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>
              </div>
              
              <div className="relative">
                <label 
                  htmlFor="message" 
                  className={`text-sm font-medium block mb-2 transition-colors ${
                    activeField === 'message' ? 'text-teal-600' : 'text-slate-700'
                  }`}
                >
                  Message
                </label>
                <div className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                  activeField === 'message' ? 'ring-2 ring-teal-400' : 'ring-1 ring-slate-200'
                }`}>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    className="w-full px-4 py-3.5 border-0 focus:outline-none focus:ring-0 bg-slate-50 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>
              </div>
              
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ y: -5 }}
                whileTap={{ y: 0 }}
                className={`w-full px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg transition-all font-medium text-lg shadow-lg shadow-teal-200 ${
                  loading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl'
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </span>
                ) : 'Send Message'}
              </motion.button>
              
              <p className="text-center text-sm text-slate-500 mt-4">
                Your information is secure and will never be shared with third parties.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;