// ==============================================
// 1. CARROSSEL DE MOTOS (SLIDER)
// ==============================================

// Dados dos modelos de motos
const motos = [
    { nome: "Sport X-900", img: "https://via.placeholder.com/300x200?text=Sport+X900", preco: "R$ 65.000", cor: "Vermelho" },
    { nome: "Road Glide Classic", img: "https://via.placeholder.com/300x200?text=Road+Classic", preco: "R$ 88.000", cor: "Preto" },
    { nome: "Adventure Trail", img: "https://via.placeholder.com/300x200?text=Adventure+Trail", preco: "R$ 45.000", cor: "Cinza" },
    { nome: "City Explorer", img: "https://via.placeholder.com/300x200?text=City+Explorer", preco: "R$ 22.000", cor: "Azul" }
];

const track = document.getElementById('carrossel-track');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0; // Índice da moto atual visível

/**
 * 1.1. Função para carregar dinamicamente os cards de moto no carrossel.
 */
function renderMotos() {
    track.innerHTML = ''; // Limpa o conteúdo atual

    motos.forEach((moto, index) => {
        const slide = document.createElement('div');
        slide.classList.add('carrossel-slide');
        
        // Conteúdo HTML do slide
        slide.innerHTML = `
            <img src="${moto.img}" alt="${moto.nome}" class="slide-img">
            <h4>${moto.nome}</h4>
            <p>Preço: <strong>${moto.preco}</strong></p>
            <p>Cor: ${moto.cor}</p>
            <button class="botao-detalhes">Detalhes</button>
        `;
        
        track.appendChild(slide);
    });
    
    // Configura o tamanho inicial e a posição (após o conteúdo ser adicionado)
    track.style.width = `${motos.length * 100}%`;
    updateCarrossel();
}

/**
 * 1.2. Função que move o carrossel.
 */
function updateCarrossel() {
    // Calcula o quanto o track deve ser transladado (movido)
    const translateValue = -currentIndex * (100 / motos.length);
    track.style.transform = `translateX(${translateValue}%)`;
}

/**
 * 1.3. Lógica dos botões (Próximo e Anterior).
 */
nextBtn.addEventListener('click', () => {
    // Avança para o próximo item, se não for o último
    currentIndex = (currentIndex < motos.length - 1) ? currentIndex + 1 : 0; // Volta para o primeiro (Loop)
    updateCarrossel();
});

prevBtn.addEventListener('click', () => {
    // Volta para o item anterior, se não for o primeiro
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : motos.length - 1; // Volta para o último (Loop)
    updateCarrossel();
});

// ==============================================
// 2. FUNÇÃO DE INTERAÇÃO SIMPLES (Botão de Contato)
// ==============================================

// Seleciona o formulário de contato (do HTML anterior)
const form = document.querySelector('.form-contato');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        // Simula o processamento do envio
        const nome = form.querySelector('input[type="text"]').value;
        
        // Efeito visual com JavaScript
        alert(`Obrigado, ${nome}! Sua solicitação foi enviada. Nossa equipe de motos entrará em contato em breve.`);

        // Limpa o formulário
        form.reset();
    });
}

// 3. Inicializar o carrossel quando a página carregar
document.addEventListener('DOMContentLoaded', renderMotos);