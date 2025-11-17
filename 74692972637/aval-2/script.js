// ======== MENU ATIVO ==========
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});


// ======== ANIMAÇÃO AO ROLAR A PÁGINA ==========
const elementos = document.querySelectorAll("article, aside, header");

function animarAoRolar() {
    elementos.forEach(el => {
        const posicao = el.getBoundingClientRect().top;
        const alturaTela = window.innerHeight * 0.85;

        if (posicao < alturaTela) {
            el.classList.add("mostrar");
        }
    });
}

window.addEventListener("scroll", animarAoRolar);
animarAoRolar();


// ======== CLIQUE PARA AMPLIAR IMAGEM ==========
const imagens = document.querySelectorAll("img");

imagens.forEach(img => {
    img.style.cursor = "pointer";

    img.addEventListener("click", () => {
        abrirImagem(img.src);
    });
});

function abrirImagem(src) {
    const overlay = document.createElement("div");
    overlay.id = "overlay-img";

    overlay.innerHTML = `
        <div class="img-container">
            <span id="fechar">&times;</span>
            <img src="${src}">
        </div>
    `;

    document.body.appendChild(overlay);

    document.getElementById("fechar").onclick = () => {
        overlay.remove();
    };
}



// ======== BOTÃO VOLTAR AO TOPO ==========
const btnTopo = document.createElement("button");
btnTopo.id = "btnTopo";
btnTopo.innerHTML = "↑";
document.body.appendChild(btnTopo);

btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    btnTopo.style.display = window.scrollY > 300 ? "block" : "none";
});
