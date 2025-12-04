// Aguarda o carregamento completo do documento HTML
document.addEventListener('DOMContentLoaded', (event) => {
    // Seleciona todos os elementos com a classe 'data-post'
        const dataPosts = document.querySelectorAll('.data-post');

            // Cria uma nova data
                const today = new Date();
                    // Formata a data como "dd/mm/yyyy"
                        const formattedDate = today.toLocaleDateString('pt-BR');

                            // Itera sobre os elementos encontrados e atualiza o conteúdo de texto
                                dataPosts.forEach(post => {
                                        post.textContent = formattedDate;
                                            });

                                                // Exemplo de uma funcionalidade mais complexa: Alerta ao clicar no logo
                                                    const logo = document.querySelector('.logo h1');
                                                        logo.addEventListener('click', () => {
                                                                alert('Bem-vindo ao Blog do Desenvolvedor! Interatividade adicionada com JavaScript.');
                                                                    });
                                                                    });
                                                                    