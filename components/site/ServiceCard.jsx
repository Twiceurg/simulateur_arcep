import React, { useState } from "react";
import { ChevronRight, ArrowLeft, Sparkles } from "lucide-react";

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
  buttonText,
  variant = "cyan",
  onAction,
  subOptions,
  subOptionsDescription,
  isInfoOnly,
  isPopular,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  // --- COULEURS DYNAMIQUES (Version Riche & 3D) ---
  const isCyan = variant === "cyan";
  const isOrange = variant === "orange";
  
  // Couleurs principales pour les dégradés et ombres
  const colorPrimary = isCyan ? "#00A5D4" : isOrange ? "#F7941D" : "#116984";
  const colorLight = isCyan ? "#60EFFF" : isOrange ? "#FFD085" : "#4FACFE";

  // Ombres 3D colorées
  const shadowColor = isCyan ? "rgba(0, 165, 212, 0.25)" : isOrange ? "rgba(247, 148, 29, 0.25)" : "rgba(17, 105, 132, 0.25)";

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
      className={`
        group relative w-full h-full perspective-1000
        ${!isInfoOnly ? "cursor-pointer" : ""}
      `}
    >
      {/* --- CONTENEUR PRINCIPAL EFFET 3D --- */}
      <div 
        className={`
            relative w-full h-full bg-white rounded-[2.5rem] p-8
            border-[1.5px] border-white/60
            /* Double ombre pour l'effet de lévitation 3D */
            shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1),0_30px_60px_-30px_${shadowColor},inset_0_-2px_4px_rgba(0,0,0,0.05)]
            /* Effet de "lift" au survol */
            hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15),0_40px_80px_-20px_${shadowColor}]
            transition-all duration-500 ease-out overflow-hidden
            bg-gradient-to-b from-white to-slate-50/80 backdrop-blur-xl
            flex flex-col items-center text-center /* CENTRAGE GLOBAL */
        `}
      >
        
        {/* Badge Populaire 3D (Flottant) */}
        {isPopular && (
          <div className="absolute top-6 right-6 z-20 animate-bounce-slow">
              <div 
                className="flex items-center gap-1 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest text-white shadow-lg"
                style={{ 
                    background: isOrange 
                        ? 'linear-gradient(135deg, #F7941D, #FF7E00)' 
                        : 'linear-gradient(135deg, #00A5D4, #0085A1)',
                    boxShadow: isOrange 
                        ? '0 4px 15px -3px rgba(247, 148, 29, 0.5)' 
                        : '0 4px 15px -3px rgba(0, 165, 212, 0.5)'
                 }}
              >
                <Sparkles className="w-3 h-3" /> Top
              </div>
          </div>
        )}

        {/* Lumière d'ambiance interne (Centrée) */}
        <div 
            className="absolute -top-[20%] left-[10%] w-[80%] h-[80%] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none mix-blend-color-dodge"
            style={{ backgroundColor: colorLight }}
        ></div>

        {/* --- VUE 1 : CONTENU PRINCIPAL --- */}
        <div className={`relative z-10 flex flex-col items-center h-full w-full transition-transform duration-500 ${showOptions ? "-translate-x-[120%]" : "translate-x-0"}`}>
            
            {/* ICÔNE 3D FLOTTANTE (Centrée) */}
            <div className="mb-8 relative mx-auto">
                <div 
                    className="w-20 h-20 rounded-3xl flex items-center justify-center relative z-10 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3"
                    style={{ 
                        background: `linear-gradient(135deg, ${colorLight} 0%, ${colorPrimary} 100%)`,
                        boxShadow: `0 15px 30px -10px ${shadowColor}, inset 0 2px 4px rgba(255,255,255,0.4)`
                    }}
                >
                    <Icon className="w-9 h-9 text-white drop-shadow-md" />
                    {/* Reflet brillant sur l'icône */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-3xl"></div>
                </div>
                {/* Ombre au sol sous l'icône */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-black/20 blur-xl rounded-full transform translate-y-4 z-0"></div>
            </div>

            {/* Textes (Centrés) */}
            <div className="mb-6 w-full">
                <h3 className="text-2xl font-black text-slate-800 mb-3 leading-tight tracking-tight">
                    {title}
                </h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed px-4">
                    {description}
                </p>
            </div>

            {/* Features & Bouton 3D */}
            {!isInfoOnly && (
                <div className="mt-auto w-full space-y-8 flex flex-col items-center">
                    {/* Liste de points */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {features?.map((feat, i) => (
                            <span key={i} className="flex items-center text-[10px] font-bold text-slate-600 bg-slate-100/80 border border-slate-200/50 px-3 py-1.5 rounded-lg backdrop-blur-md">
                                <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: colorPrimary }}></div>
                                {feat}
                            </span>
                        ))}
                    </div>

                    {/* BOUTON 3D TACTILE */}
                    <div 
                        className="group/btn relative w-full h-14 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 active:translate-y-0.5"
                        style={{ boxShadow: `0 10px 25px -5px ${shadowColor}` }}
                    >
                        <div 
                            className="absolute inset-0 bg-gradient-to-r"
                            style={{ backgroundImage: `linear-gradient(to right, ${colorPrimary}, ${colorLight})` }}
                        ></div>
                        <div className="relative z-10 h-full flex items-center justify-center font-black text-sm uppercase tracking-widest text-white">
                            {buttonText} <ChevronRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </div>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 skew-y-12"></div>
                    </div>
                </div>
            )}
        </div>

        {/* --- VUE 2 : PANNEAU SOUS-OPTIONS (GRILLE CÔTE À CÔTE) --- */}
        {subOptions && (
            <div 
                className={`absolute inset-0 z-20 bg-white/95 backdrop-blur-xl p-6 flex flex-col items-center transition-transform duration-500 ease-in-out ${showOptions ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Ligne décorative en haut */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

                {/* Header Retour */}
                <div className="flex items-center justify-between w-full mb-6">
                    <button 
                        onClick={(e) => { e.stopPropagation(); setShowOptions(false); }}
                        className="group/back flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors"
                    >
                        <div className="p-2 bg-slate-100 rounded-full group-hover/back:bg-slate-200 transition-colors">
                             <ArrowLeft className="w-5 h-5 group-hover/back:-translate-x-1 transition-transform" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider">Retour</span>
                    </button>
                </div>

                <h3 className="text-lg font-black text-slate-800 mb-2 text-center">Méthode</h3>
                <p className="text-xs text-slate-500 font-medium mb-6 leading-relaxed text-center px-4">
                    {subOptionsDescription || "Choisissez votre précision."}
                </p>

                {/* --- GRILLE CÔTE À CÔTE --- */}
                <div className="grid grid-cols-2 gap-4 w-full h-full">
                    {subOptions.map((opt, idx) => (
                        <button
                            key={idx}
                            onClick={(e) => { e.stopPropagation(); opt.onClick(); }}
                            className="group/opt relative flex flex-col items-center justify-center w-full h-full p-4 rounded-3xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        >
                            {/* Fond coloré subtil au survol */}
                            <div 
                                className="absolute inset-0 opacity-0 group-hover/opt:opacity-5 transition-opacity duration-300"
                                style={{ backgroundColor: opt.color || colorPrimary }}
                            ></div>

                            {/* Icône 3D (Plus petite pour la sous-option) */}
                            <div 
                                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg mb-4 transition-transform group-hover/opt:scale-110 group-hover/opt:rotate-3"
                                style={{ 
                                    background: `linear-gradient(135deg, ${opt.color || colorPrimary}, ${colorLight})`,
                                    boxShadow: `0 8px 20px -5px ${opt.color ? opt.color + '60' : shadowColor}`
                                }}
                            >
                                <opt.icon className="w-7 h-7 drop-shadow-sm" />
                            </div>

                            {/* Textes Centrés */}
                            <div className="text-center z-10">
                                <span className="block text-xs font-black text-slate-800 uppercase tracking-wide mb-1 leading-tight">
                                    {opt.label}
                                </span>
                                <span className="block text-[9px] text-slate-400 font-medium leading-tight px-1">
                                    {opt.subLabel}
                                </span>
                            </div>
                            
                            {/* Barre décorative en bas qui grandit au survol */}
                            <div 
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 rounded-t-full transition-all group-hover/opt:w-16" 
                                style={{ backgroundColor: opt.color || colorPrimary }}
                            ></div>
                        </button>
                    ))}
                </div>
            </div>
        )}

      </div>
    </div>
  );
};

export default ServiceCard;