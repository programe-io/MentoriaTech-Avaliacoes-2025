// DARK MODE
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  darkModeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// MOBILE MENU
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// SCROLL ANIMATION
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// TYPING EFFECT HERO
const typedText = document.getElementById('typed-text');
const phrases = ["Junte-se a nós e transforme tecnologia em inovação", "Estamos buscando desenvolvedores talentosos"];
let i = 0, j = 0, isDeleting = false, speed = 100;

function type(){
  if(i >= phrases.length) i = 0;
  let currentPhrase = phrases[i].split("");
  if(!isDeleting){
    typedText.textContent += currentPhrase[j];
    j++;
    if(j === currentPhrase.length){ isDeleting = true; speed = 2000; }
    else speed = 100;
  } else {
    typedText.textContent = typedText.textContent.slice(0, j-1);
    j--;
    if(j === 0){ isDeleting = false; i++; speed = 500; }
    else speed = 50;
  }
  setTimeout(type, speed);
}
type();

// FORM SUBMISSION
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Mensagem enviada! Obrigado pelo contato.');
  form.reset();
});

// HERO PARTICLES
const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const colors = ['#4cafef','#00d4ff','#fff'];

class Particle {
  constructor(){
    this.x = Math.random()*canvas.width;
    this.y = Math.random()*canvas.height;
    this.size = Math.random()*3+1;
    this.speedX = Math.random()*2-1;
    this.speedY = Math.random()*2-1;
    this.color = colors[Math.floor(Math.random()*colors.length)];
  }
  update(){
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.x <0 || this.x>canvas.width) this.speedX*=-1;
    if(this.y <0 || this.y>canvas.height) this.speedY*=-1;
  }
  draw(){
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    ctx.fill();
  }
}

function initParticles(){
  particlesArray = [];
  for(let i=0;i<100;i++){
    particlesArray.push(new Particle());
  }
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particlesArray.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animate);
}

initParticles();
animate();

window.addEventListener('resize', ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});
