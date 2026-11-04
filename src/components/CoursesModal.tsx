import React from "react";
import { X, Award, Clock, Compass, Check, ArrowRight } from "lucide-react";
import { oceanAudio } from "../utils/ocean-audio";

interface CoursesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCourse: (course: string) => void;
}

const COURSES = [
  {
    title: "Mergulho de Batismo & Open Water",
    ruTitle: "Начальный курс дайвинga",
    hours: "32 Horas (Teoria + 6 Imersões)",
    depth: "18 Metros",
    price: "R$ 1.950",
    desc: "A porta de entrada oficial para o oceano com certificação vitalícia PADI/SSI.",
    features: ["Equipamento completo incluso", "Instrutor sênior 1:1", "Logbook digital internacional"],
  },
  {
    title: "Advanced & Deep Diver (40m)",
    ruTitle: "Глубоководный курс (40м)",
    hours: "40 Horas (8 Imersões Técnicas)",
    depth: "40 Metros",
    price: "R$ 2.680",
    popular: true,
    desc: "Navegação subaquática fina, gerenciamento de consumo e exploração noturna de recifes.",
    features: ["Mergulho Noturno Bioluminescente", "Penetração básica em naufrágios", "Gás enriquecido Nitrox"],
  },
  {
    title: "Normoxic Trimix & Rebreather CCR",
    ruTitle: "Технический тримикс и ребризер",
    hours: "60 Horas (10 Imersões)",
    depth: "75 - 100 Metros",
    price: "R$ 5.800",
    desc: "Mergulho técnico em circuito fechado sem bolhas, com misturas de Hélio no abismo.",
    features: ["Descompressão acelerada de O2 puro", "Zero narcose por nitrogênio", "Acesso a expedições científicas"],
  },
];

export const CoursesModal: React.FC<CoursesModalProps> = ({ isOpen, onClose, onSelectCourse }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-[#030e1d]/95 border border-[#00f5d4]/40 p-6 sm:p-8 shadow-[0_0_60px_rgba(0,245,212,0.25)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => {
            oceanAudio.playBubblePop();
            onClose();
          }}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 text-[#00f5d4] text-xs font-mono tracking-widest uppercase mb-1">
          <Award className="w-4 h-4" />
          <span>AQUA SPHERE ACADEMY • КУРСЫ</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
          Cursos & Certificações PADI / SSI / TDI
        </h3>
        <p className="text-xs text-neutral-300 font-light mb-6">
          Formação técnica de elite para todos os níveis de experiência no oceano.
        </p>

        <div className="space-y-4">
          {COURSES.map((c, i) => (
            <div
              key={i}
              className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                c.popular ? "bg-[#041630] border-[#00f5d4]/60" : "bg-white/5 border-white/10"
              }`}
            >
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-display font-bold text-white">{c.title}</h4>
                  {c.popular && (
                    <span className="px-2 py-0.5 rounded-full bg-[#00f5d4] text-[#020915] text-[9px] font-mono font-bold uppercase">
                      Popular
                    </span>
                  )}
                </div>
                <span className="text-[11px] font-mono text-neutral-400 italic block mb-1">{c.ruTitle}</span>
                <p className="text-xs text-neutral-300 font-light">{c.desc}</p>
                <div className="flex items-center gap-4 text-[10px] font-mono text-[#00f5d4] mt-2">
                  <span>{c.hours}</span>
                  <span>Profundidade: {c.depth}</span>
                </div>
              </div>

              <div className="flex flex-col items-end shrink-0 w-full sm:w-auto">
                <span className="text-lg font-display font-bold text-white mb-2">{c.price}</span>
                <button
                  onClick={() => {
                    oceanAudio.playBubblePop();
                    onSelectCourse(c.title);
                    onClose();
                  }}
                  className="px-4 py-1.5 rounded-xl bg-[#00f5d4] text-[#020915] font-mono text-xs font-bold uppercase hover:bg-[#70e000] transition-colors"
                >
                  Inscrever-se
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
