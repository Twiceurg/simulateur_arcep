"use client";
import React, { useState } from 'react';
import { 
  ArrowLeft,
  Settings2,
  Clock,
  MessageSquareText,
  HardDrive,
  PhoneIncoming,
  ChevronDown,
  Info,
  Wifi,
  Plane,
  Shield,
  Zap,
  Download,
  Upload,
  CircleDollarSign,
  Wrench,
  Router,
  TowerControl as Tower,
  FileText
} from 'lucide-react';
import PageWrapper from "../pages/PageWrapper";

// --- COMPOSANT : SECTIONS DÉPLIABLES (ACCORDION) ---
const AccordionSection = ({
  title,
  icon: Icon,
  children,
  isOpen,
  onToggle,
}) => (
  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden transition-all duration-300 mb-3">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
    >
      <div className="flex items-center">
        <div
          className={`p-1.5 rounded-lg mr-3 ${
            isOpen ? "bg-[#00A5D4]/10 text-[#00A5D4]" : "bg-slate-50 text-slate-400"
          }`}
        >
          <Icon className="w-4 h-4" />
        </div>
        <h3
          className={`text-sm font-black uppercase tracking-wide ${
            isOpen ? "text-[#116984]" : "text-slate-500"
          }`}
        >
          {title}
        </h3>
      </div>
      <div
        className={`transform transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        <ChevronDown
          className={`w-4 h-4 ${isOpen ? "text-[#00A5D4]" : "text-slate-300"}`}
        />
      </div>
    </button>
    {isOpen && (
      <div className="px-6 pb-6 pt-0 animate-in slide-in-from-top-1 fade-in duration-200">
        <div className="h-px w-full bg-slate-50 mb-4"></div>
        {children}
      </div>
    )}
  </div>
);

// --- COMPOSANT : PAGE DÉTAILS DE L'OFFRE ---
const OfferDetailsPage = ({ offer, onBack }) => {
  const [openSections, setOpenSections] = useState({
    summary: true,
    overview: true,
    coverage: false,
    terms: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  if (!offer) return null;

  const isFixed = offer.type === "fixe";

  // Config dynamique selon le type d'offre
  const metrics = isFixed
    ? [
        {
          icon: Download,
          label: "Descendant",
          value: offer.speed,
          color: "#00A5D4",
        },
        {
          icon: Upload,
          label: "Montant",
          value: offer.upload || "Simétrique",
          color: "#116984",
        },
        {
          icon: HardDrive,
          label: "Volume",
          value: offer.data,
          color: "#F7941D",
        },
      ]
    : [
        {
          icon: HardDrive,
          label: "Data",
          value: offer.data,
          color: "#00A5D4",
        },
        {
          icon: PhoneIncoming,
          label: "Appels",
          value: offer.calls,
          color: "#116984",
        },
        {
          icon: MessageSquareText,
          label: "SMS",
          value: offer.sms,
          color: "#F7941D",
        },
      ];

  return (
    <PageWrapper icon={FileText} title="Détails de l'offre" noPadding={true}>
      <div className="max-w-6xl mx-auto text-left px-4 md:px-0 mt-6">
        
        <button
          onClick={onBack}
          className="flex items-center text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-6 hover:text-[#116984] transition-colors group text-left"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />{" "}
          Retour aux résultats
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* COLONNE GAUCHE (INFO PRINCIPALE) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            
            {/* 1. EN-TÊTE DE L'OFFRE (Carte principale) */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-inner shrink-0">
                  {isFixed ? (
                    <Router
                      className="w-8 h-8"
                      style={{ color: offer.color }}
                    />
                  ) : (
                    <Tower
                      className="w-8 h-8"
                      style={{ color: offer.color }}
                    />
                  )}
                </div>
                <div className="flex-grow text-center md:text-left w-full">
                  <div className="flex flex-col md:flex-row justify-between items-center mb-2">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                            {offer.operator}
                        </span>
                        <h2 className="text-xl font-black text-[#116984] uppercase tracking-tighter leading-none">
                            {offer.name}
                        </h2>
                      </div>
                      <div className="text-right mt-2 md:mt-0">
                         <div className="text-2xl font-black text-[#00A5D4]">
                            {offer.price?.toLocaleString()}{" "}
                            <span className="text-xs text-slate-300">F</span>
                         </div>
                      </div>
                  </div>
                  
                  <div className="h-px bg-slate-50 my-4"></div>

                  <div className="grid grid-cols-3 gap-2 text-center md:text-left">
                    {metrics.map((m, i) => (
                      <div key={i} className="bg-slate-50 p-2.5 rounded-lg border border-slate-100/50">
                        <span className="block text-[8px] font-black uppercase text-slate-400 mb-0.5">
                          {m.label}
                        </span>
                        <span
                          className="text-sm font-black flex items-center justify-center md:justify-start"
                          style={{ color: m.color }}
                        >
                          <m.icon className="w-3 h-3 mr-1 opacity-70"/> {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
            </div>

            {/* 2. PLAN OVERVIEW */}
            <AccordionSection
              title="Caractéristiques"
              icon={Zap}
              isOpen={openSections.overview}
              onToggle={() => toggleSection("overview")}
            >
              <p className="text-slate-500 text-xs leading-relaxed mb-4">
                {isFixed
                  ? `Profitez d'une connexion internet fixe ${offer.techno} ultra-rapide. Idéal pour ${offer.target === "Entreprise" ? "les usages professionnels intensifs" : "le streaming et le télétravail à domicile"}.`
                  // --- CORRECTION 1 : Protection sur offer.data.includes ---
                  : `Profitez d'une connectivité optimale avec le forfait ${offer.name}. Idéal pour les utilisateurs ayant une consommation ${(offer.data || "").includes("Go") && parseInt(offer.data) > 10 ? "intensive" : "modérée"} d'internet.`}
              </p>
              <div className="flex flex-wrap gap-2">
                {offer.roaming && (
                  <span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[9px] font-black uppercase tracking-wider flex items-center border border-emerald-100">
                    <Plane className="w-3 h-3 mr-1" /> Roaming
                  </span>
                )}
                {isFixed && (
                  <span className="px-2.5 py-1 bg-cyan-50 text-cyan-600 rounded-lg text-[9px] font-black uppercase tracking-wider flex items-center border border-cyan-100">
                    <Wrench className="w-3 h-3 mr-1" /> Install. {offer.installation}
                  </span>
                )}
                <span className="px-2.5 py-1 bg-slate-50 text-slate-500 rounded-lg text-[9px] font-black uppercase tracking-wider flex items-center border border-slate-100">
                  <Clock className="w-3 h-3 mr-1" />{" "}
                  {isFixed ? "24/7" : offer.hours || "24h/24"}
                </span>
              </div>
            </AccordionSection>

            {/* 3. COUVERTURE / TECHNOLOGIE */}
            <AccordionSection
              title="Réseau & Techno"
              icon={Wifi}
              isOpen={openSections.coverage}
              onToggle={() => toggleSection("coverage")}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                  <Wifi className="w-6 h-6 text-[#00A5D4]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#116984] text-sm">
                    {isFixed
                      ? `Technologie ${offer.techno}`
                      // --- CORRECTION 2 : Valeur par défaut pour network ---
                      : `Réseau ${offer.network || "4G+"}`}
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">
                    {isFixed
                      ? `Raccordement via ${offer.techno} avec débit garanti.`
                      // --- CORRECTION 3 : Protection sur offer.network.includes ---
                      : `Couverture nationale ARCEP. Débit théorique max: ${(offer.network || "").includes("5G") ? "1 Gbps" : "150 Mbps"}.`}
                  </p>
                </div>
              </div>
            </AccordionSection>

            {/* 4. TERMES */}
            <AccordionSection
              title="Conditions"
              icon={Shield}
              isOpen={openSections.terms}
              onToggle={() => toggleSection("terms")}
            >
              <ul className="space-y-2">
                <li className="flex items-start text-[10px] text-slate-500 leading-relaxed">
                  <div className="w-1 h-1 bg-[#00A5D4] rounded-full mt-1.5 mr-2 shrink-0"></div>
                  {isFixed
                    ? `Engagement : ${offer.engagement}`
                    : `Validité : ${offer.validity}`}
                </li>
                <li className="flex items-start text-[10px] text-slate-500 leading-relaxed">
                  <div className="w-1 h-1 bg-[#00A5D4] rounded-full mt-1.5 mr-2 shrink-0"></div>
                  {isFixed
                    ? "Frais de résiliation applicables selon CGV."
                    : "Non reconductible tacitement."}
                </li>
              </ul>
            </AccordionSection>
          </div>

          {/* COLONNE DROITE (ACTION & COST) */}
          <div className="space-y-4 text-left lg:sticky lg:top-24">
            
            {/* CARTE D'ACTION */}
            <div className="bg-[#116984] rounded-2xl p-6 shadow-xl text-white text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-xl pointer-events-none"></div>
              
              <span className="text-[9px] font-bold uppercase tracking-widest opacity-70 block mb-1">
                Total à payer
              </span>
              <div className="text-3xl font-black mb-6 relative z-10">
                {offer.price?.toLocaleString()} <span className="text-sm font-medium">F</span>
              </div>
              
              <button className="w-full py-3 bg-white text-[#116984] font-black rounded-xl text-[10px] uppercase tracking-widest hover:bg-[#00A5D4] hover:text-white transition-all shadow-lg relative z-10">
                {isFixed ? "Vérifier éligibilité" : "Souscrire maintenant"}
              </button>
              
              <p className="text-[8px] mt-3 opacity-50 relative z-10">
                {isFixed
                  ? "Test technique requis avant installation."
                  : "Activation immédiate par code USSD."}
              </p>
            </div>

            {/* DÉTAILS DES COÛTS */}
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <h3 className="text-[10px] font-black uppercase tracking-widest mb-3 flex items-center text-[#116984]">
                  <CircleDollarSign className="w-3 h-3 mr-2 text-[#F7941D]" /> Récapitulatif
                </h3>
                <ul className="space-y-2">
                  <li className="flex justify-between text-[10px] font-medium text-slate-600">
                    <span>Forfait</span>
                    <span className="font-bold">{offer.price?.toLocaleString()} F</span>
                  </li>
                  {isFixed && (
                    <li className="flex justify-between text-[10px] font-medium text-slate-600">
                      <span>Installation</span>
                      <span className="font-bold text-[#F7941D]">
                        {offer.installation}
                      </span>
                    </li>
                  )}
                  <li className="flex justify-between text-[10px] font-medium text-slate-600 pt-2 border-t border-slate-50 mt-2">
                    <span>Taxes (TVA)</span>
                    <span className="text-emerald-600 font-bold">Incluses</span>
                  </li>
                </ul>
            </div>

          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default OfferDetailsPage;