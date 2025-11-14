/* script.js — JavaScript completo para site
   Inclui:
   - Menu mobile
   - Animações simples
   - Formulário com validação e mensagem de sucesso
   - Scroll suave
   - Tema claro/escuro
   - Utilidades gerais
*/

// ---------------------- MENU MOBILE ----------------------
const navToggle = document.createElement('button');
navToggle.textContent = "☰ Menu";
avToggle.className = "nav-toggle";
document.querySelector('header .container').prepend(navToggle);

navToggle.addEventListener('click', () => {
  const nav = document.querySelector('nav.primary');
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});

// ---------------------- SCROLL SUAVE ----------------------
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const destino = document.querySelector(link.getAttribute('href'));
    if (destino) {
      e.preventDefault();
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ---------------------- FORMULÁRIO ----------------------
const form = document.getElementById('contact-form');
const feedback = document.getElementById('contact-feedback');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const dados = new FormData(form);
    const nome = dados.get('name') || 'Visitante';

    // Simulação de envio
    setTimeout(() => {
      feedback.textContent = `Mensagem enviada com sucesso! Obrigado, ${nome}.`;
      feedback.style.color = "green";
      form.reset();
    }, 500);
  });
}

// ---------------------- ANIMAÇÃO AO ROLAR ----------------------
const elementosAnimar = document.querySelectorAll('.fade-in');

function animarAoRolar() {
  const trigger = window.innerHeight * 0.85;

  elementosAnimar.forEach(el => {
    const topo = el.getBoundingClientRect().top;
    if (topo < trigger) el.classList.add('ativo');
  });
}

window.addEventListener('scroll', animarAoRolar);
animarAoRolar();

// ---------------------- TEMA CLARO/ESCURO ----------------------
let temaClaro = true;

const botaoTema = document.createElement('button');
botaoTema.textContent = "Alternar Tema";
botaoTema.style.marginLeft = "1rem";
botaoTema.className = "secondary";
document.querySelector('header .container').appendChild(botaoTema);

botaoTema.addEventListener('click', () => {
  temaClaro = !temaClaro;
  if (!temaClaro) {
    document.documentElement.style.setProperty('--bg', '#0b1220');
    document.documentElement.style.setProperty('--text', '#e6eefc');
    document.body.style.background = '#0b1220';
    document.body.style.color = '#e6eefc';
  } else {
    document.documentElement.style.setProperty('--bg', '#f7f7fb');
    document.documentElement.style.setProperty('--text', '#0f172a');
    document.body.style.background = '#f7f7fb';
    document.body.style.color = '#0f172a';
  }
});

// ---------------------- UTILIDADES ----------------------
function saudacao(nome) {
  return `Olá, ${nome}!`; 
}
console.log(saudacao('Visitante'));