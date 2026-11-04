import React from "react";
import { Shield, Award, Users, Anchor, CheckCircle2 } from "lucide-react";
import { oceanAudio } from "../utils/ocean-audio";
import {
  UivBiolumMarineCard,
  UivBubblePhysicsSwitch,
  UivCoralTooltip,
  UivNitroxGearCheckbox,
  UivAbyssalGlassBtn,
} from "./uiverse-collection";

export const ClubSection: React.FC = () => {
  return (
    <section id="sobre" className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Subtle background glow */}
      <div 
        className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-40"
        style={{ background: "#00f5d4" }}
      />
      <div 
        className="absolute -right-20 top-2/3 -translate-y-1/2 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-30"
        style={{ background: "#e61c78" }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Exotic Winged Marine Fish (Exact from 1:1 Reference) */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="relative group">
            {/* Ambient water halo */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#00f5d4]/20 via-transparent to-[#e61c78]/25 filter blur-2xl group-hover:blur-3xl transition-all duration-500" />
            
            {/* Cropped Fish Asset from Reference */}
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 bg-[#020b18]/70 backdrop-blur-md p-3 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <img
                src="/assets/exotic-fish.jpg"
                alt="Peixe Exótico Abissal - Aqua Sphere"
                className="w-full h-auto max-h-[460px] object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Fish Species Telemetry Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-3 rounded-xl bg-[#020915]/85 backdrop-blur-lg border border-white/15 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-[#00f5d4] uppercase tracking-wider">
                    Espécime Catalogado #409
                  </div>
                  <div className="text-xs font-semibold text-white">
                    Pterois Radiata (Bioluminescente)
                  </div>
                </div>
                {/* Uiverse Tooltip on the fish specimen */}
                <div onMouseEnter={() => oceanAudio.playBubblePop()}>
                  <UivCoralTooltip />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Club Narrative (1:1 with reference) */}
        <div className="lg:col-span-7 flex flex-col items-start lg:pl-6">
          {/* Upper Kicker */}
          <span className="text-xs sm:text-sm font-mono tracking-widest text-[#00f5d4] uppercase mb-2">
            AQUA SPHERE
          </span>

          {/* Title Row with Year Pill */}
          <div className="flex flex-wrap items-baseline gap-4 mb-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight">
              О КЛУБЕ
            </h2>
            <div className="px-3.5 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-mono text-neutral-300">
              с 2012 года • Desde 2012
            </div>
          </div>

          {/* Editorial Paragraph (Preserving Russian reference text + Portuguese translation) */}
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-light mb-6">
            <strong className="text-white font-medium">Aqua Sphera</strong> — это профессиональный дайвинг-клуб, который уже более 10 лет помогает людям открывать красоту подводного мира. Мы предлагаем безопасное и комфортное обучение, уникальные экскурсии и все необходимое для погружений.
          </p>

          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-8">
            Fundado por mestres de mergulho técnico e fotógrafos de profundidade, unimos a precisão militar de protocolos de descompressão com expedições silenciosas de puro deslumbramento em ecossistemas de corais e naufrágios virgens.
          </p>

          {/* Highlights Grid with Uiverse Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
            <div 
              onMouseEnter={() => oceanAudio.playBubblePop()}
              className="p-4 rounded-xl border border-white/10 bg-[#030e1d]/60 backdrop-blur-sm hover:border-[#00f5d4]/40 transition-colors"
            >
              <div className="flex items-center gap-2 mb-1.5 text-white font-medium text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#00f5d4]" />
                <span>Instrutores PADI & SSI Master</span>
              </div>
              <p className="text-xs text-neutral-400">
                Mais de 15.000 horas combinadas de fundo e certificação de resgate avançado.
              </p>
            </div>

            <div 
              onMouseEnter={() => oceanAudio.playBubblePop()}
              className="p-4 rounded-xl border border-white/10 bg-[#030e1d]/60 backdrop-blur-sm hover:border-[#e61c78]/40 transition-colors"
            >
              <div className="flex items-center gap-2 mb-1.5 text-white font-medium text-sm">
                <Shield className="w-4 h-4 text-[#e61c78]" />
                <span>Gás Trimix & Heliox de Pureza</span>
              </div>
              <p className="text-xs text-neutral-400">
                Estação própria de mistura hiperbárica para mergulhos sem narcose até 140m.
              </p>
            </div>
          </div>

          {/* Interactive Controls Bar with Uiverse Real Components */}
          <div className="w-full p-4 rounded-2xl bg-[#041226]/80 border border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-neutral-300">MODO BOLHA TÁTIL:</span>
              <div onMouseEnter={() => oceanAudio.playBubblePop()}>
                <UivBubblePhysicsSwitch />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div onMouseEnter={() => oceanAudio.playBubblePop()}>
                <UivNitroxGearCheckbox />
              </div>
              <span className="text-xs font-mono text-neutral-400">Nitrox 32% Homologado</span>
            </div>

            <div 
              onClick={() => oceanAudio.playBubblePop()}
              className="cursor-pointer"
            >
              <UivAbyssalGlassBtn />
            </div>
          </div>

          {/* Bioluminescent Sea Anemone (Lower Right decoration matching reference) */}
          <div className="self-end mt-6 flex items-center gap-2 text-xs font-mono text-[#e61c78] opacity-80">
            <span className="w-2 h-2 rounded-full bg-[#e61c78] animate-ping" />
            <span>Bioma Coralino: Heteractis Magnifica Ativa</span>
          </div>
        </div>
      </div>
    </section>
  );
};
