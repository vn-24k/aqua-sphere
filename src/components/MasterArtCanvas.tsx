import React, { useState } from "react";
import { Sparkles, Compass, Volume2, VolumeX, Shield, Anchor, MapPin, CheckCircle2 } from "lucide-react";
import { oceanAudio } from "../utils/ocean-audio";

interface MasterArtCanvasProps {
  onOpenBooking: (topic?: string) => void;
  onOpenCourses: () => void;
  onOpenContact: () => void;
  isAudioOn: boolean;
  onToggleAudio: () => void;
}

export const MasterArtCanvas: React.FC<MasterArtCanvasProps> = ({
  onOpenBooking,
  onOpenCourses,
  onOpenContact,
  isAudioOn,
  onToggleAudio,
}) => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const handleHotspot = (label: string, action?: () => void) => {
    oceanAudio.playBubblePop();
    setActiveTooltip(label);
    setTimeout(() => setActiveTooltip(null), 2500);
    if (action) action();
  };

  return (
    <div className="relative w-full max-w-[736px] mx-auto select-none font-sans">
      {/* Toast Tooltip Notification on Interaction */}
      {activeTooltip && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#031024]/95 text-[#00f5d4] border border-[#00f5d4]/50 px-5 py-2.5 rounded-full text-xs font-mono shadow-[0_0_30px_rgba(0,245,212,0.35)] backdrop-blur-xl flex items-center gap-2 animate-in fade-in duration-150">
          <Sparkles className="w-3.5 h-3.5 text-[#00f5d4] animate-spin" />
          <span>{activeTooltip}</span>
        </div>
      )}

      {/* Luxury Chassis Frame */}
      <div className="relative w-full rounded-[36px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.95)] border border-white/15 bg-[#020915]">
        {/* Master 1:1 High-Resolution Artwork from Template (736 x 1570) */}
        <img
          src="/assets/reference.jpg"
          alt="AQUA SPHERE — Clube & Expedições de Mergulho Abissal"
          className="w-full h-auto block pointer-events-none"
        />

        {/* =====================================================================
            INTERACTIVE HOTSPOTS LAYER (PIXEL-PERFECT ACCURACY)
           ===================================================================== */}
        
        {/* 1. TOP NAVBAR HOTSPOTS */}
        {/* Emblem / Logo (Top Left) */}
        <div
          onClick={() => handleHotspot("AQUA SPHERE • Base Central de Mergulho")}
          className="absolute top-[1.2%] left-[8%] w-[10%] h-[2.8%] cursor-pointer rounded-full hover:bg-white/10 transition-colors"
          title="Aqua Sphere Emblem"
        />

        {/* Pill "О клубе" (Center Left) */}
        <a
          href="#sobre-anchor"
          onClick={() => handleHotspot("Navegando para: О клубе (Desde 2012)")}
          className="absolute top-[1.5%] left-[26%] w-[13%] h-[2.2%] cursor-pointer rounded-full hover:bg-white/20 transition-all border border-transparent hover:border-white/30"
          title="Ir para О клубе"
        />

        {/* Pill "Курсы" (Center) */}
        <div
          onClick={() => handleHotspot("Abrindo Matriz de Cursos PADI/SSI", onOpenCourses)}
          className="absolute top-[1.5%] left-[42%] w-[13%] h-[2.2%] cursor-pointer rounded-full hover:bg-white/20 transition-all border border-transparent hover:border-white/30"
          title="Ver Cursos & Certificações"
        />

        {/* Pill "Номер" (Center Right) */}
        <div
          onClick={() => handleHotspot("Central de Atendimento & VHF Marítimo", onOpenContact)}
          className="absolute top-[1.5%] left-[58%] w-[13%] h-[2.2%] cursor-pointer rounded-full hover:bg-white/20 transition-all border border-transparent hover:border-white/30"
          title="Telefone, Rádio VHF e Bases"
        />

        {/* Glowing Magenta CTA "Записаться" (Top Right) */}
        <div
          onClick={() => {
            oceanAudio.playSonarPing();
            handleHotspot("Iniciando Inscrição de Expedição", () => onOpenBooking("Mergulho de Batismo & Open Water"));
          }}
          className="absolute top-[1.2%] right-[7%] w-[22%] h-[2.8%] cursor-pointer rounded-full hover:shadow-[0_0_25px_rgba(247,37,133,0.8)] transition-all active:scale-95 border border-white/20 hover:bg-white/15"
          title="Записаться / Agendar Imersão"
        />

        {/* 2. HERO SECTION HOTSPOTS */}
        {/* Diver Silhouette Hotspot */}
        <div
          onClick={() => {
            oceanAudio.playSonarPing();
            handleHotspot("Mergulhador Técnico em Descida Livre (Zona Epipelágica)");
          }}
          className="absolute top-[6%] left-[44%] w-[16%] h-[8%] cursor-pointer rounded-full hover:bg-[#00f5d4]/10 transition-colors"
          title="Mergulhador em Imersão"
        />

        {/* Monolithic Title "AQUA SPHERE" */}
        <div
          onClick={() => handleHotspot("AQUA SPHERE • O Universo do Mergulho Silencioso")}
          className="absolute top-[13.5%] left-[16%] w-[68%] h-[4%] cursor-pointer hover:bg-white/5 rounded-xl transition-colors"
          title="AQUA SPHERE"
        />

        {/* Left Bioluminescent Coral Glow */}
        <div
          onClick={() => handleHotspot("Recife Coralino de Profundidade: Anthogorgia Caerulea")}
          className="absolute top-[18%] left-[2%] w-[28%] h-[8%] cursor-pointer rounded-2xl hover:bg-[#e61c78]/15 transition-colors"
          title="Coral Bioluminescente Magenta"
        />

        {/* Right Bioluminescent Coral Glow */}
        <div
          onClick={() => handleHotspot("Recife Coralino de Profundidade: Tubastrea Micrantha")}
          className="absolute top-[18%] right-[2%] w-[28%] h-[8%] cursor-pointer rounded-2xl hover:bg-[#e61c78]/15 transition-colors"
          title="Coral Bioluminescente Magenta"
        />

        {/* 3. "О КЛУБЕ" SECTION HOTSPOTS */}
        <div id="sobre-anchor" className="absolute top-[34%]" />
        
        {/* The Exotic Winged Fish (Left) */}
        <div
          onClick={() => {
            oceanAudio.playSonarPing();
            handleHotspot("Espécime: Pterois Radiata (Bioluminescência Abissal Ativa)");
          }}
          className="absolute top-[34%] left-[3%] w-[44%] h-[18%] cursor-pointer rounded-3xl hover:bg-[#00f5d4]/10 transition-all border border-transparent hover:border-[#00f5d4]/30"
          title="Clique para inspecionar o Peixe Exótico"
        />

        {/* Club Narrative & "с 2012 года" (Right) */}
        <div
          onClick={() => handleHotspot("Aqua Sphere Club: Mais de 12 anos de expedições seguras")}
          className="absolute top-[36%] left-[52%] w-[42%] h-[15%] cursor-pointer rounded-2xl hover:bg-white/5 transition-colors"
          title="Sobre o Clube de Mergulho"
        />

        {/* Glowing Sea Anemone (Lower Right) */}
        <div
          onClick={() => handleHotspot("Bioma: Heteractis Magnifica com Simbiose Luminescente")}
          className="absolute top-[55%] right-[6%] w-[24%] h-[10%] cursor-pointer rounded-full hover:bg-[#e61c78]/15 transition-colors"
          title="Anêmona do Mar Luminescente"
        />

        {/* 4. "ЛОКАЦИИ" SECTION HOTSPOTS */}
        {/* Title "ЛОКАЦИИ" */}
        <div
          onClick={() => handleHotspot("Expedições: Mar Vermelho, Mar Negro, Lagos & Maldivas")}
          className="absolute top-[67%] left-[8%] w-[40%] h-[4%] cursor-pointer hover:bg-white/5 rounded-xl transition-colors"
          title="Locais de Mergulho"
        />

        {/* Waypoint 1: Red Sea */}
        <div
          onClick={() => onOpenBooking("Expedição: Recifes de Coral do Mar Vermelho")}
          className="absolute top-[75%] left-[8%] w-[40%] h-[2.5%] cursor-pointer hover:bg-[#00f5d4]/15 rounded-lg transition-colors px-1"
          title="Reservar Expedição no Mar Vermelho"
        />

        {/* Waypoint 2: Black Sea Wrecks */}
        <div
          onClick={() => onOpenBooking("Expedição: Naufrágios do Mar Negro")}
          className="absolute top-[77.8%] left-[8%] w-[40%] h-[2.5%] cursor-pointer hover:bg-[#3a86ff]/15 rounded-lg transition-colors px-1"
          title="Reservar Expedição nos Naufrágios"
        />

        {/* Waypoint 3: Lakes */}
        <div
          onClick={() => onOpenBooking("Expedição: Lagos e Pedreiras Cristalinas")}
          className="absolute top-[80.4%] left-[8%] w-[40%] h-[2.5%] cursor-pointer hover:bg-[#ffd166]/15 rounded-lg transition-colors px-1"
          title="Reservar Expedição nos Lagos"
        />

        {/* Waypoint 4: Exotic Tropics */}
        <div
          onClick={() => onOpenBooking("Expedição: Maldivas, Indonésia & Tailândia")}
          className="absolute top-[83%] left-[8%] w-[42%] h-[3.2%] cursor-pointer hover:bg-[#e61c78]/15 rounded-lg transition-colors px-1"
          title="Reservar Expedição Tropical"
        />

        {/* School of Swimming Glowing Fish (Right) */}
        <div
          onClick={() => {
            oceanAudio.playSonarPing();
            handleHotspot("Cardume de Anthias & Donzelas Tropicais em Migração");
          }}
          className="absolute top-[71%] right-[6%] w-[42%] h-[18%] cursor-pointer rounded-3xl hover:bg-[#00f5d4]/10 transition-all border border-transparent hover:border-[#00f5d4]/30"
          title="Cardume Bioluminescente"
        />

        {/* 5. BOTTOM CORAL REEF SEABED */}
        <div
          onClick={() => handleHotspot("Santuário de Corais Preservado • Diretriz Zero Touch")}
          className="absolute bottom-0 left-0 right-0 h-[16%] cursor-pointer hover:bg-[#00f5d4]/5 transition-colors"
          title="Jardim de Corais Abissal"
        />
      </div>
    </div>
  );
};
