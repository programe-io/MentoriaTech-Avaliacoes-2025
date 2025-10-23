<script>
// ======= Seleção de elementos =======
const sections = document.querySelectorAll("main article");
const navLinks = document.querySelectorAll("nav a");
const title = document.querySelector(".title-text");
const articles = document.querySelectorAll("main article");
const images = document.querySelectorAll("main img, section#inicio img");

// ======= Atualizar ano automaticamente =======
document.querySelector(".year").textContent = new Date().getFullYear();

// ======= Alterar título ao clicar =======
title.addEventListener("click", () => {
    title.textContent = "Explore o Universo do Boxe!";
    title.style.color = "#ff0000";
});

// ======= Destacar seção ao passar o mouse =======
articles.forEach(article => {
    article.addEventListener("mouseenter", () => {
        article.style.backgroundColor = "#f0f0f0";
        article.style.transition = "0.3s";
    });
    article.addEventListener("mouseleave", () => {
        article.style.backgroundColor = "transparent";
    });
});

// ======= Menu ativo e scroll suave =======
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });

    // Mostrar botão voltar ao topo
    const topBtn = document.getElementById("topBtn");
    if (pageYOffset > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

// ======= Alert e scroll suave ao clicar nos links do menu =======
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        alert(`Você clicou em "${link.textContent}"!`);
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// ======= Pop-up de imagens =======
images.forEach(img => {
    img.addEventListener("click", () => {
        const popup = document.createElement("div");
        popup.style.position = "fixed";
        popup.style.top = 0;
        popup.style.left = 0;
        popup.style.width = "100%";
        popup.style.height = "100%";
        popup.style.background = "rgba(0,0,0,0.8)";
        popup.style.display = "flex";
        popup.style.justifyContent = "center";
        popup.style.alignItems = "center";
        popup.style.zIndex = 1000;

        popup.innerHTML = `
            <img src="${img.src}" style="max-width:90%; max-height:90%; border:5px solid #fff; border-radius:10px;">
            <span id="closePopup" style="position:absolute; top:20px; right:30px; font-size:30px; color:white; cursor:pointer;">&times;</span>
        `;

        document.body.appendChild(popup);

        document.getElementById("closePopup").addEventListener("click", () => {
            document.body.removeChild(popup);
        });
    });
});

// ======= Criar botão voltar ao topo =======
const topButton = document.createElement("button");
topButton.id = "topBtn";
topButton.textContent = "↑ Topo";
topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.padding = "10px 15px";
topButton.style.fontSize = "18px";
topButton.style.display = "none";
topButton.style.backgroundColor = "#333";
topButton.style.color = "#fff";
topButton.style.border = "none";
topButton.style.borderRadius = "5px";
topButton.style.cursor = "pointer";
topButton.style.zIndex = 999;
document.body.appendChild(topButton);

topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ======= Mensagem de boas-vindas =======
window.addEventListener("load", () => {
    alert("Bem-vindo ao site sobre a História do Boxe! Explore os artigos e curiosidades.");
});
</script>
