document.addEventListener('DOMContentLoaded', () => {
        // Seleciona todos os links de navegação que apontam para seções internas
            const links = document.querySelectorAll('a[href^="#"]');

                links.forEach(link => {
                        link.addEventListener('click', function (e) {
                                    // Previne o comportamento padrão do link (navegação instantânea)
                                                e.preventDefault();

                                                            // Pega o destino (ID da seção, ex: #servicos)
                                                                        const targetId = this.getAttribute('href');
                                                                                    
                                                                                                // Encontra o elemento de destino
                                                                                                            const targetElement = document.querySelector(targetId);

                                                                                                                        if (targetElement) {
                                                                                                                                        // Calcula a posição de rolagem com um offset (para compensar o header fixo)
                                                                                                                                                        const headerHeight = document.querySelector('.header').offsetHeight;
                                                                                                                                                                        const targetPosition = targetElement.offsetTop - headerHeight;

                                                                                                                                                                                        // Rola suavemente para a posição
                                                                                                                                                                                                        window.scrollTo({
                                                                                                                                                                                                                            top: targetPosition,
                                                                                                                                                                                                                                                behavior: 'smooth'
                                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                    });
                                                                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                                                                        
})