// -------------------------------------------
// Função de Like com animação
// -------------------------------------------
document.querySelectorAll(".btn-like").forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("liked");

        if (btn.classList.contains("liked")) {
            btn.innerHTML = "❤️ Curtido";
        } else {
            btn.innerHTML = "🤍 Curtir";
        }
    });
});

// -------------------------------------------
// Sistema de comentários básico
// -------------------------------------------
document.querySelectorAll(".btn-comentar").forEach((btn) => {
    btn.addEventListener("click", () => {
        const card = btn.closest("article");
        const commentInput = card.querySelector(".comment-input");
        const commentSection = card.querySelector(".comments");

        // mostra/oculta o campo
        commentInput.classList.toggle("hidden");

        // Quando o usuário apertar Enter, publica o comentário
        commentInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter" && commentInput.value.trim() !== "") {

                const novoComentario = document.createElement("p");
                novoComentario.classList.add("text-sm", "text-gray-300", "mt-2");
                novoComentario.textContent = "💬 " + commentInput.value;

                commentSection.appendChild(novoComentario);

                commentInput.value = "";
            }
        });
    });
});

// -------------------------------------------
// Animação ao rolar a página (fade)
// -------------------------------------------
const cards = document.querySelectorAll("article");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animar");
        }
    });
});

cards.forEach((card) => observer.observe(card));
