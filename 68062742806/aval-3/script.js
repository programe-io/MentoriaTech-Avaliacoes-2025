const posts = [
      {
          id: 1,
              titulo: "Como criar um blog com HTML, CSS e JS",
                  resumo: "Aprenda passo a passo como criar um blog simples e público.",
                      imagem: "https://via.placeholder.com/600x300?text=HTML+CSS+JS",
                          conteudo: `
                                <p>Este post mostra como criar um blog completo usando HTML, CSS e JavaScript.</p>
                                      <pre><code>
                                            &lt;h1&gt;Olá Mundo&lt;/h1&gt;
                                                  console.log('Meu primeiro blog!');
                                                        </code></pre>
                                                            `
                                                              },
                                                                {
                                                                    id: 2,
                                                                        titulo: "Exemplo de código em JavaScript",
                                                                            resumo: "Veja como escrever funções úteis em JavaScript.",
                                                                                imagem: "https://via.placeholder.com/600x300?text=JavaScript+Code",
                                                                                    conteudo: `
                                                                                          <pre><code>
                                                                                                function saudacao(nome) {
                                                                                                        return "Olá, " + nome + "!";
                                                                                                              }
                                                                                                                    console.log(saudacao("Visitante"));
                                                                                                                          </code></pre>
                                                                                                                              `
                                                                                                                                }
                                                                                                                                ];

                                                                                                                                function carregarPosts() {
                                                                                                                                  const container = document.getElementById("posts-container");
                                                                                                                                    posts.forEach(post => {
                                                                                                                                        const div = document.createElement("div");
                                                                                                                                            div.classList.add("post");
                                                                                                                                                div.innerHTML = `
                                                                                                                                                      <img src="${post.imagem}" alt="Imagem do post ${post.titulo}">
                                                                                                                                                            <h3>${post.titulo}</h3>
                                                                                                                                                                  <p>${post.resumo}</p>
                                                                                                                                                                        <a href="post.html?id=${post.id}"><span>Ler mais</span></a>
                                                                                                                                                                            `;
                                                                                                                                                                                container.appendChild(div);
                                                                                                                                                                                  });
                                                                                                                                                                                  }

                                                                                                                                                                                  carregarPosts();
                                                                                                                                                                                  
]                              