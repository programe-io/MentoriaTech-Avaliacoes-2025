// PEGAR ELEMENTOS
const inputFile = document.getElementById("fotoPost");
const preview = document.getElementById("preview");
const postarBtn = document.getElementById("postarBtn");
const curtirBtn = document.getElementById("curtirBtn");
const comentarBtn = document.getElementById("comentarBtn");
const likeCount = document.getElementById("likeCount");
const feed = document.getElementById("feed");

let likes = 0;

// PREVIEW DA IMAGEM
inputFile.addEventListener("change", () => {
    let file = inputFile.files[0];
        if (file) {
                let reader = new FileReader();
                        reader.onload = e => {
                                    preview.src = e.target.result;
                                            };
                                                    reader.readAsDataURL(file);
                                                        }
                                                        });

                                                        // SISTEMA DE POSTAR
                                                        postarBtn.addEventListener("click", () => {
                                                            if (!preview.src) {
                                                                    alert("Escolha uma imagem primeiro!");
                                                                            return;
                                                                                }

                                                                                    let novoPost = document.createElement("div");
                                                                                        novoPost.className = "post";

                                                                                            novoPost.innerHTML = `
                                                                                                    <img src="${preview.src}">
                                                                                                            <p>Nova publicação de Gabriel Santana 😎</p>
                                                                                                                `;

                                                                                                                    feed.prepend(novoPost);

                                                                                                                        preview.src = "";
                                                                                                                            inputFile.value = "";
                                                                                                                            });

                                                                                                                            // CURTIR
                                                                                                                            curtirBtn.addEventListener("click", () => {
                                                                                                                                likes++;
                                                                                                                                    likeCount.textContent = likes + " curtidas";
                                                                                                                                    });

                                                                                                                                    // COMENTAR
                                                                                                                                    comentarBtn.addEventListener("click", () => {
                                                                                                                                        let comentario = prompt("Digite seu comentário:");
                                                                                                                                            if (comentario) {
                                                                                                                                                    alert("Comentário enviado! 😄");
                                                                                                                                                        }
                                                                                                                                                        });