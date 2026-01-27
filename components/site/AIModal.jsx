'use client';
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
  Facebook
} from 'lucide-react';
// --- COMPOSANT : MODAL IA ---
const AIModal = ({ isOpen, onClose, chatHistory, userInput, setUserInput, onAsk, isLoading, chatEndRef }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[#116984]/90 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-2xl rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-4 md:p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#00A5D4] rounded-xl flex items-center justify-center shadow-lg shadow-cyan-200 text-white">
              <Bot className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <div className="text-left">
              <h3 className="text-base md:text-xl font-black text-[#116984] uppercase tracking-tighter leading-tight">Assistant Intelligent</h3>
              <p className="text-[8px] md:text-[10px] text-[#F7941D] font-black uppercase tracking-widest">Propulsé par Gemini Pro</p>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 md:w-10 md:h-10 rounded-full hover:bg-slate-200 transition-colors flex items-center justify-center text-slate-400">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-4 md:p-8 flex flex-col flex-grow overflow-hidden">
          <div className="space-y-4 md:space-y-6 overflow-y-auto mb-6 md:mb-8 pr-2 flex flex-col flex-grow scrollbar-hide">
            {chatHistory.map((msg, idx) => (
              <div key={idx} className={`p-4 md:p-6 rounded-2xl max-w-[90%] md:max-w-[85%] text-left ${msg.role === 'assistant' ? 'bg-slate-100 rounded-tl-none border border-slate-200 text-[#116984] self-start' : 'bg-[#00A5D4] rounded-tr-none text-white font-bold self-end ml-auto'}`}>
                <p className="text-sm md:text-base font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br/>') }}></p>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center space-x-3 text-[#00A5D4] font-bold p-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-[#00A5D4] rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-[#00A5D4] rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-[#00A5D4] rounded-full animate-bounce delay-150"></div>
                </div>
                <span className="text-[10px] uppercase tracking-widest">Analyse en cours...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          <div className="relative pt-4 border-t border-slate-100">
            <textarea 
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => { if(e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); onAsk(); }}}
              rows="2" 
              className="w-full p-4 md:p-6 bg-slate-50 border-2 border-slate-100 rounded-xl md:rounded-2xl focus:border-[#00A5D4] outline-none transition-all resize-none text-[#116984] font-bold text-sm md:text-base" 
              placeholder="Décrivez vos besoins..."
            />
            <button onClick={onAsk} disabled={isLoading} className="absolute bottom-4 right-4 px-4 md:px-6 py-2 md:py-3 bg-[#116984] text-white font-black rounded-lg md:rounded-xl shadow-lg hover:bg-[#00A5D4] transition-all flex items-center uppercase tracking-widest text-[10px] md:text-xs disabled:opacity-50">
              <Send className="w-4 h-4 mr-2" /> Analyser
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AIModal;