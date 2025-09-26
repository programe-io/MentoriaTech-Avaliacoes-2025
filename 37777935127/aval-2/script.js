    // 1. Mensagem de boas-vindas
window.onload = function () {
  alert("Bem-vindo ao Meu Site!");
};

// 2. Mostrar / esconder a sidebar
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar.style.display === 'none') {
    sidebar.style.display = 'block';
  } else {
    sidebar.style.display = 'none';
  }
}

// 3. Alerta ao clicar em um link do menu
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Impede o redirecionamento
    alert(`Você clicou em: ${this.textContent}`);
  });
});
