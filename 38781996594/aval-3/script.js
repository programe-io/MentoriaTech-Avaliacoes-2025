// Pega os elementos do formulário
const form = document.getElementById("formPost");
const postsSection = document.getElementById("posts");

// Adiciona evento de envio do formulário
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede recarregar a página

    // Captura os valores
    const titulo = document.getElementById("titulo").value.trim();
    const conteudo = document.getElementById("conteudo").value.trim();

    if (titulo === "" || conteudo === "") {
        alert("⚠️ Por favor, preencha todos os campos!");
        return;
    }

    // Cria novo elemento de artigo
    const novoPost = document.createElement("article");

    const h3 = document.createElement("h3");
    h3.textContent = titulo;

    const p = document.createElement("p");
    p.textContent = conteudo;

    // Adiciona ao novo artigo
    novoPost.appendChild(h3);
    novoPost.appendChild(p);

    // Insere no início da seção
    postsSection.appendChild(novoPost);

    // Limpa o formulário
    form.reset();

    // Mensagem
    alert("✅ Novo post adicionado com sucesso!");
});