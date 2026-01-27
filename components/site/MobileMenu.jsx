import React, { useState, useEffect, useRef } from 'react';
import { 
  Smartphone, 
  Wifi, 
  ShieldCheck, 
  Scale, 
  Bot, 
  Send, 
  X, 
  Menu, 
  UserCircle, 
  Radio,
  ChevronRight,
  Eye,
  TowerControl as Tower,
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react';

// --- COMPOSANT : MOBILE MENU ---
const MobileMenu = ({ isOpen, onToggle }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[110] bg-[#116984] flex flex-col p-6 animate-in slide-in-from-right duration-300 lg:hidden text-left">
      <div className="flex justify-between items-center mb-12">
        <span className="text-white font-black text-2xl uppercase tracking-tighter">Menu</span>
        <button onClick={onToggle} className="text-white text-3xl"><X /></button>
      </div>
      <nav className="flex flex-col space-y-6">
        {['Accueil', 'Comparateur', 'Guide & Conseil', 'Actualités'].map(item => (
          <a key={item} href="#" className="text-white text-xl font-bold border-b border-white/10 pb-4">{item}</a>
        ))}
      </nav>
    </div>
  );
};
export default MobileMenu;