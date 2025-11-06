<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Blog de Música com Player</title>
  <style>
    body { font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px; }
    .player { background: #fff; padding: 20px; border-radius: 8px; max-width: 400px; margin: auto; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
    .track-title { font-size: 1.2em; margin-bottom: 10px; text-align: center; }
    .controls { text-align: center; }
    .controls button { margin: 0 10px; padding: 10px 20px; font-size: 1em; }
  </style>
</head>
<body>

  <div class="player">
    <div class="track-title" id="trackTitle">Nenhuma faixa selecionada</div>

    <audio id="audioPlayer" preload="metadata">
      <source id="audioSource" src="" type="audio/mpeg">
      Seu navegador não suporta o elemento de áudio.
    </audio>

    <div class="controls">
      <button id="prevBtn">« Anterior</button>
      <button id="playPauseBtn">Play</button>
      <button id="nextBtn">Próxima »</button>
    </div>
  </div>

  <script>
    // Lista de faixas — ajuste com os seus arquivos e URLs
    const playlist = [
      { title: "Faixa 1 – Artista A", src: "faixa1.mp3" },
      { title: "Faixa 2 – Artista B", src: "faixa2.mp3" },
      { title: "Faixa 3 – Artista C", src: "faixa3.mp3" }
    ];

    let currentTrackIndex = 0;
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');
    const trackTitle = document.getElementById('trackTitle');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function loadTrack(index) {
      const track = playlist[index];
      audioSource.src = track.src;
      audioPlayer.load();
      trackTitle.textContent = track.title;
      playPauseBtn.textContent = "Play";
    }

    function playTrack() {
      audioPlayer.play();
      playPauseBtn.textContent = "Pause";
    }

    function pauseTrack() {
      audioPlayer.pause();
      playPauseBtn.textContent = "Play";
    }

    playPauseBtn.addEventListener('click', () => {
      if (audioPlayer.paused) {
        playTrack();
      } else {
        pauseTrack();
      }
    });

    prevBtn.addEventListener('click', () => {
      currentTrackIndex = (currentTrackIndex > 0) ? currentTrackIndex - 1 : playlist.length - 1;
      loadTrack(currentTrackIndex);
      playTrack();
    });

    nextBtn.addEventListener('click', () => {
      currentTrackIndex = (currentTrackIndex < playlist.length - 1) ? currentTrackIndex + 1 : 0;
      loadTrack(currentTrackIndex);
      playTrack();
    });

    // Quando a faixa acabar, vai para a próxima
    audioPlayer.addEventListener('ended', () => {
      nextBtn.click();
    });

    // Carrega a primeira faixa ao iniciar
    loadTrack(currentTrackIndex);
  </script>

</body>
</html>
