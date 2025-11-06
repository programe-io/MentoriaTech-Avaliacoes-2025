/ Seleciona todos os botões de resposta
const botoes = document.querySelectorAll('.botao-resposta');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        // Pega o container da resposta
        const resposta = botao.previousElementSibling;
        
        if (resposta.style.display === 'none') {
            resposta.style.display = 'block';
            botao.textContent = 'Esconder resposta';
        \} else {
            resposta.style.display = 'none';
            botao.textContent = 'Ver resposta';
        \}
    \});const botoes = document.querySelectorAll('.botao-resposta');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const resposta = botao.previousElementSibling;
        if (resposta.style.display === 'none') {
            resposta.style.display = 'block';
            botao.textContent = 'Esconder resposta';
        \} else {
            resposta.style.display = 'none';
            botao.textContent = 'Ver resposta';
        \}
    \});
\});