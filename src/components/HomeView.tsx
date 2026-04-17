import React from 'react';
import { motion } from 'motion/react';

interface HomeViewProps {
  onNavigate: (tab: string) => void;
  onBook: () => void;
}

export default function HomeView({ onNavigate, onBook }: HomeViewProps) {
  return (
    <main className="relative flex-1 flex flex-col xl:flex-row items-center xl:items-start justify-center xl:justify-between w-full max-w-[1200px] mx-auto px-6 lg:px-16 z-10 pt-32 xl:pt-[180px] pb-40">
      
      {/* Hero Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[500px] flex flex-col items-center xl:items-start text-center xl:text-left z-10 mb-16 xl:mb-0"
      >
        <div className="inline-block px-[14px] py-[8px] bg-black/40 border border-[#d4af37]/40 rounded-[2px] text-white text-[11px] font-bold uppercase mb-[24px] tracking-widest shadow-[0_0_15px_rgba(212,175,55,0.15)]">
          Voted Trinidad's Best Luxury Experience
        </div>
        <h1 className="font-serif text-[42px] md:text-[64px] leading-[1.1] mb-[24px] font-normal text-white">
          Modern Cuisine with <span className="italic gold-text font-semibold block mt-2">Trinidadian Soul.</span>
        </h1>
        <p className="text-[16px] md:text-[18px] text-white/70 leading-[1.6] mb-[40px] font-light max-w-md">
          An immersive culinary escape in San Fernando. Indulge in artisanal dishes crafted from locally sourced treasures and global inspiration.
        </p>
        <div className="flex flex-col sm:flex-row gap-[16px] w-full sm:w-auto mb-[32px]">
           <button onClick={onBook} className="w-full sm:w-auto bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] text-black px-[36px] py-[18px] rounded-none font-bold uppercase text-[13px] tracking-[2px] cursor-pointer hover:brightness-110 transition-all shadow-[0_4px_20px_rgba(212,175,55,0.3)]">
             Reservations
           </button>
           <button onClick={() => onNavigate('Orders')} className="w-full sm:w-auto bg-black border border-[#d4af37]/50 text-white px-[36px] py-[18px] rounded-none font-bold uppercase text-[13px] tracking-[2px] cursor-pointer hover:bg-[#d4af37]/10 transition-colors">
             Order Online
           </button>
        </div>
        <div className="flex flex-wrap justify-center xl:justify-start gap-[12px]">
          {['Dine-In', 'Cocktail Bar', 'Sunday Brunch', 'Private Events'].map(tag => (
            <span key={tag} className="text-[9px] text-[#d4af37] border border-[#d4af37]/30 bg-black/50 px-[12px] py-[6px] rounded-none uppercase tracking-[2px]">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Featured Dish Overlay */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-[380px] bg-black/60 backdrop-blur-[24px] border border-[#d4af37]/30 rounded-none p-[32px] z-10 shadow-[0_10px_40px_rgba(0,0,0,0.8)] relative isolate overflow-hidden"
      >
         <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 blur-[40px] -z-10 rounded-full"></div>
         <div className="text-[10px] uppercase text-[#d4af37] font-semibold tracking-[2px] mb-[16px]">Chef's Special Recommendation</div>
         <div className="w-full h-[220px] bg-black mb-[24px] flex items-center justify-center border border-[#d4af37]/20 p-2 relative">
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>
           <img 
             src="https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=800&auto=format&fit=crop" 
             alt="Premium Dish Visual" 
             className="w-full h-full object-cover filter contrast-125 saturate-110" 
             referrerPolicy="no-referrer"
           />
         </div>
         <div className="flex justify-between items-center mb-[16px]">
           <div className="font-serif text-[24px] text-white">Herb-Crusted Red Snapper</div>
           <div className="font-sans font-bold text-[18px] gold-text">$245 TTD</div>
         </div>
         <p className="text-[13px] text-white/60 leading-[1.6] mb-[24px] font-light">
           Fresh local snapper with saffron infused provision mash and charred citrus reduction.
         </p>
         <button onClick={() => onNavigate('Menus')} className="w-full bg-transparent text-[#d4af37] border border-[#d4af37]/50 px-[16px] py-[16px] rounded-none font-bold uppercase text-[12px] tracking-[2px] cursor-pointer hover:bg-[#d4af37]/10 transition-colors">
           View Full Menu
         </button>
      </motion.div>
    </main>
  );
}
