// Dados simulados (substituiriam uma chamada ao backend)
const servicesData = [
  {
    title: "Desenvolvimento Web",
    description: "Criação de websites rápidos, seguros e otimizados, com foco total em experiência do usuário (UX).",
    color: "acento-primario",
    svgPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
  },
  {
    title: "Branding & Design",
    description: "Desenvolvimento de identidade visual forte e coerente que comunica a essência da sua marca.",
    color: "acento-secundario",
    svgPath: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
  },
  {
    title: "Otimização SEO",
    description: "Estratégias para aumentar a visibilidade orgânica do seu site e atrair mais clientes qualificados.",
    color: "acento-primario",
    svgPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
  }
];

// Renderiza os serviços dinamicamente
function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container) return;

  container.innerHTML = servicesData.map(service => `
    <div class="bg-fundo-principal p-8 rounded-xl shadow-2xl transition duration-300 hover:ring-2 hover:ring-${service.color}">
      <div class="text-${service.color} mb-4">
        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${service.svgPath}"></path>
        </svg>
      </div>
      <h3 class="text-2xl font-semibold mb-3">${service.title}</h3>
      <p class="text-gray-400">${service.description}</p>
    </div>
  `).join('');
}

// Interatividade geral
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  // Renderiza os cards
  renderServices();

  // Alternar menu mobile
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Fechar menu ao clicar em um link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
  });

  // Feedback e rolagem suave ao clicar nos botões de contato
  document.querySelectorAll('a[href="#contato"]').forEach(cta => {
    cta.addEventListener('click', e => {
      e.preventDefault();

      const feedbackMessage = document.createElement('div');
      feedbackMessage.textContent = 'Obrigado pelo seu interesse! Você está sendo redirecionado...';
      feedbackMessage.className = 'fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-xl z-50 transition duration-500 opacity-0';
      document.body.appendChild(feedbackMessage);

      setTimeout(() => feedbackMessage.classList.remove('opacity-0'), 10);
      document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        feedbackMessage.classList.add('opacity-0');
        feedbackMessage.addEventListener('transitionend', () => feedbackMessage.remove());
      }, 3000);
    });
  });
});
