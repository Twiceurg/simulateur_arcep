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
// --- COMPOSANT : PROTECTION ---

const ProtectionSection = () => (
  <section className="pb-16   pt-4 bg-[#f8fafc]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        
        <span className="block text-[#F7941D] font-black uppercase tracking-[0.4em] text-[10px] mb-3">
          Missions de Régulation
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#116984] leading-tight tracking-tighter">
          Votre pouvoir d'achat est notre priorité.
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-50 relative group">
          <div className="w-12 h-1 bg-[#00A5D4] mb-6 group-hover:w-24 transition-all duration-500"></div>
          <h3 className="text-xl font-black text-[#116984] mb-4 uppercase tracking-tighter italic">
            Transparence Totale
          </h3>
          <p className="text-slate-500 leading-relaxed text-base font-medium italic">
            "Le régulateur impose une structure de prix lisible. Chaque centime
            facturé doit être justifié."
          </p>
        </div>
        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-50 relative group">
          <div className="w-12 h-1 bg-[#F7941D] mb-6 group-hover:w-24 transition-all duration-500"></div>
          <h3 className="text-xl font-black text-[#116984] mb-4 uppercase tracking-tighter italic">
            Objectivité Absolue
          </h3>
          <p className="text-slate-500 leading-relaxed text-base font-medium italic">
            "Nos algorithmes classent les offres uniquement sur le prix et la
            performance réseau."
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ProtectionSection;
