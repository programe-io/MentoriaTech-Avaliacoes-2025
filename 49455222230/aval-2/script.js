<// Menu responsivo
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Função para abrir projeto
function abrirProjeto(nomeProjeto) {
  alert('Você clicou em: ' + nomeProjeto);
}
