// contador simples do carrinho
let carrinhoTech = 0;

const botoesAdd = document.querySelectorAll(".btn-add-tech");
const btnVerAviso = document.getElementById("btnVerAviso");
const avisoTexto = document.getElementById("textoAviso");

const btnFiltrarTech = document.getElementById("btnFiltrarTech");
const campoPrecoTech = document.getElementById("precoMaxTech");

const form2 = document.getElementById("form2");
const msgSucesso2 = document.getElementById("msgSucesso2");

// Adicionar produto ao carrinho
botoesAdd.forEach(botao => {
    botao.addEventListener("click", () => {
        carrinhoTech++;

        const card = botao.closest(".produto-card");
        const nome = card.getAttribute("data-nome");
        const preco = card.getAttribute("data-preco");

        alert(`Produto adicionado: ${nome} (R$ ${preco},00)`);
    });
});

// Mostrar aviso importante
btnVerAviso.addEventListener("click", () => {
    avisoTexto.classList.toggle("hidden");
});

// Filtro de preço simples
btnFiltrarTech.addEventListener("click", () => {
    const max = Number(campoPrecoTech.value);
    const cards = document.querySelectorAll(".produto-card");

    cards.forEach(card => {
        const preco = Number(card.getAttribute("data-preco"));

        if (!max || preco <= max) {
            card.style.opacity = "1";
        } else {
            card.style.opacity = "0.3";
        }
    });

    alert("Filtro aplicado (simulação).");
});

// Envio de formulário
form2.addEventListener("submit", e => {
    e.preventDefault();

    msgSucesso2.classList.remove("hidden");

    form2.reset();
});
