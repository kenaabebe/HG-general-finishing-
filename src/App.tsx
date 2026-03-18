import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-gold z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        
        {/* About Section - Brief */}
        <section id="about" className="py-24 bg-brand-cream">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10">
                  <img 
                    src="/images/about.jpg" 
                    alt="Craftsmanship" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold rounded-full flex items-center justify-center text-white z-20">
                  <div className="text-center">
                    <p className="text-3xl font-serif font-bold">100%</p>
                    <p className="text-[8px] uppercase tracking-widest font-bold">Quality</p>
                  </div>
                </div>
              </motion.div>
              
              <div>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-brand-gold uppercase tracking-[0.4em] text-xs font-semibold mb-4 block"
                >
                  Our Story
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-6xl font-serif text-brand-dark mb-8"
                >
                  The Art of <br />
                  <span className="italic">Perfect Finishing</span>
                </motion.h2>
                <p className="text-brand-dark/60 mb-8 leading-relaxed">
                  Founded on the principles of integrity and meticulous attention to detail, HG General Finishing has become a trusted name for luxury residential and commercial projects. 
                </p>
                <p className="text-brand-dark/60 mb-10 leading-relaxed">
                  We believe that the final touches are what define a space. Whether it's the subtle sheen of a perfectly painted wall or the architectural elegance of custom trim, our team of experts ensures every element is executed to perfection.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-3xl font-serif text-brand-dark mb-1">60+</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold">Projects Completed</p>
                  </div>
                  <div>
                    <p className="text-3xl font-serif text-brand-dark mb-1">3+</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold">Years Experience </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />
        <Portfolio />
        
        {/* CTA Banner */}
        <section className="py-20 bg-brand-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="/images/cta-bg.jpg" 
              alt="Background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-10">
              Ready to <span className="italic text-brand-gold">Elevate Your Home?</span>
            </h2>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-brand-gold text-white px-12 py-5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-brand-dark transition-all duration-300"
            >
              Request a Consultation
            </motion.a>
          </div>
        </section>

        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
