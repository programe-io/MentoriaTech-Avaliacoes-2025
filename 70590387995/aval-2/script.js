// ===== MENU MOBILE =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.querySelector('i').classList.toggle('fa-times');
});

// ===== PARTÍCULAS ANIMADAS =====
const particlesContainer = document.getElementById('particles');

for (let i = 0; i < 25; i++) {
  const span = document.createElement('span');
  span.classList.add('particle');
  span.style.left = `${Math.random() * 100}%`;
  span.style.animationDuration = `${3 + Math.random() * 4}s`;
  span.style.animationDelay = `${Math.random() * 2}s`;
  particlesContainer.appendChild(span);
}

// CSS animado via JS
const style = document.createElement('style');
style.innerHTML = `
  .particle {
    position: absolute;
    bottom: 0;
    width: 6px;
    height: 6px;
    background: radial-gradient(circle, #ff007f, #00f7ff);
    border-radius: 50%;
    opacity: 0.7;
    animation: floatUp linear infinite;
  }
  @keyframes floatUp {
    from { transform: translateY(0); opacity: 0.9; }
    to { transform: translateY(-100vh); opacity: 0; }
  }
`;
document.head.appendChild(style);
