import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex flex-col mb-8">
              <span className="text-3xl font-serif font-bold tracking-widest text-white">HG</span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-brand-gold -mt-1">General Finishing</span>
            </div>
            <p className="text-white/50 max-w-sm leading-relaxed text-sm">
              Providing high-end finishing services for residential and commercial spaces. 
              Our commitment to quality and detail is what sets us apart in the industry.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-brand-gold">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-brand-gold">Follow Us</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="https://t.me/+3A8utdsXPMswN2M0" className="hover:text-white transition-colors">Telegram</a></li>
              <li><a href="https://www.fb.com/l/6lp1kJRRR" className="hover:text-white transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-white/30">
            © 2024 HG General Finishing. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/30">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
