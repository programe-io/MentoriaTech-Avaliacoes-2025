/* Hamburger menu */
const hamburger=document.querySelector('.hamburger');
const navUL=document.querySelector('nav ul');
hamburger.addEventListener('click',()=>{navUL.classList.toggle('active');});

/* Dark mode toggle */
const darkToggle=document.getElementById('toggle-dark');
darkToggle.addEventListener('click',()=>{document.body.classList.toggle('dark');});

/* Header animation */
window.addEventListener('load',()=>{
    document.querySelector('header h1').style.opacity=1;
    document.querySelector('header h1').style.transform='translateY(0)';
    document.querySelector('header p').style.opacity=1;
    document.querySelector('header p').style.transform='translateY(0)';
});

/* Scroll animations */
const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity=1;
            entry.target.style.transform='translateY(0)';
        }
    });
},{threshold:0.2});
document.querySelectorAll('section, .posts article, .product-card').forEach(el=>observer.observe(el));

/* Slideshow */
let slideIndex=0;
const slides=document.querySelectorAll('.slide');
function showSlides(){
    slides.forEach(slide=>slide.classList.remove('active-slide'));
    slideIndex++;
    if(slideIndex>slides.length) slideIndex=1;
    slides[slideIndex-1].classList.add('active-slide');
    setTimeout(showSlides,5000);
}
showSlides();

/* Counters */
document.querySelectorAll('.count').forEach(counter=>{
    const updateCount=()=>{
        const target=+counter.getAttribute('data-target');
        const count=+counter.innerText;
        const inc=target/200;
        if(count<target){counter.innerText=Math.ceil(count+inc); setTimeout(updateCount,10);}
        else{counter.innerText=target;}
    };
    updateCount();
});

/* Charts */
const ctx1=document.getElementById('chart1').getContext('2d');
new Chart(ctx1,{type:'bar', data:{labels:['IA','Automação','IoT','Blockchain','Apps'], datasets:[{label:'Projetos', data:[12,19,8,5,14], backgroundColor:'#00FF99'}]}, options:{responsive:true, plugins:{legend:{display:false}}}});
const ctx2=document.getElementById('chart2').getContext('2d');
new Chart(ctx2,{type:'pie', data:{labels:['Startups','Médias Empresas','Grandes Empresas','Consumidores'], datasets:[{label:'Clientes', data:[40,25,20,15], backgroundColor:['#0A1F44','#00FF99','#0A1F44','#00FF99']} ]}, options:{responsive:true, plugins:{legend:{position:'bottom'}}}});

/* FAQ toggle */
document.querySelectorAll('.faq-item button').forEach(button=>{
    button.addEventListener('click',()=>{
        button.classList.toggle('active');
        const answer=button.nextElementSibling;
        answer.style.display=(answer.style.display==='block')?'none':'block';
    });
});

/* Fundo animado com partículas */
const canvas = document.getElementById('bgCanvas');
const ctxBg = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
window.addEventListener('resize', () => {width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight;});

const particles = [];
const particleCount = 80;
for(let i=0;i<particleCount;i++){
    particles.push({x: Math.random()*width, y: Math.random()*height, r: Math.random()*3+1, dx: (Math.random()-0.5)*1, dy: (Math.random()-0.5)*1});
}

function animateParticles(){
    ctxBg.clearRect(0,0,width,height);
    particles.forEach(p=>{
        ctxBg.beginPath();
        ctxBg.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctxBg.fillStyle='
