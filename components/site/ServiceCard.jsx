import React, { useState } from "react";
import { ChevronRight, ArrowLeft } from "lucide-react";

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
  buttonText,
  variant = "cyan",
  onAction,
  subOptions, // Tableau d'options pour le simulateur
  subOptionsDescription, // La description qu'on a ajoutée
  isInfoOnly,
  isPopular,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  // --- CODES COULEURS STRICTS ---
  const isCyan = variant === "cyan";
  const isOrange = variant === "orange";
  // Par défaut Navy (#116984)
  const colorBase = isCyan ? "#00A5D4" : isOrange ? "#F7941D" : "#116984";
  
  const bgSoft = isCyan
    ? "bg-[#00A5D4]/5"
    : isOrange
    ? "bg-[#F7941D]/5"
    : "bg-[#116984]/5";

  // Gestion du clic principal
  const handleMainClick = () => {
    if (subOptions && subOptions.length > 0) {
      setShowOptions(true);
    } else if (onAction) {
      onAction();
    }
  };

  return (
    <div
      onClick={!showOptions ? handleMainClick : undefined}
      className={`group relative bg-white rounded-[2.5rem] p-6 md:p-7 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col items-center text-center transition-all duration-500 w-full mx-auto overflow-hidden text-left ${
        isInfoOnly 
          ? "h-full border-b-4" 
          : "hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(17,105,132,0.12)] cursor-pointer"
      }`}
      style={{ borderBottomColor: isInfoOnly ? colorBase : "transparent" }}
    >
      {/* Badge Recommandé */}
      {isPopular && (
        <div className="absolute top-6 -right-10 rotate-45 bg-[#F7941D] text-white px-10 py-1 text-[8px] font-black uppercase tracking-widest shadow-lg z-20">
          Recommandé
        </div>
      )}

      {/* Background Blur Effect */}
      <div
        className="absolute -top-24 -left-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
        style={{ backgroundColor: colorBase }}
      ></div>

      {/* --- VUE 1 : PRINCIPALE --- */}
      {/* Contenu principal qui glisse vers la gauche */}
      <div className={`w-full flex flex-col h-full transition-all duration-500 ease-in-out ${showOptions ? "-translate-x-[120%] absolute opacity-0" : "translate-x-0 opacity-100"}`}>
        <div className="relative mb-4 mx-auto">
          <div
            className={`w-16 h-16 md:w-20 md:h-20 ${bgSoft} rounded-[1.5rem] flex items-center justify-center transition-transform duration-500 group-hover:rotate-3 border border-slate-50`}
          >
            <Icon className="w-8 h-8 md:w-10 md:h-10" style={{ color: colorBase }} />
          </div>
        </div>
        
        <div className="mb-4 text-center">
          <h2 className="text-lg md:text-xl font-black text-[#116984] mb-2 uppercase tracking-tighter leading-none">
            {title}
          </h2>
          <p className="text-slate-500 text-xs md:text-sm leading-relaxed px-1 font-medium italic">
            {isInfoOnly ? `"${description}"` : description}
          </p>
        </div>

        {!isInfoOnly && (
          <div className="mt-auto w-full">
            <div className="flex flex-wrap justify-center gap-1.5 mb-6">
              {features?.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-center px-3 py-1 bg-slate-50 rounded-full border border-slate-100 transition-colors group-hover:bg-white"
                >
                  <div className="w-1 h-1 rounded-full mr-1.5" style={{ backgroundColor: colorBase }}></div>
                  <span className="text-[8px] font-bold text-[#116984] uppercase tracking-tight">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
            <button
              className="relative w-full py-3.5 text-white font-black rounded-2xl shadow-xl transition-all uppercase tracking-[0.15em] text-[9px] overflow-hidden group/btn"
              style={{ backgroundColor: colorBase }}
            >
              <span className="relative z-10 flex items-center justify-center">
                {buttonText}
                <ChevronRight className="ml-1.5 w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        )}
      </div>

      {/* --- VUE 2 : CHOIX SIMULATEUR (GRID) --- */}
      {subOptions && (
        <div 
          className={`absolute inset-0 bg-white z-10 p-5 flex flex-col justify-center transition-all duration-500 ease-in-out ${showOptions ? "translate-x-0 opacity-100" : "translate-x-[120%] opacity-0 pointer-events-none"}`}
        >
          {/* Bouton Retour */}
          <button 
            onClick={(e) => { e.stopPropagation(); setShowOptions(false); }}
            className="absolute top-4 left-4 text-slate-300 hover:text-[#116984] transition-colors p-1"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* TITRE */}
          <h3 className="text-[#116984] font-black uppercase tracking-widest text-[10px] md:text-xs mb-2 text-center mt-2">
            Méthode de simulation
          </h3>

          {/* --- DESCRIPTION DYNAMIQUE --- */}
          {subOptionsDescription && (
            <p className="text-slate-400 text-[9px] md:text-[10px] font-medium text-center mb-4 px-2 leading-tight">
              {subOptionsDescription}
            </p>
          )}

          {/* GRILLE CÔTE À CÔTE */}
          <div className="grid grid-cols-2 gap-3 w-full h-full max-h-[160px]">
            {subOptions.map((opt, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); opt.onClick(); }}
                className="group/opt relative w-full h-full rounded-2xl border-2 border-slate-50 bg-slate-50 hover:bg-white hover:border-slate-100 hover:shadow-lg transition-all flex flex-col items-center justify-center text-center p-2"
              >
                {/* Icône avec fond coloré */}
                <div 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-white shadow-md mb-3 transition-transform group-hover/opt:scale-110 group-hover/opt:-translate-y-1"
                  style={{ backgroundColor: opt.color || colorBase }}
                >
                  <opt.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                
                {/* Textes */}
                <div className="flex flex-col z-10 w-full px-1">
                  <span className="font-black text-[#116984] uppercase text-[9px] md:text-[10px] tracking-wider leading-tight mb-1">
                    {opt.label}
                  </span>
                  <span className="text-[8px] text-slate-400 font-medium leading-tight">
                    {opt.subLabel}
                  </span>
                </div>
                
                {/* Barre de couleur au survol (bas) */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover/opt:opacity-100 transition-opacity rounded-b-xl" 
                  style={{ backgroundColor: opt.color || colorBase }}
                ></div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;