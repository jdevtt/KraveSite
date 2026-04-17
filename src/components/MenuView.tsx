import React from 'react';
import { motion } from 'motion/react';

const menuData = [
  {
    category: "Starters",
    items: [
      { name: "Trini-Spiced Calamari", desc: "Crispy calamari tossed in local herbs with a shadow-beni aioli.", price: "$95" },
      { name: "Coconut Shrimp", desc: "Panko & coconut crusted jumbo shrimp with mango chili dipping sauce.", price: "$120" },
      { name: "Geera Pork Belly Bites", desc: "Slow-roasted pork belly with roasted cumin glaze.", price: "$110" }
    ]
  },
  {
    category: "Signature Mains",
    items: [
      { name: "Herb-Crusted Red Snapper", desc: "Fresh local snapper with saffron infused provision mash and charred citrus reduction.", price: "$245" },
      { name: "Premium Ribeye Steak", desc: "12oz aged ribeye, cassava gratin, chimichurri, and roasted local vegetables.", price: "$350" },
      { name: "Curry Crab & Dumpling Tortellini", desc: "A modern twist on the Tobago classic. Handmade pasta with rich crab bisque.", price: "$195" }
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Guava Cheesecake", desc: "Deconstructed cheesecake with guava compote and coconut crumble.", price: "$85" },
      { name: "Ponche de Crème Tiramisu", desc: "Classic tiramisu soaked in local premium Ponche de Crème.", price: "$95" }
    ]
  }
];

export default function MenuView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto px-6 pt-32 pb-40 z-10 relative"
    >
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl gold-text mb-4">Our Menus</h1>
        <p className="text-white/60 font-light text-lg tracking-wide uppercase">A fusion of global flavors and local Trinidadian flair.</p>
      </div>

      <div className="space-y-16">
        {menuData.map((section, i) => (
          <div key={i} className="bg-black/80 backdrop-blur-md border-[0.5px] border-[#d4af37]/30 p-10 rounded-none shadow-[0_10px_40px_rgba(0,0,0,0.8)] relative isolate">
            <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent"></div>
            
            <h2 className="font-sans font-light tracking-[4px] uppercase text-xl text-white mb-8 pb-4 border-b border-[#d4af37]/20 inline-block">{section.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">
              {section.items.map((item, j) => (
                <div key={j} className="flex flex-col group">
                  <div className="flex justify-between items-baseline mb-3 border-b border-white/5 pb-2">
                    <h3 className="gold-text font-serif text-lg tracking-wide">{item.name}</h3>
                    <span className="text-white font-sans text-sm tracking-[2px]">{item.price}</span>
                  </div>
                  <p className="text-[13px] text-white/50 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
