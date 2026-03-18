import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-dark/5 -z-10 hidden lg:block" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-brand-gold uppercase tracking-[0.4em] text-xs font-semibold mb-6 block"
          >
            Master Craftsmanship & Design
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8 text-brand-dark">
            Elevating <br />
            <span className="italic text-brand-gold">Every Detail</span> <br />
            of Your Space.
          </h1>
          
          <p className="text-lg text-brand-dark/70 max-w-md mb-10 leading-relaxed">
            HG General Finishing and Interior Design delivers premium expert painting, intricate trim work, 
           Aluminim Installation and bespoke interior solutions for those who demand excellence.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-dark text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-brand-gold transition-all duration-300 flex items-center gap-3"
            >
              View Portfolio
              <ArrowRight size={18} />
            </motion.a>
            
            <motion.a
              href="#services"
              whileHover={{ x: 5 }}
              className="px-6 py-4 text-sm uppercase tracking-widest font-bold flex items-center gap-3 border-b border-brand-dark/20"
            >
              Our Services
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-t-[200px] overflow-hidden shadow-2xl relative z-10">
            <img 
              src="/images/hero.jpg" 
              alt="Luxury Interior Finishing" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 border-2 border-brand-gold/30 rounded-full -z-10" />
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 -left-10 bg-white p-6 shadow-xl rounded-2xl z-20 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold">
                <span className="font-serif font-bold text-xl">3+</span>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/50">Years of Excellence </p>
                <p className="text-sm font-bold">CEO Abdi Shuremu</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
