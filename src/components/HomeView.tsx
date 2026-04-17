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
        <div className="inline-block px-[12px] py-[6px] bg-[#d4af3733] border border-accent rounded-[4px] text-accent text-[11px] font-bold uppercase mb-[20px]">
          Voted Trinidad's Best Luxury Experience
        </div>
        <h1 className="font-serif text-[42px] md:text-[64px] leading-[1.1] mb-[24px] font-normal">
          Modern Cuisine with <span className="italic text-accent">Trinidadian Soul.</span>
        </h1>
        <p className="text-[16px] md:text-[18px] text-text-dim leading-[1.6] mb-[32px]">
          An immersive culinary escape in San Fernando. Indulge in artisanal dishes crafted from locally sourced treasures and global inspiration.
        </p>
        <div className="flex flex-col sm:flex-row gap-[20px] w-full sm:w-auto mb-[24px]">
           <button onClick={onBook} className="w-full sm:w-auto bg-accent text-black px-[32px] py-[16px] rounded-[8px] font-bold uppercase text-[14px] tracking-[1px] cursor-pointer hover:opacity-90 transition-opacity">
             Reservations
           </button>
           <button onClick={() => onNavigate('Orders')} className="w-full sm:w-auto bg-glass text-text-main border border-glass-border px-[32px] py-[16px] rounded-[8px] font-bold uppercase text-[14px] tracking-[1px] cursor-pointer hover:bg-white/10 transition-colors">
             Order Online
           </button>
        </div>
        <div className="flex flex-wrap justify-center xl:justify-start gap-[10px]">
          {['Dine-In', 'Cocktail Bar', 'Sunday Brunch', 'Private Events'].map(tag => (
            <span key={tag} className="text-[10px] text-text-dim border border-glass-border px-[10px] py-[4px] rounded-[100px] uppercase tracking-[1px]">
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
        className="w-full max-w-[380px] bg-glass backdrop-blur-[20px] border border-glass-border rounded-[24px] p-[30px] z-10"
      >
         <div className="text-[10px] uppercase text-text-dim tracking-[1.5px] mb-[15px]">Chef's Special Recommendation</div>
         <div className="w-full h-[200px] bg-[#1a1a1a] rounded-[12px] mb-[20px] flex items-center justify-center text-[#444] italic border border-dashed border-[#333] overflow-hidden relative">
           <img 
             src="https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=800&auto=format&fit=crop" 
             alt="Premium Dish Visual" 
             className="w-full h-full object-cover opacity-80" 
             referrerPolicy="no-referrer"
           />
         </div>
         <div className="flex justify-between items-center mb-[12px]">
           <div className="font-serif text-[22px] text-accent">Herb-Crusted Red Snapper</div>
           <div className="font-bold text-[20px]">$245 TTD</div>
         </div>
         <p className="text-[13px] text-text-dim leading-[1.5] mb-[20px]">
           Fresh local snapper with saffron infused provision mash and charred citrus reduction.
         </p>
         <button onClick={() => onNavigate('Menus')} className="w-full bg-glass text-text-main border border-glass-border px-[16px] py-[16px] rounded-[8px] font-bold uppercase text-[12px] tracking-[1px] cursor-pointer hover:bg-white/10 transition-colors">
           View Full Menu
         </button>
      </motion.div>
    </main>
  );
}
