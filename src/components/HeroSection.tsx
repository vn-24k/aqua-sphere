import React from "react";
import { ArrowDown, Waves, Compass, ShieldCheck, ChevronRight } from "lucide-react";
import { oceanAudio } from "../utils/ocean-audio";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-4 overflow-hidden">
      {/* Background Hero Atmosphere: Real Surface Sunbeams & Diver from Template */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Real Diver & Sunlit Ocean Surface from Template */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[560px] opacity-75 overflow-hidden">
          <img
            src="/assets/hero-diver.jpg"
            alt="Mergulhador Abissal Aqua Sphere"
            className="w-full h-full object-cover object-top filter brightness-110 contrast-105"
          />
          {/* Smooth radial & linear fades to blend into #020915 */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020915]/30 via-transparent to-[#020915]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020915] via-transparent to-[#020915]" />
        </div>

        {/* Ambient bioluminescent glows */}
        <div 
          className="absolute left-[-10%] top-[30%] w-[450px] h-[450px] rounded-full blur-[140px] opacity-35"
          style={{ background: "#e61c78" }}
        />
        <div 
          className="absolute right-[-10%] top-[35%] w-[450px] h-[450px] rounded-full blur-[140px] opacity-35"
          style={{ background: "#00f5d4" }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center mt-36 sm:mt-48">
        {/* Kicker badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#030e1d]/85 border border-[#00f5d4]/40 backdrop-blur-md mb-6 shadow-[0_0_25px_rgba(0,245,212,0.2)]">
          <Waves className="w-3.5 h-3.5 text-[#00f5d4] animate-pulse" />
          <span className="text-xs sm:text-sm font-medium tracking-widest text-[#e2f1fc] uppercase font-mono">
            Дайвинг клуб • Clube de Mergulho Abissal
          </span>
        </div>

        {/* Monumental Headline (1:1 with reference) */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tight text-white mb-6 uppercase drop-shadow-[0_15px_40px_rgba(0,0,0,0.9)]">
          <span className="inline-block hover:scale-105 transition-transform duration-300">AQUA</span>{" "}
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d8f3dc] to-[#00f5d4] hover:scale-105 transition-transform duration-300">
            SPHERE
          </span>
        </h1>

        {/* Subtitle from Reference */}
        <p className="text-lg sm:text-2xl md:text-3xl font-light text-neutral-200 tracking-wide max-w-2xl mx-auto mb-10 font-sans">
          Открой подводный мир вместе с нами.
          <span className="block text-sm sm:text-base text-[#00f5d4] font-mono mt-2 tracking-wider">
            Expedições oceânicas exclusivas, segurança certificada e contemplação silenciosa.
          </span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-14">
          <button
            onClick={() => {
              oceanAudio.playBubblePop();
              onOpenBooking();
            }}
            className="px-8 py-3.5 rounded-full font-mono text-xs uppercase font-bold tracking-wider text-white shadow-[0_0_30px_rgba(247,37,133,0.7)] hover:shadow-[0_0_45px_rgba(247,37,133,1)] transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #f72585 0%, #b5179e 60%, #7209b7 100%)",
            }}
          >
            Записаться на погружение / Agendar
          </button>

          <a
            href="#locais"
            onClick={() => oceanAudio.playBubblePop()}
            className="px-7 py-3.5 rounded-full font-mono text-xs uppercase font-medium tracking-wider text-[#e2f1fc] bg-[#030e1d]/80 hover:bg-[#061833] border border-[#00f5d4]/40 hover:border-[#00f5d4] transition-all backdrop-blur-md shadow-lg flex items-center gap-2"
          >
            <span>Explorar Locais</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#00f5d4]" />
          </a>
        </div>

        {/* Ocean Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-3xl w-full border-t border-white/10 pt-8 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-white">100%</div>
            <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-1">
              Registro de Segurança
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-[#00f5d4]">140 M</div>
            <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-1">
              Capacidade Técnica
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-[#e61c78]">12+ ANOS</div>
            <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-1">
              Desde 2012
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-[#f59e0b]">3.400+</div>
            <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-1">
              Mergulhos Concluídos
            </div>
          </div>
        </div>

        {/* Scroll prompt */}
        <a 
          href="#sobre" 
          onClick={() => oceanAudio.playBubblePop()}
          className="mt-14 inline-flex flex-col items-center gap-2 text-neutral-400 hover:text-[#00f5d4] transition-colors"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">Mergulhar nas profundezas</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#00f5d4]" />
        </a>
      </div>
    </section>
  );
};
