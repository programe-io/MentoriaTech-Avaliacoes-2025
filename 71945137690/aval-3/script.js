// Função para adicionar interatividade aos cartões
document.addEventListener('DOMContentLoaded', () => {
  // Seleciona todos os cartões
    const cards = document.querySelectorAll('.card');

      // Adiciona um evento de clique a cada cartão
        cards.forEach(card => {
            card.addEventListener('click', () => {
                  console.log('Você clicou no cartão:', card);
                      });
                        });
                        });
                        