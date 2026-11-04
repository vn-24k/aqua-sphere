import React from "react";
import { GraduationCap, Award, Compass, Sparkles, Check, Clock, Users } from "lucide-react";
import { oceanAudio } from "../utils/ocean-audio";
import {
  UivNightDiveCheckbox,
  UivDiverCertInput,
  UivSeahorseNavPill,
  UivBubbleAscentLoader,
} from "./uiverse-collection";

interface CoursesSectionProps {
  onSelectCourse: (courseName: string) => void;
}

const COURSES = [
  {
    level: "NÍVEL 01 • INICIAÇÃO",
    title: "Mergulho de Batismo & Open Water",
    ruTitle: "Начальный курс дайвинга",
    hours: "32 Horas (Teoria + 6 Imersões)",
    maxDepth: "18 Metros",
    desc: "A porta de entrada para o oceano. Domine controle de flutuabilidade, montagem de reguladores, respiração subaquática e sinais de segurança com acompanhamento 1:1 de instrutor sênior.",
    features: [
      "Certificação Internacional PADI / SSI vitalícia",
      "Equipamento completo de neoprene e cilindros incluso",
      "Sessões em águas confinadas e oceano aberto",
      "Manual digital interativo e registro de logbook",
    ],
    price: "R$ 1.950",
  },
  {
    level: "NÍVEL 02 • AVANÇADO",
    title: "Advanced & Deep Diver (40m)",
    ruTitle: "Глубоководный курс (40м)",
    hours: "40 Horas (8 Imersões Técnicas)",
    maxDepth: "40 Metros",
    desc: "Para mergulhadores certificados que buscam dominar navegação por bússola, gerenciamento de consumo de gás em profundidade, descompressão de segurança e exploração noturna.",
    features: [
      "Especialidade em Naufrágios e Fendas Submersas",
      "Protocolos de Mergulho Noturno Bioluminescente",
      "Uso de computadores de mergulho de múltiplos gases",
      "Treinamento de flutuabilidade milimétrica",
    ],
    price: "R$ 2.680",
    popular: true,
  },
  {
    level: "NÍVEL 03 • TÉCNICO ELITE",
    title: "Normoxic Trimix & Rebreather CCR",
    ruTitle: "Технический тримикс и ребризер",
    hours: "60 Horas (Simulador + 10 Imersões)",
    maxDepth: "75 - 100 Metros",
    desc: "O pináculo da exploração submarina. Mergulhe em circuitos fechados com rebreather sem fazer bolhas, respirando misturas de Hélio para total clareza mental e silêncio absoluto no abismo.",
    features: [
      "Análise laboratorial de misturas Trimix (O2/He/N2)",
      "Troca de cilindros de stage sob descompressão",
      "Zero perturbação da vida marinha (Rebreather silencioso)",
      "Expedições arqueológicas e científicas exclusivas",
    ],
    price: "R$ 5.800",
  },
];

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onSelectCourse }) => {
  return (
    <section id="cursos" className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs sm:text-sm font-mono tracking-widest text-[#00f5d4] uppercase mb-2">
          AQUA SPHERE ACADEMY
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight mb-4">
          КУРСЫ И СЕРТИФИКАЦИЯ
        </h2>
        <p className="text-sm sm:text-base text-neutral-300 font-light max-w-2xl leading-relaxed">
          Formação técnica de elite reconhecida mundialmente pela PADI, SSI e TDI. Do primeiro fôlego às expedições abissais mais exigentes.
        </p>

        {/* Uiverse Ascent Loader */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-[10px] font-mono text-neutral-400">FLUXO DE PRESSÃO O2:</span>
          <div onMouseEnter={() => oceanAudio.playBubblePop()}>
            <UivBubbleAscentLoader />
          </div>
        </div>
      </div>

      {/* Courses Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {COURSES.map((course, idx) => (
          <div
            key={idx}
            onMouseEnter={() => oceanAudio.playBubblePop()}
            className={`relative rounded-3xl p-7 flex flex-col justify-between border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 ${
              course.popular
                ? "bg-[#04152e]/85 border-[#00f5d4] shadow-[0_0_35px_rgba(0,245,212,0.2)]"
                : "bg-[#020b18]/70 border-white/10 hover:border-white/25"
            }`}
          >
            {course.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#00f5d4] to-[#3a86ff] text-[#020915] text-[10px] font-mono font-bold uppercase tracking-wider shadow-lg">
                Recomendado para Iniciados
              </div>
            )}

            <div>
              <span className="text-[10px] font-mono text-[#00f5d4] tracking-wider uppercase block mb-1">
                {course.level}
              </span>
              <h3 className="text-2xl font-display font-bold text-white mb-1">
                {course.title}
              </h3>
              <div className="text-xs font-mono text-neutral-400 italic mb-4">
                {course.ruTitle}
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-neutral-300 pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#00f5d4]" />
                  <span>{course.hours}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-[#e61c78]" />
                  <span>Profundidade: {course.maxDepth}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-6">
                {course.desc}
              </p>

              <div className="space-y-2.5 mb-8">
                {course.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-[#00f5d4] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase block">Investimento</span>
                <span className="text-xl font-display font-bold text-white">{course.price}</span>
              </div>
              <button
                onClick={() => {
                  oceanAudio.playBubblePop();
                  onSelectCourse(course.title);
                }}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-[#00f5d4] hover:text-[#020915] text-xs font-mono font-semibold transition-all duration-200 border border-white/15"
              >
                Reservar Vaga
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Safety & Nitrox Protocol Bar */}
      <div className="p-6 rounded-2xl bg-[#030e1d]/80 border border-white/15 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00f5d4]/10 border border-[#00f5d4]/30 flex items-center justify-center text-[#00f5d4]">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Certificação Válida em 180+ Países</h4>
            <p className="text-xs text-neutral-400">Emissão imediata de credencial digital no App oficial PADI / TDI.</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div onMouseEnter={() => oceanAudio.playBubblePop()}>
            <UivNightDiveCheckbox />
          </div>
          <span className="text-xs font-mono text-neutral-300">Incluir Módulo de Mergulho Noturno</span>
        </div>

        <div onMouseEnter={() => oceanAudio.playBubblePop()}>
          <UivSeahorseNavPill />
        </div>
      </div>
    </section>
  );
};
