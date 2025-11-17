const btn = document.getElementById('btnFavorito');
const statusMsg = document.getElementById('statusMsg');

btn.addEventListener('click', () => {
  const horario = new Date().toLocaleTimeString('pt-BR', { hour12: false });
  statusMsg.textContent = `Status: marcado como favorito às ${horario}.`;
  statusMsg.style.borderColor = '#39e58b';
  statusMsg.style.background = '#122135';
});
