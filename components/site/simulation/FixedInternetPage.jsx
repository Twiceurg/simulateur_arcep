/* eslint-disable react-hooks/static-components */
"use client";
import React, { useState, useMemo, Fragment } from "react";
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
  Globe,
  Radio,
  Cpu,
  Network,
  Signal,
  Filter,
  Clock,
} from "lucide-react";
import PageWrapper from "../pages/PageWrapper";

// --- DONNÉES SIMULÉES ENRICHIES ---
const MOCK_FIXED_OFFERS = [
  {
    id: 101,
    operator: "Togocom",
    name: "Fibre Pro Business",
    speed: "100 Mbps",
    valSpeed: 100,
    price: 25000,
    techno: "Fibre",
    target: "Entreprise",
    color: "#116984",
    data: "Illimité",
    tag: "Pro",
  },
  {
    id: 102,
    operator: "GVA/CanalBox",
    name: "Start",
    speed: "50 Mbps",
    valSpeed: 50,
    price: 15000,
    techno: "Fibre",
    target: "Particulier",
    color: "#F7941D",
    data: "Illimité",
    tag: "Best Seller",
  },
  {
    id: 103,
    operator: "Moov Africa",
    name: "4G Box Home",
    speed: "30 Mbps",
    valSpeed: 30,
    price: 10000,
    techno: "4G Fixe",
    target: "Particulier",
    color: "#00A5D4",
    data: "100 Go",
  },
  {
    id: 104,
    operator: "Togocom",
    name: "Fibre Home Max",
    speed: "200 Mbps",
    valSpeed: 200,
    price: 35000,
    techno: "Fibre",
    target: "Particulier",
    color: "#116984",
    data: "Illimité",
    tag: "Premium",
  },
  {
    id: 105,
    operator: "GVA/CanalBox",
    name: "Premium",
    speed: "200 Mbps",
    valSpeed: 200,
    price: 30000,
    techno: "Fibre",
    target: "Particulier",
    color: "#F7941D",
    data: "Illimité",
  },
  {
    id: 106,
    operator: "Moov Africa",
    name: "Box Pro 5G",
    speed: "300 Mbps",
    valSpeed: 300,
    price: 45000,
    techno: "4G Fixe",
    target: "Entreprise",
    color: "#00A5D4",
    data: "500 Go",
    tag: "Ultra Fast",
  },
  {
    id: 107,
    operator: "CAFE Informatique",
    name: "ADSL Connect",
    speed: "20 Mbps",
    valSpeed: 20,
    price: 12000,
    techno: "ADSL",
    target: "Particulier",
    color: "#64748b",
    data: "Illimité",
  },
];

const REGIONS = [
  { id: 1, name: "Maritime" },
  { id: 2, name: "Plateaux" },
  { id: 3, name: "Centrale" },
];
const COMMUNES = [
  { id: 1, name: "Lomé" },
  { id: 2, name: "Bè" },
  { id: 3, name: "Agoè" },
];

// --- COMPOSANTS UI ATOMIQUES ---

const PrettySelect = ({ value, onChange, options, label }) => (
  <div className="w-full">
    <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1.5 block ml-1">
      {label}
    </label>
    <Listbox value={value} onChange={onChange}>
      <div className="relative">
        <Listbox.Button className="relative w-full cursor-pointer bg-slate-50/50 border border-slate-100 rounded-xl py-2 px-3 text-left outline-none hover:bg-white hover:border-[#00A5D4]/30 transition-all shadow-sm">
          <span className="block truncate font-black text-[#116984] text-[10px] uppercase">
            {value.name}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDown className="h-3 w-3 text-slate-300" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white/95 backdrop-blur-md py-1 shadow-2xl ring-1 ring-black/5 focus:outline-none custom-scrollbar">
            {options.map((opt) => (
              <Listbox.Option
                key={opt.id}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-8 pr-4 ${active ? "bg-[#00A5D4]/10 text-[#116984]" : "text-slate-600"}`
                }
                value={opt}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate text-[10px] uppercase tracking-wide ${selected ? "font-black" : "font-medium"}`}
                    >
                      {opt.name}
                    </span>
                    {selected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-2.5 text-[#00A5D4]">
                        <Check className="h-3 w-3" />
                      </span>
                    )}
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

const TechnoTile = ({ icon: Icon, label, checked, onChange, color }) => (
  <button
    type="button"
    onClick={onChange}
    className={`relative flex flex-col items-center justify-center p-2 aspect-square rounded-xl border-2 transition-all duration-300
      ${checked ? `bg-white border-${color} shadow-md -translate-y-1` : "bg-slate-50 border-transparent opacity-40 hover:opacity-100"}`}
  >
    <Icon
      className={`w-4 h-4 mb-1 ${checked ? `text-${color}` : "text-slate-500"}`}
    />
    <span
      className={`text-[7px] font-black uppercase tracking-tighter ${checked ? "text-slate-800" : "text-slate-400"}`}
    >
      {label}
    </span>
    {checked && (
      <div
        className={`absolute top-1 right-1 w-1 h-1 rounded-full bg-${color} animate-pulse`}
      />
    )}
  </button>
);

// --- COMPOSANT PRINCIPAL ---

const FixedInternetPage = ({ onBack, onSeeDetails }) => {
  const [target, setTarget] = useState("Particulier");
  const [speedFilter, setSpeedFilter] = useState(50);
  const [selectedRegion, setSelectedRegion] = useState(REGIONS[0]);
  const [selectedCommune, setSelectedCommune] = useState(COMMUNES[0]);

  // États des technos
  const [includeFibre, setIncludeFibre] = useState(true);
  const [include4G, setInclude4G] = useState(true);
  const [includeADSL, setIncludeADSL] = useState(false);

  // LOGIQUE DE FILTRAGE
  const filteredOffers = useMemo(() => {
    return MOCK_FIXED_OFFERS.filter((offer) => {
      const targetMatch = target === "Tous" || offer.target === target;
      const speedMatch = offer.valSpeed >= speedFilter;

      const technoMatch =
        (offer.techno === "Fibre" && includeFibre) ||
        (offer.techno === "4G Fixe" && include4G) ||
        (offer.techno === "ADSL" && includeADSL);

      return targetMatch && speedMatch && technoMatch;
    }).sort((a, b) => a.price - b.price);
  }, [target, speedFilter, includeFibre, include4G, includeADSL]);

  return (
    <PageWrapper
      title="Simulateur et Comparateur Forfait FIXE"
      icon={Router}
      noPadding={true}
    >
      <div className="flex flex-col lg:flex-row gap-6 mt-6 px-4 md:px-0 max-w-7xl mx-auto pb-24">
        {/* === SIDEBAR FILTRES === */}
        <aside className="lg:w-1/4 w-full flex flex-col gap-4 sticky top-24">
          {/* BOUTON RETOUR : Plus fin */}
          <button
            onClick={onBack}
            className="flex items-center text-slate-400 font-bold text-[9px] uppercase tracking-widest hover:text-[#116984] transition-all group px-1"
          >
            <ArrowLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour
          </button>

          <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white relative overflow-hidden">
            {/* HEADER SIDEBAR */}
            <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4 relative z-10">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-[#F7941D]" />
                <h3 className="font-black text-[#116984] uppercase text-[11px] tracking-tight">
                  Configuration
                </h3>
              </div>
              <span className="text-[10px] font-black text-[#00A5D4] tabular-nums bg-cyan-50 px-2 py-0.5 rounded">
                {filteredOffers.length} HITS
              </span>
            </div>

            {/* 1. LOCALISATION : Plus compacte */}
            <div className="mb-8 space-y-3.5 relative z-10">
              <PrettySelect
                label="Région"
                value={selectedRegion}
                onChange={setSelectedRegion}
                options={REGIONS}
              />
              <PrettySelect
                label="Commune"
                value={selectedCommune}
                onChange={setSelectedCommune}
                options={COMMUNES}
              />
            </div>

            {/* 2. CIBLE : Segmented Control */}
            <div className="mb-8 relative z-10">
              <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">
                Profil Client
              </h4>
              <div className="bg-slate-100/50 p-1 rounded-xl flex gap-1 border border-slate-100">
                {["Particulier", "Entreprise", "Tous"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTarget(t)}
                    className={`flex-1 py-1.5 rounded-lg text-[9px] font-black uppercase transition-all ${target === t ? "bg-white text-[#116984] shadow-sm" : "text-slate-400 hover:text-slate-600"}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. DÉBIT (VITESSE) : VERSION ILLIMITÉE HYBRIDE */}
            <div className="mb-10 relative z-10">
              <div className="flex justify-between items-center mb-5 gap-2">
                <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest shrink-0">
                  Débit Min.
                </h4>

                {/* Input dynamique pour les gros débits */}
                <div className="flex items-center bg-slate-50 border border-slate-100 rounded-lg px-3 py-1.5 ring-1 ring-slate-100 focus-within:ring-[#00A5D4] focus-within:bg-white transition-all duration-300">
                  <input
                    type="number"
                    value={speedFilter}
                    onChange={(e) => setSpeedFilter(Number(e.target.value))}
                    placeholder="50"
                    className="w-full min-w-[60px] bg-transparent outline-none text-right font-black text-[#00A5D4] text-[12px] tabular-nums"
                  />
                  <span className="text-[9px] ml-1.5 font-bold text-slate-300 uppercase">
                    Mb/s
                  </span>
                </div>
              </div>

              {/* Slider Intelligent : se recalibre si le débit saisi dépasse 500 */}
              <input
                type="range"
                min="10"
                max={speedFilter > 500 ? speedFilter : 500}
                step="10"
                value={speedFilter}
                onChange={(e) => setSpeedFilter(Number(e.target.value))}
                className="w-full h-1 appearance-none bg-slate-100 rounded-full cursor-pointer accent-[#00A5D4] hover:accent-[#0085A1] transition-all"
              />

              {speedFilter >= 1000 && (
                <p className="text-[8px] text-[#F7941D] mt-2 font-bold italic text-right uppercase tracking-tighter">
                  Mode Très Haut Débit (Giga)
                </p>
              )}
            </div>

            {/* 4. TECHNOLOGIES : Tuiles 44px */}
            <div className="mb-4 relative z-10">
              <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-4">
                Technologies
              </h4>
              <div className="grid grid-cols-3 gap-3">
                <TechnoTile
                  label="Fibre"
                  icon={Zap}
                  checked={includeFibre}
                  onChange={() => setIncludeFibre(!includeFibre)}
                  color="[#00A5D4]"
                />
                <TechnoTile
                  label="4G/5G"
                  icon={Signal}
                  checked={include4G}
                  onChange={() => setInclude4G(!include4G)}
                  color="[#116984]"
                />
                <TechnoTile
                  label="ADSL"
                  icon={Network}
                  checked={includeADSL}
                  onChange={() => setIncludeADSL(!includeADSL)}
                  color="[#64748b]"
                />
              </div>
            </div>
          </div>
        </aside>

        {/* === MAIN CONTENT : OFFRES === */}
        <div className="lg:w-3/4 w-full flex flex-col gap-3">
          {/* Header Liste */}
          <div className="bg-[#116984] rounded-2xl p-4 flex items-center justify-between text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl pointer-events-none" />
            <div className="flex items-center space-x-3 relative z-10">
              <div className="w-8 h-8 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20">
                <Router className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-black uppercase tracking-tight leading-none mb-1">
                  Offres Fixes
                </h3>
                <p className="text-[8px] uppercase tracking-[0.2em] opacity-60 font-bold">
                  Certification ARCEP Togo
                </p>
              </div>
            </div>
          </div>

          {/* LISTING CARTES ULTRA-FINES */}
          <div className="flex flex-col gap-2.5">
            {filteredOffers.map((offer) => (
              <div
                key={offer.id}
                onClick={() => onSeeDetails(offer)}
                className="group relative bg-white/70 backdrop-blur-md rounded-2xl p-3 border border-slate-100 hover:border-[#00A5D4]/40 hover:bg-white transition-all duration-300 cursor-pointer flex items-center justify-between"
              >
                <div className="flex items-center gap-4 flex-1">
                  {/* Logo Opérateur */}
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-50 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <Building2
                      className="w-5 h-5"
                      style={{ color: offer.color }}
                    />
                  </div>

                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-[8px] font-black uppercase text-slate-300 tracking-tighter">
                        {offer.operator}
                      </span>
                      {offer.tag && (
                        <span className="text-[7px] font-black text-white bg-[#F7941D] px-1.5 py-0.5 rounded shadow-sm">
                          {offer.tag}
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-black text-[#116984] uppercase leading-none mt-0.5 group-hover:text-[#00A5D4] transition-colors">
                      {offer.name}
                    </h3>

                    {/* Détails techniques Sleek */}
                    <div className="flex gap-2 mt-2">
                      <div className="flex items-center text-[9px] font-bold text-[#00A5D4] bg-cyan-50 px-1.5 py-0.5 rounded border border-cyan-100/50">
                        <Zap className="w-2.5 h-2.5 mr-1" /> {offer.speed}
                      </div>
                      <div className="flex items-center text-[9px] font-bold text-slate-500 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100">
                        <Briefcase className="w-2.5 h-2.5 mr-1 text-[#116984]" />{" "}
                        {offer.target}
                      </div>
                      <div className="flex items-center text-[9px] font-bold text-slate-500 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100">
                        <Globe className="w-2.5 h-2.5 mr-1 text-slate-400" />{" "}
                        {offer.techno}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Partie Prix (Boarding Pass style) */}
                <div className="flex items-center gap-5">
                  <div className="text-right">
                    <div className="text-xl font-black text-[#116984] tabular-nums leading-none">
                      {offer.price.toLocaleString()}
                      <span className="text-[9px] ml-0.5 text-slate-300 font-bold uppercase">
                        f
                      </span>
                    </div>
                    <div className="text-[8px] font-black text-slate-400 uppercase mt-0.5 flex items-center justify-end">
                      <Clock className="w-2 h-2 mr-1 text-[#F7941D]" /> Mensuel
                    </div>
                  </div>
                  <div className="h-8 w-8 rounded-xl bg-slate-50 flex items-center justify-center text-[#116984] group-hover:bg-[#116984] group-hover:text-white transition-all">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}

            {/* Empty State */}
            {filteredOffers.length === 0 && (
              <div className="py-20 text-center opacity-40">
                <Router className="w-8 h-8 mx-auto mb-2 text-slate-300" />
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Aucune offre disponible
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default FixedInternetPage;
