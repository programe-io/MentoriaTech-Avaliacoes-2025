// JavaScript para o site Car Premium

// Botão de "Saiba Mais" com alerta
const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Obrigado pelo interesse! Em breve enviaremos mais detalhes sobre este veículo.');
  });
});

// Efeito de scroll suave para o menu
const linksMenu = document.querySelectorAll('nav a');

linksMenu.forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== '') {
      e.preventDefault();
      const destino = document.querySelector(this.hash);
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
