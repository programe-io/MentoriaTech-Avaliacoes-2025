// ===== JavaScript para o Sidebar (nav) =====

// Seleciona elementos
const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

// Abre o sidebar
openBtn.addEventListener("click", () => {
    sidebar.style.width = "250px";
    });

    // Fecha o sidebar
    closeBtn.addEventListener("click", () => {
        sidebar.style.width = "0";
        });

        // Fecha sidebar ao clicar em qualquer link dentro do nav
        const sidebarLinks = sidebar.querySelectorAll("a");
        sidebarLinks.forEach(link => {
            link.addEventListener("click", () => {
                    sidebar.style.width = "0";
                        });
                        });

                        // Mensagem no console
                        console.log("Página do Pablo carregada com sucesso!");