// Dados dos posts
const posts = [
  {
      titulo: 'Título do Post 1',
          resumo: 'Resumo do post 1...',
              imagem: 'imagem1.jpg',
                },
                  {
                      titulo: 'Título do Post 2',
                          resumo: 'Resumo do post 2...',
                              imagem: 'imagem2.jpg',
                                },
                                  {
                                      titulo: 'Título do Post 3',
                                          resumo: 'Resumo do post 3...',
                                              imagem: 'imagem3.jpg',
                                                },
                                                ];

                                                // Seleciona a lista de posts
                                                const listaPosts = document.getElementById('lista-posts');

                                                // Adiciona os posts à lista
                                                posts.forEach((post) => {
                                                  const li = document.createElement('li');
                                                    li.innerHTML = `
                                                        <img src="${post.imagem}" alt="${post.titulo}">
                                                            <h3>${post.titulo}</h3>
                                                                <p>${post.resumo}</p>
                                                                  `;
                                                                    listaPosts.appendChild(li);
                                                                    });