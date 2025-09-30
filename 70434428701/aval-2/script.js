function atualizaRelogio() {
  const agora = new Date();

  // Formata hora, minuto e segundo para dois dígitos
  const hora = String(agora.getHours()).padStart(2, '0');
  const minuto = String(agora.getMinutes()).padStart(2, '0');
  const segundo = String(agora.getSeconds()).padStart(2, '0');

  const horarioFormatado = `${hora}:${minuto}:${segundo}`;

  document.getElementById('clock').textContent = horarioFormatado;
}

// Atualiza a cada segundo
setInterval(atualizaRelogio, 1000);

// Atualiza logo ao carregar a página
atualizaRelogio();
