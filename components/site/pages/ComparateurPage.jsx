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
const ComparateurPage = () => (
  <PageWrapper title="Comparateur d'offres" icon={LayoutDashboard}>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="font-bold mb-4">Filtres de recherche</h3>
        <div className="space-y-4">
          <div className="h-10 bg-slate-50 rounded-lg w-full"></div>
          <div className="h-10 bg-slate-50 rounded-lg w-full"></div>
          <div className="h-10 bg-slate-50 rounded-lg w-full"></div>
        </div>
      </div>
      <div className="md:col-span-2 space-y-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg"></div>
              <div>
                <div className="font-bold">Forfait Illimité 5G</div>
                <div className="text-sm text-slate-400">Opérateur Mobile {i}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-black text-[#00A5D4]">15.000 FCFA</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Par mois</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </PageWrapper>
);

export default ComparateurPage;