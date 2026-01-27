import React, { useState, useEffect, useRef } from 'react';
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
  ArrowLeft,
  Newspaper,
  BookOpen,
  LayoutDashboard
} from 'lucide-react';
import PageWrapper from './PageWrapper';
const ActualitesPage = () => (
  <PageWrapper title="Actualités du Marché" icon={Newspaper}>
    <div className="space-y-8">
      {[1, 2, 3].map(i => (
        <div key={i} className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
          <div className="md:w-64 h-48 bg-slate-200"></div>
          <div className="p-8">
            <span className="text-[#00A5D4] font-bold text-[10px] uppercase tracking-widest">Communiqué Officiel</span>
            <h3 className="text-2xl font-bold text-[#116984] mt-2 mb-4">Baisse des tarifs de l'Internet Fixe : Le nouveau rapport de l'AR</h3>
            <p className="text-slate-500 mb-6">L'Autorité de Régulation publie les chiffres du dernier trimestre montrant une amélioration de la concurrence...</p>
            <button className="text-[#116984] font-black border-b-2 border-[#116984] pb-1 hover:text-[#00A5D4] hover:border-[#00A5D4] transition-all">Lire l'article</button>
          </div>
        </div>
      ))}
    </div>
  </PageWrapper>
);
export default ActualitesPage;