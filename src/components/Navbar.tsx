import React from "react";
import { Volume2, VolumeX, Compass } from "lucide-react";
import { oceanAudio } from "../utils/ocean-audio";

interface NavbarProps {
  onOpenBooking: () => void;
  depthUnit: "meters" | "feet";
  onToggleDepthUnit: () => void;
  isAudioOn: boolean;
  onToggleAudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  depthUnit,
  onToggleDepthUnit,
  isAudioOn,
  onToggleAudio,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-5 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Emblem */}
        <a 
          href="#" 
          className="flex items-center gap-3 group focus:outline-none"
          onMouseEnter={() => oceanAudio.playBubblePop()}
        >
          <div className="relative w-10 h-10 rounded-full border border-white/20 bg-[#041226]/80 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(0,245,212,0.25)] transition-transform group-hover:scale-105">
            <svg 
              viewBox="0 0 100 100" 
              className="w-6 h-6 text-white transition-colors group-hover:text-[#00f5d4]" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="5"
            >
              <circle cx="50" cy="50" r="42" strokeDasharray="6 4" strokeOpacity="0.4" />
              <path d="M50 15 L30 35 L35 70 L50 85 L65 70 L70 35 Z" fill="rgba(0,245,212,0.15)" />
              <circle cx="50" cy="45" r="14" fill="rgba(230,28,120,0.3)" />
              <circle cx="50" cy="45" r="7" fill="#ffffff" />
              <path d="M30 35 L70 35" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base sm:text-lg tracking-wider text-white">
              AQUA SPHERE
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#00f5d4]/80 -mt-1 uppercase">
              Clube de Mergulho
            </span>
          </div>
        </a>

        {/* Center Navigation Pills (Exact aesthetic from 1:1 image) */}
        <nav className="hidden md:flex items-center gap-2 bg-[#041226]/70 backdrop-blur-xl border border-white/10 px-3 py-1.5 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          <a
            href="#sobre"
            onMouseEnter={() => oceanAudio.playBubblePop()}
            className="px-4 py-1.5 text-xs font-medium text-neutral-300 hover:text-white rounded-full hover:bg-white/10 transition-all font-sans"
          >
            О клубе
          </a>
          <a
            href="#cursos"
            onMouseEnter={() => oceanAudio.playBubblePop()}
            className="px-4 py-1.5 text-xs font-medium text-neutral-300 hover:text-white rounded-full hover:bg-white/10 transition-all font-sans"
          >
            Курсы
          </a>
          <a
            href="#locais"
            onMouseEnter={() => oceanAudio.playBubblePop()}
            className="px-4 py-1.5 text-xs font-medium text-neutral-300 hover:text-white rounded-full hover:bg-white/10 transition-all font-sans"
          >
            Локации
          </a>
          <a
            href="#contato"
            onMouseEnter={() => oceanAudio.playBubblePop()}
            className="px-4 py-1.5 text-xs font-medium text-neutral-300 hover:text-white rounded-full hover:bg-white/10 transition-all font-sans"
          >
            Номер
          </a>
        </nav>

        {/* Right Section: Audio + Depth Toggle + 23 Uiverse Drawer + Radiant Magenta Pill CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sonar Audio Button */}
          <button
            onClick={() => {
              oceanAudio.playBubblePop();
              onToggleAudio();
            }}
            title={isAudioOn ? "Mutar Sonar Hidrofônico" : "Ativar Sonar Subaquático"}
            className="w-9 h-9 rounded-full bg-[#041226]/80 border border-white/15 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-[#00f5d4] hover:border-[#00f5d4]/40 transition-all"
          >
            {isAudioOn ? (
              <Volume2 className="w-4 h-4 text-[#00f5d4] animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 text-neutral-400" />
            )}
          </button>

          {/* Unit Toggle (M / FT) */}
          <button
            onClick={() => {
              oceanAudio.playBubblePop();
              onToggleDepthUnit();
            }}
            title="Alternar Metros / Pés"
            className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#041226]/80 border border-white/15 text-[11px] font-mono font-medium text-neutral-300 hover:text-white transition-all"
          >
            <Compass className="w-3 h-3 text-[#00f5d4]" />
            <span>{depthUnit === "meters" ? "M" : "FT"}</span>
          </button>

          {/* Radiant Magenta Action Button */}
          <button
            onClick={() => {
              oceanAudio.playBubblePop();
              onOpenBooking();
            }}
            className="relative group overflow-hidden px-5 sm:px-6 py-2.5 rounded-full font-medium text-xs sm:text-sm text-white shadow-[0_0_25px_rgba(230,28,120,0.6)] hover:shadow-[0_0_35px_rgba(230,28,120,0.9)] transition-all duration-300 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #f72585 0%, #b5179e 60%, #7209b7 100%)",
            }}
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <span>Записаться</span>
              <span className="opacity-60 text-xs hidden sm:inline">/ Agendar</span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
