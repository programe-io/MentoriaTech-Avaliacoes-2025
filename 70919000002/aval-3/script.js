/*
    gta5_script.js - Interatividade temática para a página GTA V
*/

document.addEventListener('DOMContentLoaded', function() {
    // 1. Interação do Subtítulo (Simulando foco/pausa)
    const subtitle = document.querySelector('header p');
    const defaultSubtitle = "Bem-vindo a Los Santos e Blaine County";
    const pauseSubtitle = "JOGO PAUSADO: Pressione ESC para continuar...";

    if (subtitle) {
        // Quando a janela perde o foco (o usuário muda de aba)
        window.addEventListener('blur', function() {
            subtitle.textContent = pauseSubtitle;
            subtitle.style.color = '#cc0000'; // Vermelho de "pausa"
        \});

        // Quando a janela recupera o foco
        window.addEventListener('focus', function() {
            subtitle.textContent = defaultSubtitle;
            subtitle.style.color = '#aaaaaa'; // Volta à cor suave
        \});
    \}

    // 2. Sistema de Código de Trapaça (Cheat Code)
    const cheatCodeSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'a']; 
    let currentInputIndex = 0; // Índice de qual tecla esperar
    
    // Elemento para exibir a mensagem da trapaça
    const secretMessageArea = document.createElement('div');
    secretMessageArea.id = 'cheat-result';
    secretMessageArea.style.cssText = `
        padding: 15px;
        margin-top: 20px;
        background-color: #383838;
        border: 2px dashed #ff9900;
        color: #00ccff;
        text-align: center;
        font-weight: bold;
        display: none; /* Começa oculto */
        border-radius: 5px;
        font-size: 1.1em;
    `;
    
    // Adiciona o elemento ao final da seção principal
    document.querySelector('section').appendChild(secretMessageArea);


    document.addEventListener('keydown', function(event) {
        const expectedKey = cheatCodeSequence[currentInputIndex];
        
        // Verifica se a tecla pressionada é a próxima na sequência
        if (event.key === expectedKey) {
            currentInputIndex++;

            // Se a sequência foi completada
            if (currentInputIndex === cheatCodeSequence.length) {
                // Ativa a trapaça
                activateCheat();
                currentInputIndex = 0; // Reseta para futuras tentativas
            \}
        \} else {
            // Se a tecla errada foi pressionada, reseta a sequência
            if (currentInputIndex > 0) {
                 console.log(`Tecla errada: \${event.key\}. Sequência resetada.`);
            \}
            currentInputIndex = 0;
        \}
    \});

    function activateCheat() {
        const message = "TRAPAÇA ATIVADA: MODO DE INVENCIBILIDADE (Temporariamente) DESBLOQUEADO!";
        
        secretMessageArea.textContent = message;
        secretMessageArea.style.display = 'block';

        // Oculta a mensagem após 5 segundos (simulando tempo de trapaça)
        setTimeout(() => {
            secretMessageArea.style.display = 'none';
        \}, 5000);

        console.log(message);
    \}
\});$0