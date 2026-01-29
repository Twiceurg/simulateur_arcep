"use client";
import React, { useState } from 'react';
import { 
  ArrowLeft, Settings2, Clock, MessageSquareText, HardDrive, 
  PhoneIncoming, ChevronDown, Info, Wifi, Plane, Shield, 
  Zap, Download, Upload, CircleDollarSign, Wrench, Router, 
  RadioTower, FileText, CheckCircle2, Crown, Share2, AlertCircle,
  Signal
} from 'lucide-react';
import PageWrapper from "../pages/PageWrapper";

// --- COMPOSANT : ACCORDION STYLE "CHIC" ---
const AccordionSection = ({ title, icon: Icon, children, isOpen, onToggle }) => (
  <div className={`group bg-white/60 backdrop-blur-md rounded-[1.5rem] border transition-all duration-500 mb-3 ${isOpen ? "border-[#00A5D4]/30 shadow-lg shadow-cyan-900/5" : "border-slate-100 shadow-sm"}`}>
    <button onClick={onToggle} className="w-full flex items-center justify-between p-5 text-left outline-none">
      <div className="flex items-center">
        <div className={`p-2 rounded-xl mr-4 transition-all duration-500 ${isOpen ? "bg-[#00A5D4] text-white rotate-6" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"}`}>
          <Icon className="w-4 h-4" />
        </div>
        <h3 className={`text-xs font-black uppercase tracking-[0.1em] ${isOpen ? "text-[#116984]" : "text-slate-500"}`}>
          {title}
        </h3>
      </div>
      <div className={`h-8 w-8 rounded-full flex items-center justify-center transition-all ${isOpen ? "bg-cyan-50 rotate-180" : "bg-slate-50"}`}>
        <ChevronDown className={`w-4 h-4 ${isOpen ? "text-[#00A5D4]" : "text-slate-300"}`} />
      </div>
    </button>
    <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
      <div className="overflow-hidden">
        <div className="px-6 pb-6 pt-0">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-100 to-transparent mb-5" />
          {children}
        </div>
      </div>
    </div>
  </div>
);

const OfferDetailsPage = ({ offer, onBack }) => {
  const [openSections, setOpenSections] = useState({ summary: true, overview: true, coverage: false, terms: false });

  if (!offer) return null;
  const isFixed = offer.type === "fixe";

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <PageWrapper icon={FileText} title="FICHE DÉTAILLÉE" noPadding={true}>
      <div className="max-w-6xl mx-auto text-left px-4 md:px-0 mt-4 pb-20">
        
        {/* HEADER NAVIGATION */}
        <div className="flex items-center justify-between mb-8">
            <button onClick={onBack} className="flex items-center text-slate-400 font-bold text-[9px] uppercase tracking-[0.2em] hover:text-[#116984] transition-all group">
                <ArrowLeft className="w-3.5 h-3.5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Retour aux offres
            </button>
            <button className="p-2.5 rounded-full bg-slate-50 text-slate-400 hover:bg-white hover:text-[#00A5D4] hover:shadow-md transition-all">
                <Share2 className="w-4 h-4" />
            </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* COLONNE GAUCHE */}
          <div className="lg:col-span-2 space-y-4">
            
            {/* CARTE D'IDENTITÉ DE L'OFFRE */}
            <div className="relative bg-white rounded-[2.5rem] p-8 shadow-2xl shadow-slate-200/50 border border-white overflow-hidden">
                {/* Décoration en arrière-plan */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-50 rounded-full blur-3xl opacity-60" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                  {/* Logo / Icone */}
                  <div className="w-24 h-24 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-inner group">
                    {isFixed ? (
                      <Router className="w-10 h-10 transition-transform group-hover:scale-110" style={{ color: offer.color }} />
                    ) : (
                      <RadioTower className="w-10 h-10 transition-transform group-hover:scale-110" style={{ color: offer.color }} />
                    )}
                  </div>

                  <div className="flex-grow text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{offer.operator}</span>
                        <div className="h-1 w-1 rounded-full bg-slate-200" />
                        <span className="px-3 py-0.5 bg-emerald-50 text-emerald-600 rounded-full text-[9px] font-black uppercase border border-emerald-100 flex items-center">
                            <CheckCircle2 className="w-2.5 h-2.5 mr-1" /> Certifié ARCEP
                        </span>
                    </div>
                    <h2 className="text-3xl font-black text-[#116984] uppercase tracking-tighter leading-none mb-4">
                      {offer.name}
                    </h2>

                    {/* METRICS GRID - Version Cards */}
                    <div className="grid grid-cols-3 gap-3 mt-8">
                      {isFixed ? (
                        <>
                          <div className="bg-slate-50/50 p-3 rounded-2xl border border-slate-100">
                             <div className="flex items-center gap-2 mb-1 text-[#00A5D4]">
                                <Download className="w-3 h-3" />
                                <span className="text-[8px] font-black uppercase">Descendant</span>
                             </div>
                             <div className="text-sm font-black text-slate-800">{offer.speed}</div>
                          </div>
                          <div className="bg-slate-50/50 p-3 rounded-2xl border border-slate-100">
                             <div className="flex items-center gap-2 mb-1 text-[#116984]">
                                <Upload className="w-3 h-3" />
                                <span className="text-[8px] font-black uppercase">Montant</span>
                             </div>
                             <div className="text-sm font-black text-slate-800">{offer.upload || "Simétrique"}</div>
                          </div>
                          <div className="bg-slate-50/50 p-3 rounded-2xl border border-slate-100">
                             <div className="flex items-center gap-2 mb-1 text-[#F7941D]">
                                <HardDrive className="w-3 h-3" />
                                <span className="text-[8px] font-black uppercase">Data</span>
                             </div>
                             <div className="text-sm font-black text-slate-800">{offer.data}</div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="bg-slate-50/50 p-3 rounded-2xl border border-slate-100">
                             <div className="flex items-center gap-2 mb-1 text-[#00A5D4]">
                                <Wifi className="w-3 h-3" />
                                <span className="text-[8px] font-black uppercase">Internet</span>
                             </div>
                             <div className="text-sm font-black text-slate-800">{offer.data}</div>
                          </div>
                          <div className="bg-slate-50/50 p-3 rounded-2xl border border-slate-100">
                             <div className="flex items-center gap-2 mb-1 text-[#116984]">
                                <PhoneIncoming className="w-3 h-3" />
                                <span className="text-[8px] font-black uppercase">Appels</span>
                             </div>
                             <div className="text-sm font-black text-slate-800">{offer.calls}</div>
                          </div>
                          <div className="bg-slate-50/50 p-3 rounded-2xl border border-slate-100">
                             <div className="flex items-center gap-2 mb-1 text-[#F7941D]">
                                <MessageSquareText className="w-3 h-3" />
                                <span className="text-[8px] font-black uppercase">SMS</span>
                             </div>
                             <div className="text-sm font-black text-slate-800">{offer.sms}</div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
            </div>

            {/* ACCORDIONS */}
            <div className="space-y-4">
                <AccordionSection title="Présentation de l'offre" icon={Zap} isOpen={openSections.overview} onToggle={() => toggleSection("overview")}>
                    <p className="text-slate-500 text-xs leading-relaxed mb-6">
                        {isFixed 
                           ? `Accédez au très haut débit avec la technologie ${offer.techno}. Cette offre est conçue pour garantir une stabilité maximale ${offer.target === "Entreprise" ? "aux professionnels exigeants" : "pour toute la famille"}.`
                           : `Le forfait ${offer.name} offre un mix idéal pour vos besoins quotidiens. Profitez d'une connectivité fluide sur le réseau national.`}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {offer.roaming && (
                            <div className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-xl text-[9px] font-black uppercase border border-emerald-100 flex items-center">
                                <Plane className="w-3 h-3 mr-1.5" /> Roaming Inclus
                            </div>
                        )}
                        {offer.tag && (
                            <div className="px-3 py-1.5 bg-amber-50 text-amber-700 rounded-xl text-[9px] font-black uppercase border border-amber-100 flex items-center">
                                <Crown className="w-3 h-3 mr-1.5" /> {offer.tag}
                            </div>
                        )}
                        <div className="px-3 py-1.5 bg-slate-50 text-slate-600 rounded-xl text-[9px] font-black uppercase border border-slate-100 flex items-center">
                            <Clock className="w-3 h-3 mr-1.5" /> {isFixed ? "Engagement 12 mois" : `Validité ${offer.validity || "30 Jours"}`}
                        </div>
                    </div>
                </AccordionSection>

                <AccordionSection title="Réseau & Couverture" icon={Wifi} isOpen={openSections.coverage} onToggle={() => toggleSection("coverage")}>
                    <div className="flex items-start gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center shrink-0 border border-cyan-100 text-[#00A5D4]">
                            <Signal className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-black text-[#116984] text-sm uppercase tracking-tight mb-1">Qualité de service garantie</h4>
                            <p className="text-[11px] text-slate-500 leading-relaxed max-w-md">
                                {isFixed 
                                  ? `Raccordement direct via terminal ${offer.techno}. Latence moyenne constatée inférieure à 20ms.`
                                  : `Couverture nationale sur les fréquences 4G/5G certifiées par l'ARCEP. Débit optimal en zone urbaine.`}
                            </p>
                        </div>
                    </div>
                </AccordionSection>

                <AccordionSection title="Modalités de souscription" icon={Shield} isOpen={openSections.terms} onToggle={() => toggleSection("terms")}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl bg-slate-50/50 border border-slate-100">
                            <div className="flex items-center gap-2 mb-2 text-[#116984]">
                                <FileText className="w-4 h-4" />
                                <span className="text-[10px] font-black uppercase">Documents requis</span>
                            </div>
                            <ul className="space-y-1.5">
                                {["Pièce d'identité valide", "Preuve de résidence", "Contrat signé"].map((item, i) => (
                                    <li key={i} className="text-[10px] text-slate-500 flex items-center gap-2">
                                        <div className="h-1 w-1 bg-[#00A5D4] rounded-full" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-4 rounded-2xl bg-slate-50/50 border border-slate-100">
                            <div className="flex items-center gap-2 mb-2 text-[#116984]">
                                <AlertCircle className="w-4 h-4" />
                                <span className="text-[10px] font-black uppercase">Infos importantes</span>
                            </div>
                            <p className="text-[10px] text-slate-500 leading-relaxed">
                                Les tarifs affichés incluent la TVA (18%). Toute résiliation anticipée peut entraîner des frais.
                            </p>
                        </div>
                    </div>
                </AccordionSection>
            </div>
          </div>

          {/* COLONNE DROITE (CONVERSION) */}
          <aside className="space-y-6 lg:sticky lg:top-24">
            
            {/* CARTE DE PAIEMENT "LUXURY" */}
            <div className="bg-gradient-to-br from-[#116984] to-[#0085A1] rounded-[2.5rem] p-8 shadow-2xl shadow-cyan-900/20 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-1000" />
              
              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 block mb-2">Total Mensuel</span>
                <div className="flex items-baseline mb-8">
                    <span className="text-5xl font-black tracking-tighter tabular-nums">{offer.price?.toLocaleString()}</span>
                    <span className="text-lg ml-2 font-bold opacity-50 uppercase">f cfa</span>
                </div>
                
                <button className="w-full py-4 bg-white text-[#116984] font-black rounded-2xl text-[11px] uppercase tracking-widest hover:bg-[#00A5D4] hover:text-white transition-all shadow-xl active:scale-95 mb-4">
                  {isFixed ? "Vérifier mon éligibilité" : "Obtenir maintenant"}
                </button>
                
                <div className="flex items-center justify-center gap-2 text-[9px] font-bold opacity-60 uppercase">
                    <Shield className="w-3 h-3" /> Transaction Sécurisée
                </div>
              </div>
            </div>

            {/* RÉCAPITULATIF FINANCIER */}
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                <h3 className="text-[10px] font-black uppercase tracking-widest mb-5 flex items-center text-[#116984]">
                  <CircleDollarSign className="w-4 h-4 mr-2 text-[#F7941D]" /> Détail du coût
                </h3>
                <div className="space-y-3">
                    <div className="flex justify-between text-[11px] font-medium text-slate-500">
                        <span>Abonnement</span>
                        <span className="text-slate-800 font-black">{offer.price?.toLocaleString()} F</span>
                    </div>
                    {isFixed && (
                        <div className="flex justify-between text-[11px] font-medium text-slate-500">
                            <span>Installation</span>
                            <span className="text-[#F7941D] font-black">{offer.installation || "Offerte"}</span>
                        </div>
                    )}
                    <div className="h-px bg-slate-50 my-2" />
                    <div className="flex justify-between text-[11px] font-black text-[#116984] uppercase tracking-wide">
                        <span>Total à régler</span>
                        <span className="text-[#00A5D4] text-sm">{offer.price?.toLocaleString()} F</span>
                    </div>
                </div>
                
                <div className="mt-6 p-3 rounded-xl bg-slate-50 border border-slate-100 flex gap-3">
                    <Info className="w-4 h-4 text-[#F7941D] shrink-0" />
                    <p className="text-[9px] text-slate-500 leading-relaxed italic">
                        Tarifs homologués ARCEP Togo. Pas de frais cachés.
                    </p>
                </div>
            </div>

          </aside>
        </div>
      </div>
    </PageWrapper>
  );
};

export default OfferDetailsPage;