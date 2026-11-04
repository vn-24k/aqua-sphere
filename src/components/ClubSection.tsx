import React from "react";
import { Shield, CheckCircle2, Award, Sparkles } from "lucide-react";
import { oceanAudio } from "../utils/ocean-audio";

export const ClubSection: React.FC = () => {
  return (
    <section id="sobre" className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Background ambient lighting */}
      <div 
        className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[150px] pointer-events-none opacity-30"
        style={{ background: "#00f5d4" }}
      />
      <div 
        className="absolute -right-20 top-2/3 -translate-y-1/2 w-96 h-96 rounded-full blur-[150px] pointer-events-none opacity-25"
        style={{ background: "#e61c78" }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Exotic Winged Marine Fish (Exact from Reference Artwork) */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="relative group w-full max-w-md">
            {/* Ambient water halo */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#00f5d4]/20 via-transparent to-[#e61c78]/25 filter blur-2xl group-hover:blur-3xl transition-all duration-500" />
            
            {/* Cropped Fish Asset from Reference */}
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/15 bg-[#020b18]/80 backdrop-blur-xl p-3 shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
              <img
                src="/assets/exotic-fish.jpg"
                alt="Peixe Exótico Abissal - Aqua Sphere"
                className="w-full h-auto max-h-[460px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Fish Specimen Telemetry Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-3 rounded-xl bg-[#020915]/90 backdrop-blur-md border border-white/15 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-[#00f5d4] uppercase tracking-wider">
                    Espécime Catalogado #409
                  </div>
                  <div className="text-xs font-semibold text-white">
                    Pterois Radiata (Bioluminescente)
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#00f5d4] shadow-[0_0_10px_#00f5d4] animate-pulse" />
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

          {/* Editorial Paragraph from Russian Reference */}
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-light mb-6">
            <strong className="text-white font-medium">Aqua Sphera</strong> — это профессиональный дайвинг-клуб, который уже более 10 лет помогает людям открывать красоту подводного мира. Мы предлагаем безопасное и комфортное обучение, уникальные экскурсии и все необходимое для погружений.
          </p>

          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-8">
            Fundado por mestres de mergulho técnico e fotógrafos de profundidade, unimos a precisão militar de protocolos de descompressão com expedições silenciosas em ecossistemas de corais e naufrágios virgens.
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
            <div 
              onMouseEnter={() => oceanAudio.playBubblePop()}
              className="p-4 rounded-xl border border-white/10 bg-[#030e1d]/70 backdrop-blur-sm hover:border-[#00f5d4]/40 transition-colors"
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
              className="p-4 rounded-xl border border-white/10 bg-[#030e1d]/70 backdrop-blur-sm hover:border-[#e61c78]/40 transition-colors"
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

          {/* Bioluminescent Sea Anemone Status */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#e61c78]">
            <span className="w-2 h-2 rounded-full bg-[#e61c78] animate-ping" />
            <span>Bioma Coralino: Heteractis Magnifica com Simbiose Ativa</span>
          </div>
        </div>
      </div>
    </section>
  );
};
