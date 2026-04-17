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
      className="w-full max-w-5xl mx-auto px-6 pt-32 pb-40 z-10 relative flex flex-col lg:flex-row gap-12 flex-1"
    >
      <div className="flex-1">
        <h1 className="font-serif text-5xl text-accent mb-6">Celebrate at KRAVE</h1>
        <p className="text-text-dim text-lg mb-8 leading-relaxed">
          Elevate your next event. From birthday dinners in our VIP room to full corporate buyouts, we offer tailored experiences with bespoke menus and dedicated service.
        </p>
        <div className="bg-glass border border-glass-border rounded-2xl p-6 mb-8">
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Event Spaces</h3>
          <ul className="space-y-4 text-sm text-text-dim">
            <li className="flex justify-between border-b border-glass-border pb-2">
              <span className="text-white">The Onyx Room (Private)</span>
              <span>Up to 14 Guests</span>
            </li>
            <li className="flex justify-between border-b border-glass-border pb-2">
              <span className="text-white">Mezzanine Lounge (Semi-Private)</span>
              <span>Up to 40 Guests</span>
            </li>
            <li className="flex justify-between pb-2">
              <span className="text-white">Full Restaurant Buyout</span>
              <span>Up to 120 Guests</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-1 bg-glass backdrop-blur-md border border-glass-border rounded-2xl p-8 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div 
              key="form"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
            >
              <h3 className="font-serif text-2xl text-accent mb-6">Event Inquiry</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <input required type="text" placeholder="First Name" className="w-full bg-black/50 border border-glass-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent text-white placeholder-text-dim" />
                  <input required type="text" placeholder="Last Name" className="w-full bg-black/50 border border-glass-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent text-white placeholder-text-dim" />
                </div>
                <input required type="email" placeholder="Email Address" className="w-full bg-black/50 border border-glass-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent text-white placeholder-text-dim" />
                <input required type="tel" placeholder="WhatsApp / Phone" className="w-full bg-black/50 border border-glass-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent text-white placeholder-text-dim" />
                
                <div className="grid grid-cols-2 gap-4">
                  <input required type="date" className="w-full bg-black/50 border border-glass-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent text-white placeholder-text-dim [color-scheme:dark]" />
                  <input required type="number" placeholder="Guest Count" className="w-full bg-black/50 border border-glass-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent text-white placeholder-text-dim" />
                </div>
                
                <div className="space-y-1">
                  <select required defaultValue="" className="w-full bg-black/50 border border-glass-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent text-white appearance-none">
                    <option value="" disabled className="text-text-dim">Select Event Type</option>
                    <option value="birthday" className="bg-[#1a1a1a]">Birthday / Anniversary</option>
                    <option value="corporate" className="bg-[#1a1a1a]">Corporate Dinner</option>
                    <option value="other" className="bg-[#1a1a1a]">Other</option>
                  </select>
                </div>

                <textarea placeholder="Tell us more about your event..." rows={4} className="w-full bg-black/50 border border-glass-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent text-white placeholder-text-dim"></textarea>

                <button type="submit" className="w-full bg-accent text-black font-bold uppercase tracking-wider py-4 rounded-lg mt-2 cursor-pointer hover:opacity-90 transition">
                  Send Inquiry
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/20"
            >
              <CheckCircle2 size={64} className="text-[#25D366] mb-4" />
              <h3 className="font-serif text-3xl text-white mb-2">Request Sent</h3>
              <p className="text-text-dim text-sm">
                Thank you for your inquiry. Our events coordinator will contact you shortly to begin planning.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
