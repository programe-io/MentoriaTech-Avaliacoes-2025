// =================================================================
// 1. CARROSSEL DE IMAGENS AUTOMÁTICO PARA A SEÇÃO HERO (DESTAQUE)
// =================================================================

document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return; // Sai se a seção .hero não for encontrada

    // Array de URLs das imagens de fundo.
    // SUBSTITUA ESTES CAMINHOS PELAS SUAS PRÓPRIAS IMAGENS!
    const imagensHero = [
        'caminho/para/imagem1.jpg',
        'caminho/para/imagem2.jpg',
        'caminho/para/imagem3.jpg'
    ];

    let indiceAtual = 0;
    const intervaloTroca = 5000; // 5 segundos

    /**
     * Altera a imagem de fundo da seção hero.
     */
    function trocarImagemHero() {
        indiceAtual = (indiceAtual + 1) % imagensHero.length;
        const novaImagem = imagensHero[indiceAtual];

        // Usa transição CSS para um efeito suave
        heroSection.style.opacity = 0;

        setTimeout(() => {
            heroSection.style.backgroundImage = `url('${novaImagem}')`;
            heroSection.style.opacity = 1;
        }, 500); // Meio segundo para o fade-in

        console.log(`Carrossel: Imagem trocada para o índice ${indiceAtual}`);
    }

    // Define a imagem inicial
    if (imagensHero.length > 0) {
        heroSection.style.backgroundImage = `url('${imagensHero[0]}')`;
        heroSection.style.transition = 'opacity 0.5s ease-in-out'; // Define a transição
        
        // Inicia o carrossel
        setInterval(trocarImagemHero, intervaloTroca);
    }
});


// =================================================================
// 2. ATUALIZAÇÃO DINÂMICA DO ANO NO RODAPÉ
// =================================================================

document.addEventListener('DOMContentLoaded', function() {
    // Cria um elemento span para o ano e o insere no rodapé
    const footer = document.querySelector('footer p:first-child');
    if (footer) {
        const anoAtual = new Date().getFullYear();
        // Assume que o primeiro parágrafo do rodapé contém o texto de direitos autorais
        footer.textContent = footer.textContent.replace('2025', anoAtual);
    }
});


// =================================================================
// 3. VALIDAÇÃO BÁSICA DE FORMULÁRIO (Apenas visual/front-end)
// =================================================================

document.addEventListener('DOMContentLoaded', function() {
    const formContato = document.querySelector('#contato form');
    if (formContato) {
        formContato.addEventListener('submit', function(event) {
            
            // Simulação de validação simples: verifica se a mensagem tem pelo menos 10 caracteres
            const campoMensagem = document.getElementById('mensagem');
            if (campoMensagem && campoMensagem.value.length < 10) {
                alert('Por favor, escreva uma mensagem mais detalhada (mínimo 10 caracteres).');
                event.preventDefault(); // Impede o envio do formulário
                campoMensagem.focus();
            } else {
                // Se a validação front-end passar, você pode adicionar um feedback
                // Nota: O envio real para o servidor (backend) acontecerá se o preventDefault() não for chamado.
                console.log('Formulário pronto para ser enviado ao servidor.');
            }
        });
    }
});