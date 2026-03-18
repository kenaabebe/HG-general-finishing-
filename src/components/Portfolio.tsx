import React from 'react';
import { motion } from 'motion/react';

const projects = [
  {
    title: "Modern Minimalist Penthouse",
    category: "Interior Design & Painting",
    image: "/images/portfolio/project-1.jpg"
  },
  {
    title: "Classic Estate Trim Work",
    category: "Trim & Millwork",
    image: "/images/portfolio/project-2.jpg"
  },
  {
    title: "Contemporary Aluminum Facade",
    category: "Aluminum Installation",
    image: "/images/portfolio/project-3.jpg"
  },
  {
    title: "Luxury Suite Flooring",
    category: "Flooring",
    image: "/images/portfolio/project-4.jpg"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-gold uppercase tracking-[0.4em] text-xs font-semibold mb-4 block"
          >
            Our Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-serif text-brand-dark"
          >
            Selected <span className="italic">Masterpieces</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-6 shadow-xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="bg-white text-brand-dark px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold">View Project</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif text-brand-dark mb-1">{project.title}</h3>
                  <p className="text-xs uppercase tracking-widest font-medium text-brand-gold">{project.category}</p>
                </div>
                <div className="w-10 h-10 border border-brand-dark/10 rounded-full flex items-center justify-center group-hover:bg-brand-dark group-hover:text-white transition-all duration-300">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.64645 11.3536C3.45118 11.5488 3.45118 11.8654 3.64645 12.0607C3.84171 12.2559 4.15829 12.2559 4.35355 12.0607L3.64645 11.3536ZM11.5 4C11.5 3.72386 11.2761 3.5 11 3.5L6.5 3.5C6.22386 3.5 6 3.72386 6 4C6 4.27614 6.22386 4.5 6.5 4.5L10.5 4.5L10.5 8.5C10.5 8.77614 10.7239 9 11 9C11.2761 9 11.5 8.77614 11.5 8.5L11.5 4ZM4.35355 12.0607L11.3536 5.06066L10.6464 4.35355L3.64645 11.3536L4.35355 12.0607Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-12 py-5 border border-brand-dark rounded-full text-xs uppercase tracking-widest font-bold hover:bg-brand-dark hover:text-white transition-all duration-300"
          >
            Explore All Projects
          </motion.button>
        </div>
      </div>
    </section>
  );
}
