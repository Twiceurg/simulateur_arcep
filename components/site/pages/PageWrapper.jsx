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
const PageWrapper = ({ title, icon: Icon, children }) => (
  <div className="pt-32 pb-20 px-4 min-h-screen">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center space-x-4 mb-10">
        <div className="p-4 bg-[#00A5D4] rounded-2xl text-white">
          <Icon className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-black text-[#116984] uppercase tracking-tighter">{title}</h1>
      </div>
      {children}
    </div>
  </div>
);
export default PageWrapper;