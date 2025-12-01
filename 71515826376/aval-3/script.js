// --- script.js ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona o botão no HTML (você precisará adicionar um no seu código)
    const botaoAlerta = document.getElementById('botao-alerta');
    
    // 2. Define o ano base para o último filme de "It" onde a Coisa foi derrotada (2019)
    const ANO_RETORNO_BASE = 2019;
    const CICLO_ANOS = 27;

    /**
     * Função para calcular o próximo ano de retorno da Coisa
     * baseada no ciclo de 27 anos.
     */
    function calcularProximoRetorno() {
        // Pega o ano atual
        const anoAtual = new Date().getFullYear();
        
        // Calcula a diferença de anos desde o último retorno
        const diferencaAnos = anoAtual - ANO_RETORNO_BASE;
        
        // Calcula quantos anos faltam para completar o ciclo de 27 anos
        const anosFaltantes = CICLO_ANOS - (diferencaAnos % CICLO_ANOS);
        
        // Determina o ano do próximo retorno
        const proximoAno = anoAtual + anosFaltantes;

        console.log("--- 🎈 Informações de Derry, Maine 🎈 ---");
        console.log(`O Clube dos Perdedores derrotou a Coisa em ${ANO_RETORNO_BASE}.`);
        console.log(`Estamos no ano de ${anoAtual}.`);
        console.log(`Faltam ${anosFaltantes} anos para a Coisa despertar novamente.`);
        
        // Retorna a mensagem para uso no alerta
        return `Prepare-se! A Coisa (Pennywise) voltará a despertar em ${proximoAno}. Faltam ${anosFaltantes} anos.`;
    }

    /**
     * Função que exibe um alerta temático.
     */
    function exibirAlertaPennywise() {
        const mensagemRetorno = calcularProximoRetorno();
        
        // Exibe o alerta na tela
        alert(`🤡 Você também flutuará! ${mensagemRetorno}`);

        // Mensagem adicional no console
        console.warn('Cuidado com os esgotos. Fique longe de balões vermelhos.');
    }

    // 3. Adiciona um "ouvinte de evento" ao botão (se ele existir)
    if (botaoAlerta) {
        botaoAlerta.addEventListener('click', exibirAlertaPennywise);
    } else {
        // Se o botão não for encontrado, calcula e exibe no console automaticamente
        calcularProximoRetorno();
        console.info('O cálculo do retorno foi exibido no console. Adicione um botão com o id="botao-alerta" para usar a função de alerta.');
    }
});