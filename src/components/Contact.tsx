import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-brand-gold uppercase tracking-[0.4em] text-xs font-semibold mb-4 block"
            >
              Get In Touch
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-serif text-brand-dark mb-8"
            >
              Let's Start Your <br />
              <span className="italic">Transformation</span>
            </motion.h2>
            
            <p className="text-brand-dark/60 mb-12 max-w-md leading-relaxed">
              Ready to elevate your space? Contact us today for a consultation and discover how HG General Finishing can bring your vision to life.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-brand-gold shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/40 mb-1">Call Us</p>
                  <p className="text-lg font-medium">+251939335738</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-brand-gold shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/40 mb-1">Email Us</p>
                  <p className="text-lg font-medium">abdishuremu895@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-brand-gold shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/40 mb-1">Office</p>
                  <p className="text-lg font-medium">Addis Ababaa,Ethiopia</p>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-cream p-10 rounded-[40px] shadow-sm"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/60 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-gold outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/60 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-white border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-gold outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/60 ml-1">Service Required</label>
                <select className="w-full bg-white border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-gold outline-none transition-all appearance-none">
                  <option>Expert Painting</option>
                  <option>Trim & Millwork</option>
                  <option>Aluminum Installation</option>
                  <option>Interior Design</option>
                  <option>Flooring</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/60 ml-1">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-gold outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-brand-dark text-white py-5 rounded-2xl text-xs uppercase tracking-widest font-bold hover:bg-brand-gold transition-all duration-300 flex items-center justify-center gap-3"
              >
                Send Message
                <Send size={16} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
