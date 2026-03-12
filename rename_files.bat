@echo off
cd /d "c:\Users\mauri\Documents\00 Processo Landing Pages\03 - LP Concluídas\LP - Vasque Auto Center (Oficina)\Fotos e Vídeos Vasques"

:: Renomear Vídeos
ren "WhatsApp Video 2026-03-12 at 13.32.05.mp4" "video-institucional-oficina-mecanica-bangu.mp4"
ren "WhatsApp Video 2026-03-12 at 13.32.05 (1).mp4" "video-alinhamento-3d-economia-pneus-rj.mp4"
ren "WhatsApp Video 2026-03-12 at 13.32.05 (2).mp4" "video-tour-oficina-vasques-auto-center-rj.mp4"
ren "WhatsApp Video 2026-03-12 at 13.32.06.mp4" "video-reparo-radiador-condensador-vw-polo.mp4"

:: Renomear Imagens Principais
ren "WhatsApp Video 2026-03-12 at 13.32.05 (2) (17).webp" "fachada-oficina-mecanica-vasques-bangu.webp"
ren "WhatsApp Video 2026-03-12 at 13.32.05 (2) (22).webp" "atendimento-especializado-carros-rj.webp"
ren "WhatsApp Video 2026-03-12 at 13.32.05 (2).webp" "entrada-principal-vasques-auto-center.webp"

:: Renomear os frames restantes (loop simples em bat)
setlocal enabledelayedexpansion
set count=1
for %%f in ("WhatsApp Video*.webp") do (
    set "name=%%f"
    ren "!name!" "galeria-servicos-mecanicos-bangu-!count!.webp"
    set /a count+=1
)
