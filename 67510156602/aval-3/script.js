// Função que calcula quanto tempo passou desde a postagem
function tempoDecorrido(dataPostagem) {
  const agora = new Date();
  const diferenca = Math.floor((agora - dataPostagem) / 1000); // segundos
  if (diferenca < 60) return `há ${diferenca} segundos`;
  const minutos = Math.floor(diferenca / 60);
  if (minutos < 60) return `há ${minutos} minuto${minutos > 1 ? 's' : ''}`;
  const horas = Math.floor(minutos / 60);
  if (horas < 24) return `há ${horas} hora${horas > 1 ? 's' : ''}`;
  const dias = Math.floor(horas / 24);
  return `há ${dias} dia${dias > 1 ? 's' : ''}`;
}

// Função que atualiza todos os spans com classe .tempo
function atualizarTempos() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const data = card.getAttribute('data-time');
    const spanTempo = card.querySelector('.tempo');
    if (data && spanTempo) {
      const dataPostagem = new Date(data);
      spanTempo.textContent = tempoDecorrido(dataPostagem);
    }
  });
}

// Atualiza imediatamente e a cada 60 segundos
atualizarTempos();
setInterval(atualizarTempos, 60000);
