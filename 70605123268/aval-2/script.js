// ==========================================================
// 1. ROLAGEM SUAVE (MANTIDO E MELHORADO)
// ==========================================================
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    // Remove o "#" e pega o ID alvo
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Rola suavemente até a seção
      targetSection.scrollIntoView({ behavior: 'smooth' });

      // Opcional: Adiciona foco visual no link do menu após o clique (para indicar a posição)
      document.querySelectorAll('nav a').forEach(navLink => navLink.classList.remove('active'));
      this.classList.add('active');
    }
  });
});

// ==========================================================
// 2. DESTACAR LINK ATIVO NA NAVEGAÇÃO (SCROLL SPY)
// ==========================================================

const sections = document.querySelectorAll('main article, main section, main aside');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';

  // Determina qual seção está mais próxima do topo da viewport
  sections.forEach(section => {
    // Pega a posição vertical do topo da seção
    const sectionTop = section.offsetTop;
    // Define um offset para considerar o cabeçalho e navegação fixos
    const sectionHeight = section.clientHeight;
    const offset = 100; // 100 pixels de ajuste

    if (pageYOffset >= sectionTop - offset && pageYOffset < sectionTop + sectionHeight - offset) {
      current = section.getAttribute('id');
    }
  });

  // Remove a classe 'active' de todos e adiciona ao link correspondente
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
});

// Nota: Para que o Scroll Spy funcione, você precisa adicionar este CSS
// ao seu arquivo style.css (ou o CSS não terá efeito visual):
/*
nav a.active {
    background-color: #004466 !important;
    border-bottom: 4px solid #fff !important;
}
*/

// ==========================================================
// 3. ANIMAÇÃO DE ENTRADA AO ROLAR (OBSERVER API)
// ==========================================================

// Esta função faz com que os cards (article/section/aside) apareçam
// com um pequeno fade-up (subindo) quando entram na tela.

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-visible');
      // Para a animação ocorrer apenas uma vez, descomente a linha abaixo:
      // observer.unobserve(entry.target);
    } 
    // Se quiser que a animação ocorra sempre que sair e entrar (comente a linha acima)
    // else {
    // entry.target.classList.remove('animate-visible');
    // }
  });
}, {
  // Configura a margem para 0% do topo e 10% da parte inferior da tela
  rootMargin: '0px 0px -10% 0px' 
});

// Inicializa o observer em todas as seções de conteúdo
document.querySelectorAll('main article, main section, main aside').forEach(element => {
  element.classList.add('animate-on-scroll');
  observer.observe(element);
});

