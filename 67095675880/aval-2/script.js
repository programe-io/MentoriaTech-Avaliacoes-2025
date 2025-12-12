// 1. Pega referências aos elementos HTML
const botaoInteracao = document.getElementById('btn-interacao');
const tituloArtigo = document.getElementById('artigo-titulo');

// 2. Define a função que será chamada ao clicar
function interagirComArtigo() {
    // Muda o título do artigo
        tituloArtigo.textContent = '✨ Interação JS Concluída com Sucesso! ✨';
            
                // Muda o texto do botão
                    botaoInteracao.textContent = 'Interagido!';
                        
                            // Alerta o usuário
                                alert('O JavaScript alterou o H1 e o texto do botão.');
                                    
                                        // Remove o evento de clique após a primeira interação (opcional)
                                            botaoInteracao.removeEventListener('click', interagirComArtigo);
                                            }

                                            // 3. Adiciona um "ouvinte de evento" de clique ao botão
                                            botaoInteracao.addEventListener('click', interagirComArtigo);

                                            console.log('Script carregado e pronto para interação.');
                                            