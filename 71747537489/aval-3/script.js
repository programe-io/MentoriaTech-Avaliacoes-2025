// Seletores principais
const botoesAdicionar = document.querySelectorAll(".botao-adicionar");
const contadorCarrinho = document.getElementById("contador-carrinho");
const listaCarrinho = document.getElementById("lista-carrinho");
const totalCarrinho = document.getElementById("total-carrinho");

let quantidadeItens = 0;
let total = 0;
let itens = [];

// Função para formatar valores em reais
function formatarReal(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

// Atualiza lista visual do carrinho
function atualizarListaCarrinho() {
  listaCarrinho.innerHTML = "";

  if (itens.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Nenhum item no carrinho ainda.";
    listaCarrinho.appendChild(li);
    return;
  }

  itens.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.nome} (${formatarReal(item.preco)})`;
    listaCarrinho.appendChild(li);
  });
}

// Adiciona eventos aos botões de adicionar
botoesAdicionar.forEach((botao) => {
  botao.addEventListener("click", () => {
    const article = botao.closest(".produto");
    const nome = article.dataset.nome;
    const preco = parseFloat(article.dataset.preco);

    quantidadeItens += 1;
    total += preco;

    itens.push({ nome, preco });

    contadorCarrinho.textContent = quantidadeItens;
    totalCarrinho.textContent = formatarReal(total);
    atualizarListaCarrinho();
  });
});

