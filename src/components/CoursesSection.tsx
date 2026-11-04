import React from "react";
import { GraduationCap, Award, Compass, Check, Clock } from "lucide-react";
import { oceanAudio } from "../utils/ocean-audio";

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
    desc: "A porta de entrada oficial para o oceano. Domine flutuabilidade, montagem de cilindros, respiração e procedimentos de emergência com instrutor 1:1.",
    features: [
      "Certificação Internacional PADI / SSI vitalícia",
      "Equipamento de neoprene e cilindros incluso",
      "Sessões em águas confinadas e mar aberto",
      "Manual digital e logbook oficial",
    ],
    price: "R$ 1.950",
  },
  {
    level: "NÍVEL 02 • AVANÇADO",
    title: "Advanced & Deep Diver (40m)",
    ruTitle: "Глубоководный курс (40м)",
    hours: "40 Horas (8 Imersões Técnicas)",
    maxDepth: "40 Metros",
    desc: "Navegação por bússola de precisão, gerenciamento de consumo em profundidade, descompressão e exploração noturna de recifes bioluminescentes.",
    features: [
      "Mergulho Noturno Bioluminescente",
      "Penetração básica em naufrágios",
      "Uso de computadores de mergulho multi-gás",
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
    desc: "Mergulhos em circuito fechado sem bolhas, com misturas de Hélio para total clareza mental e zero narcose nas profundezas do abismo.",
    features: [
      "Análise laboratorial de misturas Trimix",
      "Troca de cilindros sob descompressão",
      "Circuito fechado sem bolhas (silêncio total)",
      "Acesso a expedições científicas exclusivas",
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
      </div>

      {/* Courses Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {COURSES.map((course, idx) => (
          <div
            key={idx}
            onMouseEnter={() => oceanAudio.playBubblePop()}
            className={`relative rounded-3xl p-7 flex flex-col justify-between border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 ${
              course.popular
                ? "bg-[#04152e]/90 border-[#00f5d4] shadow-[0_0_35px_rgba(0,245,212,0.2)]"
                : "bg-[#020b18]/70 border-white/10 hover:border-white/25"
            }`}
          >
            {course.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#00f5d4] to-[#3a86ff] text-[#020915] text-[10px] font-mono font-bold uppercase tracking-wider shadow-lg">
                Recomendado
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
                  <span>{course.maxDepth}</span>
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
                className="px-4 py-2 rounded-xl bg-[#00f5d4] text-[#020915] font-mono text-xs font-bold uppercase hover:bg-[#70e000] transition-colors"
              >
                Reservar Vaga
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
