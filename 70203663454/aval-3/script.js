// Dados iniciais de exemplo (simulando um banco de dados)
let carros = [
    {
        id: 1,
        titulo: "Chevrolet Onix 1.0 LT",
        preco: "R$ 62.900",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsFu63o7ogTyzqAH2ivHOK0Re3ObHmYGpLMA&s",
        descricao: "Ano 2022, 15.000 KM. Único dono, todas revisões na concessionária. Contato: (11) 98765-4321.",
        curtidas: 15
    },
    {
        id: 2,
        titulo: "Ford Ka SE 1.5",
        preco: "R$ 38.500",
        imagem: "https://s2-autoesporte.glbimg.com/_m8gMBLP4jLQZdd-hyQA0J3-MBE=/0x0:620x400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/F/8/voPwVvR1iNNCM1vAdgBg/2015-12-01-novo-ford-ka.jpg",
        descricao: "Ano 2018, 65.000 KM. Completo, excelente estado. IPVA pago. Contato: email@exemplo.com",
        curtidas: 24
    }
];

const feedContainer = document.querySelector('.feed-container');

// 1. Função para Renderizar um Post de Carro
function renderizarCarro(carro) {
    const post = document.createElement('div');
    post.classList.add('car-post');
    post.setAttribute('data-id', carro.id);

    post.innerHTML = `
        <img src="${carro.imagem}" alt="${carro.titulo}" class="car-image">
        <div class="post-content">
            <div class="post-header">
                <h2>${carro.titulo}</h2>
                <span class="price">${carro.preco}</span>
            </div>
            <p>${carro.descricao}</p>
            <div class="actions">
                <button class="btn-curtir">❤️ <span class="curtidas-count">${carro.curtidas}</span> Curtidas</button>
                <button class="btn-compartilhar">🔗 Compartilhar</button>
            </div>
        </div>
    `;

    // Adiciona o evento de curtir
    const btnCurtir = post.querySelector('.btn-curtir');
    btnCurtir.addEventListener('click', () => {
        carro.curtidas++;
        post.querySelector('.curtidas-count').textContent = carro.curtidas;
    });
    
    feedContainer.appendChild(post);
}

// 2. Função para Carregar Todos os Carros no Feed
function carregarFeed() {
    feedContainer.innerHTML = ''; // Limpa o feed antes de carregar
    carros.forEach(renderizarCarro);
}

// 3. Lógica do Modal (Adicionar Novo Anúncio)
const modal = document.getElementById("modal-anuncio");
const btnAbrirModal = document.getElementById("abrir-modal");
const spanFecharModal = document.getElementsByClassName("fechar-modal")[0];
const formAnuncio = document.getElementById("form-anuncio");

btnAbrirModal.onclick = function() {
  modal.style.display = "block";
}

spanFecharModal.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// 4. Lógica de Submissão do Formulário
formAnuncio.addEventListener('submit', function(event) {
    event.preventDefault();

    // Cria um novo objeto carro com os dados do formulário
    const novoCarro = {
        id: carros.length + 1, // Simples ID incremental
        titulo: document.getElementById('titulo').value,
        preco: document.getElementById('preco').value,
        imagem: document.getElementById('imagem-url').value,
        descricao: document.getElementById('descricao').value,
        curtidas: 0
    };

    carros.unshift(novoCarro); // Adiciona o novo carro no início do array
    carregarFeed(); // Recarrega o feed para mostrar o novo post
    
    // Fecha o modal e limpa o formulário
    modal.style.display = "none";
    formAnuncio.reset();
});


// Inicializa o feed quando a página carrega
document.addEventListener('DOMContentLoaded', carregarFeed);