function mudarTexto() {
        // 1. Encontra o parágrafo pelo ID 'mensagem'
            var paragrafo = document.getElementById('mensagem');
                
                    // 2. Muda o texto do parágrafo
                        paragrafo.innerHTML = 'JavaScript está funcionando!';
                            
                                // 3. Opcional: muda o estilo para mostrar que algo aconteceu
                                    paragrafo.style.color = '#ff4500'; // Laranja
                                        paragrafo.style.borderColor = '#ff4500';
                                        }