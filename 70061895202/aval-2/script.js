function atualizarRelogio() {
  const clock = document.getElementById('clock');
  const agora = new Date();

  let horas = agora.getHours().toString().padStart(2, '0');
  let minutos = agora.getMinutes().toString().padStart(2, '0');
  let segundos = agora.getSeconds().toString().padStart(2, '0');

  clock.textContent = `${horas}:${minutos}:${segundos}`;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();

function mostrarNome() {
  const nome = document.getElementById('inputNome').value;
  document.getElementById('outputNome').textContent = `Olá, ${nome}!`;
}
