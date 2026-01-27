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
const GuidePage = () => (
  <PageWrapper title="Guide & Conseils" icon={BookOpen}>
    <div className="grid md:grid-cols-2 gap-8">
      {[
        "Comment bien choisir son débit fibre ?",
        "Comprendre sa facture télécom",
        "Vos droits en cas de litige",
        "Le roaming en zone CEDEAO"
      ].map((title, i) => (
        <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group cursor-pointer">
          <h3 className="text-xl font-bold text-[#116984] mb-4 group-hover:text-[#00A5D4] transition-colors">{title}</h3>
          <p className="text-slate-500 mb-6">Découvrez nos conseils d'experts pour optimiser vos abonnements et protéger vos droits...</p>
          <div className="flex items-center text-[#F7941D] font-bold text-sm uppercase tracking-widest">
            Lire le guide <ChevronRight className="ml-2 w-4 h-4" />
          </div>
        </div>
      ))}
    </div>
  </PageWrapper>
);
export default GuidePage;