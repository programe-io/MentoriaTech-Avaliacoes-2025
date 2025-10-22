// ===============================================
// 1. DADOS: Onde você define as informações e as IMAGENS
// ===============================================
const dadosChuteiras = {
    mercurial: {
        nome: "Nike Mercurial Vapor 16",
        descricao: "Feita para a velocidade explosiva. Leve, com tração superior para gramados firmes.",
        // ** CAMINHO DA IMAGEM AQUI **
        imagem: "assets/img/nike-mercurial.jpg", 
        cor: "#007bff"
    },
    predator: {
        nome: "Adidas Predator 24 Elite",
        descricao: "Domínio e controle. Possui elementos de borracha High-Definition Grip para passes precisos.",
        // ** CAMINHO DA IMAGEM AQUI **
        imagem: "assets/img/adidas-predator.jpg", 
        cor: "#ff6600"
    },
    future: {
        nome: "Puma Future 7 Ultimate",
        descricao: "Máxima agilidade com a tecnologia FUZIONFIT360, permitindo movimentos imprevisíveis.",
        // ** CAMINHO DA IMAGEM AQUI **
        imagem: "assets/img/puma-future.jpg", 
        cor: "#28a745"
    }
};

// ===============================================
// 2. FUNÇÃO PRINCIPAL: Atualiza a Galeria
// ===============================================

function atualizarGaleria(modeloSelecionado) {
    const chuteira = dadosChuteiras[modeloSelecionado];
    
    // 1. Seleciona os elementos HTML onde o conteúdo será alterado
    const displayImagem = document.getElementById('imagem-principal');
    const displayInfo = document.getElementById('info-principal');

    if (!chuteira) {
        // Se o modelo não for encontrado, exibe uma mensagem de erro
        displayInfo.innerHTML = '<h3>Erro</h3><p>Modelo de chuteira não encontrado.</p>';
        displayImagem.innerHTML = '';
        return;
    }

    // 2. Atualiza a Imagem
    // Cria um novo elemento <img>
    const novaImagem = document.createElement('img');
    
    // Define a fonte da imagem usando o caminho que você definiu nos dados
    novaImagem.src = chuteira.imagem; 
    
    // Define o texto alternativo
    novaImagem.alt = chuteira.nome;

    // Limpa o conteúdo anterior e adiciona a nova imagem
    displayImagem.innerHTML = ''; 
    displayImagem.appendChild(novaImagem);

    // 3. Atualiza as Informações
    displayInfo.innerHTML = `
        <h3 style="color: ${chuteira.cor};">${chuteira.nome}</h3>
        <p>${chuteira.descricao}</p>
        <button class="btn-ver-mais">Ver Review Completo</button>
    `;

    // 4. Efeito Visual: Altera o background do container para dar um destaque na cor do modelo (Opcional)
    const galeriaDisplay = document.getElementById('display-chuteira');
    galeriaDisplay.style.borderColor = chuteira.cor;
}

// ===============================================
// 3. EVENT LISTENERS: Escuta os Cliques nos Botões
// ===============================================

document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('.galeria-opcoes button');
    
    botoes.forEach(button => {
        button.addEventListener('click', function() {
            // 1. Remove a classe 'ativo' de todos os botões
            botoes.forEach(btn => btn.classList.remove('ativo'));
            
            // 2. Adiciona a classe 'ativo' ao botão clicado
            this.classList.add('ativo');

            // 3. Pega o valor do atributo data-modelo (ex: "mercurial")
            const modelo = this.getAttribute('data-modelo');

            // 4. Chama a função de atualização
            atualizarGaleria(modelo);
        });
    });

    // Chama a função para carregar o primeiro item ao carregar a página
    // Pega o modelo do primeiro botão com a classe 'ativo'
    const modeloInicial = document.querySelector('.galeria-opcoes button.ativo').getAttribute('data-modelo');
    if (modeloInicial) {
        atualizarGaleria(modeloInicial);
    }
});