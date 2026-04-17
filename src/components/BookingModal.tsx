import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2 } from 'lucide-react';
import { KRAVE_CONFIG } from '../config';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = React.useState<1 | 2>(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would hook up the form data here 
    // and send it to your backend, routing the email to:
    console.log(`Sending reservation to: ${KRAVE_CONFIG.contact.bookingEmail}`);

    setStep(2);
    setTimeout(() => {
      onClose();
      // Reset form after a small delay to avoid flicker while closing
      setTimeout(() => setStep(1), 300);
    }, 4000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-black border-[0.5px] border-[#d4af37]/40 rounded-none p-8 md:p-10 shadow-[0_10px_50px_rgba(212,175,55,0.15)] z-10"
          >
            <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent"></div>
            <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-[#d4af37] transition cursor-pointer">
              <X size={24} />
            </button>
            
            {step === 1 ? (
              <>
                <h2 className="font-serif text-3xl gold-text mb-2">Reserve a Table</h2>
                <p className="text-white/60 font-light tracking-wide text-sm mb-8">Experience modern cuisine with Trinidadian soul.</p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-[2px] text-[#d4af37]">Date</label>
                      <input required type="date" className="w-full bg-black border border-[#d4af37]/30 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] text-white [color-scheme:dark] transition-colors shadow-inner" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-[2px] text-[#d4af37]">Time</label>
                      <input required type="time" className="w-full bg-black border border-[#d4af37]/30 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] text-white [color-scheme:dark] transition-colors shadow-inner" />
                    </div>
                  </div>
                  
                  <div className="space-y-1 relative">
                    <label className="text-[10px] uppercase tracking-[2px] text-[#d4af37]">Guests</label>
                    <select defaultValue={2} className="w-full bg-black border border-[#d4af37]/30 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] text-white appearance-none transition-colors shadow-inner">
                      {[1,2,3,4,5,6,7,8,"9+"].map(n => <option key={n} value={n} className="bg-[#111] text-white">{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-[2px] text-[#d4af37]">Name</label>
                      <input required type="text" placeholder="Your Name" className="w-full bg-black border border-[#d4af37]/30 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] text-white placeholder-white/30 transition-colors shadow-inner" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-[2px] text-[#d4af37]">WhatsApp</label>
                      <input required type="tel" placeholder="+1 (868) ..." className="w-full bg-black border border-[#d4af37]/30 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] text-white placeholder-white/30 transition-colors shadow-inner" />
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] text-black font-bold uppercase tracking-[2px] py-[18px] rounded-none mt-6 cursor-pointer hover:brightness-110 transition-all shadow-[0_4px_20px_rgba(212,175,55,0.3)] text-xs">
                    Confirm Reservation
                  </button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 size={64} className="text-[#d4af37] mb-6" />
                <h2 className="font-serif text-3xl gold-text mb-4">Request Sent</h2>
                <p className="text-white/70 text-sm font-light leading-relaxed max-w-[280px]">
                  We've received your inquiry! Our host will reach out via WhatsApp shortly to confirm your table.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
