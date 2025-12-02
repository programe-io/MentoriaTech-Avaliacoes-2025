// Cria o parágrafo
const p = document.createElement('p');
p.textContent = "Clique no ";

// Cria o span
const span = document.createElement('span');
span.textContent = "texto em destaque";
span.style.fontWeight = "bold";
span.style.cursor = "pointer";

// Função para mudar a cor aleatória
span.addEventListener('click', () => {
    const corAleatoria = '#' + Math.floor(Math.random() * 16777215).toString(16);
    span.style.color = corAleatoria;
});

// Adiciona o span ao parágrafo
p.appendChild(span);

// Adiciona o parágrafo ao body
document.body.appendChild(p);
