/**
 * Função para alternar o status do jogador entre "Ativo" e "Lesionado".
 */
function alterarStatus() {
    // 1. Pega o elemento HTML que exibe o status
    const statusElement = document.getElementById('status-jogador');
    
    // 2. Verifica qual é o status atual
    const statusAtual = statusElement.textContent;

    if (statusAtual === 'Ativo') {
        // Se estiver ativo, muda para lesionado
        statusElement.textContent = 'Lesionado';
        statusElement.classList.remove('ativo');
        statusElement.classList.add('lesionado');
        
        // Exibe um alerta (opcional)
        alert('Status alterado para: LESIONADO!');
        
    } else {
        // Se estiver lesionado (ou qualquer outro), muda para ativo
        statusElement.textContent = 'Ativo';
        statusElement.classList.remove('lesionado');
        statusElement.classList.add('ativo');
        
        // Exibe um alerta (opcional)
        alert('Status alterado para: ATIVO!');
    }
}