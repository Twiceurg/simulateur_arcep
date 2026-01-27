import React, { useState, useEffect } from "react";
import {
  Home, // Icône Accueil
  BookOpen, // Icône Guide
  Newspaper, // Icône Actus
} from "lucide-react";

const Header = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Gestion du scroll pour l'effet visuel du header haut
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Configuration du menu avec les icônes pour le mobile
  const menuItems = [
    { id: "accueil", label: "Accueil", icon: Home },
    { id: "guide", label: "Guide", icon: BookOpen },
    { id: "actualites", label: "Actualités", icon: Newspaper },
  ];

  return (
    <>
      {/* --- 1. HEADER DU HAUT (Logo + Desktop Nav) --- */}
      <header
        className={`fixed w-full top-0 z-[100] transition-all duration-300 border-b-4 border-[#00A5D4] ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl h-16 shadow-lg"
            : "bg-white h-20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex justify-between items-center">
          {/* Logo (Cliquable) */}
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

          {/* Navigation Desktop (Cachée sur mobile) */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all rounded-full overflow-hidden group ${
                  currentPage === item.id
                    ? "text-[#00A5D4] bg-[#00A5D4]/10"
                    : "text-slate-500 hover:text-[#116984] hover:bg-slate-50"
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#00A5D4] rounded-full"></span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* --- 2. BARRE DE NAVIGATION DU BAS (Mobile Only) --- */}
      {/* Visible uniquement en dessous de lg (lg:hidden) */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 z-[100] flex justify-around items-center h-16 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
                isActive ? "text-[#00A5D4]" : "text-slate-400"
              }`}
            >
              {/* Icône avec animation au clic */}
              <div
                className={`relative p-1 rounded-xl transition-all duration-300 ${isActive ? "bg-[#00A5D4]/10 -translate-y-1" : ""}`}
              >
                <Icon
                  className={`w-6 h-6 transition-transform ${isActive ? "scale-110" : ""}`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
              </div>

              {/* Libellé */}
              <span
                className={`text-[9px] font-bold uppercase tracking-wide ${isActive ? "text-[#00A5D4]" : "text-slate-400"}`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
};

export default Header;
