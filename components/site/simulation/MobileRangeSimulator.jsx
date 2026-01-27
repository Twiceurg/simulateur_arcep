"use client";
import React, { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  ArrowLeft,
  Layers,
  Globe,
  ChevronDown,
  ChevronRight,
  Coins,
  Wallet,
  Crown,
  CheckCircle2,
  Smartphone,
  HardDrive,
  PhoneIncoming,
  MessageSquareText,
  Clock,
  LayoutDashboard,
  TowerControl as Tower,
  SlidersHorizontal,
  Check,
  CalendarDays,
} from "lucide-react";
import PageWrapper from "../pages/PageWrapper";

// --- DONNÉES SIMULÉES ---
const MOCK_OFFERS = [
  { id: 1, operator: "Moov Africa", rangeId: "eco", name: "Kit Rapide", price: 200, data: "100 Mo", sms: "10 SMS", calls: "10 Min", validity: "24h", type: "Data + SMS", color: "#00A5D4" },
  { id: 2, operator: "Togocom", rangeId: "eco", name: "Flash Night", price: 250, data: "500 Mo", sms: "0 SMS", calls: "0 Min", validity: "Nuit", type: "Data Only", color: "#116984" },
  { id: 3, operator: "Moov Africa", rangeId: "eco", name: "Mini Voice", price: 300, data: "20 Mo", sms: "50 SMS", calls: "15 Min", validity: "24h", type: "Voix + Data", color: "#00A5D4" },
  { id: 4, operator: "Togocom", rangeId: "standard", name: "Giga Semaine", price: 2500, data: "3 Go", sms: "100 SMS", calls: "45 Min", validity: "7 Jours", type: "Data Only", color: "#116984" },
  { id: 5, operator: "Moov Africa", rangeId: "standard", name: "Moov Flex", price: 1500, data: "1.5 Go", sms: "Illimité", calls: "60 Min", validity: "7 Jours", type: "Mixte", color: "#00A5D4" },
  { id: 6, operator: "Togocom", rangeId: "standard", name: "T-Monthly", price: 5000, data: "6 Go", sms: "200 SMS", calls: "120 Min", validity: "30 Jours", type: "Data", color: "#116984" },
  { id: 7, operator: "Togocom", rangeId: "premium", name: "Business Fiber", price: 15000, data: "Illimité", sms: "Illimité", calls: "Illimité", validity: "30 Jours", type: "Fibre Mobile", color: "#116984" },
  { id: 8, operator: "Moov Africa", rangeId: "premium", name: "Izy Hours", price: 10000, data: "20 Go", sms: "500 SMS", calls: "300 Min", validity: "30 Jours", type: "Pro", color: "#00A5D4" },
];

const OPERATORS_LIST = [
  { id: "all", name: "Tous les opérateurs" },
  { id: "moov", name: "Moov Africa" },
  { id: "togocom", name: "Togocom" },
];

// --- COMPOSANT SELECT JOLI ---
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

// --- COMPOSANT PRINCIPAL ---
const MobileRangeSimulator = ({ onBack, onStart }) => {
  const [selectedOperator, setSelectedOperator] = useState(OPERATORS_LIST[0]);
  const [selectedRange, setSelectedRange] = useState(null);

  const priceRanges = [
    { id: "eco", label: "Éco", sub: "< 500 F", icon: Coins, color: "#F7941D" },
    { id: "standard", label: "Confort", sub: "500 - 5000 F", icon: Wallet, color: "#00A5D4" },
    { id: "premium", label: "Intense", sub: "> 5000 F", icon: Crown, color: "#116984" },
  ];

  const filteredOffers = MOCK_OFFERS.filter((offer) => {
    const opMatch = selectedOperator.id === "all" || offer.operator === selectedOperator.name;
    const rangeMatch = offer.rangeId === selectedRange;
    return opMatch && rangeMatch;
  });

  return (
    <PageWrapper title="Simulateur Instantané" icon={LayoutDashboard} noPadding={true}>
      <div className="flex flex-col lg:flex-row gap-6 mt-4 text-left px-4 md:px-0 items-start">
        
        {/* === SIDEBAR : FILTRES === */}
        <aside className="lg:w-1/4 flex flex-col gap-4 text-left">
          <div className="bg-white rounded-[1.5rem] p-5 shadow-lg border border-slate-100 text-left overflow-visible relative">
            <div className="relative z-10 text-left">
              <div className="flex items-center justify-between mb-4 text-left">
                <div className="flex items-center space-x-2 text-left">
                  <SlidersHorizontal className="w-4 h-4 text-[#F7941D]" />
                  <h3 className="font-black text-[#116984] uppercase text-[10px] tracking-widest text-left">
                    Configuration
                  </h3>
                </div>
              </div>

              {/* OPÉRATEUR */}
              <div className="mb-5 pb-5 border-b border-slate-50 text-left">
                <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center">
                  <Globe className="w-3 h-3 mr-2" /> Opérateur
                </h4>
                <PrettySelect
                  value={selectedOperator}
                  onChange={setSelectedOperator}
                  options={OPERATORS_LIST}
                />
              </div>

              {/* BUDGET */}
              <div className="text-left">
                <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center">
                  <Layers className="w-3 h-3 mr-2" /> Votre Budget
                </h4>
                
                <div className="grid grid-cols-3 gap-2">
                  {priceRanges.map((range) => {
                    const isSelected = selectedRange === range.id;
                    const Icon = range.icon;
                    return (
                      <div
                        key={range.id}
                        // Logique de bascule (toggle)
                        onClick={() => setSelectedRange(selectedRange === range.id ? null : range.id)}
                        className={`
                            group flex flex-col items-center justify-center p-2 rounded-xl border cursor-pointer transition-all duration-300 h-20
                            ${isSelected 
                                ? "bg-[#116984] border-[#116984] text-white shadow-md transform scale-105" 
                                : "bg-slate-50 border-slate-50 hover:border-[#00A5D4] hover:bg-white"
                            }
                        `}
                      >
                        <div className={`mb-1 ${isSelected ? "text-white" : "text-slate-400"}`}>
                           <Icon className="w-4 h-4" />
                        </div>
                        <div className={`font-black uppercase text-[8px] tracking-tight leading-none mb-0.5 ${isSelected ? "text-white" : "text-[#116984]"}`}>
                            {range.label}
                        </div>
                        <div className={`text-[7px] font-bold ${isSelected ? "text-white/80" : "text-slate-400"}`}>
                            {range.sub}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={onBack}
            className="flex items-center justify-center text-slate-400 font-bold text-[10px] uppercase tracking-widest hover:text-[#116984] transition-colors group py-3"
          >
            <ArrowLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" />
            Revenir à l&apos;accueil
          </button>
        </aside>

        {/* === MAIN CONTENT : RÉSULTATS === */}
        <div className="lg:w-3/4 flex flex-col gap-3 text-left">
          
          {/* Header Compact */}
          <div className="bg-[#116984] rounded-xl p-4 flex items-center justify-between text-white shadow-md relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl pointer-events-none"></div>
            <div className="flex items-center space-x-3 relative z-10">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-md border border-white/10">
                <Smartphone className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[8px] font-bold uppercase tracking-widest opacity-60">Résultats</span>
                <h3 className="text-sm font-black uppercase">
                  {selectedRange ? `${filteredOffers.length} Offres` : "En attente"}
                </h3>
              </div>
            </div>
          </div>

          {/* LISTE DES OFFRES */}
          <div className="flex flex-col gap-2 min-h-[400px]">
            {!selectedRange ? (
              <div className="flex flex-col items-center justify-center h-64 bg-white rounded-xl border border-dashed border-slate-200 opacity-60">
                <Layers className="w-8 h-8 text-slate-300 mb-2" />
                <p className="text-xs text-slate-400">Sélectionnez un budget à gauche</p>
              </div>
            ) : filteredOffers.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 bg-white rounded-xl border border-slate-100">
                <p className="text-xs text-slate-400">Aucune offre trouvée</p>
              </div>
            ) : (
              filteredOffers.map((offer) => (
                <div
                  key={offer.id}
                  // AJOUT IMPORTANT : LE CLIC SUR LA CARTE LANCE L'OFFRE
                  onClick={() => (onStart ? onStart(offer) : null)}
                  className="group bg-white rounded-xl p-3 shadow-sm border border-slate-100 hover:shadow-md hover:border-[#00A5D4]/30 transition-all duration-200 cursor-pointer flex flex-row items-center justify-between gap-4"
                >
                  {/* Partie Gauche : Infos */}
                  <div className="flex items-center gap-4 flex-1">
                     <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                        <Tower className="w-5 h-5" style={{ color: offer.color }} />
                     </div>
                     
                     <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[8px] font-bold uppercase text-slate-400 tracking-wider">{offer.operator}</span>
                            <span className="px-1.5 py-0.5 bg-cyan-50 text-[#00A5D4] rounded text-[8px] font-black uppercase">{offer.type}</span>
                        </div>
                        <h3 className="text-sm font-black text-[#116984] uppercase tracking-tight leading-none mb-1 group-hover:text-[#00A5D4] transition-colors">
                            {offer.name}
                        </h3>
                        <div className="flex items-center gap-3 text-[10px] text-slate-500 font-medium">
                            <span className="flex items-center"><HardDrive className="w-3 h-3 mr-1 text-slate-300" /> {offer.data}</span>
                            <span className="flex items-center"><PhoneIncoming className="w-3 h-3 mr-1 text-slate-300" /> {offer.calls}</span>
                            <span className="hidden sm:flex items-center"><MessageSquareText className="w-3 h-3 mr-1 text-slate-300" /> {offer.sms}</span>
                        </div>
                     </div>
                  </div>

                  {/* Partie Droite : Prix + Bouton */}
                  <div className="flex items-center gap-4 text-right">
                     <div className="hidden sm:block">
                        <div className="text-lg font-black text-[#00A5D4] leading-none">{offer.price} <span className="text-[9px] text-slate-300">F</span></div>
                        <div className="text-[8px] text-slate-400 font-bold uppercase text-right">{offer.validity}</div>
                     </div>
                     
                     {/* Le bouton déclenche aussi l'action, même si le clic parent le ferait aussi.
                         e.stopPropagation n'est pas nécessaire ici car l'action est la même. */}
                     <button
                        className="h-8 px-4 bg-[#116984] text-white rounded-lg text-[9px] font-black uppercase tracking-widest shadow hover:bg-[#00A5D4] transition-colors flex items-center group/btn"
                     >
                        <span className="hidden sm:inline">Choisir</span>
                        <ChevronRight className="w-3 h-3 sm:ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                     </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default MobileRangeSimulator;