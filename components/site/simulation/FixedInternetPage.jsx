/* eslint-disable react-hooks/static-components */
"use client";
import React, { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  Router,
  ArrowLeft,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Briefcase,
  Zap,
  Building2,
  ChevronDown,
  Check,
  Globe
} from "lucide-react";
import PageWrapper from "../pages/PageWrapper";

// --- DONNÉES SIMULÉES ---
const MOCK_FIXED_OFFERS = [
  { id: 101, type: 'fixe', operator: 'Togocom', name: 'Fibre Pro Business', speed: '100 Mbps', upload: '50 Mbps', price: 25000, techno: 'Fibre', target: 'Entreprise', color: '#116984', installation: '50.000 F', engagement: '12 Mois', data: 'Illimité' },
  { id: 102, type: 'fixe', operator: 'GVA/CanalBox', name: 'Start', speed: '50 Mbps', upload: '20 Mbps', price: 15000, techno: 'Fibre', target: 'Particulier', color: '#F7941D', installation: 'Offert', engagement: 'Sans', data: 'Illimité' },
  { id: 103, type: 'fixe', operator: 'Moov Africa', name: '4G Box Home', speed: '30 Mbps', upload: '10 Mbps', price: 10000, techno: '4G Fixe', target: 'Particulier', color: '#00A5D4', installation: '25.000 F (Box)', engagement: 'Sans', data: '100 Go' },
];

const REGIONS = [{ id: 1, name: 'Maritime' }, { id: 2, name: 'Plateaux' }, { id: 3, name: 'Centrale' }];
const COMMUNES = [{ id: 1, name: 'Lomé' }, { id: 2, name: 'Bè' }, { id: 3, name: 'Agoè' }];

// --- COMPOSANT SELECT JOLI (Réutilisé) ---
const PrettySelect = ({ value, onChange, options }) => {
  return (
    <div className="relative w-full">
      <Listbox value={value} onChange={onChange}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-pointer bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-3 pr-8 text-left outline-none focus:border-[#00A5D4] transition-all hover:bg-white hover:border-slate-300">
            <span className="block truncate font-bold text-[#116984] text-[10px] uppercase tracking-wider">
              {value.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronDown className="h-3 w-3 text-slate-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm custom-scrollbar">
              {options.map((opt, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-9 pr-4 transition-colors ${
                      active ? "bg-[#00A5D4]/10 text-[#116984]" : "text-slate-600"
                    }`
                  }
                  value={opt}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate text-[10px] uppercase tracking-wide ${selected ? "font-black text-[#116984]" : "font-medium"}`}>
                        {opt.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#00A5D4]">
                          <Check className="h-3 w-3" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

const FixedInternetPage = ({ onBack, onSeeDetails }) => {
  const [target, setTarget] = useState('Particulier');
  const [speedFilter, setSpeedFilter] = useState(50);
  const [selectedRegion, setSelectedRegion] = useState(REGIONS[0]);
  const [selectedCommune, setSelectedCommune] = useState(COMMUNES[0]);

  const filteredOffers = MOCK_FIXED_OFFERS.filter(offer => 
    (target === 'Tous' || offer.target === target)
  );

  const ChicCheckbox = ({ label, defaultChecked }) => (
    <label className="flex items-center group cursor-pointer text-left py-1.5 hover:bg-slate-50 rounded-lg px-2 -mx-2 transition-colors">
        <div className="relative flex items-center justify-center">
            <input type="checkbox" defaultChecked={defaultChecked} className="peer appearance-none w-4 h-4 border-2 border-slate-200 rounded checked:bg-[#00A5D4] checked:border-[#00A5D4] transition-all" />
            <CheckCircle2 className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
        </div>
        <span className="ml-3 text-[10px] font-bold text-slate-600 group-hover:text-[#116984] transition-colors uppercase tracking-wide">{label}</span>
    </label>
  );

  return (
    <PageWrapper title="Simulateur Internet Fixe" icon={Router} noPadding={true}>
      <div className="flex flex-col lg:flex-row gap-6 mt-4 text-left px-4 md:px-0 items-start">
        
        {/* === SIDEBAR : FILTRES === */}
        <aside className="lg:w-1/4 flex flex-col gap-4 text-left">
          <div className="bg-white rounded-[1.5rem] p-5 shadow-lg border border-slate-100 text-left overflow-visible relative">
            
            {/* LOCALISATION */}
            <div className="mb-6 pb-6 border-b border-slate-50">
                <h3 className="flex items-center text-[#116984] font-black uppercase text-[10px] tracking-widest mb-4">
                    <MapPin className="w-3 h-3 mr-2 text-[#F7941D]" /> Localisation
                </h3>
                <div className="space-y-3">
                    <div>
                        <label className="text-[9px] font-bold text-slate-400 uppercase mb-1 block">Région</label>
                        <PrettySelect value={selectedRegion} onChange={setSelectedRegion} options={REGIONS} />
                    </div>
                    <div>
                        <label className="text-[9px] font-bold text-slate-400 uppercase mb-1 block">Commune</label>
                        <PrettySelect value={selectedCommune} onChange={setSelectedCommune} options={COMMUNES} />
                    </div>
                </div>
            </div>

            {/* BESOINS TECHNIQUES */}
            <div className="mb-2">
                <h3 className="flex items-center text-[#116984] font-black uppercase text-[10px] tracking-widest mb-4">
                    <Zap className="w-3 h-3 mr-2 text-[#00A5D4]" /> Besoins
                </h3>
                
                {/* CIBLE (Boutons compacts) */}
                <div className="bg-slate-50 p-1 rounded-xl flex mb-4">
                    {['Particulier', 'Entreprise', 'Tous'].map(t => (
                        <button 
                            key={t}
                            onClick={() => setTarget(t)}
                            className={`flex-1 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wide transition-all ${target === t ? 'bg-white text-[#116984] shadow-sm' : 'text-slate-400 hover:text-slate-500'}`}
                        >
                            {t}
                        </button>
                    ))}
                </div>

                {/* DEBIT SLIDER */}
                <div className="mb-4">
                    <div className="flex justify-between mb-2">
                        <span className="text-[9px] font-bold text-slate-400 uppercase">Vitesse Min.</span>
                        <span className="text-[10px] font-black text-[#00A5D4] bg-[#00A5D4]/10 px-1.5 py-0.5 rounded">{speedFilter} Mbps</span>
                    </div>
                    <input type="range" min="10" max="1000" step="10" value={speedFilter} onChange={(e) => setSpeedFilter(e.target.value)} className="w-full h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer accent-[#00A5D4]" />
                </div>

                {/* TECHNO CHECKBOXES */}
                <div className="space-y-0.5">
                    <ChicCheckbox label="Fibre Optique (FTTH)" defaultChecked={true} />
                    <ChicCheckbox label="ADSL / VDSL" />
                    <ChicCheckbox label="Box 4G / 5G" defaultChecked={true} />
                </div>
            </div>
          </div>

          <button onClick={onBack} className="flex items-center justify-center text-slate-400 font-bold text-[10px] uppercase tracking-widest hover:text-[#116984] transition-colors group py-3">
            <ArrowLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" /> Revenir à l&apos;accueil
          </button>
        </aside>

        {/* === MAIN CONTENT : OFFRES === */}
        <div className="lg:w-3/4 flex flex-col gap-3 text-left">
            
            {/* Header Compact */}
            <div className="bg-[#116984] rounded-xl p-4 flex items-center justify-between text-white shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl pointer-events-none"></div>
                <div className="flex items-center space-x-3 relative z-10">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-md border border-white/10">
                        <Router className="w-4 h-4 text-left" />
                    </div>
                    <div>
                        <span className="block text-[8px] font-bold uppercase tracking-widest opacity-60">Éligibilité</span>
                        <h3 className="text-sm font-black uppercase">
                            {filteredOffers.length} Offres disponibles
                        </h3>
                    </div>
                </div>
            </div>

            {/* LISTE DES OFFRES (DESIGN ULTRA FIN) */}
            <div className="flex flex-col gap-2 min-h-[400px]">
                {filteredOffers.map(offer => (
                    <div 
                        key={offer.id} 
                        onClick={() => onSeeDetails(offer)}
                        className="group bg-white rounded-xl p-3 shadow-sm border border-slate-100 hover:shadow-md hover:border-[#00A5D4]/30 transition-all duration-200 cursor-pointer flex flex-col sm:flex-row items-center justify-between gap-4"
                    >
                        {/* Partie Gauche : Logo + Infos */}
                        <div className="flex items-center gap-4 flex-1">
                            {/* Logo */}
                            <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-inner">
                                <Building2 className="w-5 h-5" style={{ color: offer.color }} />
                            </div>
                            
                            {/* Textes */}
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2 mb-0.5">
                                    <span className="text-[8px] font-bold uppercase text-slate-400 tracking-wider">{offer.operator}</span>
                                    <span className="px-1.5 py-0.5 bg-amber-50 text-amber-600 rounded text-[8px] font-black uppercase border border-amber-100">{offer.techno}</span>
                                </div>
                                <h3 className="text-sm font-black text-[#116984] uppercase tracking-tight leading-none mb-1 group-hover:text-[#00A5D4] transition-colors">
                                    {offer.name}
                                </h3>
                                {/* Détails en ligne */}
                                <div className="flex items-center gap-3 text-[10px] text-slate-500 font-medium">
                                    <span className="flex items-center text-[#00A5D4] font-bold"><Zap className="w-3 h-3 mr-1" /> {offer.speed}</span>
                                    <span className="flex items-center"><Briefcase className="w-3 h-3 mr-1 text-slate-300" /> {offer.target}</span>
                                </div>
                            </div>
                        </div>

                        {/* Partie Droite : Prix + Bouton */}
                        <div className="flex items-center justify-between sm:justify-end gap-4 text-right border-t sm:border-t-0 border-slate-50 pt-2 sm:pt-0 w-full sm:w-auto">
                            <div className="text-left sm:text-right">
                                <div className="text-lg font-black text-[#116984] leading-none">{offer.price.toLocaleString()} <span className="text-[9px] text-slate-300">F</span></div>
                                <div className="text-[8px] text-slate-400 font-bold uppercase text-right">Mensuel</div>
                            </div>
                            
                            <button className="h-8 px-4 bg-[#00A5D4] text-white rounded-lg text-[9px] font-black uppercase tracking-widest shadow hover:bg-[#116984] transition-colors flex items-center group/btn">
                                <span className="hidden sm:inline">Détails</span>
                                <ChevronRight className="w-3 h-3 sm:ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </PageWrapper>
  );
};
export default FixedInternetPage;