// Botão Curtir
const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach(button => {
    let count = 0;
    button.addEventListener("click", () => {
        count++;
        button.textContent = `Curtir (${count})`;
    });
});

// Filtrar posts por categoria
const filtro = document.getElementById("filtro-categoria");
const posts = document.querySelectorAll("main article");

filtro.addEventListener("change", () => {
    const categoriaSelecionada = filtro.value;

    posts.forEach(post => {
        if (categoriaSelecionada === "todas") {
            post.style.display = "block";
        } else if (post.dataset.categoria === categoriaSelecionada) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
});
AnimationEvent