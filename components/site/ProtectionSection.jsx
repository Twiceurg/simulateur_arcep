import React from "react";
import { ShieldCheck, Scale, FileSearch, Lock } from "lucide-react";

const ProtectionSection = () => {
  return (
    <section className="relative  px-4 sm:px-6 overflow-hidden bg-slate-50">
      {/* --- 1. FOND AMBIANCE --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grille technique légère */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#116984 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        ></div>
        {/* Halo lumineux central */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- 2. EN-TÊTE DE SECTION --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#116984]/5 border border-[#116984]/10 mb-6">
            <ShieldCheck className="w-3 h-3 text-[#116984]" />
            <span className="text-[#116984] font-black uppercase tracking-[0.2em] text-[10px]">
              Confiance & Sécurité
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6">
            Votre pouvoir d'achat est <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#116984] to-[#00A5D4]">
              notre priorité absolue.
            </span>
          </h2>

          <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed max-w-xl mx-auto">
            L'ARCEP veille à l'équité du marché. Nos outils de simulation sont
            conçus pour vous redonner le contrôle sur vos dépenses télécoms.
          </p>
        </div>

        {/* --- 3. GRILLE DES ENGAGEMENTS (CARTES) --- */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* CARTE 1 : TRANSPARENCE (Cyan) */}
          <div className="group relative bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_-20px_rgba(0,165,212,0.15)] border border-slate-100 hover:border-[#00A5D4]/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            {/* Déco Arrière-plan */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#00A5D4]/5 rounded-full blur-3xl group-hover:bg-[#00A5D4]/10 transition-colors"></div>

            <div className="relative z-10">
              {/* Icône 3D */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00A5D4] to-[#0085A1] flex items-center justify-center text-white shadow-lg shadow-[#00A5D4]/30 mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <FileSearch className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-[#00A5D4] transition-colors">
                Transparence Totale
              </h3>

              <p className="text-slate-500 leading-relaxed font-medium">
                Le régulateur impose une structure de prix lisible. Chaque
                centime facturé doit être justifié par l'opérateur. Pas de coûts
                cachés, pas de surprises.
              </p>

              {/* Ligne décorative animée */}
              <div className="w-full h-1 bg-slate-100 mt-8 rounded-full overflow-hidden">
                <div className="h-full w-12 bg-[#00A5D4] rounded-full group-hover:w-full transition-all duration-1000 ease-out"></div>
              </div>
            </div>
          </div>

          {/* CARTE 2 : OBJECTIVITÉ (Orange) */}
          <div className="group relative bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_-20px_rgba(247,148,29,0.15)] border border-slate-100 hover:border-[#F7941D]/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            {/* Déco Arrière-plan */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#F7941D]/5 rounded-full blur-3xl group-hover:bg-[#F7941D]/10 transition-colors"></div>

            <div className="relative z-10">
              {/* Icône 3D */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F7941D] to-[#E67E22] flex items-center justify-center text-white shadow-lg shadow-[#F7941D]/30 mb-8 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                <Scale className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-[#F7941D] transition-colors">
                Objectivité Absolue
              </h3>

              <p className="text-slate-500 leading-relaxed font-medium">
                Nos algorithmes sont audités et classent les offres uniquement
                sur le prix réel et la performance technique. Aucune mise en
                avant commerciale n'est possible.
              </p>

              {/* Ligne décorative animée */}
              <div className="w-full h-1 bg-slate-100 mt-8 rounded-full overflow-hidden">
                <div className="h-full w-12 bg-[#F7941D] rounded-full group-hover:w-full transition-all duration-1000 ease-out"></div>
              </div>
            </div>
          </div>
        </div>

        {/* --- 4. BANDEAU DE RÉASSURANCE (Bas) --- */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 md:gap-8 opacity-70">
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-100 shadow-sm">
            <Lock className="w-4 h-4 text-[#116984]" />
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">
              Données Anonymes
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-100 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#116984]" />
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">
              Service Gratuit
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtectionSection;
