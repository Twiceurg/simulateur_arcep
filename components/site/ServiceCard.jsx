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

  const isCyan = variant === "cyan";
  const isOrange = variant === "orange";
  const colorPrimary = isCyan ? "#00A5D4" : isOrange ? "#F7941D" : "#116984";
  const colorLight = isCyan ? "#60EFFF" : isOrange ? "#FFD085" : "#4FACFE";
  const shadowColor = isCyan
    ? "rgba(0, 165, 212, 0.2)"
    : isOrange
      ? "rgba(247, 148, 29, 0.2)"
      : "rgba(17, 105, 132, 0.2)";

  return (
    <div
      onClick={
        !showOptions
          ? () => (subOptions?.length ? setShowOptions(true) : onAction?.())
          : undefined
      }
      className={`group relative w-full h-full perspective-1000 ${!isInfoOnly ? "cursor-pointer" : ""}`}
    >
      {/* --- CONTENEUR GLASSMORPHISM --- */}
      <div
        className={`
        relative w-full h-full rounded-3xl p-6
        /* Effet de Verre */
        bg-white/70 backdrop-blur-xl 
        border border-white/40 
        /* Ombre douce */
        shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]
        hover:-translate-y-1.5 hover:bg-white/80 hover:border-white/60
        transition-all duration-400 ease-out overflow-hidden
        flex flex-col items-center text-center
      `}
      >
        {/* Lumière d'ambiance interne (Subtile) */}
        <div
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full blur-[80px] opacity-20 pointer-events-none"
          style={{ backgroundColor: colorLight }}
        ></div>

        {/* Badge Popular (Compact) */}
        {isPopular && (
          <div className="absolute top-4 right-4 z-20">
            <div
              className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[8px] font-black uppercase tracking-widest text-white shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${colorPrimary}, ${colorLight})`,
              }}
            >
              <Sparkles className="w-2.5 h-2.5" /> TOP
            </div>
          </div>
        )}

        {/* --- VUE 1 : CONTENU --- */}
        <div
          className={`relative z-10 flex flex-col items-center h-full w-full transition-all duration-500 ${showOptions ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
        >
          {/* ICÔNE : Taille optimisée */}
          <div className="mb-4 relative">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center relative z-10 transition-transform duration-500 group-hover:rotate-3"
              style={{
                background: `linear-gradient(135deg, ${colorLight} 0%, ${colorPrimary} 100%)`,
                boxShadow: `0 8px 16px -4px ${shadowColor}`,
              }}
            >
              <Icon className="w-7 h-7 text-white" />
            </div>
          </div>

          {/* TEXTES : Compactés */}
          <div className="mb-4">
            <h3 className="text-xl font-extrabold text-slate-800 mb-1 leading-tight tracking-tight">
              {title}
            </h3>
            <p className="text-[11px] text-slate-500 font-medium leading-relaxed px-2 line-clamp-2">
              {description}
            </p>
          </div>

          {/* FEATURES & BOUTON */}
          {!isInfoOnly && (
            <div className="mt-auto w-full flex flex-col items-center">
              <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                {features?.slice(0, 2).map((feat, i) => (
                  <span
                    key={i}
                    className="text-[9px] font-bold text-slate-600 bg-white/50 border border-white/20 px-2 py-0.5 rounded-md backdrop-blur-sm"
                  >
                    {feat}
                  </span>
                ))}
              </div>

              {/* BOUTON GLASSS-BUTTON STYLE */}
              <div className="group/btn relative w-full h-10 rounded-xl overflow-hidden transition-all shadow-md active:scale-95">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${colorPrimary}, ${colorLight})`,
                  }}
                ></div>
                <div className="relative z-10 h-full flex items-center justify-center font-bold text-[10px] uppercase tracking-wider text-white">
                  {buttonText}{" "}
                  <ChevronRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* --- VUE 2 : SOUS-OPTIONS (Glass) --- */}
        {subOptions && (
          <div
            className={`absolute inset-0 z-20 bg-white/40 backdrop-blur-2xl p-5 flex flex-col transition-all duration-500 ${showOptions ? "translate-y-0" : "translate-y-full"}`}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowOptions(false);
              }}
              className="flex items-center gap-1 text-slate-500 hover:text-slate-800 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-[9px] font-bold uppercase">Retour</span>
            </button>

            <div className="grid grid-cols-1 gap-2 w-full">
              {subOptions.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    opt.onClick();
                  }}
                  className="flex items-center gap-3 w-full p-2.5 rounded-xl border border-white/40 bg-white/50 hover:bg-white/80 transition-all text-left"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-white shrink-0 shadow-sm"
                    style={{
                      background: `linear-gradient(135deg, ${opt.color || colorPrimary}, ${colorLight})`,
                    }}
                  >
                    <opt.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-800 uppercase leading-none">
                      {opt.label}
                    </div>
                  </div>
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
