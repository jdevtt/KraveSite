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
    <div className="relative min-h-screen overflow-x-hidden flex flex-col items-center bg-black selection:bg-[#d4af37]/30 selection:text-white">
      <div className="hero-bg fixed inset-0 z-0 opacity-80"></div>

      {/* Sharp Glass Navigation */}
      <nav className="absolute top-0 w-full h-[80px] bg-black/60 backdrop-blur-[20px] border-b border-[#d4af37]/30 flex items-center justify-between px-6 md:px-12 z-[60] shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div 
          onClick={() => handleTabSwitch('Home')}
          className="font-serif text-xl md:text-[28px] tracking-[4px] font-bold gold-text uppercase cursor-pointer flex flex-col items-center justify-center leading-none mt-1"
        >
          <span className="text-[7px] md:text-[9px] tracking-[6px] text-white/50 font-sans mb-[2px] w-full text-center">THE NEW</span>
          <span>KRAVE</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-[40px] text-[11px] font-bold tracking-[3px] uppercase">
          {tabs.map(tab => (
            <button 
              key={tab}
              onClick={() => handleTabSwitch(tab)}
              className={`transition-colors cursor-pointer relative py-2 ${activeTab === tab ? 'text-[#d4af37]' : 'text-white/60 hover:text-white'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="hidden md:block">
          <button onClick={() => setIsBookingOpen(true)} className="bg-transparent border border-[#d4af37]/50 text-[#d4af37] px-[30px] py-[14px] rounded-none font-bold uppercase text-[10px] tracking-[3px] cursor-pointer hover:bg-[#d4af37]/10 transition-colors">
            Book Table
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[#d4af37] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-[#d4af37]/30 p-6 z-[65] flex flex-col gap-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          {tabs.map(tab => (
            <span 
              key={tab} 
              onClick={() => handleTabSwitch(tab)}
              className={`cursor-pointer transition-colors uppercase tracking-widest py-3 text-sm font-light ${activeTab === tab ? 'gold-text font-bold' : 'text-white/60 hover:text-[#d4af37]'}`}
            >
              {tab}
            </span>
          ))}
          <button onClick={() => setIsBookingOpen(true)} className="w-full mt-4 bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] text-black px-[24px] py-[16px] rounded-none font-bold uppercase text-[12px] tracking-[2px] cursor-pointer">
            Book Table
          </button>
        </div>
      )}

      {/* Main Content Area */}
      <div className="w-full flex-1 flex flex-col z-10 min-h-screen pt-20 pb-[100px] md:pb-0">
        {renderView()}
      </div>

      {/* Desktop Info Strip */}
      <div className="hidden md:flex mt-auto w-full h-[120px] bg-black/95 border-t-[0.5px] border-[#d4af37]/30 items-center justify-around px-12 z-40 relative isolate">
         <div className="flex flex-col gap-[8px]">
            <span className="text-[10px] uppercase text-[#d4af37] tracking-[2px] flex items-center gap-2"><MapPin size={14}/> Location</span>
            <span className="text-[13px] text-white/80 font-light tracking-wide">{KRAVE_CONFIG.location.address}</span>
         </div>
         <div className="flex flex-col gap-[8px]">
            <span className="text-[10px] uppercase text-[#d4af37] tracking-[2px] flex items-center gap-2"><Clock size={14}/> Opening Hours</span>
            <span className="text-[13px] text-white/80 font-light tracking-wide">{KRAVE_CONFIG.location.hours}</span>
         </div>
         <div className="flex flex-col gap-[8px]">
            <span className="text-[10px] uppercase text-[#d4af37] tracking-[2px] flex items-center gap-2"><Phone size={14}/> Inquiries</span>
            <span className="text-[13px] text-white/80 font-light tracking-wide"><a href={`tel:${KRAVE_CONFIG.contact.displayPhone}`} className="hover:text-[#d4af37] transition-colors">{KRAVE_CONFIG.contact.displayPhone}</a></span>
         </div>
         <a href={`https://wa.me/${KRAVE_CONFIG.contact.whatsappNumber}`} target="_blank" rel="noreferrer" className="bg-transparent border border-[#d4af37]/50 text-[#d4af37] px-[24px] py-[14px] rounded-none font-bold flex items-center gap-[10px] text-[11px] uppercase tracking-[2px] cursor-pointer hover:bg-[#d4af37]/10 transition-colors">
            <MessageCircle size={18}/> WhatsApp Inquiry
         </a>
      </div>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-t-[0.5px] border-[#d4af37]/30 p-4 z-50 flex items-center justify-between gap-4 pb-safe shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
         <button onClick={() => handleTabSwitch('Menus')} className="flex flex-col items-center justify-center flex-1 bg-transparent border border-[#d4af37]/20 rounded-none py-3 text-white/70 hover:bg-white/5 transition cursor-pointer">
            <Menu size={20} className="mb-2" />
            <span className="text-[9px] uppercase tracking-[2px] font-medium">Menu</span>
         </button>
         <a href={`https://wa.me/${KRAVE_CONFIG.contact.whatsappNumber}`} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center flex-1 bg-transparent border border-[#d4af37]/50 rounded-none py-3 text-[#d4af37] hover:bg-[#d4af37]/10 transition cursor-pointer">
            <MessageCircle size={20} className="mb-2" />
            <span className="text-[9px] uppercase tracking-[2px] font-medium">WhatsApp</span>
         </a>
         <button onClick={() => setIsBookingOpen(true)} className="flex flex-col items-center justify-center flex-1 bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] border border-transparent rounded-none py-3 text-black hover:brightness-110 transition cursor-pointer">
            <Calendar size={20} className="mb-2"/>
            <span className="text-[9px] uppercase tracking-[2px] font-bold">Book</span>
         </button>
      </div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}

