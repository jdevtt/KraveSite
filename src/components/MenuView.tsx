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
        <h1 className="font-serif text-5xl text-accent mb-4">Our Menus</h1>
        <p className="text-text-dim text-lg">A fusion of global flavors and local Trinidadian flair.</p>
      </div>

      <div className="space-y-16">
        {menuData.map((section, i) => (
          <div key={i} className="bg-glass backdrop-blur-md border border-glass-border p-8 rounded-2xl">
            <h2 className="font-serif text-2xl text-white mb-6 pb-2 border-b border-glass-border inline-block">{section.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.items.map((item, j) => (
                <div key={j} className="flex flex-col">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-accent font-bold text-lg">{item.name}</h3>
                    <span className="text-white font-bold tracking-wider">{item.price}</span>
                  </div>
                  <p className="text-sm text-text-dim leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
