import React, { useState, useMemo } from "react";
import {
  Settings2,
  Filter,
  PhoneIncoming,
  MessageSquareText,
  Sun,
  Moon,
  Wifi,
  Plane,
  Gift,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  SlidersHorizontal,
  RadioTower,
  Clock,
  Zap,
  TrendingUp,
  Sparkles,
  Crown,
  Award,
  ZapOff,
} from "lucide-react";
import PageWrapper from "../pages/PageWrapper";

// --- COMPOSANTS DE STYLE ---

const ChicCheckbox = ({ label, icon: Icon, checked, onChange }) => (
  <button
    onClick={onChange}
    className={`flex items-center w-full px-3 py-2 rounded-xl transition-all duration-300 ${checked ? "bg-white shadow-sm ring-1 ring-slate-100" : "hover:bg-white/40"}`}
  >
    <div
      className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${checked ? "bg-[#116984] border-[#116984]" : "border-slate-300"}`}
    >
      {checked && <CheckCircle2 className="w-3 h-3 text-white" />}
    </div>
    {Icon && (
      <Icon
        className={`w-3.5 h-3.5 ml-3 ${checked ? "text-[#116984]" : "text-slate-400"}`}
      />
    )}
    <span
      className={`ml-2 text-[10px] font-bold uppercase tracking-wide ${checked ? "text-slate-800" : "text-slate-400"}`}
    >
      {label}
    </span>
  </button>
);

const NeedTile = ({ icon: Icon, checked, onChange, color }) => (
  <button
    type="button"
    onClick={onChange}
    className={`relative flex items-center justify-center h-11 w-11 rounded-xl border-2 transition-all duration-500
      ${
        checked
          ? `bg-white border-${color} shadow-[0_10px_20px_-5px_rgba(0,0,0,0.1)] -translate-y-1 scale-105`
          : "bg-slate-50/50 border-transparent opacity-30 hover:opacity-100 hover:bg-white"
      }`}
  >
    <Icon
      className={`w-5 h-5 transition-transform duration-500 ${checked ? `text-${color} rotate-0` : "text-slate-500 -rotate-3"}`}
    />
    {checked && (
      <div
        className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-${color} shadow-sm animate-pulse`}
      />
    )}
  </button>
);

const ComparisonResultsPage = ({ profile, onBack, onSeeDetails }) => {
  const [budgetMax, setBudgetMax] = useState(30000);
  const [includeData, setIncludeData] = useState(false);
  const [includeCalls, setIncludeCalls] = useState(false);
  const [includeSMS, setIncludeSMS] = useState(false);
  const [isFullTime, setIsFullTime] = useState(true);
  const [isHighSpeed, setIsHighSpeed] = useState(false);

  // --- DATA : 20 OFFRES DISCRIMINANTES ---
  const mockOffers = [
    {
      id: 1,
      operator: "Moov",
      name: "Data Pass S",
      price: 2000,
      data: "5 Go",
      valData: 5,
      sms: "0 SMS",
      valSms: 0,
      calls: "0 Min",
      valCalls: 0,
      color: "#00A5D4",
      tag: "Data Only",
    },
    {
      id: 2,
      operator: "Togocom",
      name: "Pass Internet XL",
      price: 15000,
      data: "50 Go",
      valData: 50,
      sms: "0 SMS",
      valSms: 0,
      calls: "0 Min",
      valCalls: 0,
      color: "#116984",
      tag: "Gros Débit",
    },
    {
      id: 3,
      operator: "Moov",
      name: "Le Classique Voix",
      price: 1000,
      data: "0 Go",
      valData: 0,
      sms: "0 SMS",
      valSms: 0,
      calls: "100 Min",
      valCalls: 100,
      color: "#00A5D4",
      tag: "Voix Only",
    },
    {
      id: 4,
      operator: "Togocom",
      name: "Appels Illimités",
      price: 5000,
      data: "0 Go",
      valData: 0,
      sms: "0 SMS",
      valSms: 0,
      calls: "Illimités",
      valCalls: 9999,
      color: "#116984",
      tag: "Premium Voix",
    },
    {
      id: 5,
      operator: "Moov",
      name: "Pack Texto",
      price: 500,
      data: "0 Go",
      valData: 0,
      sms: "500 SMS",
      valSms: 500,
      calls: "0 Min",
      valCalls: 0,
      color: "#00A5D4",
    },
    {
      id: 6,
      operator: "Togocom",
      name: "Duo Connect",
      price: 4500,
      data: "10 Go",
      valData: 10,
      sms: "0 SMS",
      valSms: 0,
      calls: "60 Min",
      valCalls: 60,
      color: "#116984",
      tag: "Mixte",
    },
    {
      id: 7,
      operator: "Moov",
      name: "Elite Mix",
      price: 10000,
      data: "20 Go",
      valData: 20,
      sms: "0 SMS",
      valSms: 0,
      calls: "120 Min",
      valCalls: 120,
      color: "#00A5D4",
    },
    {
      id: 8,
      operator: "Togocom",
      name: "Full Pack S",
      price: 3500,
      data: "5 Go",
      valData: 5,
      sms: "100 SMS",
      valSms: 100,
      calls: "30 Min",
      valCalls: 30,
      color: "#116984",
    },
    {
      id: 9,
      operator: "Moov",
      name: "Full Pack M",
      price: 7500,
      data: "15 Go",
      valData: 15,
      sms: "200 SMS",
      valSms: 200,
      calls: "90 Min",
      valCalls: 90,
      color: "#00A5D4",
      tag: "Meilleure Vente",
    },
    {
      id: 10,
      operator: "Togocom",
      name: "Full Pack Premium",
      price: 25000,
      data: "60 Go",
      valData: 60,
      sms: "Illimités",
      valSms: 9999,
      calls: "Illimités",
      valCalls: 9999,
      color: "#116984",
      tag: "VIP",
    },
  ];

  // --- LOGIQUE FILTRE ---
  const filteredOffers = useMemo(() => {
    return mockOffers
      .filter((o) => {
        const pMatch = o.price <= budgetMax;
        const dMatch = includeData ? o.valData > 0 : true;
        const cMatch = includeCalls ? o.valCalls > 0 : true;
        const sMatch = includeSMS ? o.valSms > 0 : true;
        return pMatch && dMatch && cMatch && sMatch;
      })
      .sort((a, b) => a.price - b.price);
  }, [budgetMax, includeData, includeCalls, includeSMS]);

  return (
    <PageWrapper
      icon={Settings2}
      title="Simulateur et Comparateur Forfait Mobile"
      noPadding={true}
    >
      <div className="flex flex-col lg:flex-row gap-8 mt-6 px-4 md:px-0 max-w-7xl mx-auto pb-24">
        {/* === SIDEBAR DASHBOARD === */}
        <aside className="lg:w-1/4 w-full flex flex-col gap-5 sticky top-24">
          <button
            onClick={onBack}
            className="flex items-center text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] hover:text-[#00A5D4] transition-all group"
          >
            <ArrowLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour
          </button>

          <div className="bg-white/80 backdrop-blur-2xl rounded-[2rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full -mr-12 -mt-12 opacity-50" />

            <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4 relative z-10">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-[#F7941D]" />
                <h3 className="font-black text-[#116984] uppercase text-[11px] tracking-tight">
                  Configuration
                </h3>
              </div>
              <span className="text-[10px] font-black text-[#00A5D4] tabular-nums bg-cyan-50 px-2 py-0.5 rounded">
                {filteredOffers.length} OFFRES
              </span>
            </div>

            {/* BUDGET HYBRIDE - VERSION UNLIMITED */}
            <div className="mb-10 relative z-10">
              <div className="flex justify-between items-center mb-5 gap-2">
                <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest shrink-0">
                  Budget Max
                </h4>

                {/* Champ de saisie élargi et dynamique */}
                <div className="flex items-center bg-slate-50 border border-slate-100 rounded-lg px-3 py-1.5 ring-1 ring-slate-100 focus-within:ring-[#00A5D4] focus-within:bg-white transition-all duration-300">
                  <input
                    type="number"
                    value={budgetMax}
                    onChange={(e) => setBudgetMax(Number(e.target.value))}
                    placeholder="Ex: 3000000"
                    className="w-full min-w-[80px] bg-transparent outline-none text-right font-black text-[#00A5D4] text-[12px] tabular-nums"
                  />
                  <span className="text-[10px] ml-2 font-bold text-slate-300 uppercase">
                    f
                  </span>
                </div>
              </div>

              {/* Slider intelligent : son max s'adapte à la valeur saisie pour rester cohérent */}
              <input
                type="range"
                min="0"
                max={budgetMax > 100000 ? budgetMax : 100000}
                step="500"
                value={budgetMax}
                onChange={(e) => setBudgetMax(Number(e.target.value))}
                className="w-full h-1.5 appearance-none bg-slate-100 rounded-full cursor-pointer accent-[#00A5D4] hover:accent-[#0085A1] transition-all"
              />

              {/* Petit rappel visuel si le budget est très élevé */}
              {budgetMax > 100000 && (
                <p className="text-[8px] text-slate-400 mt-2 italic text-right">
                  Mode budget illimité activé
                </p>
              )}
            </div>

            {/* SERVICES REQUIS */}
            <div className="mb-10 relative z-10">
              <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-4">
                Inclusions
              </h4>
              <div className="grid grid-cols-3 gap-3">
                <NeedTile
                  icon={Wifi}
                  checked={includeData}
                  onChange={() => setIncludeData(!includeData)}
                  color="[#00A5D4]"
                />
                <NeedTile
                  icon={PhoneIncoming}
                  checked={includeCalls}
                  onChange={() => setIncludeCalls(!includeCalls)}
                  color="[#116984]"
                />
                <NeedTile
                  icon={MessageSquareText}
                  checked={includeSMS}
                  onChange={() => setIncludeSMS(!includeSMS)}
                  color="[#F7941D]"
                />
              </div>
            </div>

            {/* OPTIONS */}
            <div className="space-y-6 relative z-10">
              <div>
                <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">
                  Usage
                </h4>
                <div className="space-y-1">
                  <ChicCheckbox
                    label="H24 / 7J7"
                    icon={Sun}
                    checked={isFullTime}
                    onChange={() => setIsFullTime(!isFullTime)}
                  />
                  <ChicCheckbox
                    label="Nuit"
                    icon={Moon}
                    checked={!isFullTime}
                    onChange={() => setIsFullTime(!isFullTime)}
                  />
                </div>
              </div>
              <div>
                <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">
                  Réseau
                </h4>
                <div className="space-y-1">
                  <ChicCheckbox
                    label="5G"
                    icon={Zap}
                    checked={isHighSpeed}
                    onChange={() => setIsHighSpeed(!isHighSpeed)}
                  />
                  <ChicCheckbox
                    label="4G"
                    icon={Plane}
                    checked={!isHighSpeed}
                    onChange={() => setIsHighSpeed(!isHighSpeed)}
                  />
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* === MAIN CONTENT - SLEEK LIST === */}
        <div className="lg:w-3/4 w-full flex flex-col gap-4">
          <div className="bg-gradient-to-r from-[#116984] to-[#0E566C] rounded-3xl p-5 flex items-center justify-between text-white shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
            <div className="flex items-center space-x-4 relative z-10">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-base font-black uppercase tracking-tight leading-none mb-1.5">
                  Analyse Comparative
                </h3>
                <p className="text-[9px] uppercase tracking-[0.2em] opacity-60 font-bold italic">
                  Source certifiée : ARCEP Togo
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            {filteredOffers.map((offer) => (
              <div
                key={offer.id}
                onClick={() => onSeeDetails(offer)}
                className="group relative bg-white/60 backdrop-blur-md rounded-2xl p-3.5 border border-slate-100 hover:border-[#00A5D4]/30 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500 cursor-pointer flex items-center justify-between"
              >
                {/* Effet de lueur au survol */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00A5D4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="flex items-center gap-5 flex-1 relative z-10">
                  {/* Avatar Opérateur */}
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-100 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 group-hover:rotate-3 transition-all duration-500">
                    <RadioTower
                      className="w-6 h-6"
                      style={{ color: offer.color }}
                    />
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[9px] font-black uppercase text-slate-400 tracking-tighter">
                        {offer.operator}
                      </span>
                      {offer.tag && (
                        <div className="flex items-center gap-1 bg-slate-800 text-white px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-widest shadow-sm">
                          <Crown className="w-2 h-2 text-[#F7941D]" />{" "}
                          {offer.tag}
                        </div>
                      )}
                    </div>
                    <h3 className="text-base font-black text-[#116984] uppercase tracking-tight leading-none group-hover:text-[#00A5D4] transition-colors">
                      {offer.name}
                    </h3>

                    {/* Badges de services dynamiques */}
                    <div className="flex items-center gap-2 mt-2.5">
                      {offer.valData > 0 && (
                        <div className="flex items-center text-[9px] font-bold text-slate-500 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100/50">
                          <Wifi className="w-3 h-3 mr-1.5 text-[#00A5D4]" />{" "}
                          {offer.data}
                        </div>
                      )}
                      {offer.valCalls > 0 && (
                        <div className="flex items-center text-[9px] font-bold text-slate-500 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100/50">
                          <PhoneIncoming className="w-3 h-3 mr-1.5 text-[#116984]" />{" "}
                          {offer.calls}
                        </div>
                      )}
                      {offer.valSms > 0 && (
                        <div className="flex items-center text-[9px] font-bold text-slate-600 bg-orange-50/50 px-2 py-1 rounded-lg border border-orange-100">
                          <MessageSquareText className="w-3 h-3 mr-1.5 text-[#F7941D]" />{" "}
                          {offer.sms}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Section Prix & Action */}
                <div className="flex items-center gap-6 relative z-10">
                  <div className="text-right">
                    <div className="text-2xl font-black text-[#116984] tracking-tighter tabular-nums leading-none">
                      {offer.price.toLocaleString()}
                      <span className="text-[10px] ml-0.5 text-slate-300 font-bold uppercase">
                        f
                      </span>
                    </div>
                    <div className="text-[9px] font-black text-slate-400 uppercase mt-1 flex items-center justify-end tracking-wider">
                      <Clock className="w-2.5 h-2.5 mr-1 text-[#F7941D]" /> 30
                      Jours
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#116984] shadow-sm hover:bg-[#116984] hover:text-white transition-all duration-300 group-hover:translate-x-1">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}

            {/* Empty State Chic */}
            {filteredOffers.length === 0 && (
              <div className="py-24 text-center bg-white/40 backdrop-blur-md rounded-3xl border border-dashed border-slate-200">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
                  <ZapOff className="w-8 h-8 text-slate-300" />
                </div>
                <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest">
                  Aucune offre trouvée
                </h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase mt-2">
                  Ajustez vos filtres ou augmentez votre budget
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ComparisonResultsPage;
