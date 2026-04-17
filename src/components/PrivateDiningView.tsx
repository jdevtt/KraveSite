import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { KRAVE_CONFIG } from '../config';
import { CheckCircle2 } from 'lucide-react';

export default function PrivateDiningView() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Developer Note: Hook up the form data here and send to:
    console.log(`Sending inquiry to: ${KRAVE_CONFIG.contact.eventsEmail}`);
    
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-5xl mx-auto px-6 pt-32 pb-40 z-10 relative flex flex-col lg:flex-row gap-16 flex-1"
    >
      <div className="flex-1 lg:max-w-md">
        <h1 className="font-serif text-5xl gold-text mb-6">Celebrate at KRAVE</h1>
        <p className="text-white/60 font-light text-lg mb-12 leading-relaxed">
          Elevate your next event. From birthday dinners in our VIP room to full corporate buyouts, we offer tailored experiences with bespoke menus and dedicated service.
        </p>
        <div className="bg-black/60 backdrop-blur-md border border-[#d4af37]/30 rounded-none p-8 mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative isolate">
          <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-[#d4af37]/50 via-transparent to-transparent"></div>
          <h3 className="gold-text font-serif text-xl mb-6 pb-2 border-b border-[#d4af37]/20">Event Spaces</h3>
          <ul className="space-y-6 text-sm text-white/70">
            <li className="flex justify-between border-b border-white/5 pb-4">
              <span className="text-white font-light tracking-wide">The Onyx Room (Private)</span>
              <span className="text-[#d4af37] text-xs uppercase tracking-widest font-bold">Up to 14 Guests</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-4">
              <span className="text-white font-light tracking-wide">Mezzanine Lounge (Semi-Private)</span>
              <span className="text-[#d4af37] text-xs uppercase tracking-widest font-bold">Up to 40 Guests</span>
            </li>
            <li className="flex justify-between pb-2">
              <span className="text-white font-light tracking-wide">Full Restaurant Buyout</span>
              <span className="text-[#d4af37] text-xs uppercase tracking-widest font-bold">Up to 120 Guests</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-1 bg-black/80 backdrop-blur-xl border-[0.5px] border-[#d4af37]/30 rounded-none p-10 relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#d4af37]/10 blur-[50px] -z-10 rounded-full"></div>
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div 
              key="form"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
            >
              <h3 className="font-serif text-2xl gold-text mb-8">Event Inquiry</h3>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-5">
                  <input required type="text" placeholder="First Name" className="w-full bg-black border border-[#d4af37]/20 rounded-none px-4 py-4 text-sm focus:outline-none focus:border-[#d4af37] text-white placeholder-white/30 transition-colors shadow-inner" />
                  <input required type="text" placeholder="Last Name" className="w-full bg-black border border-[#d4af37]/20 rounded-none px-4 py-4 text-sm focus:outline-none focus:border-[#d4af37] text-white placeholder-white/30 transition-colors shadow-inner" />
                </div>
                <input required type="email" placeholder="Email Address" className="w-full bg-black border border-[#d4af37]/20 rounded-none px-4 py-4 text-sm focus:outline-none focus:border-[#d4af37] text-white placeholder-white/30 transition-colors shadow-inner" />
                <input required type="tel" placeholder="WhatsApp / Phone" className="w-full bg-black border border-[#d4af37]/20 rounded-none px-4 py-4 text-sm focus:outline-none focus:border-[#d4af37] text-white placeholder-white/30 transition-colors shadow-inner" />
                
                <div className="grid grid-cols-2 gap-5">
                  <input required type="date" className="w-full bg-black border border-[#d4af37]/20 rounded-none px-4 py-4 text-sm focus:outline-none focus:border-[#d4af37] text-white placeholder-white/30 [color-scheme:dark] transition-colors shadow-inner" />
                  <input required type="number" placeholder="Guest Count" className="w-full bg-black border border-[#d4af37]/20 rounded-none px-4 py-4 text-sm focus:outline-none focus:border-[#d4af37] text-white placeholder-white/30 transition-colors shadow-inner" />
                </div>
                
                <div className="space-y-1 relative">
                  <select required defaultValue="" className="w-full bg-black border border-[#d4af37]/20 rounded-none px-4 py-4 text-sm focus:outline-none focus:border-[#d4af37] text-white appearance-none transition-colors shadow-inner">
                    <option value="" disabled className="text-white/30">Select Event Type</option>
                    <option value="birthday" className="bg-[#111]">Birthday / Anniversary</option>
                    <option value="corporate" className="bg-[#111]">Corporate Dinner</option>
                    <option value="other" className="bg-[#111]">Other</option>
                  </select>
                </div>

                <textarea placeholder="Tell us more about your event..." rows={4} className="w-full bg-black border border-[#d4af37]/20 rounded-none px-4 py-4 text-sm focus:outline-none focus:border-[#d4af37] text-white placeholder-white/30 transition-colors shadow-inner"></textarea>

                <button type="submit" className="w-full bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] text-black font-bold uppercase tracking-[2px] py-[18px] rounded-none mt-4 cursor-pointer hover:brightness-110 transition-all shadow-[0_4px_20px_rgba(212,175,55,0.3)] text-xs">
                  Send Inquiry
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/60 backdrop-blur-xl"
            >
              <CheckCircle2 size={64} className="text-[#d4af37] mb-6" />
              <h3 className="font-serif text-3xl gold-text mb-4">Request Sent</h3>
              <p className="text-white/70 text-sm font-light leading-relaxed max-w-[280px]">
                Thank you for your inquiry. Our events coordinator will contact you shortly to begin planning.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
