// Interatividade básica: modo, fatos aleatórios e modal de imagens


const facts = [
'Gatos dormem em média 12–16 horas por dia.',
'O ronronar de um gato pode ter efeito calmante em humanos.',
'Gatos têm visão melhor em ambientes com pouca luz do que humanos.',
'O som de um miado foi desenvolvido pelos gatos para se comunicar com humanos.'
];


const factBtn = document.getElementById('factBtn');
const factDisplay = document.getElementById('factDisplay');
const themeToggle = document.getElementById('themeToggle');


// modo claro/escuro simples
themeToggle.addEventListener('click', ()=>{
const root = document.documentElement;
const isDark = root.getAttribute('data-theme') === 'dark';
root.setAttribute('data-theme', isDark ? '': 'dark');
themeToggle.textContent = isDark ? 'Modo escuro' : 'Modo claro';
themeToggle.setAttribute('aria-pressed', !isDark);
});


// fato aleatório
factBtn.addEventListener('click', ()=>{
const i = Math.floor(Math.random()*facts.length);
factDisplay.textContent = facts[i];
});


// modal para ampliar imagens
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalCaption = document.getElementById('modalCaption');
const closeModal = document.getElementById('closeModal');


function openModal(src, caption){
modalImg.src = src;
modalCaption.textContent = caption;
modal.setAttribute('aria-hidden','false');
}
function close(){
modal.setAttribute('aria-hidden','true');
modalImg.src = '';
}
closeModal.addEventListener('click', close);
modal.addEventListener('click', (e)=>{ if(e.target===modal) close(); });


// abrir modal ao clicar nas figuras
const figures = document.querySelectorAll('.gallery figure');
figures.forEach(fig=>{
const img = fig.querySelector('img');
fig.addEventListener('click', ()=> openModal(img.dataset.large || img.src, fig.querySelector('figcaption').textContent));
// permitir abrir com teclado (Enter)
fig.addEventListener('keydown', (e)=>{ if(e.key === 'Enter') openModal(img.dataset.large || img.src, fig.querySelector('figcaption').textContent); });
});


// fechar com Escape
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') close(); });