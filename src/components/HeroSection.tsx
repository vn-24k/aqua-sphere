import React from "react";
import { ArrowDown, Waves, Compass, ShieldCheck } from "lucide-react";
import { oceanAudio } from "../utils/ocean-audio";
import {
  UivAquaLiquidBtn,
  UivCyanGlowBtn,
  UivExpeditionCtaBtn,
  UivOxygenPulseLoader,
} from "./uiverse-collection";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background Hero Atmosphere: Sunbeams & Silhouette Diver */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep blue ocean gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 15%, #082d54 0%, #031429 45%, #020915 85%)",
          }}
        />

        {/* Diver Silhouette with descending posture */}
        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-72 sm:w-96 h-80 sm:h-96 opacity-90 flex items-center justify-center">
          <svg
            viewBox="0 0 300 400"
            className="w-full h-full text-[#01060e] drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] filter"
            fill="currentColor"
          >
            {/* Scuba Diver with tank, fins, mask */}
            <g transform="translate(150, 190) rotate(18) scale(0.95)">
              {/* Diver Head & Mask */}
              <circle cx="0" cy="-70" r="15" fill="#01060e" />
              <ellipse cx="6" cy="-68" rx="8" ry="6" fill="#00f5d4" opacity="0.6" />
              {/* Regulator hose */}
              <path d="M-8 -68 Q -20 -50 -10 -35" stroke="#00f5d4" strokeWidth="2.5" fill="none" opacity="0.4" />
              {/* Torso & BCD */}
              <ellipse cx="-4" cy="-35" rx="19" ry="26" fill="#01060e" />
              {/* Scuba Cylinder Tank */}
              <rect x="-24" y="-55" width="14" height="42" rx="6" fill="#021020" stroke="#00f5d4" strokeWidth="1.5" opacity="0.7" />
              {/* Arms reaching downwards */}
              <path d="M-10 -45 L-25 -10 L-18 15" stroke="#01060e" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M6 -45 L20 -10 L25 10" stroke="#01060e" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              {/* Legs in gentle flutter kick */}
              <path d="M-8 -12 L-16 40 L-24 85" stroke="#01060e" strokeWidth="11" strokeLinecap="round" fill="none" />
              <path d="M6 -12 L16 35 L12 80" stroke="#01060e" strokeWidth="10" strokeLinecap="round" fill="none" />
              {/* Fins */}
              <polygon points="-24,85 -38,125 -18,120 -16,85" fill="#021020" />
              <polygon points="12,80 8,118 26,115 16,80" fill="#021020" />
            </g>
          </svg>
        </div>

        {/* Bioluminescent Coral Wings (Left and Right - exactly as in reference) */}
        {/* Left bioluminescent coral reef */}
        <div 
          className="absolute left-0 top-[28%] w-64 sm:w-96 h-96 opacity-85 biolum-pulse pointer-events-none"
          style={{
            background: "radial-gradient(circle at 10% 50%, rgba(230,28,120,0.5) 0%, rgba(181,23,158,0.2) 50%, transparent 80%)",
          }}
        >
          {/* Coral silhouette outlines */}
          <svg viewBox="0 0 200 300" className="w-full h-full text-[#e61c78]/60 fill-current">
            <path d="M0 300 C 40 250, 20 200, 60 170 C 80 150, 50 120, 85 90 C 100 80, 110 50, 120 20 C 105 40, 80 70, 70 100 C 50 120, 30 150, 35 190 C 20 230, 10 270, 0 300 Z" />
            <path d="M10 300 C 60 270, 70 210, 110 180 C 130 160, 140 120, 160 80 C 140 110, 115 150, 95 180 C 70 220, 40 260, 10 300 Z" opacity="0.7" />
          </svg>
        </div>

        {/* Right bioluminescent coral reef */}
        <div 
          className="absolute right-0 top-[32%] w-64 sm:w-96 h-96 opacity-85 biolum-pulse pointer-events-none"
          style={{
            background: "radial-gradient(circle at 90% 50%, rgba(230,28,120,0.55) 0%, rgba(114,9,183,0.25) 50%, transparent 80%)",
          }}
        >
          <svg viewBox="0 0 200 300" className="w-full h-full text-[#f72585]/70 fill-current">
            <path d="M200 300 C 160 250, 180 200, 140 170 C 120 150, 150 120, 115 90 C 100 80, 90 50, 80 20 C 95 40, 120 70, 130 100 C 150 120, 170 150, 165 190 C 180 230, 190 270, 200 300 Z" />
            <path d="M190 300 C 140 270, 130 210, 90 180 C 70 160, 60 120, 40 80 C 60 110, 85 150, 105 180 C 130 220, 160 260, 190 300 Z" opacity="0.6" />
          </svg>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center mt-36 sm:mt-44">
        {/* Kicker badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#041226]/80 border border-[#00f5d4]/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(0,245,212,0.15)]">
          <Waves className="w-3.5 h-3.5 text-[#00f5d4] animate-pulse" />
          <span className="text-xs sm:text-sm font-medium tracking-widest text-[#e2f1fc] uppercase">
            Дайвинг клуб • Clube de Mergulho Abissal
          </span>
        </div>

        {/* Monumental Title: AQUA SPHERE (1:1 typography) */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tight text-white mb-6 uppercase drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)]">
          <span className="inline-block hover:scale-105 transition-transform duration-300">AQUA</span>{" "}
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#e2f1fc] to-[#00f5d4] hover:scale-105 transition-transform duration-300">
            SPHERE
          </span>
        </h1>

        {/* Subhead (1:1 with reference) */}
        <p className="text-lg sm:text-2xl md:text-3xl font-light text-neutral-200 tracking-wide max-w-2xl mx-auto mb-10 font-sans">
          Открой подводный мир вместе с нами.
          <span className="block text-sm sm:text-base text-[#00f5d4]/90 font-mono mt-2 tracking-wider">
            Expedições oceânicas de elite, segurança de nível militar e bioluminescência pura.
          </span>
        </p>

        {/* Integrated Uiverse Interactive Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12">
          {/* Uiverse 1: BurgiSimon_wonderful-seahorse-35 (Hold Me / Agendar Imersão) */}
          <div 
            onClick={() => {
              oceanAudio.playBubblePop();
              onOpenBooking();
            }}
            title="Agendar Imersão de Batismo"
            className="cursor-pointer"
          >
            <UivAquaLiquidBtn />
          </div>

          {/* Uiverse 2: 0x3ther_heavy-dragon-56 (Get Started Cyan Glow) */}
          <a
            href="#locais"
            onClick={() => oceanAudio.playBubblePop()}
            title="Explorar Locais de Mergulho"
            className="cursor-pointer"
          >
            <UivCyanGlowBtn />
          </a>

          {/* Uiverse 3: EmmaxPlay_rude-yak-98 (Pulse CTA) */}
          <a
            href="#cursos"
            onClick={() => oceanAudio.playBubblePop()}
            title="Conhecer Cursos e Certificações"
            className="cursor-pointer"
          >
            <UivExpeditionCtaBtn />
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

        {/* Scroll prompt anchor */}
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
