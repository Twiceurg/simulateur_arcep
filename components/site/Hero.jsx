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

const Hero = ({ onNavigate }) => (
  <section className="pt-28 pb-20 md:pt-36 md:pb-40 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-[#116984] to-[#0085A1]">
    <div className="absolute top-0 right-0 opacity-10 pointer-events-none hidden md:block translate-x-1/4 translate-y-1/4 text-white">
      <Radio className="w-[40rem] h-[40rem]" />
    </div>
    
    <div className="max-w-5xl mx-auto text-center relative z-10">
      <div className="inline-flex items-center px-3 py-1.5 mb-5 md:mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] shadow-xl">
        <span className="w-2 h-2 bg-[#F7941D] rounded-full mr-3 animate-pulse"></span>
        Simulateur tarifaire
      </div>
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-6 md:mb-8 leading-[1.1] tracking-tighter">
        Comparer et simuler vos <br className="hidden sm:block"/> 
        <span className="text-[#00A5D4]">offres télécoms</span>
      </h1>
      <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto mb-8 md:mb-10 font-medium leading-relaxed px-4">
        Trouvez le meilleur forfait mobile et l'offre internet la plus adaptée à vos besoins en toute transparence avec l'ARCEP
      </p>
      
       
    </div>

    {/* Séparateur Sinusoïdal (Hauteur réduite) */}
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform translate-y-[2px]">
      <svg 
        viewBox="0 0 1440 320" 
        preserveAspectRatio="none" 
        className="relative block w-full h-[60px] md:h-[120px]"
      >
        <path fill="#f8fafc" d="M0,224L48,202.7C96,181,192,139,288,138.7C384,139,480,181,576,213.3C672,245,768,267,864,250.7C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  </section>
);
export default Hero;
