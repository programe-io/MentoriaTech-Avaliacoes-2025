/* ==============================
   BLOG LAÍS MARTINS - SCRIPT PRINCIPAL
   Autor: Laís Martins
   Descrição: Funções interativas para o blog de maquiagem
============================== */

/* ======= MENSAGEM DE BOAS-VINDAS ======= */
window.addEventListener('DOMContentLoaded', () => {
  const hora = new Date().getHours();
  const saudacao = document.createElement('div');
  const mensagem = document.createElement('p');

  if (hora < 12) {
    mensagem.textContent = 'Bom dia, diva da beleza! 💖';
  } else if (hora < 18) {
    mensagem.textContent = 'Boa tarde, linda! Continue brilhando ✨';
  } else {
    mensagem.textContent = 'Boa noite, estrela! 🌙';
  }

  saudacao.id = 'saudacao';
  saudacao.appendChild(mensagem);
  document.body.prepend(saudacao);

  setTimeout(() => saudacao.remove(), 4000);
});

/* ======= MODO CLARO / ESCURO ======= */
const btnTema = document.createElement('button');
btnTema.id = 'btnTema';
btnTema.textContent = '🌙 Modo Escuro';
document.body.appendChild(btnTema);

btnTema.addEventListener('click', () => {
  document.body.classList.toggle('modo-escuro');

  if (document.body.classList.contains('modo-escuro')) {
    btnTema.textContent = '☀️ Modo Claro';
    localStorage.setItem('tema', 'escuro');
  } else {
    btnTema.textContent = '🌙 Modo Escuro';
    localStorage.setItem('tema', 'claro');
  }
});

// Mantém o tema preferido
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'escuro') {
  document.body.classList.add('modo-escuro');
  btnTema.textContent = '☀️ Modo Claro';
}

/* ======= BOTÃO VOLTAR AO TOPO ======= */
const btnTopo = document.createElement('button');
btnTopo.id = 'btnTopo';
btnTopo.textContent = '⬆️';
document.body.appendChild(btnTopo);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnTopo.classList.add('visivel');
  } else {
    btnTopo.classList.remove('visivel');
  }
});

btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ======= MENU FIXO COM EFEITO ======= */
const menu = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    menu.classList.add('fixo');
  } else {
    menu.classList.remove('fixo');
  }
});
