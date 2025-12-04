// ============================
//   script.js - Versão BTS
//   Interações do site
// ============================

document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.getElementById('themeToggle');
  const navLinks = document.querySelectorAll('.main-nav a');
  const members = document.querySelectorAll('.member');

  // =============================
  //   Alternar Tema (Roxo/Escuro)
  // =============================
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    const modoEscuro = document.body.classList.contains('dark');
    themeBtn.textContent = modoEscuro ? "Tema Roxo" : "Tema Escuro";
  });

  // =============================
  //      Scroll Suave Menu
  // =============================
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const destino = document.querySelector(link.getAttribute('href'));
      destino.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // =============================
  //   Clique nos Integrantes (Card)
  // =============================
  members.forEach(member => {
    member.addEventListener('click', () => {
      const nome = member.querySelector('h3').textContent;
      mostrarToast(`${nome} — integrante selecionado! 💜`);
    });
  });

  // =============================
  //     Função Toast (Mensagem)
  // =============================
  function mostrarToast(msg) {
    const alerta = document.createElement('div');
    alerta.textContent = msg;
    alerta.className = 'toast';

    Object.assign(alerta.style, {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: '#6a0dad',
      color: '#fff',
      padding: '12px 18px',
      borderRadius: '10px',
      opacity: '0',
      zIndex: '5000',
      boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
      transition: 'opacity .3s'
    });

    document.body.appendChild(alerta);

    setTimeout(() => alerta.style.opacity = '1', 50);

    setTimeout(() => {
      alerta.style.opacity = '0';
      setTimeout(() => alerta.remove(), 300);
    }, 2500);
  }
});
