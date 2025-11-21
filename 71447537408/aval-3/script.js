// Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark');
}

// Animação de entrada das listas
function animateList(id) {
    const items = document.querySelectorAll(`#${id} li`);
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.animation = 'fadeInUp 0.6s forwards';
        }, index * 200);
    });
}

window.onload = () => {
    animateList('skills');
    animateList('who');
    animateList('offers');
};

// Modal Form
const modal = document.getElementById("modalForm");
const openBtn = document.getElementById("openFormBtn");
const closeBtn = document.getElementById("closeForm");

openBtn.onclick = () => { modal.style.display = "block"; }
closeBtn.onclick = () => { modal.style.display = "none"; }
window.onclick = (e) => { if(e.target==modal) modal.style.display="none"; }

// Form submit
function submitForm() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const language = document.getElementById("language").value;
    const message = document.getElementById("message").value;

    if(!name || !address || !email || !language) {
        alert("Por favor, preencha todos os campos obrigatórios!");
        return;
    }

    alert(`Candidatura enviada com sucesso!\n\nNome: ${name}\nEndereço: ${address}\nEmail: ${email}\nLinguagem: ${language}\nMensagem: ${message}`);
    modal.style.display = "none";

    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
    document.getElementById("language").value = "";
    document.getElementById("message").value = "";
}

// Fundo animado com partículas e linhas
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const colors = ["#0d6efd","#00f0ff","#ff00ff","#ff9900"];
const maxDistance = 150;

class Particle {
    constructor(){
        this.x = Math.random()*canvas.width;
        this.y = Math.random()*canvas.height;
        this.size = Math.random()*3 + 1;
        this.speedX = Math.random()*1.5 - 0.75;
        this.speedY = Math.random()*1.5 - 0.75;
        this.color = colors[Math.floor(Math.random()*colors.length)];
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.x<0||this.x>canvas.width) this.speedX*=-1;
        if(this.y<0||this.y>canvas.height) this.speedY*=-1;
    }
    draw() {
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        ctx.fill();
    }
}

function connectParticles() {
    for(let a=0;a<particlesArray.length;a++){
        for(let b=a;b<particlesArray.length;b++){
            const dx = particlesArray[a].x - particlesArray[b].x;
            const dy = particlesArray[a].y - particlesArray[b].y;
            const distance = Math.sqrt(dx*dx + dy*dy);
            if(distance < maxDistance){
                ctx.strokeStyle = `rgba(0,255,234,${1-distance/maxDistance})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x,particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x,particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

function initParticles(num=200){
    particlesArray = [];
    for(let i=0;i<num;i++) particlesArray.push(new Particle());
}

function animateParticles(){
    ctx.fillStyle = 'rgba(15,15,30,0.3)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    particlesArray.forEach(p => {
        p.update();
        p.draw();
    });
    connectParticles();
    requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles(200);
});

initParticles(200);
animateParticles();
