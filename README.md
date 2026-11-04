# 🌊 AQUA SPHERE — Clube & Expedições de Mergulho Abissal

> Uma experiência web imersiva de alta costura digital dedicada à exploração marinha profunda, certificações técnicas PADI/SSI e preservação dos santuários de corais. Reprodução autoral e engenharia de precisão 1:1 baseada na referência de design de vanguarda.

---

## 🏛️ Destaques de Arquitetura & Engenharia

* **Renderizador de Luz Volumétrica & Cáustica:** Canvas procedural que simula raios solares oceânicos (*god rays*) e correntes de microbolhas ascendentes a 60 FPS com reatividade tátil ao cursor.
* **Física de Cardume Dinâmico (*Marine Flocking*):** Motor de enxame marinho com peixes bioluminescentes que nadam em sincronia, desviam suavemente do mouse e mantêm coesão natural baseada no algoritmo de Boids.
* **Telemetria de Profundidade em Tempo Real (HUD):** Painel lateral de computador de mergulho que computa dinamicamente profundidade (0m a 140m), atmosfera barométrica, queda de temperatura e camada batial conforme o scroll.
* **Sintetizador Procedural Hidrofônico (Web Audio API):** Áudio ambiente autoral com ressonância abissal de baixa frequência (42Hz/84Hz), pings de sonar periódicos e micro-efeitos táteis de bolhas de ar nas interações.
* **Arsenal de 23 Componentes Reais do Uiverse:** Botões com gradiente líquido, cartões de aura bioluminescente, switches táteis, checkboxes náuticos e inputs estilizados devidamente isolados com escopo CSS próprio.
* **Tipografia Editorial de Alto Contraste:** Harmonização monumental entre *Cinzel Decorative*, *Syne*, *Plus Jakarta Sans* e *JetBrains Mono*.

---

## 🧭 Estrutura da Aplicação

```
aqua-sphere/
├── public/
│   └── assets/                  # Ativos originais fatiados em alta fidelidade
│       ├── hero-diver.jpg       # Silhueta de mergulhador e raios de superfície
│       ├── exotic-fish.jpg      # Pterois Radiata (Seção "О КЛУБЕ")
│       ├── school-fish.jpg      # Cardume bioluminescente (Seção "ЛОКАЦИИ")
│       ├── coral-floor.jpg      # Jardim de corais abissal
│       └── reference.jpg        # Template original oficial da roleta
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Pílulas translúcidas de vidro e CTA Записаться
│   │   ├── HeroSection.tsx      # Título escultural monumental e métricas de mergulho
│   │   ├── ClubSection.tsx      # Seção "О КЛУБЕ" (Desde 2012) com fauna exótica
│   │   ├── LocationsSection.tsx # Seção "ЛОКАЦИИ" com rotas e seletor de pontos
│   │   ├── CoursesSection.tsx   # Matriz de cursos PADI/SSI/TDI (Open Water a Trimix)
│   │   ├── DiveScroller.tsx     # Computador de mergulho e telemetria HUD
│   │   ├── FishFlockCanvas.tsx  # Canvas interativo de cardume bioluminescente
│   │   ├── WaterCausticsCanvas.tsx # Canvas de raios de sol e bolhas marinhas
│   │   ├── BookingModal.tsx     # Modal de agendamento com celebração de confetes
│   │   ├── Footer.tsx           # Bases operacionais, rádio VHF Canal 16 e diretrizes
│   │   └── uiverse-collection.tsx # 23 componentes reais do acervo Uiverse integrados
│   ├── utils/
│   │   └── ocean-audio.ts       # Sintetizador hidrofônico em Web Audio nativo
│   ├── App.tsx                  # Composição mestre da landing page
│   ├── main.tsx                 # Ponto de entrada React 19
│   └── index.css                # Estilização base com Tailwind CSS v4 e animações
├── index.html                   # Metadados e carregamento de fontes
├── package.json                 # Dependências e scripts de execução
├── tsconfig.json                # Configuração TypeScript rigorosa
└── vite.config.ts               # Configuração Vite e alias de módulos
```

---

## 🛠️ Como Executar

```bash
# Rodar servidor de desenvolvimento
npm run dev

# Gerar build otimizado de produção
npm run build

# Executar preview de produção na porta 5173
npm run preview
```

---

## 📜 Licença e Propriedade

Desenvolvido como projeto proprietário e autoral de engenharia e design de interfaces de alto padrão.
