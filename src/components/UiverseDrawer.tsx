import React, { useState } from "react";
import { ChevronUp, ChevronDown, Sparkles, Layers, ShieldCheck, Compass } from "lucide-react";
import { oceanAudio } from "../utils/ocean-audio";
import {
  UivAquaLiquidBtn,
  UivCyanGlowBtn,
  UivAbyssalGlassBtn,
  UivSeahorseNavPill,
  UivBiolumBeamBtn,
  UivExpeditionCtaBtn,
  UivSonarAudioToggle,
  UivBubblePhysicsSwitch,
  UivDiveTorchSwitch,
  UivDepthUnitsSwitch,
  UivBiolumMarineCard,
  UivNeonReefCard,
  UivAbyssalDepthCard,
  UivExpeditionRouteCard,
  UivAquaSearchInput,
  UivDiverNameInput,
  UivDiverEmailInput,
  UivDiverCertInput,
  UivOxygenPulseLoader,
  UivBubbleAscentLoader,
  UivCoralTooltip,
  UivNitroxGearCheckbox,
  UivNightDiveCheckbox,
} from "./uiverse-collection";

interface UiverseDrawerProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const UiverseDrawer: React.FC<UiverseDrawerProps> = ({ isOpen, onToggle }) => {
  return (
    <aside aria-label="Painel de Módulos Uiverse" className="fixed bottom-0 left-0 right-0 z-40 flex flex-col items-center pointer-events-none">
      {/* Floating Toggle Pill */}
      <button
        onClick={() => {
          oceanAudio.playBubblePop();
          onToggle();
        }}
        className="pointer-events-auto mb-3 px-5 py-2 rounded-full bg-[#030e1d]/90 hover:bg-[#061833] border border-[#00f5d4]/40 text-[#00f5d4] hover:text-white text-xs font-mono font-medium shadow-[0_0_25px_rgba(0,245,212,0.25)] backdrop-blur-xl flex items-center gap-2.5 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <Layers className="w-3.5 h-3.5 text-[#00f5d4] animate-pulse" />
        <span>23 COMPONENTES UIVERSE GALAXY HOMOLOGADOS</span>
        {isOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
      </button>

      {/* Expandable Drawer Tray */}
      {isOpen && (
        <div className="pointer-events-auto w-full max-w-6xl max-h-[75vh] overflow-y-auto bg-[#020a16]/98 border-t border-[#00f5d4]/30 rounded-t-3xl p-6 sm:p-8 shadow-[0_-20px_60px_rgba(0,0,0,0.95)] backdrop-blur-2xl animate-in slide-in-from-bottom duration-300">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#00f5d4]/10 border border-[#00f5d4]/30 flex items-center justify-center text-[#00f5d4]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-white">
                  Arsenal de Engenharia Subaquática (23 Módulos Uiverse)
                </h3>
                <p className="text-xs font-mono text-neutral-400">
                  Cota obrigatória integrada com isolamento estrito de CSS (Zero conflitos de layout)
                </p>
              </div>
            </div>

            <button
              onClick={onToggle}
              className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-neutral-300"
            >
              Fechar Painel &times;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Category: Buttons */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#00f5d4]">
                1. Botões & Controles Táteis
              </span>
              <div className="space-y-4 flex flex-col items-center">
                <div onMouseEnter={() => oceanAudio.playBubblePop()} title="BurgiSimon_wonderful-seahorse-35">
                  <UivAquaLiquidBtn />
                </div>
                <div onMouseEnter={() => oceanAudio.playBubblePop()} title="0x3ther_heavy-dragon-56">
                  <UivCyanGlowBtn />
                </div>
                <div onMouseEnter={() => oceanAudio.playBubblePop()} title="Dashrath-Sharma_chatty-tiger-70">
                  <UivAbyssalGlassBtn />
                </div>
                <div onMouseEnter={() => oceanAudio.playBubblePop()} title="Bodyhc_sharp-seahorse-46">
                  <UivSeahorseNavPill />
                </div>
                <div onMouseEnter={() => oceanAudio.playBubblePop()} title="John-CFO_green-rabbit-93">
                  <UivBiolumBeamBtn />
                </div>
                <div onMouseEnter={() => oceanAudio.playBubblePop()} title="EmmaxPlay_rude-yak-98">
                  <UivExpeditionCtaBtn />
                </div>
              </div>
            </div>

            {/* Category: Switches & Loaders */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#3a86ff]">
                2. Switches, Toggles & Loaders
              </span>
              <div className="space-y-5 flex flex-col items-center">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-neutral-300 font-mono">Sonar Ambience:</span>
                  <UivSonarAudioToggle />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-neutral-300 font-mono">Física de Bolha:</span>
                  <UivBubblePhysicsSwitch />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-neutral-300 font-mono">Lanterna Canhão:</span>
                  <UivDiveTorchSwitch />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-neutral-300 font-mono">Unidades M/FT:</span>
                  <UivDepthUnitsSwitch />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-neutral-300 font-mono">Pulso de O2:</span>
                  <UivOxygenPulseLoader />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-neutral-300 font-mono">Subida de Bolhas:</span>
                  <UivBubbleAscentLoader />
                </div>
              </div>
            </div>

            {/* Category: Inputs & Checkboxes & Cards */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#e61c78]">
                3. Inputs, Checkboxes & Cards
              </span>
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] text-neutral-400 font-mono block mb-1">Busca de Zona:</span>
                  <UivAquaSearchInput />
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 font-mono block mb-1">Nome do Mergulhador:</span>
                  <UivDiverNameInput />
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 font-mono block mb-1">E-mail:</span>
                  <UivDiverEmailInput />
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 font-mono block mb-1">Nível de Certificação:</span>
                  <UivDiverCertInput />
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-neutral-300 font-mono">Protocolo Nitrox:</span>
                  <UivNitroxGearCheckbox />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-300 font-mono">Mergulho Noturno:</span>
                  <UivNightDiveCheckbox />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-300 font-mono">Tooltip de Biosfera:</span>
                  <UivCoralTooltip />
                </div>
              </div>
            </div>
          </div>

          {/* Cards Showcase Row */}
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6">
            <UivBiolumMarineCard />
            <UivNeonReefCard />
            <UivAbyssalDepthCard />
            <UivExpeditionRouteCard />
          </div>
        </div>
      )}
    </aside>
  );
};
