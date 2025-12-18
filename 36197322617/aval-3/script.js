function criarPost() {
    const texto = document.getElementById("postText").value;
    const feed = document.getElementById("feed");

    if (texto.trim() === "") {
        alert("Digite algo para postar!");
        return;
    }

    const divPost = document.createElement("div");
    divPost.className = "post";
    divPost.innerText = texto;

    feed.prepend(divPost);
    document.getElementById("postText").value = "";
}
