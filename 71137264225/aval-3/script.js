// Seleciona o botão e o corpo da página pelo ID/tag
const botaoTema = document.getElementById('btn-tema');
const body = document.body;

// Ouve o evento de clique no botão
botaoTema.addEventListener('click', () => {
    
    // 1. Alterna a classe 'dark-mode' no <body>
    // Isso é o que ativa as cores escuras no CSS
    body.classList.toggle('dark-mode');

    // 2. Muda o texto do botão para indicar o modo atual
    if (body.classList.contains('dark-mode')) {
        botaoTema.innerText = 'Mudar para Modo Claro ☀️';
    \} else {
        botaoTema.innerText = 'Mudar para Modo Escuro 🌙';
    \}
\});$0