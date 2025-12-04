<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>FuturoTech 3D - Empresa Futurista</title>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">
<style>
* { margin:0; padding:0; box-sizing:border-box; font-family:'Orbitron', sans-serif; }

body, html {
    height: 100%;
    overflow-x: hidden;
    background: radial-gradient(circle at 50% 50%, #0f0c29, #24243e);
    color: #00fff7;
}

/* Menu fixo */
header {
    position: fixed;
    top:0;
    width: 100%;
    background: rgba(0,0,0,0.85);
    border-bottom: 2px solid #00fff7;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    padding: 15px 50px;
    align-items: center;
    box-shadow: 0 0 30px #00fff7;
    backdrop-filter: blur(5px);
}

header h1 {
    font-size: 28px;
    color: #00fff7;
    text-shadow: 0 0 10px #00fff7;
}

nav a {
    color: #00fff7;
    text-decoration: none;
    margin-left: 25px;
    font-weight: bold;
    transition: 0.3s;
}

nav a:hover {
    color: #00ffea;
    text-shadow: 0 0 20px #00fff7, 0 0 40px #00ffea;
}

/* Hero Section */
.hero {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 60px;
    position: relative;
    overflow: hidden;
}

.hero h2 {
    font-size: 60px;
    margin-bottom: 20px;
    color: #00fff7;
    text-shadow: 0 0 10px #00fff7,0 0 20px #00ffea,0 0 40px #00fff7;
    animation: neonGlow 1.5s ease-in-out infinite alternate;
}

.hero p {
    font-size: 22px;
    margin-bottom: 40px;
    color: #a0f0ff;
    text-shadow: 0 0 5px #00fff7;
}

.hero a {
    display: inline-block;
    padding: 15px 40px;
    margin: 10px;
    border: 2px solid #00fff7;
    border-radius: 50px;
    text-decoration: none;
    font-weight: bold;
    color: #00fff7;
    position: relative;
    overflow: hidden;
    transition: 0.3s;
}

.hero a::before {
    content:'';
    position:absolute;
    width:100%;
    height:100%;
    top:0; left:-100%;
    background:#00fff7;
    z-index:0;
    transition:0.5s;
}

.hero a:hover::before { left:0; }
.hero a span { position: relative; z-index:1; }
.hero a:hover span { color:#000; }

/* Sections */
section {
    padding: 100px 50px;
    text-align: center;
    position: relative;
}

section h2 {
    font-size: 42px;
    margin-bottom: 40px;
    text-shadow: 0 0 20px #00fff7,0 0 40px #00ffea;
}

section p {
    font-size: 18px;
    line-height: 1.6;
    max-width: 900px;
    margin: 0 auto 50px auto;
    color: #a0f0ff;
}

/* Cards */
.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
}

.card {
    background: rgba(0,0,0,0.6);
    border: 2px solid #00fff7;
    border-radius: 20px;
    padding: 30px;
    width: 300px;
    perspective: 1000px;
    transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
    transform: rotateY(10deg) rotateX(5deg) translateY(-20px);
    box-shadow: 0 0 40px #00fff7, 0 0 80px #00ffea;
}

.card h3 { margin-bottom: 15px; font-size: 24px; }
.card p { font-size: 16px; color: #a0f0ff; }

/* Footer */
footer {
    background: rgba(0,0,0,0.85);
    border-top: 2px solid #00fff7;
    padding: 50px;
    text-align: center;
    color: #00fff7;
    box-shadow: 0 0 20px #00fff7;
}

.social-footer a {
    margin: 0 15px;
    font-size: 28px;
    transition: 0.3s;
    color: #00fff7;
}

.social-footer a:hover {
    transform: scale(1.3) rotate(-10deg);
    color: #00ffea;
}

/* Partículas 3D */
#particles {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
}

/* Neon animation */
@keyframes neonGlow {
    0% { text-shadow: 0 0 5px #00fff7,0 0 10px #00ffea,0 0 20px #00fff7; }
    50% { text-shadow: 0 0 20px #00ffea,0 0 40px #00fff7,0 0 60px #00fff7; }
    100% { text-shadow: 0 0 5px #00fff7,0 0 10px #00ffea,0 0 20px #00fff7; }
}

/* Parallax scroll */
[data-parallax] { transform: translateY(0px); transition: transform 0.2s; }

</style>
</head>
<body>

<canvas id="particles"></canvas>

<header>
    <h1>FuturoTech 3D</h1>
    <nav>
        <a href="#sobre">Sobre</a>
        <a href="#servicos">Serviços</a>
        <a href="#contato">Contato</a>
    </nav>
</header>

<div class="hero" data-parallax>
    <div>
        <h2>Inovação 3D Futurista</h2>
        <p>Criamos experiências digitais imersivas com tecnologia de ponta.</p>
        <a href="#sobre"><span>Saiba Mais</span></a>
        <a href="#contato"><span>Contato</span></a>
    </div>
</div>

<section id="sobre" data-parallax>
    <h2>Sobre a FuturoTech</h2>
    <p>Empresa líder em soluções digitais futuristas, design 3D e tecnologias inovadoras que transformam negócios.</p>
    <div class="cards">
        <div class="card"><h3>Visão</h3><p>Liderar globalmente em inovação tecnológica até 2030.</p></div>
        <div class="card"><h3>Missão</h3><p>Transformar ideias em soluções digitais imersivas.</p></div>
        <div class="card"><h3>Valores</h3><p>Inovação, criatividade, ética, tecnologia de ponta.</p></div>
    </div>
</section>

<section id="servicos" data-parallax>
    <h2>Nossos Serviços</h2>
    <p>Desenvolvimento web 3D, apps imersivos, inteligência artificial, realidade aumentada e consultoria tecnológica.</p>
    <div class="cards">
        <div class="card"><h3>Web 3D</h3><p>Sites interativos com experiências imersivas.</p></div>
        <div class="card"><h3>Aplicativos</h3><p>Apps inovadores e integrados à realidade virtual e aumentada.</p></div>
        <div class="card"><h3>IA Avançada</h3><p>Soluções inteligentes que otimizam processos e resultados.</p></div>
    </div>
</section>

<section id="contato" data-parallax>
    <h2>Contato</h2>
    <p>Entre em contato para transformar suas ideias em soluções digitais 3D.</p>
    <a href="mailto:contato@futurotech.com" class="botao"><span>Enviar E-mail</span></a>
</section>

<footer>
    <p>© 2025 FuturoTech 3D - Todos os direitos reservados</p>
    <div class="social-footer">
        <a href="#">🌐</a>
        <a href="#">🐦</a>
        <a href="#">📸</a>
        <a href="#">💼</a>
    </div>
</footer>

<script>
// Partículas 3D avançadas conectadas
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let w,h;
function resize(){ w=canvas.width=window.innerWidth; h=canvas.height=window.innerHeight; }
window.addEventListener('resize', resize);
resize();

const particles = [];
for(let i=0;i<250;i++){
    particles.push({x:Math.random()*w, y:Math.random()*h, z:Math.random()*500, dx:(Math.random()-0.5)*2, dy:(Math.random()-0.5)*2, dz:(Math.random()-0.5)*2});
}

function draw(){
    ctx.clearRect(0,0,w,h);
    for(let i=0;i<particles.length;i++){
        let p=particles[i];
        // Projeção 3D simples
        let scale = 500/(500+p.z);
        let x = (p.x - w/2)*scale + w/2;
        let y = (p.y - h/2)*scale + h/2;
        ctx.beginPath();
        ctx.arc(x,y,p.r*scale,0,Math.PI*2);
        ctx.fillStyle='#00fff7';
        ctx.fill();

        // Atualiza posição 3D
        p.x += p.dx;
        p.y += p.dy;
        p.z += p.dz;

        if(p.x<0||p.x>w)p.dx*=-1;
        if(p.y<0||p.y>h)p.dy*=-1;
        if(p.z<-250||p.z>500)p.dz*=-1;

        // Linhas conectando próximas partículas
        for(let j=i+1;j<particles.length;j++){
            let p2 = particles[j];
            let dx = p.x - p2.x;
            let dy = p.y - p2.y;
            let dz = p.z - p2.z;
            let dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
            if(dist<120){
                let scale2 = 500/(500+p2.z);
                ctx.beginPath();
                ctx.moveTo((p.x - w/2)*scale + w/2,(p.y - h/2)*scale + h/2);
                ctx.lineTo((p2.x - w/2)*scale2 + w/2,(p2.y - h/2)*scale2 + h/2);
                ctx.strokeStyle='rgba(0,255,247,'+(1-dist/120)+')';
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(draw);
}
draw();

// Scroll parallax
window.addEventListener('scroll', ()=>{
    document.querySelectorAll('[data-parallax]').forEach(el=>{
        let speed = 0.3;
        let offset = window.scrollY*speed;
        el.style.transform = `translateY(${offset}px)`;
    });
});
</script>

</body>
</html>
