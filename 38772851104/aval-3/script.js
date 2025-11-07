// Atualiza o ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Menu responsivo
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));

// Botão Explorar abre o aside
const sidebar = document.getElementById('sidebar');
const demoBtn = document.getElementById('demoBtn');
const toggleSidebar = document.getElementById('toggleSidebar');

demoBtn.addEventListener('click', () => sidebar.classList.add('open'));
toggleSidebar.addEventListener('click', () => sidebar.classList.remove('open'));

// Animação leve nos cards ao clicar no botão
demoBtn.addEventListener('click', () => {
  document.querySelectorAll('.card').forEach((card, i) => {
      card.animate([
            { transform: 'scale(1)', boxShadow: '0 8px 30px rgba(0,0,0,0.1)' },
                  { transform: 'scale(1.03)', boxShadow: '0 12px 40px rgba(37,99,235,0.2)' },
                        { transform: 'scale(1)', boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }
                            ], { duration: 600 + i * 100, easing: 'ease-out' });
                              });
                              });