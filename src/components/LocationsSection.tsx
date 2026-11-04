import React, { useState } from "react";
import { MapPin, Navigation, Eye, Thermometer, ChevronRight } from "lucide-react";
import { oceanAudio } from "../utils/ocean-audio";

interface LocationsSectionProps {
  onSelectExpedition: (locationName: string) => void;
}

const LOCATIONS = [
  {
    id: "red-sea",
    ruTitle: "Коралловые рифы Красного моря",
    title: "Recifes de Coral do Mar Vermelho",
    region: "Ras Mohammed & Estreito de Tiran, Egito",
    depth: "18m - 42m",
    visibility: "40 metros (Cristalina)",
    temp: "26°C - 29°C",
    type: "Recifes Vivos & Paredões Abissais",
    badge: "Bioluminescência Noturna",
    color: "#00f5d4",
  },
  {
    id: "black-sea-wrecks",
    ruTitle: "Затонувшие корабли Черного моря",
    title: "Naufrágios Históricos do Mar Negro",
    region: "Crimeia & Península de Taman",
    depth: "28m - 75m",
    visibility: "15 - 25 metros",
    temp: "9°C - 14°C (Camada Fria)",
    type: "Arqueologia Subaquática & Wrecks",
    badge: "Técnico Avançado Trimix",
    color: "#3a86ff",
  },
  {
    id: "cenotes-lakes",
    ruTitle: "Озера и карьеры",
    title: "Lagos Cristalinos & Cavernas Submersas",
    region: "Pedreiras Profundas & Mananciais Geológicos",
    depth: "12m - 55m",
    visibility: "30+ metros",
    temp: "6°C - 12°C",
    type: "Mergulho em Caverna & Flutuabilidade Fina",
    badge: "Zero Correnteza",
    color: "#ffd166",
  },
  {
    id: "exotic-tropics",
    ruTitle: "Экзотические локации (Таиланд, Индонезия, Мальдивы)",
    title: "Rotas Tropicais: Raja Ampat & Maldivas",
    region: "Triângulo dos Corais & Atóis Oceânicos",
    depth: "10m - 60m",
    visibility: "35 - 50 metros",
    temp: "28°C - 30°C",
    type: "Mantas Gigantes, Tubarões-Baleia & Corais",
    badge: "Expedição Safari Liveaboard",
    color: "#e61c78",
  },
];

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onSelectExpedition }) => {
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0]);

  return (
    <section id="locais" className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Background ambient gradient */}
      <div 
        className="absolute left-1/3 top-1/4 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-20"
        style={{ background: "#3a86ff" }}
      />

      {/* Top Header */}
      <div className="flex flex-col items-start mb-14">
        <span className="text-xs sm:text-sm font-mono tracking-widest text-[#00f5d4] uppercase mb-2">
          AQUA SPHERE
        </span>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tight mb-4">
          ЛОКАЦИИ
        </h2>
        <p className="text-sm sm:text-base text-neutral-300 font-light max-w-2xl leading-relaxed">
          Мы организуем погружения в самых живописных местах: коралловые рифы, исторические корабли и заповедные глубины.
        </p>
      </div>

      {/* Main Grid: Destinations List + School of Fish Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
        {/* Left Column: List of Waypoints */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          {LOCATIONS.map((loc) => {
            const isSelected = selectedLocation.id === loc.id;
            return (
              <div
                key={loc.id}
                onClick={() => {
                  oceanAudio.playBubblePop();
                  setSelectedLocation(loc);
                }}
                onMouseEnter={() => oceanAudio.playBubblePop()}
                className={`group cursor-pointer p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden backdrop-blur-md ${
                  isSelected
                    ? "bg-[#04142b]/90 border-[#00f5d4] shadow-[0_0_30px_rgba(0,245,212,0.18)]"
                    : "bg-[#020b18]/60 border-white/10 hover:border-white/30 hover:bg-[#031024]/70"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {/* Russian title from reference */}
                    <div className="text-[11px] font-mono text-[#00f5d4] uppercase tracking-wider mb-1">
                      {loc.ruTitle}
                    </div>
                    {/* Main Title */}
                    <h3 className="text-lg sm:text-xl font-display font-semibold text-white group-hover:text-[#00f5d4] transition-colors">
                      {loc.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#e61c78]" />
                      <span>{loc.region}</span>
                    </div>
                  </div>

                  <span 
                    className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase font-semibold border"
                    style={{
                      borderColor: `${loc.color}40`,
                      color: loc.color,
                      backgroundColor: `${loc.color}15`,
                    }}
                  >
                    {loc.badge}
                  </span>
                </div>

                {isSelected && (
                  <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-white/5 p-2 rounded-lg">
                      <span className="text-[9px] font-mono text-neutral-400 block uppercase">Fundo</span>
                      <strong className="text-white font-mono">{loc.depth}</strong>
                    </div>
                    <div className="bg-white/5 p-2 rounded-lg">
                      <span className="text-[9px] font-mono text-neutral-400 block uppercase">Visibilidade</span>
                      <strong className="text-[#00f5d4] font-mono">{loc.visibility}</strong>
                    </div>
                    <div className="bg-white/5 p-2 rounded-lg">
                      <span className="text-[9px] font-mono text-neutral-400 block uppercase">Temperatura</span>
                      <strong className="text-[#f59e0b] font-mono">{loc.temp}</strong>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column: Visual School of Glowing Fish from Reference */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#020b18]/80 backdrop-blur-xl p-4 shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
            {/* School of Fish Image */}
            <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden">
              <img
                src="/assets/school-fish.jpg"
                alt="Cardume de Peixes Bioluminescentes - Aqua Sphere"
                className="w-full h-full object-cover object-center filter brightness-110 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020915] via-transparent to-transparent opacity-70" />
              
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-[#020915]/80 backdrop-blur-md border border-[#00f5d4]/30 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00f5d4] animate-ping" />
                <span className="text-xs font-mono text-white">CARDUME EM MIGRAÇÃO</span>
              </div>
            </div>

            {/* Selected Waypoint Expedition Dossier */}
            <div className="p-5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                    Ponto de Imersão Selecionado
                  </span>
                  <h4 className="text-xl font-display font-bold text-white mt-0.5">
                    {selectedLocation.title}
                  </h4>
                </div>
                <button
                  onClick={() => {
                    oceanAudio.playBubblePop();
                    onSelectExpedition(selectedLocation.title);
                  }}
                  className="px-5 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-[#020915] bg-[#00f5d4] hover:bg-[#70e000] transition-colors shadow-lg"
                >
                  Agendar Rota
                </button>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                {selectedLocation.type}. Todas as operações de descida contam com embarcação de apoio dedicada, oxigênio medicinal a 100%, analisadores digitais de hélio e guias de mergulho certificados.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Coral Reef Seabed Garden (1:1 with reference bottom section) */}
      <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <img
          src="/assets/coral-floor.jpg"
          alt="Jardim de Corais Abissal - Aqua Sphere"
          className="w-full h-56 sm:h-72 object-cover object-bottom filter brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020915] via-[#020915]/40 to-transparent flex flex-col items-center justify-end p-8 text-center">
          <span className="text-xs font-mono tracking-widest text-[#00f5d4] uppercase mb-1">
            SANTUÁRIO PROTEGIDO
          </span>
          <h4 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Compromisso com a Preservação dos Oceanos
          </h4>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mt-2 font-light">
            100% dos nossos mergulhos seguem a diretriz internacional "Zero Touch" da Project AWARE, protegendo corais ancestrais e vida marinha sensível.
          </p>
        </div>
      </div>
    </section>
  );
};
