// Menu mobile
const btn = document.getElementById('menuBtn');
btn.addEventListener('click', ()=>{
  const nav = document.querySelector('nav ul');
  if(nav.style.display === 'flex') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.background = 'linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))';
    nav.style.position = 'absolute';
    nav.style.right = '20px';
    nav.style.top = '68px';
    nav.style.padding = '12px';
    nav.style.borderRadius = '12px';
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    if(this.getAttribute('href') === '#') return;
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
  })
});
