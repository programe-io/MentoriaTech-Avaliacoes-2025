// Função para mostrar uma seção e ocultar as outras
function showSection(event, sectionId) {
  event.preventDefault();
  const sections = ['apps-sites', 'inteligencia-artificial', 'jogos-scratch'];
  sections.forEach(id => {
    document.getElementById(id).style.display = (id === sectionId) ? 'block' : 'none';
  });
  // Atualiza estilos do menu
  const links = document.querySelectorAll('nav a');
  links.forEach(link => link.classList.remove('active'));
  event.target.classList.add('active');
}

// Interatividade botão que muda de cor
const button = document.getElementById('colorToggleButton');
let isMagenta = true;
button.onclick = () => {
  if (isMagenta) {
    button.style.backgroundColor = 'var(--azul-claro)';
    button.textContent = 'Agora Azul! Clique para Magenta';
  } else {
    button.style.backgroundColor = 'var(--magenta-claro)';
    button.textContent = 'Agora Magenta! Clique para Azul';
  }
  isMagenta = !isMagenta;
};

// Chatbot simples para IA
function chatbotResponse() {
  const input = document.getElementById('chatInput').value.toLowerCase().trim();
  const responseElement = document.getElementById('chatResponse');
  let response = 'Desculpe, não entendi.';

  if (input.includes('oi') || input.includes('olá')) {
    response = 'Olá! Como posso ajudar você com tecnologia?';
  } else if (input.includes('inteligência artificial')) {
    response = 'IA é usar computadores para simular a inteligência humana.';
  } else if (input.includes('jogo')) {
    response = 'Com Scratch, você pode criar jogos incríveis!';
  } else if (input.length === 0) {
    response = 'Digite algo para conversar!';
  }

  responseElement.textContent = response;
}
