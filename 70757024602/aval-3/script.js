/* -------------------------------------------------
   script.js – Interatividade do Cardápio da Doceria
   ------------------------------------------------- */

/* 1️⃣  Variáveis globais -------------------------------------------------- */
const menu      = document.querySelector('.menu');          // container geral
const categorias = document.querySelectorAll('.category'); // cada bloco (Bolos, Doces …)

/* 2️⃣  Função: destacar o item ao clicar ----------------------------------- */
function marcarItem(event) {
    // Garante que o clique foi no .item (pode vir de um filho)
    const item = event.target.closest('.item');
    if (!item) return;

    // Remove a marca de todos os itens
    document.querySelectorAll('.item.selecionado')
            .forEach(i => i.classList.remove('selecionado'));

    // Marca o item clicado
    item.classList.add('selecionado');
}

/* 3️⃣  Função: filtro rápido por nome -------------------------------------- */
function filtrarPorNome(palavra) {
    const termo = palavra.trim().toLowerCase();

    categorias.forEach(cat => {
        const itens = cat.querySelectorAll('.item');
        let temAlgumVisivel = false;

        itens.forEach(it => {
            const nome = it.querySelector('.item-name').textContent.toLowerCase();
            const mostra = nome.includes(termo);
            it.style.display = mostra ? '' : 'none';
            if (mostra) temAlgumVisivel = true;
        });

        // Esconde a categoria inteira se nenhum item dela aparecer
        cat.style.display = temAlgumVisivel ? '' : 'none';
    });
}

/* 4️⃣  Função: carrinho simples (somente visual) --------------------------- */
const carrinho = {
    itens: [],

    adicionar(item) {
        this.itens.push(item);
        this.atualizarUI();
    },

    atualizarUI() {
        const lista = document.getElementById('carrinho-lista');
        const total = document.getElementById('carrinho-total');

        // limpar lista
        lista.innerHTML = '';

        let soma = 0;
        this.itens.forEach((i, idx) => {
            const li = document.createElement('li');
            li.textContent = `${i.nome} – ${i.preco}`;
            li.dataset.idx = idx;
            lista.appendChild(li);
            soma += i.valor;
        });

        total.textContent = `Total: R$ ${soma.toFixed(2)}`;
    },

    limpar() {
        this.itens = [];
        this.atualizarUI();
    }
};
