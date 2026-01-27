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

// --- COMPOSANT : FOOTER ---
const Footer = ({ onNavigate }) => (
  <footer className="bg-[#116984] pt-12 pb-8 text-white/90">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div className="sm:col-span-2 text-left">
          <div className="flex items-center space-x-4 mb-8 text-white">
            {/* Logo Agrandi & Structure Image */}
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg">
              <img
                src="/images/logo/logo1.png"
                alt="Logo AR"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<div class="text-[#116984] font-black text-xl">AR</div>';
                }}
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-bold leading-tight">
                Autorité de Régulation
              </span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-[0.15em] font-bold mt-1 leading-tight max-w-[160px] md:max-w-[220px] text-white/70">
                des Communications Électroniques et des Postes
              </span>
            </div>
          </div>

          <div className="flex space-x-4 mt-6">
            {[Linkedin, Twitter, Facebook].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F7941D] transition-all border border-white/5 shadow-inner"
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </a>
            ))}
          </div>
        </div>

        <div className="text-left mt-4 md:mt-0">
          <h4 className="text-white font-black mb-5 uppercase tracking-widest text-[10px]">
            Services
          </h4>
          <ul className="space-y-3 text-xs font-bold text-white/50">
            <li>
              <button
                onClick={() => onNavigate("resultats-comparaison")}
                className="hover:text-[#00A5D4] transition-colors uppercase tracking-tighter"
              >
                Simulateur Mobile
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("comparateur-fixe")}
                className="hover:text-[#00A5D4] transition-colors uppercase tracking-tighter"
              >
                Simulateur Internet Fixe
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("actualites")}
                className="hover:text-[#00A5D4] transition-colors uppercase tracking-tighter"
              >
                Observatoire
              </button>
            </li>
          </ul>
        </div>

        <div className="text-left mt-4 md:mt-0">
          <h4 className="text-white font-black mb-5 uppercase tracking-widest text-[10px]">
            Légal
          </h4>
          <ul className="space-y-3 text-xs font-bold text-white/50">
            <li>
              <a
                href="#"
                className="hover:text-[#00A5D4] transition-colors uppercase tracking-tighter"
              >
                Données personnelles
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#00A5D4] transition-colors uppercase tracking-tighter"
              >
                Mentions légales
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#00A5D4] transition-colors uppercase tracking-tighter"
              >
                Cookies
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/30 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-center md:text-left">
          &copy; 2026 Autorité de Régulation des Communications Électroniques et
          des Postes.
        </p>
      </div>
    </div>
  </footer>
);
export default Footer;
