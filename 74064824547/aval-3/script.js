// ==========================
// Função para curtir um post
// ==========================
const likePost = (button) => {
    const currentValue = Number(button.dataset.likes);
    const newValue = currentValue + 1;

    button.dataset.likes = newValue;
    button.textContent = `Curtir (${newValue})`;
};


// =======================================
// Mostra / esconde os comentários do post
// =======================================
const toggleComments = (id) => {
    const box = document.querySelector(`#comments-${id}`);

    if (!box) return;

    box.classList.toggle("comments-open");
};


// =======================================
// Ligando os botões de cada postagem
// =======================================
document.addEventListener("DOMContentLoaded", () => {
    // Botões de like
    document.querySelectorAll(".btn-like").forEach(btn => {
        // pega valor dentro do texto
        const number = btn.textContent.match(/\d+/)[0];
        btn.dataset.likes = number;

        btn.addEventListener("click", () => likePost(btn));
    });

    // Botões de comentário
    document.querySelectorAll(".btn-comment").forEach(btn => {
        btn.addEventListener("click", () => {
            // id do botão "comment-toggle-2"
            const id = btn.id.split("-")[2];
            toggleComments(id);
        });
    });
});
