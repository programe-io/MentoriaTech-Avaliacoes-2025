function pad(num) {
  return num.toString().padStart(2, '0');
}

function updateClock() {
  const now = new Date();
  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());
  const seconds = pad(now.getSeconds());

  const clock = document.getElementById('clock');
  clock.textContent = `${hours}:${minutes}:${seconds}`;
  clock.setAttribute('datetime', now.toISOString());

  // Atualiza as horas na tabela de fusos horários
  const saoPaulo = new Date(now.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));
  const lisboa = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Lisbon' }));
  const tokyo = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }));

  const rows = document.querySelectorAll('#informacoes tbody tr');
  rows[0].querySelector('time').textContent = `${pad(saoPaulo.getHours())}:${pad(saoPaulo.getMinutes())}`;
  rows[0].querySelector('time').setAttribute('datetime', saoPaulo.toISOString());

  rows[1].querySelector('time').textContent = `${pad(lisboa.getHours())}:${pad(lisboa.getMinutes())}`;
  rows[1].querySelector('time').setAttribute('datetime', lisboa.toISOString());

  rows[2].querySelector('time').textContent = `${pad(tokyo.getHours())}:${pad(tokyo.getMinutes())}`;
  rows[2].querySelector('time').setAttribute('datetime', tokyo.toISOString());
}

// Atualiza imediatamente e depois a cada segundo
updateClock();
setInterval(updateClock, 1000);
