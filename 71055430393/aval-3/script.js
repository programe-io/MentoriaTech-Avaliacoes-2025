const inputFoto = document.getElementById("inputFoto");
const btnEnviar = document.getElementById("btnEnviar");
const feed = document.getElementById("feed");

btnEnviar.addEventListener("click", () => {
    const arquivo = inputFoto.files[0];

        if (!arquivo) {
                alert("Escolha uma imagem primeiro!");
                        return;
                            }

                                const leitor = new FileReader();

                                    leitor.onload = function(e) {
                                            const post = document.createElement("div");
                                                    post.classList.add("post");

                                                            post.innerHTML = `
                                                                        <h3>Nova publicação</h3>
                                                                                    <img src="${e.target.result}" alt="Foto enviada">
                                                                                                <p>Post realizado com sucesso!</p>
                                                                                                            <span>❤ 0 curtidas</span>
                                                                                                                    `;

                                                                                                                            feed.prepend(post);
                                                                                                                                };

                                                                                                                                    leitor.readAsDataURL(arquivo);
                                                                                                                                    });