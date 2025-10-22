// =========================================================
// 1. CARROSSEL (SLIDER) DE IMAGENS
// =========================================================

// Array com os nomes dos arquivos das imagens
// (Você deve ter arquivos com estes nomes: moto1.jpg, moto2.jpg, moto3.jpg, etc.)
const imagensMotos = [
    'moto1.jpg',
    'moto2.jpg',
    'moto3.jpg',
    // Adicione mais imagens aqui se quiser!
];

let indiceAtual = 0;
const elementoImagem = document.getElementById('moto-slide');

/**
 * Função para mudar o slide do carrossel.
 * @param {number} direcao - 1 para avançar, -1 para retroceder.
 */
function mudarSlide(direcao) {
    indiceAtual += direcao;

    // Volta ao início se passar do final
    if (indiceAtual >= imagensMotos.length) {
        indiceAtual = 0;
    }
    // Vai para o final se retroceder demais
    if (indiceAtual < 0) {
        indiceAtual = imagensMotos.length - 1;
    }

    // Altera o atributo 'src' da imagem
    elementoImagem.src = imagensMotos[indiceAtual];
}

// Inicializa o primeiro slide ao carregar a página
if (elementoImagem) {
    elementoImagem.src = imagensMotos[indiceAtual];
}


// =========================================================
// 2. VALIDAÇÃO SIMPLES DO FORMULÁRIO DE CONTATO
// =========================================================

const formulario = document.getElementById('form-contato');

if (formulario) {
    formulario.addEventListener('submit', function(evento) {
        // Previne o envio padrão do formulário
        evento.preventDefault(); 
        
        // Pega os valores dos campos
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();
        
        let validacaoOk = true;
        let mensagemErro = '';

        // Validação do Nome
        if (nome.length < 3) {
            mensagemErro += 'O nome deve ter pelo menos 3 caracteres.\n';
            validacaoOk = false;
        }

        // Validação Simples de E-mail
        if (!email.includes('@') || !email.includes('.')) {
            mensagemErro += 'O e-mail parece inválido.\n';
            validacaoOk = false;
        }

        // Validação da Mensagem
        if (mensagem.length < 10) {
            mensagemErro += 'A mensagem deve ter pelo menos 10 caracteres.\n';
            validacaoOk = false;
        }

        if (validacaoOk) {
            // Se tudo estiver OK, simula o envio e limpa o formulário
            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
            formulario.reset(); // Limpa os campos
        } else {
            // Se houver erro, exibe o alerta com as mensagens
            alert('Erro no envio do formulário:\n' + mensagemErro);
        }
    });
}