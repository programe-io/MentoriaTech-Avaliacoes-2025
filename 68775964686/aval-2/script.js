// Controle do player
theAudio = document.getElementById('audioPlayer');
volume = document.getElementById('volumeRange');

volume.addEventListener('input', () => {
  theAudio.volume = volume.value;
});

// Busca de música (simulada)
function buscarMusica(){
  let termo = document.getElementById('buscar').value;
  if(termo === ""){
    alert("Digite algo para buscar");
    return;
  }
  alert("Buscando por: " + termo + " (simulado)");
}
