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
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-[#0a0a0b] border border-glass-border rounded-2xl p-6 md:p-8 shadow-2xl z-10"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-text-dim hover:text-white transition cursor-pointer">
              <X size={24} />
            </button>
            
            {step === 1 ? (
              <>
                <h2 className="font-serif text-3xl text-accent mb-2">Reserve a Table</h2>
                <p className="text-text-dim text-sm mb-6">Experience modern cuisine with Trinidadian soul.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs uppercase tracking-wider text-text-dim">Date</label>
                      <input required type="date" className="w-full bg-glass border border-glass-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent text-white [color-scheme:dark]" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs uppercase tracking-wider text-text-dim">Time</label>
                      <input required type="time" className="w-full bg-glass border border-glass-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent text-white [color-scheme:dark]" />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-wider text-text-dim">Guests</label>
                    <select defaultValue={2} className="w-full bg-glass border border-glass-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent text-white appearance-none">
                      {[1,2,3,4,5,6,7,8,"9+"].map(n => <option key={n} value={n} className="bg-[#1a1a1a] text-white">{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs uppercase tracking-wider text-text-dim">Name</label>
                      <input required type="text" placeholder="Your Name" className="w-full bg-glass border border-glass-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent text-white placeholder-text-dim" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs uppercase tracking-wider text-text-dim">WhatsApp Number</label>
                      <input required type="tel" placeholder="+1 (868) ..." className="w-full bg-glass border border-glass-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent text-white placeholder-text-dim" />
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-accent text-black font-bold uppercase tracking-wider py-4 rounded-lg mt-4 cursor-pointer hover:opacity-90 transition">
                    Confirm Reservation
                  </button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 size={64} className="text-[#25D366] mb-4" />
                <h2 className="font-serif text-3xl text-white mb-2">Request Sent</h2>
                <p className="text-text-dim text-sm">
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
