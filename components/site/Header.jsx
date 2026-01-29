import React, { useState, useEffect } from "react";
import {
  Home, // Icône Accueil
  BookOpen, // Icône Guide
  Newspaper, // Icône Actus
} from "lucide-react";

const Header = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "accueil", label: "Accueil", icon: Home },
    { id: "guide", label: "Guide", icon: BookOpen },
    { id: "actualites", label: "Actualités", icon: Newspaper },
  ];

  return (
    <>
      {/* 1. HEADER : Passage de h-20/16 à h-16/14 (64px/56px) */}
      <header
        className={`fixed w-full top-0 z-[100] transition-all duration-300 border-b-2 border-[#00A5D4] ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md h-14 shadow-md"
            : "bg-white h-16"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex justify-between items-center">
          
          {/* Logo : Taille réduite pour plus de finesse */}
          <div
            onClick={() => onNavigate("accueil")}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="relative">
              <div className={`transition-all duration-300 rounded-lg flex items-center justify-center overflow-hidden ${
                isScrolled ? "w-10 h-10" : "w-12 h-12"
              }`}>
                <img
                  src="/images/logo/logo1.png"
                  alt="Logo AR"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#F7941D] rounded-full border-2 border-white"></div>
            </div>

            {/* Texte : Ajustement des interlignes (leading) pour compacter */}
            <div className="flex flex-col text-left">
              <span className="text-[7px] md:text-[9px] uppercase tracking-wider font-extrabold text-[#116984] leading-tight">
                Autorité de Régulation
              </span>
              <span className="text-[6px] md:text-[8px] uppercase tracking-normal font-bold text-[#116984]/80 leading-tight max-w-[150px]">
                des Communications Électroniques et des Postes
              </span>
            </div>
          </div>

          {/* Navigation Desktop : Boutons plus compacts */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition-all rounded-full ${
                  currentPage === item.id
                    ? "text-[#00A5D4] bg-[#00A5D4]/5"
                    : "text-slate-500 hover:text-[#116984] hover:bg-slate-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* --- 2. BOTTOM NAV (Mobile) : Réduction de h-16 à h-14 --- */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-lg border-t border-slate-200 z-[100] flex justify-around items-center h-14 pb-safe shadow-[0_-4px_15px_rgba(0,0,0,0.05)]">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center w-full h-full ${
                isActive ? "text-[#00A5D4]" : "text-slate-400"
              }`}
            >
              <Icon className={`w-5 h-5 mb-0.5 ${isActive ? "scale-110" : ""}`} />
              <span className="text-[8px] font-bold uppercase">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
};

export default Header;
