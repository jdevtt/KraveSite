import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { KRAVE_CONFIG } from '../config';

const orderItems = [
  { name: "KRAVE Signature Burger", price: "$140", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&auto=format&fit=crop" },
  { name: "Herb-Crusted Red Snapper", price: "$245", image: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=400&auto=format&fit=crop" },
  { name: "Truffle Fries", price: "$65", image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=400&auto=format&fit=crop" },
  { name: "Geera Pork Belly", price: "$110", image: "https://images.unsplash.com/photo-1627308595229-7830f5c90683?q=80&w=400&auto=format&fit=crop" },
];

export default function OrdersView() {
  const handlePickup = () => alert("Pickup ordering system coming soon! Call us to order ahead.");
  const handleDelivery = () => window.open(KRAVE_CONFIG.links.foodDrop, '_blank');
  const handleAddToCart = (itemName: string) => alert(`${itemName} added to your cart!`);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-6xl mx-auto px-6 pt-32 pb-40 z-10 relative flex-1"
    >
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl gold-text mb-4">Craving KRAVE?</h1>
        <p className="text-white/60 font-light text-sm tracking-[2px] uppercase">Order online for quick pickup or delivery straight to your door.</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
        <button onClick={handlePickup} className="bg-black/60 backdrop-blur-md border border-[#d4af37]/30 rounded-none p-8 flex flex-col items-center justify-center hover:bg-[#d4af37]/10 transition-colors w-full md:w-72 group cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <ShoppingBag size={32} className="text-[#d4af37] mb-6" />
          <span className="gold-text font-serif text-xl tracking-wider mb-2">Order Pickup</span>
          <span className="text-white/50 text-xs uppercase tracking-widest">Ready in 20-30 mins</span>
          <div className="mt-6 flex items-center text-[#d4af37] text-xs font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
            Start Order <ArrowRight size={16} className="ml-2" />
          </div>
        </button>
        <button onClick={handleDelivery} className="bg-black/60 backdrop-blur-md border border-[#d4af37]/30 rounded-none p-8 flex flex-col items-center justify-center hover:bg-white/5 transition-colors w-full md:w-72 group cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="font-bold text-2xl mb-4 italic text-[#ff4500]">FoodDrop</div>
          <span className="text-white font-serif text-xl tracking-wider mb-2">Delivery Partner</span>
          <span className="text-white/50 text-xs uppercase tracking-widest">Via FoodDrop</span>
          <div className="mt-6 flex items-center text-white text-xs font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
            Order Delivery <ArrowRight size={16} className="ml-2" />
          </div>
        </button>
      </div>

      <h3 className="font-sans font-light tracking-[4px] uppercase text-xl text-white mb-8 pb-4 border-b border-[#d4af37]/20 inline-block">Popular for Pickup</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {orderItems.map((item, i) => (
          <div key={i} className="bg-black/80 backdrop-blur-md border border-[#d4af37]/20 rounded-none overflow-hidden group hover:border-[#d4af37]/60 transition-colors">
            <div className="h-56 overflow-hidden relative bg-black">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>
              <img src={item.image} alt={item.name} className="w-full h-full object-cover filter contrast-125 saturate-110 group-hover:scale-110 transition duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="p-5 relative z-20 -mt-8">
              <h4 className="text-white font-serif text-lg tracking-wide mb-1 truncate">{item.name}</h4>
              <div className="flex justify-between items-center mt-6">
                <span className="gold-text font-sans font-bold tracking-[2px]">{item.price}</span>
                <button onClick={() => handleAddToCart(item.name)} className="bg-transparent border border-[#d4af37]/50 hover:bg-[#d4af37]/20 text-[#d4af37] text-[10px] uppercase tracking-widest font-bold px-4 py-2 rounded-none transition cursor-pointer">Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
