# Script para renomear arquivos e atualizar a documentação
$baseDir = "c:\Users\mauri\Documents\00 Processo Landing Pages\03 - LP Concluídas\LP - Vasque Auto Center (Oficina)\Fotos e Vídeos Vasques"
$descFile = Join-Path $baseDir "Descrição das imagens e videos.txt"

# 1. Renomear Vídeos (MP4)
# Mapeamento manual baseado na análise anterior
$videos = @{
    "WhatsApp Video 2026-03-12 at 13.32.05.mp4" = "video-institucional-oficina-mecanica-bangu.mp4"
    "WhatsApp Video 2026-03-12 at 13.32.05 (1).mp4" = "video-alinhamento-3d-economia-pneus-rj.mp4"
    "WhatsApp Video 2026-03-12 at 13.32.05 (2).mp4" = "video-tour-oficina-vasques-auto-center-rj.mp4"
    "WhatsApp Video 2026-03-12 at 13.32.06.mp4" = "video-reparo-radiador-condensador-vw-polo.mp4"
}

foreach ($old in $videos.Keys) {
    if (Test-Path (Join-Path $baseDir $old)) {
        Rename-Item -Path (Join-Path $baseDir $old) -NewName $videos[$old] -Force
    }
}

# 2. Renomear Webp (Imagens/Frames)
# Como não temos as imagens originais "WhatsApp Image...", vamos renomear os frames existentes
# que estão sendo usados como fotos.
$webps = Get-ChildItem -Path $baseDir -Filter "*.webp"

$count = 1
foreach ($file in $webps) {
    # Nomes sugeridos com base no uso e SEO
    $newName = ""
    if ($file.Name -like "*(17).webp") { $newName = "fachada-oficina-mecanica-vasques-bangu.webp" }
    elseif ($file.Name -like "*(22).webp") { $newName = "atendimento-especializado-carros-rj.webp" }
    elseif ($file.Name -like "*(1).webp" -and $file.Name -notlike "*(1) (1)*") { $newName = "entrada-principal-vasques-auto-center.webp" }
    else {
        $newName = "galeria-servicos-mecanicos-bangu-$count.webp"
        $count++
    }
    
    Rename-Item -Path $file.FullName -NewName $newName -Force
}

# 3. Atualizar o arquivo de descrição
# Vamos criar um novo conteúdo mais organizado
$newDesc = @"
RESUMO DE MÍDIA ORGANIZADO — VASQUES AUTO CENTER
------------------------------------------------

VÍDEOS (SEO & INFORMATIVO)
1. video-institucional-oficina-mecanica-bangu.mp4
   - Descrição: Vídeo institucional com o proprietário falando sobre a confiança da oficina.
   - SEO: oficina mecânica bangu, confiança, vasques auto center.

2. video-alinhamento-3d-economia-pneus-rj.mp4
   - Descrição: Vídeo educativo sobre a importância do alinhamento 3D para a economia de pneus.
   - SEO: alinhamento 3d rj, economia de pneus, manutenção preventiva.

3. video-tour-oficina-vasques-auto-center-rj.mp4
   - Descrição: Tour completo pela estrutura da oficina (fachada, pátio, serviços).
   - SEO: oficina mecânica completa bangu, infraestrutura automotiva.

4. video-reparo-radiador-condensador-vw-polo.mp4
   - Descrição: Case real de reparo de radiador em um VW Polo, demonstrando transparência técnica.
   - SEO: reparo radiador bangu, manutenção wv polo, oficina transparente.

FOTOS E FRAMES (GALERIA REAL)
1. fachada-oficina-mecanica-vasques-bangu.webp
   - Vista externa principal da oficina em Bangu.
2. entrada-principal-vasques-auto-center.webp
   - Detalhe da entrada com logo e banners de serviço.
3. atendimento-especializado-carros-rj.webp
   - Mecânico atendendo veículo com foco em profissionalismo.
4. galeria-servicos-mecanicos-bangu-[X].webp
   - Série de frames (1 a 22) mostrando diferentes ângulos da oficina e serviços em execução.

NOTA: Todos os nomes foram otimizados para SEO e clareza informativa conforme solicitado.
"@

$newDesc | Out-File -FilePath (Join-Path $baseDir "Descrição das imagens e videos.txt") -Encoding utf8
