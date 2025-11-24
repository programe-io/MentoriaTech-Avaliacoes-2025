// Array de objetos para armazenar as informações das máscaras
const mascaras = [
    { nome: "Corey Taylor (#8)", arquivo: "mascara-corey-taylor.jpg" },
    { nome: "Shawn Crahan (#6 - Clown)", arquivo: "mascara-shawn-crahan.jpg" },
    { nome: "Mick Thomson (#7)", arquivo: "mascara-mick-thomson.jpg" },
    { nome: "Jim Root (#4)", arquivo: "mascara-jim-root.jpg" },
    { nome: "Sid Wilson (#0)", arquivo: "mascara-sid-wilson.jpg" }
];

let indiceAtual = 0; // Índice inicial

// Função para atualizar a imagem e o nome da máscara
function atualizarMascara() {
    const imagemElemento = document.getElementById('mascara-img');
    const nomeElemento = document.getElementById('mascara-nome');
    
    // Pega o objeto da máscara atual
    const mascaraAtual = mascaras[indiceAtual];
    
    // Atualiza o atributo src da imagem e o texto do nome
    imagemElemento.src = mascaraAtual.arquivo;
    imagemElemento.alt = `Máscara de ${mascaraAtual.nome}`;
    nomeElemento.textContent = mascaraAtual.nome;
}

// Função para avançar para a próxima máscara
function proximaMascara() {
    // Incrementa o índice e usa o operador de módulo (%) para voltar a 0 se ultrapassar o tamanho do array
    indiceAtual = (indiceAtual + 1) % mascaras.length;
    atualizarMascara();
}

// Event Listener para o botão
const botaoTrocar = document.getElementById('trocar-mascara');
botaoTrocar.addEventListener('click', proximaMascara);

// Inicializa a galeria com a primeira máscara ao carregar
document.addEventListener('DOMContentLoaded', atualizarMascara);