// contador de itens no carrinho
let itensCarrinho = 0;

const contadorCarrinho = document.getElementById("contadorCarrinho");
const botoesCarrinho = document.querySelectorAll(".btn-add-carrinho");
const btnVerPromo = document.getElementById("btnVerPromo");
const textoPromo = document.getElementById("textoPromo");
const formContato = document.getElementById("formContato");
const mensagemSucesso = document.getElementById("mensagemSucesso");
const btnAplicarFiltro = document.getElementById("btnAplicarFiltro");
const campoPrecoMax = document.getElementById("precoMax");

// adicionar ao carrinho
botoesCarrinho.forEach((botao) => {
    botao.addEventListener("click", () => {
        itensCarrinho++;
        contadorCarrinho.textContent = itensCarrinho;

        const card = botao.closest(".card-produto");
        const nomeProduto = card.getAttribute("data-nome");
        const precoProduto = card.getAttribute("data-preco");

        alert(`Produto adicionado: ${nomeProduto} (R$ ${precoProduto},00)`);
    });
});

// mostrar ou esconder promoção do dia
btnVerPromo.addEventListener("click", () => {
    textoPromo.classList.toggle("hidden");
});

// simular envio de formulário de contato
formContato.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();

    if (nome.length === 0) {
        alert("Por favor, preencha seu nome antes de enviar.");
        return;
    }

    mensagemSucesso.classList.remove("hidden");

    // limpar campos
    formContato.reset();
});

// aplicar filtro de preço (simples, só para demonstração)
btnAplicarFiltro.addEventListener("click", () => {
    const valorMax = Number(campoPrecoMax.value);
    const produtos = document.querySelectorAll(".card-produto");

    produtos.forEach((produto) => {
        const preco = Number(produto.getAttribute("data-preco"));

        if (!valorMax || preco <= valorMax) {
            produto.style.opacity = "1";
        } else {
            produto.style.opacity = "0.3";
        }
    });

    alert("Filtro aplicado (simulação). Confira o destaque visual nos itens.");
});
