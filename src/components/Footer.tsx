import React from "react";
import { Anchor, Radio, Phone, Mail, MapPin, Heart, Shield } from "lucide-react";
import { oceanAudio } from "../utils/ocean-audio";

export const Footer: React.FC = () => {
  return (
    <footer id="contato" className="relative border-t border-white/10 bg-[#01060e] pt-16 pb-12 px-4 sm:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Col 1: Brand & Manifesto */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-white/20 bg-[#041226] flex items-center justify-center text-[#00f5d4]">
                <Anchor className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-lg text-white">AQUA SPHERE</span>
            </div>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Clube e Centro de Expedições Subaquáticas fundado em 2012. Dedicado à exploração pacífica, contemplação abissal e proteção dos santuários de corais do planeta.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#00f5d4] mt-2">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>VHF MARÍTIMO: CANAL 16 / 72 (CH-16)</span>
            </div>
          </div>

          {/* Col 2: Telemetria & Bases */}
          <div className="flex flex-col gap-2.5">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-1">
              Bases Operacionais
            </h4>
            <div className="flex items-start gap-2 text-xs text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-[#00f5d4] shrink-0 mt-0.5" />
              <span>Base Sharm: Marina Travco, Mar Vermelho, Egito</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-[#3a86ff] shrink-0 mt-0.5" />
              <span>Base Wrecks: Marina de Sevastopol, Mar Negro</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-[#e61c78] shrink-0 mt-0.5" />
              <span>Base Tropical: Labuan Bajo & Raja Ampat, Indonésia</span>
            </div>
          </div>

          {/* Col 3: Contato Direto (Номер) */}
          <div className="flex flex-col gap-2.5">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-1">
              Central & Emergência (Номер)
            </h4>
            <div className="flex items-center gap-2 text-xs text-neutral-300">
              <Phone className="w-3.5 h-3.5 text-[#00f5d4]" />
              <span className="font-mono">+55 (11) 98765-4321 / +7 (495) 892-3401</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-300">
              <Mail className="w-3.5 h-3.5 text-[#00f5d4]" />
              <span className="font-mono">expedicoes@aquasphere.club</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-neutral-400 mt-1">
              Plantão de Segurança 24/7 integrado à câmara hiperbárica local.
            </div>
          </div>

          {/* Col 4: Certificações Oficiais */}
          <div className="flex flex-col gap-2.5">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-1">
              Afiliações Globais
            </h4>
            <ul className="text-xs text-neutral-400 space-y-1.5 font-sans">
              <li className="flex items-center gap-1.5">
                <Shield className="w-3 h-3 text-[#00f5d4]" />
                PADI 5-Star Dive Center #29104
              </li>
              <li className="flex items-center gap-1.5">
                <Shield className="w-3 h-3 text-[#00f5d4]" />
                SSI Diamond Instructor Training Facility
              </li>
              <li className="flex items-center gap-1.5">
                <Shield className="w-3 h-3 text-[#00f5d4]" />
                TDI Technical Diving International
              </li>
              <li className="flex items-center gap-1.5">
                <Shield className="w-3 h-3 text-[#00f5d4]" />
                DAN (Divers Alert Network) Platinum Partner
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Human Authorship Only */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © 2012 - 2026 AQUA SPHERE Diving Club. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1 text-neutral-400">
            <span>Desenvolvido com excelência autoral e engenharia subaquática de estúdio independente.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
