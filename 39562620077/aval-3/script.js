// Função que será chamada quando o botão for clicado
function mudarCor() {
    // 1. Encontra o elemento <h1> pelo seu seletor
        const cabecalho = document.querySelector('h1');
            
                // 2. Define uma lista de cores que podem ser usadas
                    const cores = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFC300'];
                        
                            // 3. Escolhe uma cor aleatória da lista
                                const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
                                    
                                        // 4. Aplica a nova cor ao estilo do cabeçalho
                                            cabecalho.style.color = corAleatoria;
                                                
                                                    // Adiciona uma mensagem de alerta (opcional, apenas para testar)
                                                        // alert('A cor do nome foi alterada!');
                                                        }