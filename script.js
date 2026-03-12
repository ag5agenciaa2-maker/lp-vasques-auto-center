/**
 * Vasques Auto Center - Script Principal
 */

document.addEventListener('DOMContentLoaded', () => {
    // ── Smart Header (esconde no scroll down, reaparece no scroll up) ──
    const navbar = document.querySelector('.navbar');
    let lastScrollY = 0;
    let ticking = false;
    const SCROLL_THRESHOLD = 80; // Só esconde após rolar além da altura do header

    function updateNavbar() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > SCROLL_THRESHOLD) {
            if (currentScrollY > lastScrollY) {
                // Rolando para baixo - esconde
                navbar.classList.add('navbar--hidden');
            } else {
                // Rolando para cima - mostra
                navbar.classList.remove('navbar--hidden');
            }
        } else {
            // No topo da página - sempre visível
            navbar.classList.remove('navbar--hidden');
        }

        lastScrollY = currentScrollY;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }, { passive: true });
    // ── Menu Mobile ──────────────────────────────────────────────
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconMenu = document.getElementById('icon-menu');
    const iconClose = document.getElementById('icon-close');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('open');
            iconMenu.classList.toggle('hidden', isOpen);
            iconClose.classList.toggle('hidden', !isOpen);
        });

        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                iconMenu.classList.remove('hidden');
                iconClose.classList.add('hidden');
            });
        });
    }

    // ── Interação nos Cards de Serviço ───────────────────────────
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = 'rgba(255, 102, 0, 0.5)';
            card.style.backgroundColor = 'rgba(39, 39, 42, 0.8)';
            const title = card.querySelector('h3');
            if (title) title.style.color = '#FF6600';
            const icon = card.querySelector('.service-icon-container'); // Renomeado para maior clareza
            if (icon) icon.style.transform = 'scale(1.1)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            card.style.backgroundColor = '';
            const title = card.querySelector('h3');
            if (title) title.style.color = '';
            const icon = card.querySelector('.service-icon-container');
            if (icon) icon.style.transform = '';
        });
    });

    // ── Ano no Rodapé ──────────────────────────────────────────────
    const footerYear = document.getElementById('footer-year');
    if (footerYear) {
        footerYear.textContent = `© ${new Date().getFullYear()} Vasques Auto Center - Todos os direitos reservados.`;
    }

    // ── Smooth Scroll para links internos ────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset para o navbar fixo
                    behavior: 'smooth'
                });
            }
        });
    });

    // ── Galeria de Vídeos - Carousel ──────────────────────────────
    const videoSlides = document.querySelectorAll('.video-slide');
    const videoDots = document.querySelectorAll('.video-dot');
    const btnAtivarSom = document.getElementById('btnAtivarSom');
    const totalSlides = videoSlides.length;
    let currentVideoIndex = 0;
    let isTransitioning = false;
    let somDesbloqueado = false; // Controla se o usuário já desbloqueou o som

    if (totalSlides > 0) {

        // Função auxiliar para iniciar reprodução do vídeo ativo
        function playActiveVideo(activeSlide, activeVideo) {
            const duration = activeVideo.duration;
            if (duration && isFinite(duration)) {
                activeSlide.style.setProperty('--video-duration', duration + 's');
            }
            activeSlide.classList.add('is-playing');
        }

        // Função para posicionar cada slide
        function updateVideoCarousel(newIndex) {
            if (isTransitioning) return;
            isTransitioning = true;

            // Pausar e mutar todos os vídeos
            videoSlides.forEach(slide => {
                const video = slide.querySelector('.video-player');
                if (video) {
                    video.pause();
                    video.muted = true;
                }
                slide.classList.remove('is-active', 'is-prev', 'is-next', 'is-hidden', 'is-playing');
                slide.style.removeProperty('--video-duration');
            });

            currentVideoIndex = newIndex;

            // Calcular índices dos vizinhos
            const prevIndex = (currentVideoIndex - 1 + totalSlides) % totalSlides;
            const nextIndex = (currentVideoIndex + 1) % totalSlides;

            // Aplicar classes
            videoSlides.forEach((slide, i) => {
                if (i === currentVideoIndex) {
                    slide.classList.add('is-active');
                } else if (i === prevIndex) {
                    slide.classList.add('is-prev');
                } else if (i === nextIndex) {
                    slide.classList.add('is-next');
                } else {
                    slide.classList.add('is-hidden');
                }
            });

            // Atualizar indicadores
            videoDots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentVideoIndex);
            });

            // Reproduzir vídeo ativo após a transição
            setTimeout(() => {
                const activeSlide = videoSlides[currentVideoIndex];
                const activeVideo = activeSlide.querySelector('.video-player');
                if (activeVideo) {
                    activeVideo.currentTime = 0;

                    // Tentar reproduzir COM som
                    activeVideo.muted = false;
                    const playPromise = activeVideo.play();
                    if (playPromise !== undefined) {
                        playPromise.then(() => {
                            // Conseguiu reproduzir com som
                            somDesbloqueado = true;
                            if (btnAtivarSom) btnAtivarSom.style.display = 'none';
                            playActiveVideo(activeSlide, activeVideo);
                        }).catch(() => {
                            // Navegador bloqueou o som - reproduzir muted + mostrar botão
                            activeVideo.muted = true;
                            activeVideo.play().then(() => {
                                playActiveVideo(activeSlide, activeVideo);
                                // Mostrar botão de ativar som se ainda não desbloqueou
                                if (!somDesbloqueado && btnAtivarSom) {
                                    btnAtivarSom.style.display = 'flex';
                                }
                            }).catch(() => {});
                        });
                    }
                }
                isTransitioning = false;
            }, 750);
        }

        // Avançar para o próximo vídeo
        function nextVideo() {
            const next = (currentVideoIndex + 1) % totalSlides;
            updateVideoCarousel(next);
        }

        // Listener para quando o vídeo terminar - avançar automaticamente
        videoSlides.forEach(slide => {
            const video = slide.querySelector('.video-player');
            if (video) {
                video.addEventListener('ended', () => {
                    nextVideo();
                });
            }
        });

        // Clique nos indicadores (dots)
        videoDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.dataset.index, 10);
                if (index !== currentVideoIndex) {
                    updateVideoCarousel(index);
                }
            });
        });

        // Clique nos slides: ativo = pausar/despausar, lateral = navegar
        videoSlides.forEach(slide => {
            slide.addEventListener('click', () => {
                const index = parseInt(slide.dataset.index, 10);
                if (index === currentVideoIndex) {
                    // Clicou no vídeo ativo - pausar/despausar
                    const video = slide.querySelector('.video-player');
                    if (video) {
                        if (video.paused) {
                            video.muted = false;
                            video.play();
                            slide.classList.add('is-playing');
                            somDesbloqueado = true;
                            if (btnAtivarSom) btnAtivarSom.style.display = 'none';
                        } else {
                            video.pause();
                            slide.classList.remove('is-playing');
                        }
                    }
                } else {
                    // Clicou em slide lateral - navegar
                    updateVideoCarousel(index);
                }
            });
        });

        // Botão "Ativar Som" - desbloqueia o áudio
        if (btnAtivarSom) {
            btnAtivarSom.addEventListener('click', (e) => {
                e.stopPropagation(); // Não propagar para o slide
                somDesbloqueado = true;
                btnAtivarSom.style.display = 'none';
                const activeVideo = videoSlides[currentVideoIndex].querySelector('.video-player');
                if (activeVideo) {
                    activeVideo.muted = false;
                    if (activeVideo.paused) {
                        activeVideo.play();
                    }
                }
            });
        }

        // Iniciar o carousel - vídeo 1 começa automaticamente
        updateVideoCarousel(0);
    }

    // ── Carrossel de História ──────────────────────────────
    const historyCarousel = document.getElementById('historyCarousel');
    const historyImages = document.querySelectorAll('#historyCarousel img');
    const btnPrev = document.getElementById('historyPrev');
    const btnNext = document.getElementById('historyNext');

    if (historyImages.length > 0) {
        let historyIndex = 0;
        let isPaused = false;
        let historyTimer;

        const showNext = () => {
            historyImages[historyIndex].classList.remove('active');
            historyIndex = (historyIndex + 1) % historyImages.length;
            historyImages[historyIndex].classList.add('active');
        };

        const showPrev = () => {
            historyImages[historyIndex].classList.remove('active');
            historyIndex = (historyIndex - 1 + historyImages.length) % historyImages.length;
            historyImages[historyIndex].classList.add('active');
        };

        const startTimer = () => {
            clearInterval(historyTimer);
            historyTimer = setInterval(() => {
                if (!isPaused) showNext();
            }, 3000);
        };

        // Navegação manual
        if (btnNext) {
            btnNext.addEventListener('click', (e) => {
                e.stopPropagation();
                showNext();
                startTimer();
            });
        }

        if (btnPrev) {
            btnPrev.addEventListener('click', (e) => {
                e.stopPropagation();
                showPrev();
                startTimer();
            });
        }

        // Play/Pause ao clicar no carrossel
        if (historyCarousel) {
            historyCarousel.addEventListener('click', () => {
                isPaused = !isPaused;
                historyCarousel.classList.toggle('paused', isPaused);
            });
        }

        startTimer();
    }
});

// ── Máscara de Telefone (WhatsApp com DDD) ─────────────────────
const phoneInput = document.getElementById('phone');
if (phoneInput) {
  phoneInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número
    if (value.length > 11) value = value.slice(0, 11);
    
    // Formata: (XX) XXXXX-XXXX
    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    e.target.value = value;
  });
}

// ── WhatsApp Lead Form (Padrão AG5 - Formato Obrigatório Adaptado) ──────
document.getElementById('whatsappForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim() || 'Não informado';
  const vehicle = document.getElementById('car').value.trim() || 'Não informado';
  const service = document.getElementById('service').value;
  const messageText = document.getElementById('message').value.trim();
  
  // Formato obrigatório AG5 de mensagem adaptado para Oficina
  let message = `Olá, me chamo ${name}, vim através do site e gostaria de uma informação.%0A%0A`;
  message += `- Telefone: ${phone}%0A`;
  message += `- Veículo: ${vehicle}%0A`;
  message += `- Serviço Desejado: ${service}`;
  
  if (messageText) {
    message += `%0A- Relato do Problema: ${messageText}`;
  }
  
  const whatsappUrl = `https://wa.me/5521964779051?text=${encodeURIComponent(decodeURIComponent(message))}`;
  
  window.open(whatsappUrl, '_blank');
});
