// ======= ANIMAÇÃO NO TÍTULO ==========
const titulo = document.querySelector("header h1");

function brilhoTitulo() {
    titulo.style.textShadow = `0 0 20px #7f00ff, 0 0 30px #c08eff`;
}
function tirarBrilho() {
    titulo.style.textShadow = "none";
}

setInterval(() => {
    brilhoTitulo();
    setTimeout(tirarBrilho, 700);
}, 2000);


// ======= SCROLL SUAVE PARA O TOPO ==========
const btnTopo = document.createElement("button");
btnTopo.innerText = "⬆ Topo";
btnTopo.style.position = "fixed";
btnTopo.style.bottom = "20px";
btnTopo.style.right = "20px";
btnTopo.style.padding = "10px 15px";
btnTopo.style.border = "none";
btnTopo.style.borderRadius = "10px";
btnTopo.style.cursor = "pointer";
btnTopo.style.background = "#7f00ff";
btnTopo.style.color = "white";
btnTopo.style.boxShadow = "0 0 10px #7f00ff";
btnTopo.style.display = "none";
btnTopo.style.fontWeight = "bold";

document.body.appendChild(btnTopo);

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
});

btnTopo.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};


// ======= MODO DARK/NEON ==========
const botaoTema = document.createElement("button");
botaoTema.innerText = "🌙/☀ Modo";
botaoTema.style.position = "fixed";
botaoTema.style.bottom = "20px";
botaoTema.style.left = "20px";
botaoTema.style.padding = "10px 15px";
botaoTema.style.border = "none";
botaoTema.style.borderRadius = "10px";
botaoTema.style.cursor = "pointer";
botaoTema.style.background = "#333";
botaoTema.style.color = "white";
botaoTema.style.boxShadow = "0 0 10px #7f00ff";
botaoTema.style.fontWeight = "bold";

document.body.appendChild(botaoTema);

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("modo-dark");
});


// ======= GALERIA – TELA CHEIA ==========
const imagens = document.querySelectorAll(".gallery img");

imagens.forEach((img) => {
    img.addEventListener("click", () => {
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,0.9)";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.zIndex = "9999";
        overlay.style.cursor = "zoom-out";

        const imagemAmpliada = document.createElement("img");
        imagemAmpliada.src = img.src;
        imagemAmpliada.style.maxWidth = "90%";
        imagemAmpliada.style.maxHeight = "90%";
        imagemAmpliada.style.borderRadius = "20px";
        imagemAmpliada.style.boxShadow = "0 0 40px #7f00ff";

        overlay.appendChild(imagemAmpliada);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => overlay.remove());
    });
});


// ======= REVELAÇÃO SUAVE AO ROLAR ==========
const elementos = document.querySelectorAll("main, aside, footer");

function revelar() {
    elementos.forEach((el) => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

elementos.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all .8s ease";
});

window.addEventListener("scroll", revelar);
setTimeout(revelar, 300);
