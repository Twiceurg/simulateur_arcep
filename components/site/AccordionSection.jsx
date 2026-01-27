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
  PhoneIncoming,
  Globe,
  Filter,
  CheckCircle2,
  ChevronDown,
  Info,
  SlidersHorizontal,
  Wifi,
  Gift,
  Plane,
  Layers,
  PlusCircle,
  Sun,
  Moon,
  CalendarDays,
  FileText,
  Check,
  ChevronUp,
  Map,
  MapPin,
  Building2,
  Briefcase
} from 'lucide-react';
const AccordionSection = ({ title, icon: Icon, children, isOpen, onToggle }) => (
    <div className="bg-white rounded-[2rem] shadow-lg border border-slate-50 overflow-hidden transition-all duration-300 mb-4">
        <button 
            onClick={onToggle}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
        >
            <div className="flex items-center">
                <div className={`p-2 rounded-xl mr-4 ${isOpen ? 'bg-[#00A5D4] text-white' : 'bg-slate-100 text-slate-400'}`}>
                    <Icon className="w-5 h-5" />
                </div>
                <h3 className={`text-lg font-black uppercase tracking-widest ${isOpen ? 'text-[#116984]' : 'text-slate-500'}`}>{title}</h3>
            </div>
            <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-[#00A5D4]' : 'text-slate-300'}`} />
            </div>
        </button>
        {isOpen && (
            <div className="px-8 pb-8 pt-2 animate-in slide-in-from-top-2 fade-in duration-300">
                <div className="h-px w-full bg-slate-100 mb-6"></div>
                {children}
            </div>
        )}
    </div>
);
export default AccordionSection;