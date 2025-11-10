function createPost() {
    const content = document.getElementById("postContent").value;

    if (content.trim() === "") {
        alert("Escreva algo antes de publicar!");
        return;
    }

    const postsContainer = document.getElementById("postsContainer");

    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    const now = new Date().toLocaleString("pt-BR");

    postDiv.innerHTML = `
        <p>${content}</p>
        <span class="post-time">Publicado em: ${now}</span>
    `;

    postsContainer.prepend(postDiv);

    document.getElementById("postContent").value = "";
}
