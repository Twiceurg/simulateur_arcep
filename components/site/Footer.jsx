import React from "react";
import { Linkedin, Twitter, Facebook, MapPin } from "lucide-react";

// --- COMPOSANT : FOOTER COMPACT & 3D ---
const Footer = ({ onNavigate }) => (
  <footer className="relative bg-[#116984] pt-10 pb-6 text-white overflow-hidden border-t border-[#00A5D4]/30">
    {/* --- 1. AMBIANCE 3D (Lumières d'arrière-plan) --- */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#00A5D4] rounded-full mix-blend-soft-light filter blur-[80px] opacity-40"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#F7941D] rounded-full mix-blend-soft-light filter blur-[100px] opacity-30"></div>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
      {/* --- PARTIE HAUTE : LOGO & LIENS --- */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
        {/* A. IDENTITÉ (Compacte) */}
        <div className="flex items-center gap-4">
          {/* FOND BLANC POUR LE LOGO */}
          <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center p-2 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.2)]">
            <img
              src="/images/logo/logo1.png"
              alt="ARCEP"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML =
                  '<span class="font-black text-[#116984]">AR</span>';
              }}
            />
          </div>

          {/* TEXTES RÉDUITS ICI */}
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase tracking-widest font-bold text-white leading-none mb-1">
              Autorité de Régulation
            </span>
            <span className="text-[8px] font-medium text-cyan-100/80 max-w-[160px] leading-tight">
              des Communications Électroniques et des Postes
            </span>
          </div>
        </div>

        {/* B. NAVIGATION */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
          {[
            { label: "Simulateur Mobile", action: "resultats-comparaison" },
            { label: "Simulateur Fixe", action: "comparateur-fixe" },
            { label: "Guide", action: "guide" },
            { label: "Observatoire", action: "actualites" },
          ].map((link, i) => (
            <button
              key={i}
              onClick={() => onNavigate(link.action)}
              className="text-xs font-bold uppercase tracking-wide text-white/70 hover:text-white hover:scale-105 transition-all relative group"
            >
              {link.label}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#F7941D] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </button>
          ))}
        </nav>

        {/* C. SOCIAL & CONTACT */}
        <div className="flex items-center gap-3">
          {[Linkedin, Twitter, Facebook].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F7941D] flex items-center justify-center transition-all shadow-inner border border-white/10 group"
            >
              <Icon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>
      </div>

      {/* --- SÉPARATEUR FIN --- */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>

      {/* --- PARTIE BASSE : LÉGAL --- */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold uppercase tracking-widest text-cyan-100/50">
        {/* ANNÉE AUTOMATIQUE */}
        <p>
          &copy; {new Date().getFullYear()} ARCEP Togo. Tous droits réservés.
        </p>

        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">
            Données Personnelles
          </a>
          <span className="w-1 h-1 rounded-full bg-white/20"></span>
          <a href="#" className="hover:text-white transition-colors">
            Mentions Légales
          </a>
          <span className="w-1 h-1 rounded-full bg-white/20"></span>
          <div className="flex items-center gap-1 text-[#F7941D]">
            <MapPin className="w-3 h-3" /> Lomé, Togo
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
