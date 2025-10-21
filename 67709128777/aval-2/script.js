// Função principal para gerar um código HEX aleatório
function gerarHexAleatorio() {
    const caracteres = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
        // Escolhe um caractere aleatório da string 'caracteres'
        cor += caracteres[Math.floor(Math.random() * 16)];
    }
    return cor;
}

// Função para gerar uma paleta de 5 cores baseada em uma cor inicial
// (Aqui usamos uma lógica simples baseada em matiz/tonalidade)
function gerarPaleta(corBase) {
    // Nota: Manipular HSL (Matiz, Saturação, Luminosidade) é mais fácil para harmonias,
    // mas para simplificar com um HEX de entrada, vamos focar em variações de brilho/saturação.
    // Para este exemplo, vamos apenas gerar cores aleatórias para demonstrar a exibição.
    
    const paleta = [corBase];
    for (let i = 0; i < 4; i++) {
        // Gera mais 4 cores aleatórias diferentes para compor a paleta
        let novaCor;
        do {
            novaCor = gerarHexAleatorio();
        } while (paleta.includes(novaCor)); // Garante que a cor seja única na paleta
        paleta.push(novaCor);
    }
    return paleta;
}

// Função para copiar o código HEX da cor clicada
function copiarParaAreaDeTransferencia(event) {
    const corHex = event.target.dataset.hex; // Pega o valor do atributo 'data-hex'
    
    // Cria um campo de texto temporário para copiar
    const tempInput = document.createElement('input');
    tempInput.value = corHex;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy'); // Comando para copiar
    document.body.removeChild(tempInput);

    // Feedback visual rápido
    const originalText = event.target.textContent;
    event.target.textContent = 'COPIADO!';
    event.target.style.transform = 'scale(1.05)';
    
    setTimeout(() => {
        event.target.textContent = originalText; // Volta ao texto original
        event.target.style.transform = 'scale(1)';
    }, 1000);
}

// Função para renderizar as cores na tela
function renderizarPaleta(paleta) {
    const container = document.getElementById('color-palette');
    container.innerHTML = ''; // Limpa o container anterior

    paleta.forEach(hex => {
        const corDiv = document.createElement('div');
        corDiv.className = 'color-box';
        corDiv.style.backgroundColor = hex; // Define a cor de fundo
        corDiv.dataset.hex = hex;           // Armazena o código HEX para copiar

        // Adiciona o código HEX como texto
        const textoHex = document.createElement('span');
        textoHex.textContent = hex;
        textoHex.className = 'hex-value';
        
        // Determina se o texto deve ser preto ou branco para contraste
        // (Esta é uma simplificação, um cálculo de luminância seria mais preciso)
        const corTexto = (parseInt(hex.substring(1, 3), 16) * 299 + 
                          parseInt(hex.substring(3, 5), 16) * 587 + 
                          parseInt(hex.substring(5, 7), 16) * 114) / 1000 > 128 ? '#000000' : '#FFFFFF';
        textoHex.style.color = corTexto;
        
        corDiv.appendChild(textoHex);
        
        // Adiciona o evento de clique
        corDiv.addEventListener('click', copiarParaAreaDeTransferencia);
        
        container.appendChild(corDiv);
    });
}

// Função de inicialização
function inicializarSite() {
    const corInicial = gerarHexAleatorio(); // Começa com uma cor aleatória
    const paletaGerada = gerarPaleta(corInicial);
    renderizarPaleta(paletaGerada);
}

// Evento para gerar nova paleta ao clicar no botão
document.addEventListener('DOMContentLoaded', () => {
    inicializarSite(); // Gera a paleta inicial ao carregar

    const btnGerar = document.getElementById('generate-btn');
    if (btnGerar) {
        btnGerar.addEventListener('click', inicializarSite);
    }
});