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
  isInfoOnly,
  isPopular,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  const isCyan = variant === "cyan";
  const isOrange = variant === "orange";
  const colorPrimary = isCyan ? "#00A5D4" : isOrange ? "#F7941D" : "#116984";
  const colorLight = isCyan ? "#60EFFF" : isOrange ? "#FFD085" : "#4FACFE";
  const shadowColor = isCyan ? "rgba(0, 165, 212, 0.2)" : isOrange ? "rgba(247, 148, 29, 0.2)" : "rgba(17, 105, 132, 0.2)";

  return (
    <div
      onClick={!showOptions ? () => (subOptions?.length ? setShowOptions(true) : onAction?.()) : undefined}
      className={`group relative w-full h-full perspective-1000 ${!isInfoOnly ? "cursor-pointer" : ""}`}
    >
      <div className="relative w-full h-full rounded-[2.5rem] p-8 bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:-translate-y-1.5 hover:bg-white/80 transition-all duration-400 overflow-hidden flex flex-col items-center text-center">
        
        {/* Lumière d'ambiance */}
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full blur-[80px] opacity-20 pointer-events-none" style={{ backgroundColor: colorLight }}></div>

        {/* --- VUE 1 : CONTENU --- */}
        <div className={`relative z-10 flex flex-col items-center w-full h-full transition-all duration-500 ${showOptions ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
          
          {/* Section Icone + Titre (Haut) */}
          <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center shadow-lg"
               style={{ background: `linear-gradient(135deg, ${colorLight} 0%, ${colorPrimary} 100%)`, boxShadow: `0 8px 16px -4px ${shadowColor}` }}>
            <Icon className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-2xl font-black text-[#116984] mb-3 uppercase tracking-tighter leading-none">
            {title}
          </h3>

          {/* Description : flex-grow permet d'occuper l'espace vide au milieu */}
          <div className="flex-grow flex flex-col justify-center">
            <p className="text-xs text-slate-500 font-medium leading-relaxed px-4">
              {description}
            </p>
          </div>

          {/* Features & Pied de carte (Bas) */}
          {!isInfoOnly && (
            <div className="w-full mt-8">
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {features?.map((feat, i) => (
                  <span key={i} className="text-[10px] font-black text-[#116984] bg-[#116984]/5 border border-[#116984]/10 px-3 py-1 rounded-full uppercase tracking-tighter">
                    {feat}
                  </span>
                ))}
              </div>

              <div className="group/btn relative w-full h-14 rounded-2xl overflow-hidden shadow-xl active:scale-95 transition-all">
                <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(to right, ${colorPrimary}, ${colorLight})` }}></div>
                <div className="relative z-10 h-full flex items-center justify-center font-black text-xs uppercase tracking-widest text-white gap-2">
                  {buttonText}
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
