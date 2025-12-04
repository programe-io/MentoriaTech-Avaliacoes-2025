/**
 * 1. Função para exibir uma mensagem de confirmação ao enviar o formulário
 */
function lidarComEnvio(event) {
    // Impede o envio padrão do formulário (para demonstração)
    event.preventDefault(); 
    
    // Obtém o valor do campo nome
    const nome = document.getElementById('nome').value;
    
    if (nome) {
        alert(`Obrigado pelo seu contato, ${nome}! Sua mensagem foi enviada (simuladamente).`);
    } else {
        alert("Obrigado pelo seu contato! Sua mensagem foi enviada (simuladamente).");
    }
    
    // O formulário seria resetado aqui ou redirecionado
    // document.getElementById('formulario-contato').reset();
}

/**
 * 2. Função para atualizar o ano no rodapé automaticamente
 */
function atualizarAnoRodape() {
    const elementoAno = document.getElementById('ano-atual');
    const anoCorrente = new Date().getFullYear();
    
    // Atualiza o conteúdo visual (tag <data>)
    elementoAno.textContent = anoCorrente; 
    // Atualiza o valor para processamento de máquina (atributo value)
    elementoAno.setAttribute('value', anoCorrente); 
}

/**
 * 3. Função para simular o carregamento de uma barra de progresso
 */
function simularCarregamento() {
    const barra = document.getElementById('progresso-matriculas');
    let valorAtual = barra.value;

    // Aumenta o valor de 5 em 5 até 100
    const intervalo = setInterval(() => {
        if (valorAtual >= 100) {
            clearInterval(intervalo);
            barra.value = 100;
            return;
        }
        valorAtual += 5;
        barra.value = valorAtual;
    }, 200); // A cada 200ms
}

// --- Event Listeners (Gatilhos) ---

// Adiciona um listener para o evento de envio do formulário
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario-contato');
    if (formulario) {
        formulario.addEventListener('submit', lidarComEnvio);
    }
    
    // Chama a função de atualização do ano
    atualizarAnoRodape();
    
    // Chama a função de simulação do progresso após um pequeno atraso
    setTimeout(simularCarregamento, 1000); 

    // Exemplo de manipulação do DOM em elemento com tag <span>
    const telefoneSpan = document.getElementById('telefone');
    if (telefoneSpan) {
        console.log(`Telefone da secretaria: ${telefoneSpan.textContent}`);
        // Você poderia adicionar um evento ou estilo JS aqui
    }
});