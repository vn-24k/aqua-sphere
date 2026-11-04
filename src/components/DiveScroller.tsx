import React, { useEffect, useState } from "react";
import { Compass, Waves, Gauge, Thermometer, ChevronRight, ChevronLeft } from "lucide-react";
import { oceanAudio } from "../utils/ocean-audio";

interface DiveScrollerProps {
  depthUnit: "meters" | "feet";
}

export const DiveTelemetryHud: React.FC<DiveScrollerProps> = ({ depthUnit }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      const pct = total > 0 ? Math.min(Math.max(current / total, 0), 1) : 0;
      setScrollProgress(pct);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const depthMeters = Math.round(scrollProgress * 140);
  const depthValue = depthUnit === "meters" ? depthMeters : Math.round(depthMeters * 3.28084);
  const unitLabel = depthUnit === "meters" ? "M" : "FT";
  const tempCelsius = (27.4 - scrollProgress * 23.2).toFixed(1);
  const pressureBar = (1.0 + depthMeters / 10).toFixed(1);

  const getZone = (depth: number) => {
    if (depth < 20) return "EPIPELÁGICA";
    if (depth < 60) return "MESOPELÁGICA";
    if (depth < 100) return "BATIAL";
    return "ABISSAL";
  };

  return (
    <aside aria-label="Telemetria de Mergulho" className="fixed right-4 bottom-24 z-40 hidden lg:flex flex-col items-end pointer-events-auto">
      {isCollapsed ? (
        <button
          onClick={() => {
            oceanAudio.playBubblePop();
            setIsCollapsed(false);
          }}
          className="p-2.5 rounded-full bg-[#030e1d]/90 border border-[#00f5d4]/40 text-[#00f5d4] hover:text-white shadow-lg backdrop-blur-md flex items-center gap-1.5 text-xs font-mono"
          title="Expandir Telemetria HUD"
        >
          <Gauge className="w-4 h-4 animate-pulse" />
          <span>{depthValue}{unitLabel}</span>
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>
      ) : (
        <div 
          onMouseEnter={() => oceanAudio.playBubblePop()}
          className="backdrop-blur-xl bg-[#030e1d]/95 border border-[#00f5d4]/30 p-3.5 rounded-2xl shadow-[0_0_35px_rgba(0,245,212,0.15)] flex flex-col gap-2.5 w-44 transition-all duration-300 hover:border-[#00f5d4]/60"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
            <div className="flex items-center gap-1 text-[11px] text-[#00f5d4] font-mono tracking-wider">
              <Gauge className="w-3.5 h-3.5 animate-pulse text-[#00f5d4]" />
              <span>HUD PROFUNDIDADE</span>
            </div>
            <button
              onClick={() => setIsCollapsed(true)}
              className="text-neutral-400 hover:text-white text-xs"
              title="Recolher HUD"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-display font-bold text-white tracking-tight">
              {depthValue} <span className="text-xs font-mono text-[#00f5d4]">{unitLabel}</span>
            </span>
            <span className="text-[10px] font-mono text-neutral-400 uppercase">{getZone(depthMeters)}</span>
          </div>

          <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#00f5d4] via-[#3a86ff] to-[#e61c78]"
              style={{ width: `${Math.max(scrollProgress * 100, 5)}%` }}
            />
          </div>

          <div className="grid grid-cols-2 gap-2 text-[10px] font-mono pt-1 border-t border-white/10">
            <div>
              <span className="text-neutral-400 block">PRESSÃO:</span>
              <strong className="text-white">{pressureBar} BAR</strong>
            </div>
            <div>
              <span className="text-neutral-400 block">TEMP:</span>
              <strong className="text-white">{tempCelsius} °C</strong>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};
