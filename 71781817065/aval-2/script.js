// ======== Rolagem suave para os links do menu ========
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const alvo = document.querySelector(this.getAttribute('href'));
        if (alvo) {
            window.scrollTo({
                top: alvo.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// ======== Destacar link ativo conforme a rolagem ========
const secoes = document.querySelectorAll('section, article');
const links = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let index = secoes.length;

    while (--index && window.scrollY + 100 < secoes[index].offsetTop) {}
    links.forEach(link => link.classList.remove('ativo'));
    links[index]?.classList.add('ativo');
});

// ======== Botão "Voltar ao topo" ========
const botaoTopo = document.createElement('button');
botaoTopo.textContent = '⬆️ Topo';
botaoTopo.id = 'btn-topo';
document.body.appendChild(botaoTopo);

botaoTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        botaoTopo.style.display = 'block';
    } else {
        botaoTopo.style.display = 'none';
    }
});

// ======== Animação de entrada das seções ========
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('mostrar');
        }
    });
}, { threshold: 0.2 });

secoes.forEach(secao => observer.observe(secao));
