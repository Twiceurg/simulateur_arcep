import React from "react";
import { 
  ArrowRight, 
  Smartphone, 
  Wifi, 
  Activity, 
  ChevronDown,
  Globe,
  Radio
} from "lucide-react";

const Hero = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#116984] pt-20 pb-32">
      
      {/* --- 1. FOND DYNAMIQUE (Palette ARCEP) --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dégradé de fond principal (Ta base) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0E566C] via-[#116984] to-[#0085A1]"></div>
        
        {/* Lumières d'ambiance (Aurora Effects) */}
        {/* Lueur Cyan en haut à gauche */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#00A5D4] rounded-full mix-blend-overlay filter blur-[120px] opacity-30 animate-pulse"></div>
        {/* Lueur Orange en bas à droite (Contraste fort) */}
        <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-[#F7941D] rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
        
        {/* Motif de Grille "Data" */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        {/* Icône Radio Géante en fond (Subtile) */}
        <div className="absolute top-20 right-10 opacity-5 rotate-12 transform scale-150 pointer-events-none">
            <Radio className="w-[500px] h-[500px] text-white" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* --- BADGE ANIMÉ --- */}
          {/* <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-2xl mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F7941D] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F7941D]"></span>
            </span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/90">
              Simulateur Tarifaire Officiel
            </span>
          </div> */}

          {/* --- TITRE MONUMENTAL --- */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1] max-w-6xl mx-auto text-white drop-shadow-lg animate-in fade-in zoom-in duration-1000">
            Comparer et simuler vos <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A5D4] via-white to-[#00A5D4] animate-gradient-x">
              offres télécoms
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-cyan-50/80 max-w-3xl mx-auto mb-12 font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Trouvez le meilleur forfait mobile et l'offre internet la plus adaptée à vos besoins en toute transparence avec l'ARCEP.
          </p>

          {/* --- BOUTONS ACTION --- */}
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <button 
              onClick={() => onNavigate('simulation-gamme')}
              className="group relative w-full sm:w-auto px-8 py-4 bg-white text-[#116984] rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)] transition-all duration-300"
            >
              Lancer le comparateur
              <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onNavigate('guide')}
              className="w-full sm:w-auto px-8 py-4 bg-[#00A5D4]/20 text-white border border-[#00A5D4]/50 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-[#00A5D4]/30 backdrop-blur-md transition-all"
            >
              Voir le guide
            </button>
          </div>

          {/* --- ÉLÉMENTS FLOTTANTS (CARDS 3D) --- */}
          {/* Carte Flottante 1 (Gauche - Mobile) */}
          <div className="hidden lg:flex absolute top-1/2 -left-10 -translate-y-1/2 flex-col gap-4 animate-in fade-in slide-in-from-left-10 duration-1000 delay-500 opacity-90">
            <div className="w-64 p-5 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-white/20 rounded-xl"><Smartphone className="w-6 h-6 text-white" /></div>
                    <div className="text-left">
                        <div className="text-[10px] uppercase text-cyan-200 font-bold tracking-wider">Mobile</div>
                        <div className="text-white font-bold">Data 4G/5G</div>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="h-1.5 w-full bg-black/20 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-[#00A5D4]"></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-white/70 font-mono">
                        <span>Conso</span>
                        <span>75%</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Carte Flottante 2 (Droite - Fibre) */}
          <div className="hidden lg:flex absolute top-1/3 -right-10 flex-col gap-4 animate-in fade-in slide-in-from-right-10 duration-1000 delay-700 opacity-90">
            <div className="w-64 p-5 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-white">
                        <Wifi className="w-5 h-5" />
                        <span className="font-bold text-sm tracking-wide">Fibre</span>
                    </div>
                    <span className="px-2 py-1 bg-[#F7941D] text-white text-[10px] font-bold rounded-md">LIVE</span>
                </div>
                <div className="flex items-end justify-between gap-1 h-12">
                    {[40, 70, 50, 90, 60, 80].map((h, i) => (
                        <div key={i} style={{ height: `${h}%` }} className={`w-full rounded-t-sm ${i === 3 ? 'bg-[#F7941D]' : 'bg-white/30'}`}></div>
                    ))}
                </div>
                <div className="mt-2 text-right text-xs font-mono text-cyan-200">1.2 Gb/s</div>
            </div>
          </div>

        </div>
      </div>

      {/* --- SÉPARATEUR WAVE (Le tien, conservé) --- */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-[1px]">
        <svg 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[60px] md:h-[120px] text-[#f8fafc] fill-current"
        >
          <path d="M0,224L48,202.7C96,181,192,139,288,138.7C384,139,480,181,576,213.3C672,245,768,267,864,250.7C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        
        {/* Indicateur de Scroll */}
        <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-80">
            <span className="text-[9px] uppercase tracking-widest text-[#116984] font-bold mb-1">Commencer</span>
            <ChevronDown className="w-4 h-4 text-[#116984]" />
        </div>
      </div>

    </section>
  );
};

export default Hero;