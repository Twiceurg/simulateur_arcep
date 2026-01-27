import React, { useState, useEffect, useRef } from "react";
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
  Facebook,
} from "lucide-react";
import Image from "next/image";
// --- COMPOSANT : HEADER ---
const Header = ({ onOpenAI, onToggleMenu, currentPage, onNavigate }) => {
  const menuItems = [
    { id: "accueil", label: "Accueil" },
    // { id: "comparateur", label: "Comparateur" },
    { id: "guide", label: "Guide & Conseil" },
    { id: "actualites", label: "Actualités" },
  ];

  return (
    <header className="fixed w-full top-0 z-[100] bg-white/95 backdrop-blur-md border-b-4 border-[#00A5D4] h-16 md:h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex justify-between items-center">
        {/* Logo */}
        <div
          onClick={() => onNavigate("accueil")}
          className="flex items-center space-x-2 md:space-x-3 group cursor-pointer"
        >
          <div className="relative">
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform overflow-hidden">
              <img
                src="/images/logo/logo1.png"
                alt="Logo AR"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-[#F7941D] rounded-full border-2 border-white"></div>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold text-[#116984] leading-tight">
              Autorité de Régulation
            </span>
            <span className="text-[7px] md:text-[9px] uppercase tracking-[0.15em] font-bold text-[#116984] mt-0.5 leading-tight max-w-[140px] md:max-w-[180px]">
              des Communications Électroniques et des Postes
            </span>
          </div>
        </div>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-sm font-bold uppercase tracking-wide transition-all border-b-2 pb-1 ${
                currentPage === item.id
                  ? "text-[#00A5D4] border-[#00A5D4]"
                  : "text-slate-500 border-transparent hover:text-[#0085A1]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
      </div>
    </header>
  );
};

export default Header;
