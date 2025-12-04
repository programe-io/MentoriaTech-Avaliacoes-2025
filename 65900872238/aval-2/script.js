// Script principal: interatividade mínima, sem dependências
document.addEventListener('DOMContentLoaded',()=>{
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
// carregamento do tema salvo
if(localStorage.getItem('tema') === 'claro'){
body.classList.add('tema-claro');
themeBtn.textContent = '☀️';
themeBtn.setAttribute('aria-pressed','true');
}


themeBtn.addEventListener('click',()=>{
const ativo = body.classList.toggle('tema-claro');
themeBtn.setAttribute('aria-pressed', String(ativo));
themeBtn.textContent = ativo ? '☀️' : '🌙';
localStorage.setItem('tema', ativo ? 'claro' : 'escuro');
});


// Player: atualizar progress
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');
const favBtn = document.getElementById('fav-btn');


if(audio){
audio.addEventListener('timeupdate',()=>{
const pct = (audio.currentTime / audio.duration) * 100 || 0;
progress.value = pct;
});
}


volume?.addEventListener('input',(e)=>{
if(audio) audio.volume = parseFl