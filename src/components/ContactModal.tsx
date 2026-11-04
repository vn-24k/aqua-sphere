import React from "react";
import { X, Phone, Radio, MapPin, Mail, ShieldAlert, Anchor } from "lucide-react";
import { oceanAudio } from "../utils/ocean-audio";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-[#030e1d]/95 border border-[#00f5d4]/40 p-6 sm:p-8 shadow-[0_0_60px_rgba(0,245,212,0.25)] overflow-hidden"
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
          <Anchor className="w-4 h-4" />
          <span>КОНТАКТЫ И СВЯЗЬ • НОМЕР</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
          Central Operacional Aqua Sphere
        </h3>
        <p className="text-xs text-neutral-300 font-light mb-6">
          Comunicação marítima direta, plantão de resgate hiperbárico 24/7 e bases náuticas.
        </p>

        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00f5d4]/10 border border-[#00f5d4]/30 flex items-center justify-center text-[#00f5d4] shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-neutral-400 uppercase block">Telefone Central</span>
              <a href="tel:+5511987654321" className="text-sm font-mono font-bold text-white hover:text-[#00f5d4]">
                +55 (11) 98765-4321 • +7 (495) 892-3401
              </a>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#e61c78]/10 border border-[#e61c78]/30 flex items-center justify-center text-[#e61c78] shrink-0">
              <Radio className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-neutral-400 uppercase block">Rádio VHF Marítimo (Chamada e Socorro)</span>
              <span className="text-sm font-mono font-bold text-white">Canal 16 / 72 (156.800 MHz)</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#3a86ff]/10 border border-[#3a86ff]/30 flex items-center justify-center text-[#3a86ff] shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-neutral-400 uppercase block">E-mail de Despacho de Expedição</span>
              <a href="mailto:expedicoes@aquasphere.club" className="text-sm font-mono font-bold text-white hover:text-[#3a86ff]">
                expedicoes@aquasphere.club
              </a>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/20 text-xs text-amber-300 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 shrink-0 text-amber-400" />
            <span>Mergulhos sob cobertura de seguro hiperbárico DAN Platinum internacional.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
