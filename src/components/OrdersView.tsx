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
      <div className="text-center mb-12">
        <h1 className="font-serif text-5xl text-accent mb-4">Craving KRAVE?</h1>
        <p className="text-text-dim text-lg">Order online for quick pickup or delivery straight to your door.</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
        <button onClick={handlePickup} className="bg-glass border border-accent rounded-xl p-6 flex flex-col items-center justify-center hover:bg-accent/10 transition-colors w-full md:w-64 group cursor-pointer">
          <ShoppingBag size={32} className="text-accent mb-4" />
          <span className="text-white font-bold uppercase tracking-wider mb-2">Order Pickup</span>
          <span className="text-text-dim text-xs">Ready in 20-30 mins</span>
          <div className="mt-4 flex items-center text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            Start Order <ArrowRight size={16} className="ml-2" />
          </div>
        </button>
        <button onClick={handleDelivery} className="bg-glass border border-glass-border rounded-xl p-6 flex flex-col items-center justify-center hover:border-white transition-colors w-full md:w-64 group cursor-pointer">
          <div className="font-bold text-2xl mb-4 italic text-[#ff4500]">FoodDrop</div>
          <span className="text-white font-bold uppercase tracking-wider mb-2">Delivery Partner</span>
          <span className="text-text-dim text-xs">Via FoodDrop</span>
          <div className="mt-4 flex items-center text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            Order Delivery <ArrowRight size={16} className="ml-2" />
          </div>
        </button>
      </div>

      <h3 className="font-serif text-2xl text-white mb-8 border-b border-glass-border pb-4">Popular for Pickup</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {orderItems.map((item, i) => (
          <div key={i} className="bg-glass border border-glass-border rounded-2xl overflow-hidden group hover:border-accent transition-colors">
            <div className="h-48 overflow-hidden relative bg-[#1a1a1a]">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" referrerPolicy="no-referrer" />
            </div>
            <div className="p-4">
              <h4 className="text-white font-bold mb-1 truncate">{item.name}</h4>
              <div className="flex justify-between items-center mt-4">
                <span className="text-accent font-semibold">{item.price}</span>
                <button onClick={() => handleAddToCart(item.name)} className="bg-white/10 hover:bg-accent hover:text-black text-white text-xs uppercase font-bold px-4 py-2 rounded transition cursor-pointer">Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
