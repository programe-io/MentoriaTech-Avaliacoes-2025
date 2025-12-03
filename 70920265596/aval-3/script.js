// ==========================================================
// 1. Estatística Dinâmica do Dia
// Objetivo: Mostrar uma estatística aleatória para simular dados atualizados.
// ==========================================================

function exibirEstatisticaDiaria() {
    // Gera um número aleatório entre 0.5 e 5.0 para 'Assists por Jogo'
    const assistencias = (Math.random() * 4.5 + 0.5).toFixed(2);
    const elemento = document.getElementById('estatistica-diaria');
    
    if (elemento) {
        elemento.innerHTML = `**Média de Dribles Vencidos:** ${assistencias} por 90 minutos`;
        elemento.style.color = '#004D98'; // Cor Secundária (Azul)
        elemento.style.fontWeight = 'bold';
    }
}

// ==========================================================
// 2. Carrossel Simples de Fatos Destacados
// Objetivo: Alternar entre textos de destaque a cada 5 segundos.
// ==========================================================

const destaques = [
    "Mais jovem a marcar pela Seleção Espanhola.",
    "Produto da lendária academia La Masia do Barça.",
    "Ganhou o prêmio Golden Boy em 2024.",
    "Seu valor de mercado continua em ascensão meteórica.",
    "Pé preferencial: Esquerdo. Habilidade chave: Drible."
];

let indiceAtual = 0;

function iniciarCarrossel() {
    const carrosselElemento = document.getElementById('carrossel-texto');

    if (carrosselElemento) {
        carrosselElemento.style.padding = '10px';
        carrosselElemento.style.backgroundColor = '#f0f0f0';
        carrosselElemento.style.borderRadius = '8px';
        carrosselElemento.style.textAlign = 'center';

        // Função para atualizar o texto
        function atualizarTexto() {
            carrosselElemento.textContent = destaques[indiceAtual];
            indiceAtual = (indiceAtual + 1) % destaques.length; // Avança para o próximo
        }

        // Exibe o primeiro texto imediatamente
        atualizarTexto();

        // Configura o intervalo para mudar o texto a cada 5 segundos
        setInterval(atualizarTexto, 5000);
    }
}

// ==========================================================
// 3. Contador Regressivo para o Próximo Jogo
// Objetivo: Mostrar quanto tempo falta para um evento futuro (ex: 25 de Dezembro).
// ==========================================================

function iniciarContadorRegressivo() {
    // Definimos o futuro jogo para o dia 25 de Dezembro deste ano, às 20h00 (em Milissegundos)
    // Nota: O fuso horário pode ser sensível, este é um exemplo simples.
    const dataAlvo = new Date(Date.UTC(2025, 11, 25, 23, 0, 0)).getTime(); // Dezembro é mês 11 (0-11)

    const contadorElemento = document.getElementById('contador-jogo');

    if (!contadorElemento) return;

    const interval = setInterval(function() {
        const agora = new Date().getTime();
        const diferenca = dataAlvo - agora;

        // Cálculo do tempo
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        // Exibir o resultado
        contadorElemento.innerHTML = 
            `<span style="color:#A50044; font-weight:bold;">Próximo Jogo:</span> ` +
            `${dias}d ${horas}h ${minutos}m ${segundos}s`;

        // Se o contador terminar
        if (diferenca < 0) {
            clearInterval(interval);
            contadorElemento.innerHTML = "Jogo Começou! Assista agora!";
            contadorElemento.style.color = '#FFD700'; // Dourado
        }
    }, 1000);
}

// ==========================================================
// Início de Todas as Funções Quando a Página Carrega
// ==========================================================

window.onload = function() {
    exibirEstatisticaDiaria();
    iniciarCarrossel();
    iniciarContadorRegressivo();
}