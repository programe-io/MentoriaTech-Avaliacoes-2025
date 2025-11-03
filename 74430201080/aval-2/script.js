// ==============================
// SCRIPT INTERATIVO DO BLOG
// ==============================

// Função para alternar a visualização do conteúdo "Leia mais"
document.addEventListener("DOMContentLoaded", () => {
    const readMoreButtons = document.querySelectorAll(".btn");
    
    readMoreButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const article = event.target.closest("article");
            const extraContent = article.querySelector(".extra-content");
            
            if (!extraContent) {
                // Se não houver conteúdo extra, criar dinamicamente
                const pExtra = document.createElement("p");
                pExtra.classList.add("extra-content");
                pExtra.textContent = "Aqui está o conteúdo extra do post. Dicas detalhadas, tutoriais passo a passo e sugestões de produtos roxos incríveis para você arrasar no look!";
                article.appendChild(pExtra);
                button.textContent = "Mostrar menos";
            } else {
                // Alterna visibilidade do conteúdo extra
                if (extraContent.style.display === "none" || extraContent.style.display === "") {
                    extraContent.style.display = "block";
                    button.textContent = "Mostrar menos";
                } else {
                    extraContent.style.display = "none";
                    button.textContent = "Leia mais";
                }
            }
        });
    });

    // ==============================
    // Contador de cliques
    // ==============================
    let clickCounter = 0;
    const counterDisplay = document.createElement("div");
    counterDisplay.style.position = "fixed";
    counterDisplay.style.bottom = "20px";
    counterDisplay.style.right = "20px";
    counterDisplay.style.backgroundColor = "#7b2cbf";
    counterDisplay.style.color = "white";
    counterDisplay.style.padding = "10px 15px";
    counterDisplay.style.borderRadius = "50px";
    counterDisplay.style.fontWeight = "bold";
    counterDisplay.textContent = `Cliques em "Leia mais": ${clickCounter}`;
    document.body.appendChild(counterDisplay);

    readMoreButtons.forEach(button => {
        button.addEventListener("click", () => {
            clickCounter++;
            counterDisplay.textContent = `Cliques em "Leia mais": ${clickCounter}`;
        });
    });

    // ==============================
    // Alternar tema roxo
    // ==============================
    const themeButton = document.createElement("button");
    themeButton.textContent = "Alternar Tema Roxo";
    themeButton.style.position = "fixed";
    themeButton.style.top = "20px";
    themeButton.style.right = "20px";
    themeButton.style.padding = "10px 15px";
    themeButton.style.backgroundColor = "#9d4edd";
    themeButton.style.color = "white";
    themeButton.style.border = "none";
    themeButton.style.borderRadius = "10px";
    themeButton.style.cursor = "pointer";
    themeButton.style.fontWeight = "bold";
    document.body.appendChild(themeButton);

    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-purple");
    });
});

// ==============================
// CSS para o tema escuro
// ==============================
const style = document.createElement("style");
style.textContent = `
    body.dark-purple {
        background-color: #3a0ca3 !important;
        color: #f2c5ff !important;
    }

    body.dark-purple header {
        background-color: #6a0dad !important;
    }

    body.dark-purple aside {
        background-color: #7b2cbf !important;
        color: #f2c5ff;
    }

    body.dark-purple article {
        background-color: #5f259f !important;
        color: #f2c5ff !important;
    }

    body.dark-purple .btn {
        background-color: #6a0dad !important;
    }

    body.dark-purple .btn:hover {
        background-color: #9d4edd !important;
    }
`;
document.head.appendChild(style);
