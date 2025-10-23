// =========================================================
// PARTE 1: CARROSSEL DE IMAGENS AUTOMÁTICO NA SEÇÃO HERO
// (Requer a estrutura HTML com classes 'carousel-slide', 'prev' e 'next')
// =========================================================

let slideIndex = 1;
let slides = [];
let slideInterval;

// Função principal para exibir um slide
function showSlides(n) {
    slides = document.getElementsByClassName("carousel-slide");
    if (slides.length === 0) return; 

    // Lógica de loop
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Oculta todos os slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Exibe o slide atual
    slides[slideIndex - 1].style.display = "block";
}

// Função global para avançar/retroceder com os botões (chamada pelo onclick do HTML)
function plusSlides(n) {
    // Pausa e reinicia o carrossel automático ao interagir
    clearInterval(slideInterval);
    showSlides(slideIndex += n);
    slideInterval = setInterval(autoShowSlides, 5000); 
}

// Função para avanço automático
function autoShowSlides() {
    showSlides(slideIndex += 1);
}

// Inicialização do Carrossel ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    slides = document.getElementsByClassName("carousel-slide");
    
    if (slides.length > 0) {
        showSlides(slideIndex);
        // Define o intervalo para a troca automática (a cada 5 segundos)
        slideInterval = setInterval(autoShowSlides, 5000); 
    }
});


// =========================================================
// PARTE 2: GALERIA DE IMAGENS DINÂMICA (TROCA AO HOVER/MOUSEOVER)
// (Requer a tag <img> dentro da tag 'article.moto-card')
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
    const motoCards = document.querySelectorAll('.moto-card');
    
    // Lista de imagens para simular a troca.
    // **IMPORTANTE**: Você DEVE substituir os caminhos das imagens por arquivos reais.
    const imagensMotos = {
        'SuperSport 1000R': {
            original: 'placeholder-moto1.jpg',
            hover: 'placeholder-moto1-vermelha.jpg' 
        },
        'Cruiser Blackout': {
            original: 'placeholder-moto2.jpg',
            hover: 'placeholder-moto2-cromada.jpg'  
        },
        'Adventure X-Treme': {
            original: 'placeholder-moto3.jpg',
            hover: 'placeholder-moto3-amarela.jpg'  
        }
    };

    motoCards.forEach(card => {
        const titulo = card.querySelector('h3').textContent.trim();
        const imgElement = card.querySelector('img');

        // Adiciona funcionalidade apenas se o card e as imagens estiverem mapeados
        if (imagensMotos[titulo] && imgElement) {
            
            // Troca para a imagem de 'hover' quando o mouse entra
            card.addEventListener('mouseover', () => {
                imgElement.src = imagensMotos[titulo].hover;
                // Efeito visual (CSS inline, pode ser feito via classes CSS também)
                imgElement.style.transform = 'scale(1.03)'; 
                imgElement.style.transition = 'transform 0.3s ease';
            });

            // Retorna para a imagem 'original' quando o mouse sai
            card.addEventListener('mouseout', () => {
                imgElement.src = imagensMotos[titulo].original;
                imgElement.style.transform = 'scale(1)';
            });
        }
    });
});