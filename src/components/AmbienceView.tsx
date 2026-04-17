import React from 'react';
import { motion } from 'motion/react';

const images = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1588661621255-a4bba93e8749?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop"
];

export default function AmbienceView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-6xl mx-auto px-6 pt-32 pb-40 z-10 relative flex-1"
    >
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl gold-text mb-4">The KRAVE Vibe</h1>
        <p className="text-white/60 font-light tracking-[2px] uppercase text-sm max-w-2xl mx-auto">Immerse yourself in our beautifully curated spaces, designed for intimate dinners, lively celebrations, and unforgettable nights.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="overflow-hidden rounded-none border border-[#d4af37]/20 h-[300px] bg-black relative group shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <img src={src} alt="Restaurant Ambience" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-110 filter contrast-125 saturate-110 transition duration-700 relative z-0" />
            <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
               <div className="w-8 h-[1px] bg-[#d4af37] mb-2"></div>
               <span className="text-white text-xs tracking-widest uppercase">Atmosphere</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
