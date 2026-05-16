# SITE DNA — VASQUES AUTO CENTER

**Nicho:** Oficina Mecânica Completa — mecânica geral, alinhamento 3D, diagnóstico eletrônico, freios, suspensão, funilaria e pintura. Atende Bangu, Rio de Janeiro – RJ.
**Posicionamento:** Autoridade técnica de bairro com 35+ anos de tradição. O impacto é de confiança blindada: dark mode industrial pesado + laranja de alta performance comunicam que ali é lugar de profissional sério, não de achismo. O visitante sente que está entrando em uma instituição, não em uma oficina qualquer.
**Data de criação:** 2025

---

## IDENTIDADE VISUAL

### Paleta de Cores

| Variável CSS | Hex | Função Específica no Layout |
|---|---|---|
| `--bg-dark` | `#09090b` | Fundo base de toda a página (quase preto com tom zinc) |
| `--bg-card` | `#18181b` | Background de cards, seções alternadas, formulário interior dark |
| `--bg-card-hover` | `#27272a` | Estado hover dos cards de Pain e Service |
| `--primary` | `#FF6600` | Cor principal de ação: CTAs, destaques, borda ativa, ícones, partícula animada da trilha |
| `--primary-hover` | `#E5A500` | Hover dos botões primários — shift para âmbar/dourado, não para branco |
| `--text-main` | `#ffffff` | Textos principais, headings |
| `--text-muted` | `#a1a1aa` | Textos de suporte, descrições, subtítulos |
| `--text-dim` | `#8a8a95` | Labels de formulário, rodapé, metadados |
| `--text-light` | `#e4e4e7` | Itens de lista hero (levemente off-white) |
| `--border-subtle` | `rgba(255,255,255,0.05)` | Todas as bordas de cards e separadores (quase invisível) |
| `--whatsapp` | `#25D366` | Botão flutuante WhatsApp |
| `--whatsapp-hover` | `#128C7E` | Hover do botão WhatsApp |
| Estrelas / Rating | `#E5A500` | Estrelas do Google Rating no Hero Badge e Testimonials |
| Badge "Antes" | `rgba(0,0,0,0.7)` + blur | Badge de imagem na seção Antes/Depois |
| Form Background | `#f8fafc` | Background dos inputs no Lead Form (inversão para branco sobre laranja) |
| Form Border | `#e4e4e7` | Bordas dos inputs em estado normal |
| `--selection-bg` | `#FF6600` | Cor de seleção de texto no cursor |

---

### Tipografia

| Elemento | Família | Peso | Tamanho Exato | Observações |
|---|---|---|---|---|
| `H1` Hero Title | Oswald | 700 | `60px` (desktop) / `3.5rem` (≥768px) / `1.75rem` (mobile) | `line-height: 1.1` — muito condensado, sem respiro entre linhas; fonte de impacto puro |
| `H2` Section Titles | Oswald | 700 | Herda `.hero-title` = 60px desktop / `2rem`–`2.8rem` via inline style | `text-transform: uppercase` nas seções Pain, How It Works e Testimonials; `letter-spacing: -0.02em` nos depoimentos |
| `H3` Service Title | Oswald | 700 | `1.5rem` | `text-transform: uppercase` |
| `H3` Numbered Steps About | Inter | 700 | `1rem` | `text-transform: uppercase; letter-spacing: 0.05em` |
| Body / Descrições | Inter | 400 | `1.125rem` / `1rem` | `line-height: 1.5`; cor `var(--text-muted)` |
| Nav Links | Inter | 500 | `0.875rem` | Cor `var(--text-muted)` → `white` no hover |
| Btn CTA Principal | Inter | 700 | `1.125rem` | Maiúsculas implícitas pela hierarquia visual |
| Mobile Menu Links | Oswald | 700 | `1.75rem` | `text-transform: uppercase; letter-spacing: 0.05em` |
| Badge "Desde 1989" | Inter | 700 | `0.875rem` | `text-transform: uppercase; border-radius: 9999px` — pílula laranja fosca |
| Footer Labels | Inter | 700 | `0.875rem` | `text-transform: uppercase; color: var(--primary)` |
| Footer Copyright | Inter | 700 | `0.625rem` | `text-transform: uppercase` — micro-texto |
| Stats (35+ anos) | Inter | 700 | `2.5rem` | `color: var(--primary)` — números em destaque máximo |
| Video Label | Oswald | 600 | `0.9rem` | `text-transform: uppercase; letter-spacing: 0.08em` |

---

### Estilo Geral

Interface industrial-tecnológica de nicho automotivo: base Dark Zinc extrema (`#09090b`) com identidade cromática monocor laranja de alta saturação (`#FF6600`) como único acento quente, criando contraste máximo que remete a faróis e escapes de corrida. Toda a arquitetura tipográfica é bipartida — Oswald condensed ultra-bold para headlines de impacto (sensação de velocidade e autoridade) + Inter para legibilidade de corpo — sem serifas, sem ornamentos, sem gradientes de degradê nos fundos principais. A linguagem de surface design é flat-dark com profundidade obtida via `box-shadow` expressivos, bordas `rgba` quase imperceptíveis e `backdrop-filter: blur` nos overlays de nav/mobile-menu, criando camadas de vidro fumê sobre aço escurecido. A filosofia geral é: menos decoração, mais credibilidade técnica.

---

## LAYOUT — SEÇÃO POR SEÇÃO

### SEÇÃO 1 — Navbar (Header Fixo Smart)

**Estrutura:** `position: fixed; top: 0; width: 100%; height: 80px (--header-height)`; Flexbox horizontal com `justify-content: space-between; align-items: center`. Container `max-width: 1280px`. Desktop: logo + nav-links + btn-nav. Mobile: logo + hamburger button.

**Fundo:** `background-color: rgba(9,9,11,0.95)` + `backdrop-filter: blur(12px)` — vidro escuro semi-opaco. `border-bottom: 1px solid rgba(255,255,255,0.05)`.

**Elementos Restritos:** Logo à esquerda (duas versões: `logo-web` + `logo-mobile`, `height: 56px`). Links centrais com gap `2rem`. Botão "Agendar Agora" no canto direito com ícone de telefone inline.

**Animação:** Navbar possui classe `.navbar--hidden` com `transform: translateY(-100%)` aplicada via JS ao rolar para baixo. Transição: `transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)`. Reaparece ao rolar para cima (smart hide).

**Micro-interações:**
- `.nav-link:hover` → `color: var(--text-main)` (sem transform, só mudança de cor, `transition: color 0.2s`)
- `.btn-nav:hover` → `background-color: var(--primary-hover)` (#E5A500) `transition: background-color 0.2s`
- Mobile menu: `transform: translateY(-100%)` → `translateY(0)` com `transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)` + `opacity: 0 → 1`

**Diferenciador Visual:** Navbar que desaparece ao rolar para baixo e reaparece ao rolar para cima (smart scroll), liberando área de leitura em mobile sem abrir mão da CTA sempre acessível.

---

### SEÇÃO 2 — Hero

**Estrutura:** `min-height: 90vh; padding-top: 100px`. Grid de 2 colunas em desktop (`grid-template-columns: 1fr 1fr; gap: 3rem`), 1 coluna em mobile. Container `max-width: 1280px`.

**Fundo:** Imagem de fundo `galeria-oficina-bangu-18.webp` com `opacity: 0.2` + overlay `linear-gradient(to right, #09090b, rgba(9,9,11,0.8), transparent)` que some progressivamente da esquerda para a direita, preservando a imagem no lado da foto secundária.

**Elementos Restritos:**
- Coluna esquerda: badge pílula laranja "Desde 1989 em Bangu" (oculta no mobile), H1 com `<span class="text-primary">` no word "Bangu", parágrafo de descrição `max-width: 500px`, lista de benefícios com ícone `circle-check` laranja (`24x24px`), botão CTA principal com ícone WhatsApp inline.
- Coluna direita (desktop only): glow blob `rgba(255,102,0,0.1)` com `filter: blur(32px)` posicionado com `inset: -1rem`. Imagem principal `height: 678px; border-radius: 1.5rem; border: 1px solid rgba(255,255,255,0.05); box-shadow: 0 25px 50px rgba(0,0,0,0.5)`. Rating badge posicionado `absolute; bottom: 1.5rem; left: -1.5rem` com estrelas `#E5A500` e texto "+150 Avaliações / 5 estrelas Google".

**Animação:** Nenhuma entrance animation declarada no CSS — o impacto é pela composição visual estática de alta densidade.

**Micro-interações:**
- `.btn-primary:hover` → `transform: scale(1.05); background-color: var(--primary-hover)` — `transition: transform 0.2s, background-color 0.2s`
- Rating badge: `background-color: var(--bg-card); padding: 1.5rem; border-radius: 1rem; border: 1px solid var(--border-subtle); box-shadow: 0 25px 50px rgba(0,0,0,0.5)`

**Diferenciador Visual:** O rating badge flutuante saindo para fora da imagem principal (`left: -1.5rem`) quebrando o container da foto — técnica editorial que cria profundidade tridimensional sem CSS 3D. O glow blob laranja atrás da imagem sugere calor mecânico/motor.

---

### SEÇÃO 3 — Galeria de Vídeos (Video Carousel 3D)

**Estrutura:** Container `position: relative; width: 100%; height: 760px; perspective: 1200px` com `display: flex; align-items: center; justify-content: center`. 4 vídeos em slides absolutos.

**Fundo:** `background-color: rgba(24,24,27,0.5)` + `border-top/bottom: 1px solid rgba(255,255,255,0.05)`.

**Elementos Restritos:** Cada `.video-slide` tem `position: absolute; width: 50%; max-width: 420px; height: 90%`. Estados: `.is-active` (centro), `.is-prev` (esquerda), `.is-next` (direita), `.is-hidden` (fora de vista). Dots indicadores `12px × 12px` com fill animado. Label do vídeo em gradient bottom.

**Animação:**
- `.is-active` → `transform: translateX(0) scale(1); border-color: var(--primary); box-shadow: 0 0 40px rgba(255,102,0,0.2), 0 20px 60px rgba(0,0,0,0.6)` — `transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1)`
- `.is-prev` → `transform: translateX(-55%) scale(0.78) rotateY(6deg); filter: blur(4px) brightness(0.45)`
- `.is-next` → `transform: translateX(55%) scale(0.78) rotateY(-6deg); filter: blur(4px) brightness(0.45)`
- `.is-hidden` → `transform: scale(0.6); filter: blur(8px) brightness(0.3); opacity: 0`
- Barra de progresso no vídeo ativo: pseudo-elemento `::after` com `height: 3px; background: var(--primary); animation: videoProgress var(--video-duration, 10s) linear forwards`
- Video label: `opacity: 0; transform: translateY(8px)` → `opacity: 1; translateY(0)` com `transition: 0.5s ease`

**Micro-interações:**
- `.video-dot.active` → `border-color: var(--primary); transform: scale(1.3)` + pseudo `::after` com `transform: scale(1)` preenchendo o dot
- Mask lateral com gradiente que aprofunda os slides laterais

**Diferenciador Visual:** Carrossel de vídeo com perspectiva 3D real (`perspective: 1200px + rotateY`) — vídeos laterais girados levemente no eixo Y, criando efeito de deck de cartas perspectivado. Único na categoria oficina mecânica.

---

### SEÇÃO 4 — Pain & Desire

**Estrutura:** `background-color: rgba(24,24,27,0.5)` com bordas superior e inferior `rgba(255,255,255,0.05)`. Container `max-width: 896px; text-align: center`. Grid de dores: `grid-template-columns: repeat(3,1fr); gap: 2rem` (desktop) / 1 coluna (mobile).

**Fundo:** Semi-transparente zinc sobre dark base, criando camada de profundidade sem mudança total de tom.

**Elementos Restritos:** H2 em uppercase com `<span style="color: #ef4444;">` no trecho "gastos surpresa" (único uso de vermelho em todo o site — cor de perigo/dor). 3 pain cards com emoji grande `font-size: 2.5rem` como ícone, texto bold centrado. Parágrafo final em itálico como citação.

**Animação:** Nenhuma declarada — seção de impacto emocional direto.

**Micro-interações:** Cards `.pain-card` com `background-color: #27272a; padding: 1.5rem; border-radius: 1rem; border: 1px solid rgba(255,255,255,0.05)`.

**Diferenciador Visual:** Uso cirúrgico de `#ef4444` (vermelho) apenas no texto de dor — único ponto de cor quente fria em todo o site que não é laranja. Cria choque visual controlado. Emojis como ícones quebram o padrão SVG do restante do site de forma intencional.

---

### SEÇÃO 5 — Serviços + Animação Backfire (Cano de Descarga)

**Estrutura:** Grid `repeat(3, 1fr)` desktop / `repeat(2,1fr)` tablet / `1fr` mobile. `gap: 2rem`. Container centralizado com título + divisor laranja `width: 96px; height: 6px; border-radius: 99px`.

**Fundo:** `var(--bg-dark)` base com `position: relative; overflow: hidden` para conter a animação de backfire decorativa.

**Elementos Restritos:** `.exhaust-fire-container` posicionado absolutamente com cano de escape simulado via divs + partículas de fogo CSS animadas. Cada `.service-card`: `background: var(--bg-card); padding: 2rem; border-radius: 1.5rem; border: 1px solid rgba(255,255,255,0.05); transition: all 0.3s ease`. Ícone container `64x64px; border-radius: 1rem; background: rgba(255,102,0,0.1)` com SVG stroke `var(--primary)`.

**Animação:** `.exhaust-fire-container` com partículas de fogo — divs `.fire-particle` animadas via keyframes CSS simulando chama de escape saindo de cano. Puramente decorativo, posicionado em canto da seção.

**Micro-interações:**
- `.service-card:hover` → `transition: all 0.3s ease` (border e shadow mudam via JS ou estado implícito)
- `.service-icon-container` → `transition: transform 0.3s ease` no hover
- `.service-link .arrow-icon` → `transition: transform 0.2s ease` (seta desliza horizontalmente no hover)

**Diferenciador Visual:** Animação de backfire/cano de escape feita 100% em CSS puro como elemento decorativo de fundo — referência visual ao universo mecânico sem usar imagem ou vídeo. Divisor de seção como barra laranja de `6px` em vez do padrão linha fina.

---

### SEÇÃO 6 — Trust & Results (Antes/Depois)

**Estrutura:** `background-color: var(--bg-card)`. Grid interno das imagens: `grid-template-columns: 1fr 1fr; gap: 1.5rem` (desktop) / `1fr` (mobile). Texto lateral com 3 numbered steps com ícone quadrado `40x40px; border-radius: 8px; background: var(--primary)`.

**Fundo:** `var(--bg-card)` — zinc escuro, seção de contraste suave em relação ao dark base.

**Elementos Restritos:**
- Imagem "Antes": `border: 2px solid rgba(255,255,255,0.1); height: 560px; border-radius: 1.5rem`. Badge `position: absolute; top: 1.5rem; left: 1.5rem; background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); border-radius: 99px`.
- Imagem "Depois": `border: 2px solid var(--primary); box-shadow: 0 0 30px rgba(255,102,0,0.2); height: 560px; border-radius: 1.5rem`. Badge `background: var(--primary); box-shadow: 0 4px 12px rgba(255,102,0,0.3)`.

**Animação:** Nenhuma declarada — o contraste estático visual das imagens antes/depois é o próprio "movimento".

**Micro-interações:** Nenhuma específica nesta seção — foco em hierarquia visual estática.

**Diferenciador Visual:** A imagem "Depois" possui borda laranja brilhante + glow sutil `box-shadow: 0 0 30px rgba(255,102,0,0.2)` — o brilho do "resultado" vs a imagem "Antes" com borda apagada. Storytelling visual sem texto. Steps numerados com boxes `01` `02` `03` em laranja sólido — numeração militar que passa autoridade.

---

### SEÇÃO 7 — Depoimentos (Infinite Scroll Horizontal)

**Estrutura:** `background-color: rgba(255,102,0,0.03)` — toque quase imperceptível de laranja no fundo. `overflow: hidden`. Testimonial wrapper quebra o container: `width: 100vw; margin-left: calc(-50vw + 50%)` — full bleed que sangra além do container pai.

**Fundo:** Laranja ultrasutil de `opacity: 0.03` cria impressão de calor sem alterar contraste.

**Elementos Restritos:** Google Brand header: pill branca com logo Google SVG multicolor + `font-weight: 800; color: #18181b` sobre fundo branco — único elemento light em todo o site dark. 5 estrelas `24x24px fill: #E5A500` + contagem "+150 AVALIAÇÕES 5 ESTRELAS" em bold branco. Cards `.testimonial-card: width: 380px; min-height: 280px; padding: 2.5rem 2rem; border-radius: 2rem`. Avatar inicial: `div` com letra em laranja.

**Animação:** `animation: scroll-horizontal 40s linear infinite` — `@keyframes: translateX(0) → translateX(calc(-50% - 1rem))`. Cards duplicados no HTML para seamless loop. `.testimonial-track:hover → animation-play-state: paused` (pausa ao passar o mouse).

**Micro-interações:**
- Hover no track inteiro pausa a animação automaticamente
- `.testimonial-card::before` — aspas decorativas `content: '"'` posicionadas absolutamente em tamanho gigante como elemento gráfico de fundo do card

**Diferenciador Visual:** Full-bleed overflow horizontal com loop infinito — os cards saem para fora das margens da página, criando sensação de movimento contínuo. Google pill branca em fundo dark inverte a lógica cromática pontualmente para dar credibilidade à prova social.

---

### SEÇÃO 8 — Sobre (About + History Carousel)

**Estrutura:** `background-color: rgba(24,24,27,0.5)`. Grid: `grid-template-columns: 1.1fr 1fr; gap: 5rem` (desktop) / `1fr` (mobile). `order: 2` no texto (invertido no mobile — imagem aparece primeiro).

**Fundo:** Zinc semi-transparente alternando com dark base.

**Elementos Restritos:**
- Coluna imagem: `.history-carousel` com `height: 380px; border-radius: 1.5rem; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.4)`. Botões nav `42x42px; border-radius: 50%; background: rgba(0,0,0,0.4); backdrop-filter: blur(4px)`. Grid fixo de 2 imagens menores `height: 220px; border-radius: 1.25rem` abaixo do carousel.
- Coluna texto: Stats em grid `2 colunas` com números `2.5rem; color: var(--primary)` + labels em uppercase `0.75rem; letter-spacing: 0.1em`.

**Animação:** Carousel automático — imagens com `opacity: 0 → 1; transition: opacity 1s ease-in-out`. `.history-carousel::after` mostra indicador de pause `'▶'` quando parado. Autoplay com detecção de pausa via classe `.paused`.

**Micro-interações:**
- `.history-fixed-images img:hover` → `transform: translateY(-5px)` — `transition: transform 0.3s ease`
- `.carousel-nav:hover` → `background: var(--primary); transform: translateY(-50%) scale(1.1)`
- `.info-title-link:hover` → `transform: translateX(5px)` na seção de localização

**Diferenciador Visual:** Galeria dupla — carousel principal grande + 2 fotos estáticas em grid abaixo, criando composição editorial de 3 imagens que comunica portfólio sem slideshow único monótono.

---

### SEÇÃO 9 — How It Works (Race Track)

**Estrutura:** Container `text-center`. Grid de 5 colunas `repeat(5,1fr); gap: 1rem` (desktop) / `1fr` (mobile) com gap de `2rem`.

**Fundo:** `var(--bg-dark)` base.

**Elementos Restritos:** `.steps-grid::before` — trilha de asfalto: `background-color: #3f3f46; background-image: linear-gradient(to right, rgba(255,255,255,0.2) 50%, transparent 50%); background-size: 20px 2px; background-repeat: repeat-x; background-position: center; height: 12px; top: 48px; left/right: 10%` — pista de corrida com faixa tracejada. `.steps-grid::after` — partícula de luz laranja `20x20px; border-radius: 50%; background: var(--primary); box-shadow: 0 0 20px 5px var(--primary), 0 0 40px 10px rgba(255,102,0,0.4)` percorrendo a trilha. Círculos numerados `64x64px; border: 4px solid var(--primary); border-radius: 50%`.

**Animação:**
- Partícula percorre a trilha: `animation: move-light-horizontal 5s linear infinite` — `left: 10% → 90%` com `opacity: 0 → 1 → 0`
- Em mobile: trilha vertical + `animation: move-light-vertical 5s linear infinite` — `top: 2rem → calc(100% - 2rem)`
- `.step-circle: animation: pulse-step 5s infinite` com delays escalonados `0s / 1.25s / 2.5s / 3.75s / 5s` — cada círculo pulsa em sequência como se a partícula de luz estivesse passando por ele. Efeito: `scale: 1 → 1.15; background-color: var(--bg-card) → var(--primary); box-shadow: 0 0 35px var(--primary)`

**Micro-interações:**
- `.step-item:hover .step-circle` → `background-color: var(--primary); transform: scale(1.1) rotate(10deg); box-shadow: 0 0 30px rgba(255,102,0,0.5)`

**Diferenciador Visual:** Trilha de corrida CSS pura com partícula de luz animada conectando os steps — metáfora automotiva integrada ao layout funcional. A sincronização entre a partícula percorrendo a trilha e o pulso dos círculos cria uma timeline animada que guia o olho sequencialmente.

---

### SEÇÃO 10 — FAQ (Accordion Nativo)

**Estrutura:** `max-width: 768px; margin: 0 auto`. Accordion nativo com elemento `<details>/<summary>` sem JavaScript. Stack de cards com `margin-bottom: 1rem`.

**Fundo:** `background-color: rgba(24,24,27,0.5)`.

**Elementos Restritos:** `.faq-item: background: var(--bg-card); border-radius: 1rem; border: 1px solid rgba(255,255,255,0.05); overflow: hidden`. `summary: font-weight: 700; text-transform: uppercase; font-size: 1.125rem; display: flex; justify-content: space-between` com ícone chevron laranja à direita. `.faq-content: padding-top: 1rem; color: var(--text-muted)`.

**Animação:** Nativa do `<details>` — sem transição personalizada de altura (performance-first).

**Micro-interações:** `summary::-webkit-details-marker: display: none` — remove o triângulo padrão do browser. Mobile: `min-height: 44px` para área de toque adequada (WCAG compliant).

**Diferenciador Visual:** Uso do `<details>/<summary>` nativo do HTML sem dependência de JavaScript — solução zero-JS para accordion que garante acessibilidade nativa e performance máxima.

---

### SEÇÃO 11 — Lead Form CTA (Seção Orange)

**Estrutura:** `padding: 6rem 0; position: relative; overflow: hidden`. Grid: `grid-template-columns: 1fr 1.5fr; gap: 4rem` (desktop) / `1fr` (mobile). Dá mais peso ao formulário que ao texto.

**Fundo:** Imagem `galeria-oficina-bangu-18.webp` + overlay `background-color: var(--primary); opacity: 0.92` — o laranja cobre quase totalmente a imagem, criando seção de cor sólida laranja com textura fotográfica subliminar atrás.

**Elementos Restritos:**
- Texto: H2 branco `2.8rem; line-height: 1.1` com `<span style="color: #000">` quebrando linha — o preto sobre laranja como hierarquia de ênfase invertida.
- Formulário: `background: white; padding: 2.5rem; border-radius: 2rem; box-shadow: 0 40px 80px rgba(0,0,0,0.3)` — card branco sobre laranja, inversão total do dark mode.
- Campos: `padding: 1rem; border-radius: 12px; border: 2px solid #e4e4e7; background: #f8fafc; color: #18181b`. Focus: `border-color: var(--primary); background: white`.
- Select de serviços com 9 opções específicas de serviços automotivos.
- Botão submit: `background: #000; color: white; border-radius: 12px; font-weight: 800; font-size: 1.1rem`. Hover: `background: #18181b; transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.2)`.

**Animação:** Nenhuma — o impacto visual estático da inversão cromática total é suficiente.

**Micro-interações:**
- Input focus: `border: 2px solid var(--primary); background: white` — `transition: all 0.2s`
- `.btn-submit:hover` → `transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.2)`

**Diferenciador Visual:** Inversão total do sistema de cores — a única seção onde existe branco dominante e o formulário é light sobre background laranja. Cria ruptura visual absoluta que sinaliza urgência de conversão sem precisar de banners ou pop-ups.

---

### SEÇÃO 12 — Localização + Footer

**Estrutura Localização:** Grid `1fr 1.2fr` (desktop) / `1fr` (mobile). Info column à esquerda com `info-item: display:flex; gap: 1.25rem; margin-bottom: 2rem`. Ícones `48x48px; border-radius: 12px; background: rgba(255,102,0,0.1); color: var(--primary)`. Google Maps iframe com `border-radius: 1.5rem; box-shadow: 0 20px 40px rgba(0,0,0,0.5)`.

**Estrutura Footer:** Grid `repeat(4,1fr)` (desktop) / `1fr` (mobile). `padding-top: 5rem; padding-bottom: 2.5rem; border-top: 1px solid rgba(255,255,255,0.05)`. Footer bottom: flex `space-between` com `font-size: 0.625rem; text-transform: uppercase`.

**Fundo:** `var(--bg-dark)` — retorno ao tom mais escuro após a seção laranja.

**Elementos Restritos:** Contact info grid `3 colunas` com cards de contato `border-radius: 1.5rem; border: 1px solid rgba(255,255,255,0.05)`. Footer headings `color: var(--primary); font-size: 0.875rem; text-transform: uppercase`. Footer links `font-size: 0.875rem; color: var(--text-muted)`.

**Micro-interações:**
- `.info-value.clickable:hover` → `color: var(--primary); transition: color 0.2s`
- `.info-title-link:hover` → `transform: translateX(5px); transition: transform 0.2s`

**Diferenciador Visual:** Footer link group de headings em laranja cria escaneabilidade rápida sem precisar de separadores visuais. O `translateX(5px)` no título "Vasques Auto Center" da seção de localização é um micro detalhe que indica interatividade (link para Google Maps).

---

### ELEMENTO FLUTUANTE — WhatsApp Button

**Estrutura:** `position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 1000; width: 64px; height: 64px; border-radius: 50%`.

**Animação:** `animation: whatsappPulse 2.5s ease-in-out infinite` — `@keyframes: box-shadow: 0 0 0 0 rgba(37,211,102,0.5) → 0 0 0 14px rgba(37,211,102,0) → 0` (efeito sonar/ping verde).

**Badge de notificação:** `position: absolute; top: -2px; right: -2px; width: 22px; height: 22px; background: #ff3b30; border-radius: 50%; border: 2px solid var(--bg-dark); animation: badgeBounce 3s ease-in-out infinite` — `@keyframes: scale(1) → scale(1.2) → scale(0.95) → scale(1.05) → scale(1)`.

**Micro-interações:**
- `:hover` → `transform: scale(1.1); background-color: var(--whatsapp-hover); animation: none` (cancela o pulse no hover)

---

## COMPONENTES REUTILIZÁVEIS

### Botão Primário `.btn-primary`

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: #FF6600;
  color: white;
  padding: 1.25rem 2rem;
  border-radius: 12px;
  font-size: 1.125rem;
  font-weight: 700;
  box-shadow: 0 20px 40px rgba(255, 102, 0, 0.2);
  transition: transform 0.2s, background-color 0.2s;
}
.btn-primary:hover {
  transform: scale(1.05);
  background-color: #E5A500;
}
```

### Botão Nav `.btn-nav` (Navbar + inline CTA)

```css
.btn-nav {
  background-color: #FF6600;
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.2s;
}
.btn-nav:hover {
  background-color: #E5A500;
}
```

### Botão Submit Formulário `.btn-submit`

```css
.btn-submit {
  background: #000;
  color: white;
  padding: 1.25rem;
  border: none;
  border-radius: 12px;
  font-weight: 800;
  font-size: 1.1rem;
  width: 100%;
  transition: all 0.3s;
}
.btn-submit:hover {
  background: #18181b;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
```

### Service Card `.service-card`

```css
.service-card {
  background-color: #18181b;
  padding: 2rem;
  border-radius: 1.5rem;        /* 24px */
  border: 1px solid rgba(255,255,255,0.05);
  transition: all 0.3s ease;
  text-align: center;
}
/* Icon container dentro do card */
.service-icon-container {
  width: 64px;
  height: 64px;
  background-color: rgba(255,102,0,0.1);
  color: #FF6600;
  border-radius: 1rem;          /* 16px */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: transform 0.3s ease;
}
```

### FAQ Item `.faq-item`

```css
.faq-item {
  background-color: #18181b;
  border-radius: 1rem;           /* 16px */
  border: 1px solid rgba(255,255,255,0.05);
  margin-bottom: 1rem;
  overflow: hidden;
}
details { padding: 1.5rem; }
summary {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.125rem;
}
```

### Form Input (Lead Form)

```css
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border-radius: 12px;
  border: 2px solid #e4e4e7;
  background: #f8fafc;
  color: #18181b;
  font-size: 1rem;
  transition: all 0.2s;
}
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #FF6600;
  background: white;
}
```

### Pain Card `.pain-card`

```css
.pain-card {
  background-color: #27272a;
  padding: 1.5rem;
  border-radius: 1rem;          /* 16px */
  border: 1px solid rgba(255,255,255,0.05);
  text-align: center;
}
```

### Testimonial Card `.testimonial-card`

```css
.testimonial-card {
  background: #18181b;
  padding: 2.5rem 2rem;
  border-radius: 2rem;          /* 32px */
  border: 1px solid rgba(255,255,255,0.05);
  width: 380px;
  min-height: 280px;
  flex-shrink: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
/* Aspas decorativas */
.testimonial-card::before {
  content: '"';
  position: absolute;
  /* posicionado em background gigante como gráfico */
}
```

### Seção Divisor (Barra Laranja)

```css
/* Usado em múltiplas seções como divisor de título */
div.divider-bar {
  width: 96px;
  height: 6px;
  background-color: #FF6600;
  border-radius: 99px;
  margin: 0 auto 1.5rem;
}
```

### Step Circle `.step-circle`

```css
.step-circle {
  width: 4rem;      /* 64px */
  height: 4rem;
  background-color: #18181b;
  border: 4px solid #FF6600;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: 800;
  margin: 0 auto 1.5rem;
  box-shadow: 0 0 20px rgba(255,102,0,0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.step-item:hover .step-circle {
  background-color: #FF6600;
  transform: scale(1.1) rotate(10deg);
  color: white;
  box-shadow: 0 0 30px rgba(255,102,0,0.5);
}
```

---

## ANTI-PADRÕES REGISTRADOS

❌ **Hero com carrossel de slides automático** — Em vez disso: hero estático de alta densidade com 2 colunas, imagem secundária com badge de rating flutuante e glow blob contextual. A imobilidade calculada gera mais autoridade que movimento genérico.

❌ **Ícones de serviço com bibliotecas de flat icons coloridos** — Em vez disso: SVG inline stroke monochrome com `color: var(--primary)` sobre fundo `rgba(255,102,0,0.1)`. Consistência total de sistema sem dependência externa.

❌ **Seção de depoimentos com cards estáticos em grid 3 colunas** — Em vez disso: infinite horizontal scroll full-bleed que sangra o container e pausa no hover. Movimento contínuo que comunica volume de avaliações de forma implícita.

❌ **CTA Section com gradiente de laranja genérico** — Em vez disso: imagem real da oficina com overlay laranja `opacity: 0.92` — a textura fotográfica vaza subliminarmente sob a cor sólida, criando profundidade que gradiente sintético não tem.

❌ **Step/processo em lista numerada simples** — Em vez disso: pista de corrida em CSS puro com faixa tracejada de asfalto + partícula de luz laranja animada percorrendo a trilha + pulso sequencial nos step circles sincronizado com a partícula. Metáfora automotiva integrada ao componente funcional.

❌ **FAQ com JavaScript para accordion** — Em vez disso: `<details>/<summary>` nativo do HTML5, zero JavaScript, acessibilidade nativa, performance máxima sem dependências.

❌ **Galeria de fotos em lightbox ou grid estático** — Em vez disso: carousel de vídeo com perspectiva 3D real (`perspective: 1200px + rotateY(±6deg)`) para os slides laterais. Único no segmento de oficinas mecânicas locais.

❌ **Botão de WhatsApp sem personalidade** — Em vez disso: efeito sonar/ping pulsante com `box-shadow keyframes` + badge de "1 mensagem não lida" com animação própria `badgeBounce`. Simula notificação real para aumentar urgência de clique.
