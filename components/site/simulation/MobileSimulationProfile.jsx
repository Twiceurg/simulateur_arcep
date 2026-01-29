"use client";
import React, { useState } from 'react';
import { 
  HardDrive, PhoneIncoming, MessageSquareText, 
  Globe, ChevronRight, Zap, CircleDollarSign 
} from 'lucide-react';

// --- MISE À JOUR DU COMPOSANT : SLIDER AVEC INPUT PLUS LARGE ---
const CompactSlider = ({ label, icon: Icon, value, onChange, min, max, step = 1, unit, color }) => (
  <div className="group bg-slate-50/50 p-2.5 rounded-xl border border-slate-100 transition-all hover:bg-white hover:shadow-sm">
    <div className="flex justify-between items-center mb-1.5">
      <div className="flex items-center gap-1.5">
        <div className="p-1 rounded-lg bg-white shadow-sm border border-slate-50">
          <Icon className="w-3.5 h-3.5" style={{ color }} />
        </div>
        <span className="text-[10px] font-black uppercase text-slate-400 tracking-tight">{label}</span>
      </div>
      
      {/* Augmentation de w-10 à w-24 pour accommoder les gros chiffres (5 000 000) */}
      <div className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-md border border-slate-100 shadow-sm">
        <input 
          type="number" 
          value={value} 
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-20 bg-transparent text-right font-black text-[12px] outline-none tabular-nums text-[#116984] focus:text-[#00A5D4]"
        />
        <span className="text-[9px] font-bold text-slate-300 uppercase">{unit}</span>
      </div>
    </div>
    <input 
      type="range" 
      min={min} max={max} step={step} 
      value={value} 
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-1 appearance-none bg-slate-200 rounded-full cursor-pointer accent-[#00A5D4]"
      style={{ accentColor: color }}
    />
  </div>
);

const MobileSimulationProfile = ({ onStart }) => {
  const [budget, setBudget] = useState(15000);
  const [dataGo, setDataGo] = useState(10);
  const [smsCount, setSmsCount] = useState(100);
  const [callMins, setCallMins] = useState(180);
  
  const [operator, setOperator] = useState({ id: 'all', name: 'Tous' });

  return (
    <div className="w-full h-full">
      <div className="bg-white/90 backdrop-blur-2xl rounded-[1.5rem] p-5 md:p-6 shadow-xl border border-white relative overflow-hidden h-full flex flex-col">
        <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-50 rounded-full -mr-12 -mt-12 blur-2xl opacity-40 pointer-events-none" />
        
        {/* HEADER */}
        <div className="flex items-center gap-2 mb-4 border-b border-slate-50 pb-3">
          <div className="p-1.5 bg-[#F7941D]/10 rounded-lg text-[#F7941D]">
            <Zap className="w-4 h-4 fill-[#F7941D]/10" />
          </div>
          <h2 className="text-lg font-black text-[#116984] uppercase tracking-tighter leading-none">Simulateur et Comparateur Forfait Mobile</h2>
        </div>

        {/* MODIFICATION DE LA GRILLE : lg:grid-cols-3 (2 parts pour les inputs, 1 part pour le résumé) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-grow items-start">
          
          {/* COLONNE GAUCHE (INPUTS) : Prend 2 colonnes sur 3 */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <div className="flex flex-col gap-2.5">
              <CompactSlider label="Votre Budget" icon={CircleDollarSign} value={budget} onChange={setBudget} min={500} max={5000000} step={500} unit="XOF" color="#10b981" />
              <CompactSlider label="Internet" icon={HardDrive} value={dataGo} onChange={setDataGo} min={0} max={10000} unit="Go" color="#00A5D4" />
              <CompactSlider label="Appels" icon={PhoneIncoming} value={callMins} onChange={setCallMins} min={0} max={10000} unit="Min" color="#116984" />
              <CompactSlider label="SMS" icon={MessageSquareText} value={smsCount} onChange={setSmsCount} min={0} max={5000} unit="Nb" color="#F7941D" />
            </div>
          </div>

          {/* COLONNE DROITE (RÉSUMÉ) : Prend 1 colonne sur 3 */}
          <div className="flex flex-col h-full lg:col-span-1">
            <div className="bg-[#116984] rounded-2xl p-5 text-white relative overflow-hidden flex-1 flex flex-col justify-between shadow-lg ring-1 ring-white/10">
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full -mr-8 -mt-8 blur-xl pointer-events-none" />
              
              <div>
                {/* <h4 className="text-[9px] font-black uppercase tracking-[0.2em] opacity-50 mb-4 border-b border-white/5 pb-1">Votre Profil</h4> */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/5 pb-1.5">
                    <span className="text-[10px] font-medium opacity-60 uppercase">Budget</span>
                    <span className="text-lg font-black tabular-nums text-emerald-400">{budget.toLocaleString()} F</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-1.5">
                    <span className="text-[10px] font-medium opacity-60 uppercase tracking-wider">Data</span>
                    <span className="text-lg font-black tabular-nums">{dataGo} Go</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-1.5">
                    <span className="text-[10px] font-medium opacity-60 uppercase tracking-wider">Appels</span>
                    <span className="text-lg font-black tabular-nums">{callMins} Min</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-1.5">
                    <span className="text-[10px] font-medium opacity-60 uppercase tracking-wider">SMS</span>
                    <span className="text-lg font-black tabular-nums">{smsCount} Nb</span>
                  </div>
                </div>
              </div>

            <div className="mt-4">
                <button 
                  onClick={() => onStart({ budget, dataGo, smsCount, callMins, operator: operator.name })} 
                  className="w-full py-3.5 bg-[#F7941D] text-white font-black rounded-xl shadow-md hover:bg-[#00A5D4] active:scale-95 transition-all duration-300 uppercase tracking-widest text-[10px] flex items-center justify-center gap-2"
                >
                  Comparer
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSimulationProfile;