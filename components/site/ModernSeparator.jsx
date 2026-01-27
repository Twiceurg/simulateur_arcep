"use client";
import React, { useState, useEffect, useRef } from "react";
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
} from "lucide-react";

const ModernSeparator = ({ icon: Icon = ShieldCheck }) => (
  <div className="relative py-16 flex items-center justify-center w-full max-w-5xl mx-auto px-6">
    {/* Background Glow Line */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-100 to-transparent h-px top-1/2 -translate-y-1/2"></div>

    {/* Left Animated Line */}
    <div className="flex-grow h-[2px] bg-gradient-to-r from-transparent via-[#77787B]/20 to-[#00A5D4]/40 rounded-full"></div>

    {/* Central Icon with Shadow and Glow */}
    <div className="relative mx-8 group">
      <div className="absolute inset-0 bg-[#00A5D4]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative p-3.5 bg-white rounded-2xl border border-slate-100 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] text-[#F7941D] flex items-center justify-center transform transition-transform group-hover:scale-110">
        <Icon className="w-6 h-6" />
      </div>
      {/* Decorative Dots */}
      <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#00A5D4] rounded-full opacity-40"></div>
      <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#00A5D4] rounded-full opacity-40"></div>
    </div>

    {/* Right Animated Line */}
    <div className="flex-grow h-[2px] bg-gradient-to-l from-transparent via-[#77787B]/20 to-[#00A5D4]/40 rounded-full"></div>
  </div>
);
export default ModernSeparator;
