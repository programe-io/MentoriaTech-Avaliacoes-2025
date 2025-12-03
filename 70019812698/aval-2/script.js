// JavaScript para Blog de Games com ASIDE
// Funções: destaque dinâmico, botão de voltar ao topo, alternar tema e carregar itens no aside

// Botão de voltar ao topo
const botaoTopo = document.createElement("button");
botaoTopo.innerText = "▲ Topo";
botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "20px";
botaoTopo.style.right = "20px";
botaoTopo.style.padding = "10px 15px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "8px";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.display = "none";
botaoTopo.style.fontWeight = "bold";
document.body.appendChild(botaoTopo);

window.addEventListener("scroll", function () {
    botaoTopo.style.display = window.scrollY > 300 ? "block" : "none";
});

botaoTopo.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Alternar tema escuro / claro
const botaoTema = document.createElement("button");
botaoTema.innerText = "Alternar Tema";
botaoTema.style.position = "fixed";
botaoTema.style.bottom = "60px";
botaoTema.style.right = "20px";
botaoTema.style.padding = "10px 15px";
botaoTema.style.border = "none";
botaoTema.style.borderRadius = "8px";
botaoTema.style.cursor = "pointer";
botaoTema.style.fontWeight = "bold";
document.body.appendChild(botaoTema);

let escuro = true;

botaoTema.addEventListener("click", () => {
    escuro = !escuro;

    if (escuro) {
        document.body.style.background = "#1a1a1a";
        document.body.style.color = "#ffffff";
    } else {
        document.body.style.background = "#f2f2f2";
        document.body.style.color = "#111";
    }
});

// Conteúdos dinâmicos para o ASIDE
const destaques = [
    "🎮 Novo trailer divulgado hoje!",
    "🔥 Atualização surpresa em jogo popular",
    "⭐ Review 5 estrelas recém-publicado",
    "📰 Rumores sobre novo console",
];

const redes = [
    { nome: "YouTube", link: "#" },
    { nome: "Instagram", link: "#" },
    { nome: "Twitter", link: "#" },
];

function carregarAside() {
    const sidebar = document.querySelector('.sidebar');

    // seção Destaques
    const listaDestaques = document.createElement('ul');
    destaques.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listaDestaques.appendChild(li);
    });

    // seção Redes
    const listaRedes = document.createElement('ul');
    redes.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${item.link}">${item.nome}</a>`;
        listaRedes.appendChild(li);
    });

    sidebar.appendChild(document.createElement('hr'));
    sidebar.appendChild(listaDestaques);

    sidebar.appendChild(document.createElement('hr'));
    sidebar.appendChild(listaRedes);
}

carregarAside();