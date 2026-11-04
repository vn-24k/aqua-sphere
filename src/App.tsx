import React, { useState } from "react";
import { WaterCausticsCanvas } from "./components/WaterCausticsCanvas";
import { FishFlockCanvas } from "./components/FishFlockCanvas";
import { DiveTelemetryHud } from "./components/DiveScroller";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ClubSection } from "./components/ClubSection";
import { LocationsSection } from "./components/LocationsSection";
import { CoursesSection } from "./components/CoursesSection";
import { Footer } from "./components/Footer";
import { BookingModal } from "./components/BookingModal";
import { UiverseDrawer } from "./components/UiverseDrawer";
import { oceanAudio } from "./utils/ocean-audio";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("Recifes de Coral do Mar Vermelho");
  const [depthUnit, setDepthUnit] = useState<"meters" | "feet">("meters");
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenBooking = (topicName?: string) => {
    if (topicName) setSelectedTopic(topicName);
    setIsBookingOpen(true);
  };

  const handleToggleAudio = () => {
    const newState = oceanAudio.toggle();
    setIsAudioOn(newState);
  };

  const handleToggleDepthUnit = () => {
    setDepthUnit((prev) => (prev === "meters" ? "feet" : "meters"));
  };

  return (
    <div className="relative min-h-screen bg-[#020915] text-[#e2f1fc] selection:bg-[#00f5d4]/30 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* 1. Procedural Living Water Caustics & Sunbeams Canvas */}
      <WaterCausticsCanvas />

      {/* 2. Interactive Bioluminescent Fish Swarm Canvas (from Arsenal Image-Flock) */}
      <FishFlockCanvas />

      {/* 3. Dive Telemetry HUD (from Arsenal Dive-in-effect) */}
      <DiveTelemetryHud depthUnit={depthUnit} />

      {/* 4. Top Glass Navbar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking("Mergulho de Batismo & Open Water")}
        depthUnit={depthUnit}
        onToggleDepthUnit={handleToggleDepthUnit}
        isAudioOn={isAudioOn}
        onToggleAudio={handleToggleAudio}
        onToggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)}
        isDrawerOpen={isDrawerOpen}
      />

      {/* 5. Main Content Flow with Full-Width Rich Sections */}
      <main className="relative z-10 flex flex-col">
        {/* Hero with Diver Silhouette and Monumental Typography */}
        <HeroSection onOpenBooking={() => handleOpenBooking("Imersão de Batismo Discovery")} />

        {/* Section 2: О КЛУБЕ (1:1 with Reference: Winged Fish & Club Heritage) */}
        <ClubSection />

        {/* Section 3: ЛОКАЦИИ (1:1 with Reference: Immersion Destinations & School of Fish) */}
        <LocationsSection onSelectExpedition={(name) => handleOpenBooking(`Expedição: ${name}`)} />

        {/* Section 4: КУРСЫ (PADI/SSI Training Levels & Certifications) */}
        <CoursesSection onSelectCourse={(course) => handleOpenBooking(`Curso: ${course}`)} />
      </main>

      {/* 6. Footer (Bases, Radio VHF, Certifications, 100% Human Studio Authorship) */}
      <Footer />

      {/* 7. Interactive Expedition Booking Modal with Confetti Celebration */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialTopic={selectedTopic}
      />

      {/* 8. Subsystems Drawer with 23 Scoped Uiverse Components */}
      <UiverseDrawer
        isOpen={isDrawerOpen}
        onToggle={() => setIsDrawerOpen(!isDrawerOpen)}
      />
    </div>
  );
}
