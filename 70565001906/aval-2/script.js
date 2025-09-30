// Cria um novo elemento <p>
const novoParagrafo = document.createElement('p');

// Adiciona conteúdo de texto
novoParagrafo.textContent = 'Este é um parágrafo criado com JavaScript!';

// Adiciona o novo elemento ao corpo da página HTML
document.body.appendChild(novoParagrafo);