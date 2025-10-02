function atualizarRelogio() {
  const agora = new Date();

  let horas = agora.getHours().toString().padStart(2, '0');
  let minutos = agora.getMinutes().toString().padStart(2, '0');
  let segundos = agora.getSeconds().toString().padStart(2, '0');

  document.getElementById('relogio').textContent = `${horas}:${minutos}:${segundos}`;
}

function atualizarAno() {
  document.getElementById('ano').textContent = new Date().getFullYear();
}

// Atualiza o relógio a cada 1 segundo
setInterval(atualizarRelogio, 1000);

// Chamada inicial para não esperar o primeiro intervalo
atualizarRelogio();
atualizarAno();
