// Mensagem de boas-vindas ao carregar a página
window.onload = function () {
    console.log("Página carregada com sucesso!");
    alert("Bem-vindo ao Portal de Eventos!");
};

// Destacar o link do menu que foi clicado
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(l => l.classList.remove("ativo"));
        this.classList.add("ativo");
    });
});

// Botão "voltar ao topo"
const botaoTopo = document.createElement("button");
botaoTopo.innerText = "↑ Topo";
botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "20px";
botaoTopo.style.right = "20px";
botaoTopo.style.padding = "10px 15px";
botaoTopo.style.background = "#222";
botaoTopo.style.color = "#fff";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "6px";
botaoTopo.style.display = "none";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.fontSize = "16px";

document.body.appendChild(botaoTopo);

// Mostrar botão ao rolar a página
window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }
});

// Função para voltar ao topo
botaoTopo.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Aviso piscante no aside
const aside = document.querySelector("aside");

setInterval(() => {
    aside.style.backgroundColor =
        aside.style.backgroundColor === "white" ? "#f3f3f3" : "white";
}, 1000);
