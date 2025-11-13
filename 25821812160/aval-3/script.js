// Função para gerar uma cor hexadecimal aleatória
function gerarCorAleatoria() {
    const cor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        return cor;
        }

        // Espera o documento carregar
        document.addEventListener('DOMContentLoaded', function() {
            // Seleciona o elemento h1 pelo ID
                const nomeElemento = document.getElementById('meuNome');

                    // Adiciona o evento de clique
                        nomeElemento.addEventListener('click', function() {
                                // Pega a nova cor aleatória
                                        const novaCor = gerarCorAleatoria();
                                                
                                                        // Aplica a nova cor ao estilo do elemento
                                                                nomeElemento.style.color = novaCor;
                                                                    });
                                                                    });