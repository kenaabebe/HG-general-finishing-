import React from 'react';
import { motion } from 'motion/react';
import { Paintbrush, Layout, Layers, Lightbulb, Home, Ruler } from 'lucide-react';

const services = [
  {
    title: "Expert Painting",
    description: "Flawless interior and exterior finishes using premium materials for a lasting impression.",
    icon: Paintbrush,
    image: "/images/services/painting.jpg"
  },
  {
    title: "Trim & Millwork",
    description: "Intricate crown molding, baseboards, and custom wainscoting that define architectural character.",
    icon: Ruler,
    image: "/images/services/trim.jpg"
  },
  {
    title: "Aluminum Installation",
    description: "Precision aluminum work for modern aesthetics, durability, and structural integrity.",
    icon: Layers,
    image: "/images/services/aluminum.jpg"
  },
  {
    title: "Interior Design",
    description: "Cohesive design strategies that blend functionality with high-end aesthetic appeal.",
    icon: Layout,
    image: "/images/services/design.jpg"
  },
  {
    title: "Aluminum Lighting",
    description: "Innovative lighting solutions integrated with aluminum fixtures for a contemporary glow.",
    icon: Lightbulb,
    image: "/images/services/lighting.jpg"
  },
  {
    title: "Premium Flooring",
    description: "Expert installation of hardwood, tile, and luxury vinyl for a solid foundation of style.",
    icon: Home,
    image: "/images/services/flooring.jpg"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-gold uppercase tracking-[0.4em] text-xs font-semibold mb-4 block"
            >
              Our Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-serif text-brand-dark"
            >
              Comprehensive <br />
              <span className="italic">Finishing Solutions</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-dark/60 max-w-sm mb-2"
          >
            From the initial brushstroke to the final floor plank, we bring a level of precision that transforms houses into masterpieces.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-brand-cream border border-brand-dark/5"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-dark group-hover:text-white transition-colors duration-300">
                  <service.icon size={24} />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-brand-dark">{service.title}</h3>
                <p className="text-brand-dark/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/5 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
