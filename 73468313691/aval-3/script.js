script.js */
const progress = document.createElement('div');
progress.style.position = 'fixed';
progress.style.top = 0;
progress.style.left = 0;
progress.style.height = '4px';
progress.style.background = 'linear-gradient(90deg, var(--accent), #7c3aed)';
progress.style.width = '0%';
progress.style.zIndex = '9999';
document.body.appendChild(progress);


document.addEventListener('scroll', ()=>{
const h = document.documentElement;
const percent = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
progress.style.width = percent + '%';
});


// Busca de posts
const posts = Array.from(document.querySelectorAll('.post'));
document.getElementById('btnSearch').addEventListener('click', ()=>{
const q = document.getElementById('q').value.toLowerCase();
posts.forEach(p => {
const title = p.querySelector('h3').innerText.toLowerCase();
p.style.display = title.includes(q) || q === '' ? 'block' : 'none';
});
});


// Alternar tema
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', ()=>{
document.body.style.background = document.body.style.background === 'white' ? 'var(--bg)' : 'white';
document.body.style.color = document.body.style.color === 'black' ? '#e6eef6' : 'black';
});