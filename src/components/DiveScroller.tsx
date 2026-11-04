import React, { useEffect, useState } from "react";
import { Compass, Waves, Gauge, Thermometer, ShieldAlert } from "lucide-react";
import { oceanAudio } from "../utils/ocean-audio";

interface DiveScrollerProps {
  depthUnit: "meters" | "feet";
}

export const DiveTelemetryHud: React.FC<DiveScrollerProps> = ({ depthUnit }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

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

  // Depth calculation: 0m to 140m (Technical Trimix depth)
  const depthMeters = Math.round(scrollProgress * 140);
  const depthValue = depthUnit === "meters" ? depthMeters : Math.round(depthMeters * 3.28084);
  const unitLabel = depthUnit === "meters" ? "M" : "FT";

  // Temperature drops from 27°C at surface to 4°C at 140m
  const tempCelsius = (27.4 - scrollProgress * 23.2).toFixed(1);

  // Pressure: 1 atm at surface + 1 atm per 10m
  const pressureBar = (1.0 + depthMeters / 10).toFixed(1);

  // Current Oceanic Zone Name
  const getZone = (depth: number) => {
    if (depth < 20) return "ZONA EPILÉGICA (LUZ SOLAR)";
    if (depth < 60) return "ZONA MESOPELÁGICA (CREPÚSCULO)";
    if (depth < 100) return "ZONA BATIAL SUPERIOR";
    return "ZONA ABISSAL PROFUNDA";
  };

  return (
    <aside aria-label="Telemetria de Mergulho" className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-3 pointer-events-auto">
      {/* HUD Container */}
      <div 
        onMouseEnter={() => oceanAudio.playBubblePop()}
        className="backdrop-blur-xl bg-[#030e1d]/85 border border-[#00f5d4]/25 p-4 rounded-2xl shadow-[0_0_35px_rgba(0,245,212,0.12)] flex flex-col gap-3.5 w-52 transition-all duration-300 hover:border-[#00f5d4]/50"
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <div className="flex items-center gap-1.5 text-xs text-[#00f5d4] font-mono tracking-wider">
            <Gauge className="w-3.5 h-3.5 animate-pulse text-[#00f5d4]" />
            <span>TELEMETRIA HUD</span>
          </div>
          <span className="w-2 h-2 rounded-full bg-[#00f5d4] shadow-[0_0_8px_#00f5d4]" />
        </div>

        {/* Depth Reading */}
        <div className="flex flex-col">
          <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-mono">Profundidade</span>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-display font-bold text-white tracking-tight">
              {depthValue}
            </span>
            <span className="text-xs font-mono font-semibold text-[#00f5d4]">{unitLabel}</span>
          </div>
          {/* Depth progress bar */}
          <div className="w-full bg-white/10 h-1.5 rounded-full mt-1.5 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#00f5d4] via-[#3a86ff] to-[#e61c78] transition-all duration-150"
              style={{ width: `${Math.max(scrollProgress * 100, 4)}%` }}
            />
          </div>
        </div>

        {/* Ocean Zone */}
        <div className="flex flex-col">
          <span className="text-[9px] text-neutral-400 uppercase tracking-wider font-mono">Camada Oceânica</span>
          <span className="text-[11px] font-semibold text-[#e2f1fc] font-sans tracking-wide">
            {getZone(depthMeters)}
          </span>
        </div>

        {/* Atmosphere & Temp */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
          <div className="flex flex-col">
            <div className="flex items-center gap-1 text-[9px] text-neutral-400 font-mono">
              <Compass className="w-3 h-3 text-[#3a86ff]" />
              <span>PRESSÃO</span>
            </div>
            <span className="text-xs font-mono font-bold text-white">{pressureBar} BAR</span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1 text-[9px] text-neutral-400 font-mono">
              <Thermometer className="w-3 h-3 text-[#f59e0b]" />
              <span>TEMP.</span>
            </div>
            <span className="text-xs font-mono font-bold text-white">{tempCelsius} °C</span>
          </div>
        </div>

        {/* Deco status */}
        <div className="flex items-center justify-between text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-1 rounded-md border border-emerald-500/30">
          <span className="flex items-center gap-1">
            <Waves className="w-3 h-3" />
            NDL (TEMPO SEGURO)
          </span>
          <span className="font-bold">∞ MIN</span>
        </div>
      </div>
    </aside>
  );
};
