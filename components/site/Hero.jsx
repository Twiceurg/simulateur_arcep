import React from "react";
import {
  ArrowRight,
  Smartphone,
  Wifi,
  Activity,
  ChevronDown,
  Globe,
  Radio,
} from "lucide-react";

const Hero = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden bg-[#116984] pt-12 pb-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0E566C] via-[#116984] to-[#0085A1]"></div>
        <div className="absolute top-[-5%] left-[-5%] w-[500px] h-[500px] bg-[#00A5D4] rounded-full mix-blend-overlay filter blur-[100px] opacity-25 animate-pulse"></div>
        <div className="absolute bottom-0 right-[-5%] w-[400px] h-[400px] bg-[#F7941D] rounded-full mix-blend-screen filter blur-[120px] opacity-15"></div>

        {/* Motif de Grille "Data" */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Icône Radio Géante - Taille et opacité réduites pour ne pas distraire */}
        <div className="absolute top-10 right-10 opacity-5 rotate-12 transform scale-110 pointer-events-none">
          <Radio className="w-[350px] h-[350px] text-white" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* --- TITRE : Réduction du margin-bottom (mb-4) et de la taille sur mobile --- */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-4 leading-[1.1] max-w-5xl mx-auto text-white drop-shadow-lg animate-in fade-in zoom-in duration-1000">
            Simuler et Comparer vos <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A5D4] via-white to-[#00A5D4] animate-gradient-x">
              offres télécoms
            </span>
          </h1>

          {/* --- PARAGRAPHE : Réduction du margin-bottom (mb-8) et max-width --- */}
          <p className="text-base md:text-xl text-cyan-50/80 max-w-2xl mx-auto mb-8 font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Trouvez le meilleur forfait mobile et l'offre internet la plus
            adaptée à vos besoins en toute transparence avec l'ARCEP.
          </p>

          {/* Cartes Flottantes (Ajustées pour ne pas flotter trop loin du centre) */}
          <div className="hidden lg:flex absolute top-1/2 -left-12 -translate-y-1/2 opacity-80">
            {/* ... Contenu Carte Mobile ... */}
          </div>

          <div className="hidden lg:flex absolute top-1/3 -right-12 opacity-80">
            {/* ... Contenu Carte Fibre ... */}
          </div>
        </div>
      </div>

      {/* --- SÉPARATEUR WAVE : Hauteur divisée par 2 sur desktop --- */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-[1px]">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] md:h-[70px] text-[#f8fafc] fill-current"
        >
          <path d="M0,224L48,202.7C96,181,192,139,288,138.7C384,139,480,181,576,213.3C672,245,768,267,864,250.7C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>

        {/* Indicateur de Scroll - Plus discret */}
        <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-60">
          <ChevronDown className="w-4 h-4 text-[#116984]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
