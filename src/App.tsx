/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageCircle, Menu, Calendar } from 'lucide-react';
import HomeView from './components/HomeView';
import MenuView from './components/MenuView';
import AmbienceView from './components/AmbienceView';
import PrivateDiningView from './components/PrivateDiningView';
import OrdersView from './components/OrdersView';
import BookingModal from './components/BookingModal';
import { KRAVE_CONFIG } from './config';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = ['Home', 'Menus', 'Ambience', 'Private Dining', 'Orders'];

  const handleTabSwitch = (tab: string) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
    switch (activeTab) {
      case 'Home': return <HomeView onNavigate={handleTabSwitch} onBook={() => setIsBookingOpen(true)} />;
      case 'Menus': return <MenuView />;
      case 'Ambience': return <AmbienceView />;
      case 'Private Dining': return <PrivateDiningView />;
      case 'Orders': return <OrdersView />;
      default: return <HomeView onNavigate={handleTabSwitch} onBook={() => setIsBookingOpen(true)} />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden flex flex-col items-center">
      <div className="hero-bg fixed inset-0 z-0"></div>

      {/* Glass Navigation */}
      <nav className="absolute top-4 md:top-6 w-[95%] max-w-[900px] h-[60px] md:h-[70px] bg-glass backdrop-blur-[15px] border border-glass-border rounded-[40px] flex items-center justify-between px-6 md:px-10 z-[60]">
        <div 
          onClick={() => handleTabSwitch('Home')}
          className="font-serif text-xl md:text-[28px] tracking-[4px] font-bold text-accent uppercase cursor-pointer"
        >
          KRAVE
        </div>
        <div className="hidden md:flex gap-[30px] text-[13px] font-medium tracking-[1px] uppercase">
          {tabs.map(tab => (
            <span 
              key={tab} 
              onClick={() => handleTabSwitch(tab)}
              className={`cursor-pointer transition-colors ${activeTab === tab ? 'text-accent' : 'text-text-main hover:text-accent'}`}
            >
              {tab}
            </span>
          ))}
        </div>
        <button 
          onClick={() => setIsBookingOpen(true)}
          className="hidden md:block bg-accent text-black px-4 md:px-5 py-2 md:py-2.5 rounded-lg font-bold uppercase text-xs tracking-[1px] cursor-pointer hover:opacity-90 transition-opacity"
        >
          Book Table
        </button>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-text-main flex items-center justify-center cursor-pointer">
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[80px] w-[95%] bg-black/95 backdrop-blur-xl border border-glass-border rounded-2xl p-4 z-[65] flex flex-col gap-4 text-center">
          {tabs.map(tab => (
            <span 
              key={tab} 
              onClick={() => handleTabSwitch(tab)}
              className={`cursor-pointer transition-colors uppercase tracking-widest py-2 text-sm font-bold ${activeTab === tab ? 'text-accent' : 'text-text-main hover:text-accent'}`}
            >
              {tab}
            </span>
          ))}
        </div>
      )}

      {/* Main Content Area */}
      <div className="w-full flex-1 flex flex-col z-10 min-h-screen pb-20 md:pb-0">
        {renderView()}
      </div>

      {/* Desktop Info Strip */}
      <div className="hidden md:flex mt-auto w-full h-[100px] bg-black/90 border-t border-glass-border items-center justify-around px-10 z-40 relative">
         <div className="flex flex-col gap-[4px]">
            <span className="text-[10px] uppercase text-text-dim tracking-[1.5px] flex items-center gap-1"><MapPin size={12}/> Location</span>
            <span className="text-[14px] font-bold">{KRAVE_CONFIG.location.address}</span>
         </div>
         <div className="flex flex-col gap-[4px]">
            <span className="text-[10px] uppercase text-text-dim tracking-[1.5px] flex items-center gap-1"><Clock size={12}/> Opening Hours</span>
            <span className="text-[14px] font-bold">{KRAVE_CONFIG.location.hours}</span>
         </div>
         <div className="flex flex-col gap-[4px]">
            <span className="text-[10px] uppercase text-text-dim tracking-[1.5px] flex items-center gap-1"><Phone size={12}/> Inquiries</span>
            <span className="text-[14px] font-bold"><a href={`tel:${KRAVE_CONFIG.contact.displayPhone}`} className="hover:text-accent transition-colors">{KRAVE_CONFIG.contact.displayPhone}</a></span>
         </div>
         <a href={`https://wa.me/${KRAVE_CONFIG.contact.whatsappNumber}`} target="_blank" rel="noreferrer" className="bg-[#25D366] text-white px-[20px] py-[10px] rounded-[30px] font-bold flex items-center gap-[8px] text-[12px] uppercase tracking-[0.5px] cursor-pointer hover:bg-[#20bd5a] transition-colors">
            <MessageCircle size={16}/> WhatsApp Inquiry
         </a>
      </div>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-glass-border p-3 z-50 flex items-center justify-between gap-3 pb-safe">
         <button onClick={() => handleTabSwitch('Menus')} className="flex flex-col items-center justify-center flex-1 bg-glass border border-glass-border rounded-lg py-2 text-text-main hover:bg-white/10 transition cursor-pointer">
            <Menu size={18} className="mb-1" />
            <span className="text-[10px] uppercase tracking-wider font-semibold">Menu</span>
         </button>
         <a href={`https://wa.me/${KRAVE_CONFIG.contact.whatsappNumber}`} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center flex-1 bg-[#25D366]/20 border border-[#25D366]/50 rounded-lg py-2 text-[#25D366] hover:bg-[#25D366]/30 transition cursor-pointer">
            <MessageCircle size={18} className="mb-1" />
            <span className="text-[10px] uppercase tracking-wider font-semibold">WhatsApp</span>
         </a>
         <button onClick={() => setIsBookingOpen(true)} className="flex flex-col items-center justify-center flex-1 bg-accent border border-accent rounded-lg py-2 text-black hover:opacity-90 transition cursor-pointer">
            <Calendar size={18} className="mb-1"/>
            <span className="text-[10px] uppercase tracking-wider font-semibold">Book</span>
         </button>
      </div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}

