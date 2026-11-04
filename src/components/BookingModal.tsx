import React, { useState } from "react";
import { X, CheckCircle, Shield, Waves, Calendar, User, Mail, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { oceanAudio } from "../utils/ocean-audio";
import {
  UivDiverNameInput,
  UivDiverEmailInput,
  UivDiverCertInput,
  UivOxygenPulseLoader,
} from "./uiverse-collection";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialTopic = "Mergulho de Batismo & Open Water",
}) => {
  const [topic, setTopic] = useState(initialTopic);
  const [date, setDate] = useState("2026-11-20");
  const [diverName, setDiverName] = useState("");
  const [diverEmail, setDiverEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    oceanAudio.playSonarPing();

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00f5d4", "#e61c78", "#3a86ff", "#ffd166"],
      });
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-[#030e1d]/95 border border-[#00f5d4]/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,245,212,0.25)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient background */}
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#00f5d4]/20 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-[#e61c78]/20 blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={() => {
            oceanAudio.playBubblePop();
            onClose();
          }}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-8 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">
              Imersão Confirmada com Sucesso!
            </h3>
            <p className="text-sm text-neutral-300 max-w-md leading-relaxed mb-6 font-light">
              Nossa equipe de instrutores enviou seu protocolo de segurança, lista de checagem médica e voucher de expedição para seu e-mail.
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 w-full text-left text-xs font-mono text-neutral-300 space-y-1 mb-6">
              <div><strong>Expedição:</strong> {topic}</div>
              <div><strong>Data Reservada:</strong> {date}</div>
              <div><strong>Status:</strong> Vaga Bloqueada no Barco Principal</div>
            </div>
            <button
              onClick={() => {
                oceanAudio.playBubblePop();
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-[#00f5d4] text-[#020915] font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#70e000] transition-colors"
            >
              Concluir & Retornar ao Oceano
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#00f5d4] text-xs font-mono tracking-widest uppercase">
              <Waves className="w-4 h-4 animate-pulse" />
              <span>ЗАПИСАТЬСЯ НА ПОГРУЖЕНИЕ • AGENDAR IMERSÃO</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Passaporte de Imersão Aqua Sphere
            </h3>
            <p className="text-xs text-neutral-300 font-light -mt-2">
              Selecione seu curso ou expedição desejada para garantir vaga com equipamento calibrado.
            </p>

            {/* Program selection */}
            <div className="flex flex-col gap-1.5 mt-2">
              <label className="text-xs font-mono text-neutral-300">Programa / Expedição</label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-sans focus:outline-none focus:border-[#00f5d4] transition-colors"
                placeholder="Ex: Recifes de Coral do Mar Vermelho ou Open Water"
                required
              />
            </div>

            {/* Date selection */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-mono text-neutral-300">Data Preferencial</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-[#00f5d4] transition-colors"
                required
              />
            </div>

            {/* Uiverse Diver Inputs */}
            <div className="space-y-3 pt-1">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-mono text-neutral-400">Nome Completo do Mergulhador:</span>
                <UivDiverNameInput />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-mono text-neutral-400">E-mail de Contato:</span>
                <UivDiverEmailInput />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-mono text-neutral-400">Nível Atual de Certificação (PADI/SSI/Nenhum):</span>
                <UivDiverCertInput />
              </div>
            </div>

            {/* Safety guarantee */}
            <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-[11px] text-emerald-300 font-sans mt-2">
              <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Equipamento revisado sob protocolo DAN (Divers Alert Network).</span>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              onClick={() => oceanAudio.playBubblePop()}
              className="mt-3 w-full py-3 rounded-full font-mono text-xs uppercase font-bold tracking-wider text-white shadow-[0_0_25px_rgba(230,28,120,0.6)] hover:shadow-[0_0_35px_rgba(230,28,120,0.85)] transition-all duration-300 disabled:opacity-50"
              style={{
                background: "linear-gradient(135deg, #f72585 0%, #b5179e 60%, #7209b7 100%)",
              }}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <UivOxygenPulseLoader />
                  <span>Calibrando Mistura de Gases...</span>
                </div>
              ) : (
                "Confirmar Inscrição na Expedição"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
