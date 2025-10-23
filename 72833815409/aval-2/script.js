document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("postForm");
    const postsSection = document.getElementById("posts");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const titulo = document.getElementById("titulo").value.trim();
        const conteudo = document.getElementById("conteudo").value.trim();

        if (titulo && conteudo) {
            const post = document.createElement("div");
            post.classList.add("post");

            post.innerHTML = `
                <h3>${titulo}</h3>
                <p>${conteudo}</p>
                <small>Publicado em ${new Date().toLocaleString()}</small>
            `;

            postsSection.appendChild(post);

            // Limpa o formulário
            form.reset();
        }
    });
});
