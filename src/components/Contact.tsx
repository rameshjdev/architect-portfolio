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
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-primary/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full opacity-30 translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
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
          <span className="text-sm uppercase tracking-[0.25em] font-sans font-light text-accent mb-3 inline-block">
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent/70 mx-auto"></div>
          <p className="mt-6 text-primary/80 max-w-2xl mx-auto text-lg">
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
            className="md:col-span-5 bg-white rounded-2xl shadow-xl p-8 lg:p-10 transform transition-all hover:shadow-2xl duration-300 border border-primary/10 hover:border-accent/20"
          >
            <h3 className="text-2xl font-serif font-semibold mb-8 text-primary relative">
              Contact Information
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-accent mt-2"></span>
            </h3>
            
            <div className="space-y-8 mt-10">
              <motion.div 
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-start group"
              >
                <div className="bg-gradient-to-br from-primary to-primary/90 p-4 rounded-xl mr-5 shadow-md shadow-primary/10 group-hover:shadow-primary/20 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-accent uppercase tracking-wider mb-1">Email</h4>
                  <a href="mailto:gayathriarch2024@gmail.com" className="text-primary hover:text-accent transition-colors text-lg font-medium">
                    gayathriarch2024@gmail.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-start group"
              >
                <div className="bg-gradient-to-br from-primary to-primary/90 p-4 rounded-xl mr-5 shadow-md shadow-primary/10 group-hover:shadow-primary/20 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-accent uppercase tracking-wider mb-1">Phone</h4>
                  <a href="tel:+17049044900" className="text-primary hover:text-accent transition-colors text-lg font-medium">
                    +1 (704) 904-4900
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-start group"
              >
                <div className="bg-gradient-to-br from-primary to-primary/90 p-4 rounded-xl mr-5 shadow-md shadow-primary/10 group-hover:shadow-primary/20 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-accent uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-primary text-lg font-medium">Charlotte, NC</p>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-primary/10">
              <h4 className="text-sm font-medium text-primary/60 uppercase tracking-wider mb-6">Connect With Me</h4>
              <div className="flex space-x-5">
                <a 
                  href="https://www.linkedin.com/in/lakshmi-gayathri-bayana-9128129b/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-white hover:bg-primary/5 text-accent p-3 rounded-lg transition-colors shadow-md hover:shadow-lg border border-primary/10 hover:border-accent/20"
                  aria-label="LinkedIn Profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Availability indicator */}
            <div className="mt-12 pt-8 border-t border-primary/10">
              <div className="flex items-center">
                <span className="relative flex h-3 w-3 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                </span>
                <span className="text-primary/80">Available for new projects</span>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-7 bg-white rounded-2xl shadow-xl p-8 lg:p-10 transform transition-all hover:shadow-2xl duration-300 border border-primary/10 hover:border-accent/20"
          >
            <h3 className="text-2xl font-serif font-semibold mb-8 text-primary relative">
              Send a Message
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-accent mt-2"></span>
            </h3>
            
            {success && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-5 bg-accent/10 border-l-4 border-accent text-accent rounded-lg flex items-center"
              >
                <div className="bg-accent/20 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary/80 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${
                      activeField === 'name' 
                        ? 'border-accent ring-2 ring-accent/20' 
                        : 'border-primary/20'
                    } focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all bg-white text-primary placeholder-primary/40`}
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary/80 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${
                      activeField === 'email' 
                        ? 'border-accent ring-2 ring-accent/20' 
                        : 'border-primary/20'
                    } focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all bg-white text-primary placeholder-primary/40`}
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-primary/80 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => handleFocus('subject')}
                  onBlur={handleBlur}
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    activeField === 'subject' 
                      ? 'border-accent ring-2 ring-accent/20' 
                      : 'border-primary/20'
                  } focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all bg-white text-primary placeholder-primary/40`}
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary/80 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    activeField === 'message' 
                      ? 'border-accent ring-2 ring-accent/20' 
                      : 'border-primary/20'
                  } focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all bg-white text-primary placeholder-primary/40 resize-none`}
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-8 py-3 rounded-lg font-medium text-white transition-all duration-300 ${
                    loading
                      ? 'bg-primary/50 cursor-not-allowed'
                      : 'bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20'
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;