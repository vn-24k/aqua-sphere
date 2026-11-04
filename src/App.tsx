import React, { useState } from "react";
import { MasterArtCanvas } from "./components/MasterArtCanvas";
import { UiverseDrawer } from "./components/UiverseDrawer";
import { DiveTelemetryHud } from "./components/DiveScroller";
import { BookingModal } from "./components/BookingModal";
import { CoursesModal } from "./components/CoursesModal";
import { ContactModal } from "./components/ContactModal";
import { oceanAudio } from "./utils/ocean-audio";
import { Volume2, VolumeX, Compass, Github, ExternalLink, Layers, ShieldCheck } from "lucide-react";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingTopic, setBookingTopic] = useState("Mergulho de Batismo & Open Water");
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [depthUnit, setDepthUnit] = useState<"meters" | "feet">("meters");
  const [isAudioOn, setIsAudioOn] = useState(false);

  const handleOpenBooking = (topic?: string) => {
    if (topic) setBookingTopic(topic);
    setIsBookingOpen(true);
  };

  const handleToggleAudio = () => {
    const newState = oceanAudio.toggle();
    setIsAudioOn(newState);
  };

  const handleToggleDepthUnit = () => {
    oceanAudio.playBubblePop();
    setDepthUnit((prev) => (prev === "meters" ? "feet" : "meters"));
  };

  return (
    <div className="relative min-h-screen bg-[#020915] text-[#e2f1fc] selection:bg-[#00f5d4]/30 selection:text-white font-sans antialiased overflow-x-hidden flex flex-col justify-between py-4 sm:py-6 px-3 sm:px-6">
      {/* Background Soft Atmospheric Abyss */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-20 filter blur-3xl scale-110"
          style={{
            background: "radial-gradient(circle at 50% 20%, #0d3b66 0%, #031429 50%, #020915 90%)",
          }}
        />
      </div>

      {/* Top Floating Control Bar */}
      <header className="relative z-30 w-full max-w-[736px] mx-auto mb-4 flex items-center justify-between text-xs font-mono px-2 py-2 rounded-2xl bg-[#030e1d]/80 border border-white/10 backdrop-blur-md shadow-lg">
        <div className="flex items-center gap-2 text-white">
          <span className="w-2 h-2 rounded-full bg-[#00f5d4] shadow-[0_0_8px_#00f5d4]" />
          <span className="font-bold tracking-wider">AQUA SPHERE</span>
          <span className="text-neutral-500 hidden sm:inline">&bull;</span>
          <span className="text-neutral-400 hidden sm:inline">1:1 MATRIZ HOMOLOGADA</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Sonar Audio Button */}
          <button
            onClick={handleToggleAudio}
            className={`px-2.5 py-1 rounded-full border flex items-center gap-1.5 transition-all ${
              isAudioOn
                ? "bg-[#00f5d4]/20 border-[#00f5d4] text-[#00f5d4]"
                : "bg-white/5 border-white/10 text-neutral-400 hover:text-white"
            }`}
            title="Sonar Hidrofônico Procedural (Web Audio API)"
          >
            {isAudioOn ? <Volume2 className="w-3.5 h-3.5 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="text-[10px] hidden sm:inline">{isAudioOn ? "SONAR ATIVO" : "SONAR MUTADO"}</span>
          </button>

          {/* Unit Toggle */}
          <button
            onClick={handleToggleDepthUnit}
            className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-neutral-300 hover:text-white flex items-center gap-1"
            title="Alternar Metros / Pés"
          >
            <Compass className="w-3 h-3 text-[#00f5d4]" />
            <span>{depthUnit === "meters" ? "M" : "FT"}</span>
          </button>

          {/* 23 Uiverse Drawer Button */}
          <button
            onClick={() => {
              oceanAudio.playBubblePop();
              setIsDrawerOpen(!isDrawerOpen);
            }}
            className="px-2.5 py-1 rounded-full bg-[#00f5d4]/15 border border-[#00f5d4]/50 text-[10px] text-[#00f5d4] hover:bg-[#00f5d4]/25 transition-all font-bold flex items-center gap-1"
          >
            <Layers className="w-3 h-3" />
            <span>23 UIVERSE</span>
          </button>
        </div>
      </header>

      {/* Main Centerpiece: Master 1:1 Artwork Canvas */}
      <main className="relative z-10 w-full flex-1 flex flex-col items-center justify-center">
        <MasterArtCanvas
          onOpenBooking={handleOpenBooking}
          onOpenCourses={() => setIsCoursesOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
          isAudioOn={isAudioOn}
          onToggleAudio={handleToggleAudio}
        />
      </main>

      {/* Dive Telemetry HUD (Scroll Gauge) */}
      <DiveTelemetryHud depthUnit={depthUnit} />

      {/* Subsystems Drawer: 23 Uiverse Components */}
      <UiverseDrawer isOpen={isDrawerOpen} onToggle={() => setIsDrawerOpen(!isDrawerOpen)} />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialTopic={bookingTopic}
      />

      <CoursesModal
        isOpen={isCoursesOpen}
        onClose={() => setIsCoursesOpen(false)}
        onSelectCourse={(course) => handleOpenBooking(`Curso: ${course}`)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Minimal Footer */}
      <footer className="relative z-20 w-full max-w-[736px] mx-auto mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-400 gap-3">
        <div className="flex items-center gap-2 text-neutral-300">
          <span className="font-bold text-white">AQUA SPHERE</span>
          <span className="text-neutral-600">&bull;</span>
          <span>Desde 2012 • VHF Ch-16</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-[#00f5d4]">
            <ShieldCheck size={12} />
            <span>23 MÓDULOS UIVERSE ATIVOS</span>
          </div>
          <a
            href="https://github.com/vn-24k/aqua-sphere"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <Github size={12} />
            <span>GitHub</span>
          </a>
          <a
            href="https://aqua-sphere-red.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-[#00f5d4] transition-colors"
          >
            <ExternalLink size={12} />
            <span>Vercel Live</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
