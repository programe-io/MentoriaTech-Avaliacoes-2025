<script>
// Mensagem de boas-vindas ao carregar o site
window.addEventListener("load", function() {
    alert("🚗 Bem-vindo ao site da Indústria Automotiva de Luxo!");
});

// Função para mudar a cor do cabeçalho ao rolar a página
window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "linear-gradient(90deg, #005baa, #000000)";
        header.style.transition = "0.5s";
    } else {
        header.style.background = "linear-gradient(90deg, #000000, #005baa)";
    }
});

// Botão de voltar ao topo
let botaoTopo = document.createElement("button");
botaoTopo.textContent = "⬆️ Topo";
botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "20px";
botaoTopo.style.right = "20px";
botaoTopo.style.padding = "10px 15px";
botaoTopo.style.backgroundColor = "#005baa";
botaoTopo.style.color = "white";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "8px";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.display = "none";
botaoTopo.style.fontWeight = "bold";
document.body.appendChild(botaoTopo);

botaoTopo.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Mostrar o botão apenas quando rolar para baixo
window.addEventListener("scroll", function() {
    if (window.scrollY > 400) {
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }
});

// Efeito de destaque nos links da barra de navegação
let links = document.querySelectorAll("nav a");
links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.color = "#ffd700";
    });
    link.addEventListener("mouseleave", () => {
        link.style.color = "white";
    });
});

// Função bônus — mudar texto do rodapé dinamicamente
let rodape = document.querySelector("footer p");
let data = new Date();
rodape.innerHTML = `© ${data.getFullYear()} Indústria Automotiva de Luxo — Todos os direitos reservados 🚘`;
</script>
