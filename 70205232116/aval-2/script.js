/**
 * Alterna a visibilidade dos detalhes adicionais no post de destaque.
 */
function mostrarMaisDetalhes() {
    // Pega o elemento dos detalhes ocultos
    const detalhes = document.getElementById('detalhes-destaque');
    
    // Pega o botão que chamou a função
    const botao = event.target; 

    // Verifica o estilo 'display' para saber se está visível ou não
    if (detalhes.style.display === 'none' || detalhes.style.display === '') {
        // Se estiver oculto, mostra
        detalhes.style.display = 'block';
        botao.textContent = 'Mostrar Menos'; // Altera o texto do botão
    } else {
        // Se estiver visível, oculta
        detalhes.style.display = 'none';
        botao.textContent = 'Leia Mais'; // Altera o texto do botão
    }
}