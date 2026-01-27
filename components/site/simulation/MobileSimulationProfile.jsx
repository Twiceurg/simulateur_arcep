
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  Smartphone, 
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
  Newspaper,
  BookOpen,
  LayoutDashboard,
  Router,
  Zap,
  Shield,
  ArrowLeft,
  Settings2,
  Clock,
  CircleDollarSign,
  MessageSquareText,
  HardDrive,
  Hash,
  PhoneIncoming,
  Globe,
  ChevronDown
} from 'lucide-react';
import PageWrapper from '../pages/PageWrapper';

const MobileSimulationProfile = ({ onBack, onStart }) => {
  const [dataGo, setDataGo] = useState(10);
  const [smsCount, setSmsCount] = useState(50);
  const [callMins, setCallMins] = useState(60);
  const [operator, setOperator] = useState('Tous les opérateurs');

  return (
    <PageWrapper title="Définir mon profil mobile" icon={Settings2}>
      <div className="max-w-4xl mx-auto text-left text-left text-left text-left text-left">
        <button onClick={onBack} className="flex items-center text-[#116984] font-bold text-sm uppercase tracking-widest mb-8 hover:text-[#00A5D4] transition-colors text-left text-left text-left text-left text-left"><ArrowLeft className="w-4 h-4 mr-2 text-left text-left text-left text-left text-left" /> Retour à l'accueil</button>
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100 text-left text-left text-left text-left text-left text-left text-left text-left">
          <div className="mb-10 text-left text-left text-left text-left text-left text-left text-left text-left text-left">
            <h2 className="text-2xl md:text-3xl font-black text-[#116984] mb-2 uppercase tracking-tighter text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">Entrez vos besoins précis</h2>
            <p className="text-slate-400 text-sm font-medium text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">L'algorithme filtrera les meilleures offres selon vos usages.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 text-left text-left text-left text-left text-left text-left text-left">
            <div className="space-y-3 text-left text-left text-left text-left">
              <label className="flex items-center text-[10px] font-black text-[#116984] uppercase tracking-widest text-left text-left text-left text-left text-left"><Globe className="w-4 h-4 mr-2 text-[#00A5D4] text-left text-left text-left text-left" /> Opérateur</label>
              <div className="relative text-left text-left text-left text-left">
                <select value={operator} onChange={(e) => setOperator(e.target.value)} className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-[#00A5D4] font-bold text-[#116984] appearance-none text-sm text-left text-left text-left text-left text-left text-left"><option>Tous les opérateurs</option><option>Moov Africa</option><option>Togocom</option></select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 pointer-events-none text-left text-left text-left text-left" />
              </div>
            </div>
            <div className="space-y-3 text-left text-left text-left text-left text-left">
              <label className="flex items-center text-[10px] font-black text-[#116984] uppercase tracking-widest text-left text-left text-left text-left text-left text-left text-left"><HardDrive className="w-4 h-4 mr-2 text-[#00A5D4] text-left text-left text-left text-left text-left" /> Volume Data</label>
              <div className="relative text-left text-left text-left text-left text-left"><input type="number" value={dataGo} onChange={(e) => setDataGo(e.target.value)} className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-[#00A5D4] font-black text-xl text-[#116984] text-left text-left text-left text-left text-left text-left" /><span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-slate-300 text-left text-left text-left text-left">Go</span></div>
            </div>
            <div className="space-y-3 text-left text-left text-left text-left text-left text-left">
              <label className="flex items-center text-[10px] font-black text-[#116984] uppercase tracking-widest text-left text-left text-left text-left text-left text-left text-left text-left"><MessageSquareText className="w-4 h-4 mr-2 text-[#F7941D] text-left text-left text-left text-left text-left text-left" /> SMS</label>
              <div className="relative text-left text-left text-left text-left text-left text-left"><input type="number" value={smsCount} onChange={(e) => setSmsCount(e.target.value)} className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-[#F7941D] font-black text-xl text-[#116984] text-left text-left text-left text-left text-left text-left" /><span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-slate-300 text-left text-left text-left text-left">Nb</span></div>
            </div>
            <div className="space-y-3 text-left text-left text-left text-left text-left text-left text-left text-left">
              <label className="flex items-center text-[10px] font-black text-[#116984] uppercase tracking-widest text-left text-left text-left text-left text-left text-left text-left text-left text-left"><PhoneIncoming className="w-4 h-4 mr-2 text-[#116984] text-left text-left text-left text-left text-left text-left text-left text-left" /> Appels</label>
              <div className="relative text-left text-left text-left text-left text-left text-left text-left text-left"><input type="number" value={callMins} onChange={(e) => setCallMins(e.target.value)} className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-[#116984] font-black text-xl text-[#116984] text-left text-left text-left text-left text-left text-left" /><span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-slate-300 text-left text-left text-left text-left">Min</span></div>
            </div>
          </div>
          <div className="bg-slate-50 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-100 text-left text-left text-left text-left text-left">
            <div className="text-left text-left text-left text-left text-left text-left text-left text-left text-left"><h4 className="text-[#116984] font-black uppercase text-[10px] tracking-widest mb-1">Résumé du profil</h4><div className="flex flex-wrap gap-3 text-sm font-bold text-[#116984] text-left text-left text-left text-left text-left text-left text-left text-left"><span className="text-[#00A5D4] text-left text-left text-left text-left">{dataGo} Go</span><span>•</span><span className="text-[#F7941D] text-left text-left text-left text-left">{smsCount} SMS</span><span>•</span><span className="text-left text-left text-left text-left">{callMins} Min</span></div></div>
            <button onClick={() => onStart({ dataGo, smsCount, callMins, operator })} className="w-full md:w-auto px-10 py-5 bg-[#116984] text-white font-black rounded-2xl shadow-xl hover:bg-[#00A5D4] transition-all uppercase tracking-widest text-[11px] flex items-center justify-center text-left text-left text-left text-left text-left text-left text-left text-left text-left">Lancer la comparaison <ChevronRight className="ml-2 w-5 h-5 text-left text-left text-left text-left text-left text-left text-left text-left text-left" /></button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};


export default MobileSimulationProfile;