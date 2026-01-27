/* eslint-disable react-hooks/static-components */
"use client";
import React, { useState } from "react";
import {
  Smartphone,
  LayoutDashboard,
  TowerControl as Tower,
  ArrowLeft,
  Settings2,
  Clock,
  MessageSquareText,
  HardDrive,
  PhoneIncoming,
  CheckCircle2,
  ChevronRight,
  SlidersHorizontal,
  Wifi,
  Gift,
  Plane,
  Layers,
  PlusCircle,
  Sun,
  Moon,
  CalendarDays,
  Filter,
} from "lucide-react";
import PageWrapper from "../pages/PageWrapper";

const ComparisonResultsPage = ({ profile, onBack, onSeeDetails }) => {
  const [budgetMax, setBudgetMax] = useState(25000);
  const [minData, setMinData] = useState(profile?.dataGo || 10);
  const [minCalls, setMinCalls] = useState(profile?.callMins || 60);
  const [minSMS, setMinSMS] = useState(profile?.smsCount || 50);

  const mockOffers = [
    {
      id: 1,
      operator: "Moov Africa",
      name: "Pack Data+ Max",
      price: 10500,
      data: "20 Go",
      valData: 20,
      sms: "Illimités",
      valSms: 9999,
      calls: "120 Min",
      valCalls: 120,
      network: "4G/5G",
      validity: "30 Jours",
      color: "#00A5D4",
      roaming: true,
      promo: true,
      hours: "24h/24",
      type: "Mixte",
    },
    {
      id: 2,
      operator: "Togocom",
      name: "Mega Plan Premium",
      price: 12000,
      data: "25 Go",
      valData: 25,
      sms: "500 SMS",
      valSms: 500,
      calls: "Illimités",
      valCalls: 9999,
      network: "5G",
      validity: "30 Jours",
      color: "#116984",
      multiSim: true,
      hours: "24h/24",
      type: "Data + Voix",
    },
    {
      id: 3,
      operator: "Moov Africa",
      name: "Eco Pack Night",
      price: 5000,
      data: "15 Go",
      valData: 15,
      sms: "100 SMS",
      valSms: 100,
      calls: "60 Min",
      valCalls: 60,
      network: "4G",
      validity: "30 Jours",
      color: "#00A5D4",
      horaires: true,
      hours: "Nuit",
      type: "Spécial",
    },
    {
      id: 4,
      operator: "Togocom",
      name: "Duo 12h Connect",
      price: 7500,
      data: "10 Go",
      valData: 10,
      sms: "250 SMS",
      valSms: 250,
      calls: "90 Min",
      valCalls: 90,
      network: "4G+",
      validity: "15 Jours",
      color: "#116984",
      horaires: true,
      roaming: true,
      hours: "Journée",
      type: "Pro",
    },
  ];

  const filteredOffers = mockOffers.filter(
    (offer) =>
      offer.price <= budgetMax &&
      offer.valData >= minData &&
      offer.valCalls >= minCalls &&
      offer.valSms >= minSMS,
  );

  const ChicCheckbox = ({ label, icon: Icon, defaultChecked = false }) => (
    <label className="flex items-center group cursor-pointer text-left py-1.5 hover:bg-slate-50 rounded-lg px-2 -mx-2 transition-colors">
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          defaultChecked={defaultChecked}
          className="peer appearance-none w-4 h-4 border-2 border-slate-200 rounded checked:bg-[#00A5D4] checked:border-[#00A5D4] transition-all"
        />
        <CheckCircle2 className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
      </div>
      <div className="ml-3 flex items-center space-x-2 text-left">
        {Icon && (
          <Icon className="w-3 h-3 text-slate-400 group-hover:text-[#00A5D4] transition-colors" />
        )}
        <span className="text-[10px] font-bold text-slate-600 group-hover:text-[#116984] transition-colors uppercase tracking-wide">
          {label}
        </span>
      </div>
    </label>
  );

  return (
    <PageWrapper icon={Settings2} title=" PROFIL D'USAGE" noPadding={true}>
      <div className="flex flex-col lg:flex-row gap-6 mt-4 text-left px-4 md:px-0 items-start">
        {/* === SIDEBAR : FILTRES === */}
        <aside className="lg:w-1/4 flex flex-col gap-4 text-left">
          <div className="bg-white rounded-[1.5rem] p-5 shadow-lg border border-slate-100 text-left overflow-visible relative">
            {/* Titre Sidebar */}
            <div className="flex items-center justify-between mb-6 text-left border-b border-slate-50 pb-4">
              <div className="flex items-center space-x-2 text-left">
                <Filter className="w-4 h-4 text-[#F7941D]" />
                <h3 className="font-black text-[#116984] uppercase text-[10px] tracking-widest text-left">
                  Filtres Précis
                </h3>
              </div>
              <span className="text-[9px] font-bold text-slate-300 bg-slate-50 px-2 py-1 rounded-full">
                {filteredOffers.length} résultats
              </span>
            </div>

            {/* BUDGET SLIDER */}
            <div className="mb-6 pb-6 border-b border-slate-50 text-left">
              <div className="flex justify-between items-center mb-3 text-left">
                <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">
                  Budget Max
                </h4>
                <span className="text-xs font-black text-[#00A5D4] bg-[#00A5D4]/10 px-2 py-0.5 rounded-md">
                  {budgetMax.toLocaleString()} F
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={budgetMax}
                onChange={(e) => setBudgetMax(parseInt(e.target.value))}
                className="w-full h-1.5 appearance-none bg-slate-100 rounded-full cursor-pointer accent-[#00A5D4]"
              />
            </div>

            {/* INPUTS BESOINS */}
            <div className="mb-6 pb-6 border-b border-slate-50 space-y-3 text-left">
              <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 text-left">
                Volumes Minimum
              </h4>

              {/* Data Input */}
              <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus-within:border-[#00A5D4] transition-colors">
                <HardDrive className="w-3 h-3 text-slate-400 mr-2" />
                <span className="text-[9px] font-bold text-slate-500 uppercase w-12">
                  Data
                </span>
                <input
                  type="number"
                  value={minData}
                  onChange={(e) =>
                    setMinData(Math.max(0, parseInt(e.target.value) || 0))
                  }
                  className="bg-transparent outline-none w-full text-right font-black text-[#116984] text-xs"
                />
                <span className="text-[9px] text-slate-400 ml-1 font-medium">
                  Go
                </span>
              </div>

              {/* Calls Input */}
              <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus-within:border-[#116984] transition-colors">
                <PhoneIncoming className="w-3 h-3 text-slate-400 mr-2" />
                <span className="text-[9px] font-bold text-slate-500 uppercase w-12">
                  Appels
                </span>
                <input
                  type="number"
                  value={minCalls}
                  onChange={(e) =>
                    setMinCalls(Math.max(0, parseInt(e.target.value) || 0))
                  }
                  className="bg-transparent outline-none w-full text-right font-black text-[#116984] text-xs"
                />
                <span className="text-[9px] text-slate-400 ml-1 font-medium">
                  Min
                </span>
              </div>

              {/* SMS Input */}
              <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus-within:border-[#F7941D] transition-colors">
                <MessageSquareText className="w-3 h-3 text-slate-400 mr-2" />
                <span className="text-[9px] font-bold text-slate-500 uppercase w-12">
                  SMS
                </span>
                <input
                  type="number"
                  value={minSMS}
                  onChange={(e) =>
                    setMinSMS(Math.max(0, parseInt(e.target.value) || 0))
                  }
                  className="bg-transparent outline-none w-full text-right font-black text-[#116984] text-xs"
                />
                <span className="text-[9px] text-slate-400 ml-1 font-medium">
                  U
                </span>
              </div>
            </div>

            {/* CHECKBOXES (Compact) */}
            <div className="text-left space-y-4">
              <div>
                <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 text-left">
                  Validité
                </h4>
                <div className="space-y-0.5">
                  <ChicCheckbox
                    label="24h/24 - 7j/7"
                    icon={Sun}
                    defaultChecked={true}
                  />
                  <ChicCheckbox label="Nuit & Week-end" icon={Moon} />
                </div>
              </div>
              <div>
                <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 text-left">
                  Options
                </h4>
                <div className="space-y-0.5">
                  <ChicCheckbox
                    label="4G / 5G"
                    icon={Wifi}
                    defaultChecked={true}
                  />
                  <ChicCheckbox label="Roaming" icon={Plane} />
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={onBack}
            className="flex items-center justify-center text-slate-400 font-bold text-[10px] uppercase tracking-widest hover:text-[#116984] transition-colors group py-3"
          >
            <ArrowLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" />{" "}
            Modifier le profil
          </button>
        </aside>

        {/* === MAIN CONTENT : LISTE DES OFFRES === */}
        <div className="lg:w-3/4 flex flex-col gap-3 text-left">
          {/* Header Compact */}
          <div className="bg-[#116984] rounded-xl p-4 flex items-center justify-between text-white shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl pointer-events-none"></div>
            <div className="flex items-center space-x-3 relative z-10">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-md border border-white/10">
                <SlidersHorizontal className="w-4 h-4 text-left" />
              </div>
              <div>
                <span className="block text-[8px] font-bold uppercase tracking-widest opacity-60">
                  Analyse ARCEP
                </span>
                <h3 className="text-sm font-black uppercase">
                  {filteredOffers.length} Offres compatibles
                </h3>
              </div>
            </div>
          </div>

          {/* LISTE DES OFFRES (DESIGN ULTRA FIN) */}
          <div className="flex flex-col gap-2 min-h-[400px]">
            {filteredOffers.map((offer) => (
              <div
                key={offer.id}
                onClick={() => onSeeDetails(offer)}
                className="group bg-white rounded-xl p-3 shadow-sm border border-slate-100 hover:shadow-md hover:border-[#00A5D4]/30 transition-all duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                {/* Partie Gauche : Logo + Infos de base */}
                <div className="flex items-center gap-4 flex-1">
                  {/* Logo très petit */}
                  <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-inner">
                    <Tower className="w-5 h-5" style={{ color: offer.color }} />
                  </div>

                  {/* Textes alignés */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[8px] font-bold uppercase text-slate-400 tracking-wider">
                        {offer.operator}
                      </span>
                      <span className="px-1.5 py-0.5 bg-cyan-50 text-[#00A5D4] rounded text-[8px] font-black uppercase">
                        {offer.type}
                      </span>
                      {offer.promo && (
                        <span className="px-1.5 py-0.5 bg-rose-50 text-rose-500 rounded text-[8px] font-black uppercase flex items-center">
                          <Gift className="w-2 h-2 mr-1" /> Promo
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-black text-[#116984] uppercase tracking-tight leading-none mb-1 group-hover:text-[#00A5D4] transition-colors">
                      {offer.name}
                    </h3>
                    {/* Détails en ligne fine */}
                    <div className="flex items-center gap-3 text-[10px] text-slate-500 font-medium">
                      <span className="flex items-center">
                        <HardDrive className="w-3 h-3 mr-1 text-slate-300" />{" "}
                        {offer.data}
                      </span>
                      <span className="flex items-center">
                        <PhoneIncoming className="w-3 h-3 mr-1 text-slate-300" />{" "}
                        {offer.calls}
                      </span>
                      <span className="hidden sm:flex items-center">
                        <MessageSquareText className="w-3 h-3 mr-1 text-slate-300" />{" "}
                        {offer.sms}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Partie Droite : Prix + Bouton compact */}
                <div className="flex items-center justify-between sm:justify-end gap-4 text-right border-t sm:border-t-0 border-slate-50 pt-2 sm:pt-0">
                  <div className="text-left sm:text-right">
                    <div className="text-lg font-black text-[#00A5D4] leading-none">
                      {offer.price.toLocaleString()}{" "}
                      <span className="text-[9px] text-slate-300">F</span>
                    </div>
                    <div className="text-[8px] text-slate-400 font-bold uppercase text-right flex items-center justify-end">
                      <Clock className="w-2 h-2 mr-1" /> {offer.validity}
                    </div>
                  </div>

                  <button className="h-8 px-4 bg-[#116984] text-white rounded-lg text-[9px] font-black uppercase tracking-widest shadow hover:bg-[#00A5D4] transition-colors flex items-center group/btn">
                    <span className="hidden sm:inline">Détails</span>
                    <ChevronRight className="w-3 h-3 sm:ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}

            {filteredOffers.length === 0 && (
              <div className="flex flex-col items-center justify-center h-64 bg-white rounded-xl border border-slate-100">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-3">
                  <Filter className="w-6 h-6 text-slate-300" />
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                  Aucune offre ne correspond
                </p>
                <button
                  onClick={() => {
                    setBudgetMax(50000);
                    setMinData(0);
                    setMinCalls(0);
                  }}
                  className="mt-2 text-[10px] text-[#00A5D4] font-bold hover:underline"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
export default ComparisonResultsPage;
