// ------------ Rolagem suave entre seções ------------
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const alvo = document.querySelector(this.getAttribute("href"));
        alvo.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});


// ------------ Animação quando elementos aparecem na tela ------------
const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("aparecer");
        }
    });
});

document.querySelectorAll("article, section").forEach(el => {
    observador.observe(el);
});


// ------------ Botão voltar ao topo ------------
const botaoTopo = document.createElement("button");
botaoTopo.innerText = "↑ Topo";
botaoTopo.id = "btnTopo";

document.body.appendChild(botaoTopo);

botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "20px";
botaoTopo.style.right = "20px";
botaoTopo.style.padding = "10px 15px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "8px";
botaoTopo.style.background = "#f59e0b";
botaoTopo.style.color = "#fff";
botaoTopo.style.fontSize = "16px";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.display = "none";
botaoTopo.style.boxShadow = "0 5px 15px rgba(0,0,0,0.4)";
botaoTopo.style.transition = "300ms";


window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        botaoTopo.style.display = "block";
        botaoTopo.style.opacity = "1";
    } else {
        botaoTopo.style.opacity = "0";
        botaoTopo.style.display = "none";
    }
});

botaoTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// ------------ Destacar link ativo no menu conforme a rolagem ------------
const secoes = document.querySelectorAll("section, article");
const linksMenu = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let pos = window.scrollY + 200;

    secoes.forEach(sec => {
        if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
            let id = sec.getAttribute("id");

            linksMenu.forEach(link => {
                link.classList.remove("ativo");
                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("ativo");
                }
            });
        }
    });
});
