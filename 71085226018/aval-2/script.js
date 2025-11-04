// Espera o carregamento completo da página
document.addEventListener("DOMContentLoaded", () => {

    // 1️⃣ - Efeito de digitação no título principal
    const titulo = document.querySelector("header h1");
    const textoOriginal = titulo.textContent;
    titulo.textContent = "";
    let i = 0;

    function escrever() {
        if (i < textoOriginal.length) {
            titulo.textContent += textoOriginal.charAt(i);
            i++;
            setTimeout(escrever, 100);
        }
    }
    escrever();

    // 2️⃣ - Alterar a cor do header ao rolar a página
    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#1b1b1b";
            header.style.transition = "background-color 0.5s";
        } else {
            header.style.backgroundColor = "transparent";
        }
    });

    // 3️⃣ - Galeria interativa: ampliar imagem ao clicar
    const imagens = document.querySelectorAll(".gallery img");
    imagens.forEach(img => {
        img.style.cursor = "pointer";
        img.addEventListener("click", () => {
            const modal = document.createElement("div");
            modal.classList.add("modal-imagem");
            modal.innerHTML = `
                <div class="modal-conteudo">
                    <img src="${img.src}" alt="Imagem Ampliada">
                </div>
            `;
            document.body.appendChild(modal);

            modal.addEventListener("click", () => {
                modal.remove();
            });
        });
    });

    // 4️⃣ - Efeito hover nos links do menu
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.color = "#00ccff";
            link.style.textShadow = "0 0 10px #00ccff";
        });
        link.addEventListener("mouseleave", () => {
            link.style.color = "";
            link.style.textShadow = "";
        });
    });

    // 5️⃣ - Mensagem divertida no console 😎
    console.log("%cPressão máxima ativada! ⚡", "color: cyan; font-size: 16px; font-weight: bold;");
});
