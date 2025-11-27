document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Saudação inicial
    function saudarVila() {
        alert("Foi sem querer querendo!");
    }
    setTimeout(saudarVila, 1000);

    // 2. Intercepta o clique no link "Fale Comigo"
    // Note: O id="linkFaleComigo" foi adicionado no HTML para facilitar a seleção.
    const linkFaleComigo = document.getElementById('linkFaleComigo');

    if (linkFaleComigo) {
        linkFaleComigo.addEventListener('click', (event) => {
            event.preventDefault(); // Impede a navegação padrão
            
            const resposta = confirm("Antes de falar com a gente, você veio pagar o aluguel do Seu Madruga?");
            
            if (resposta) {
                alert("Obrigado! Seu Barriga vai adorar! Receba esse presente: um sanduíche de presunto virtual!");
            } else {
                alert("Ah, não! 'Pipipipipi!' Você não escapa do Seu Barriga!");
            }
        });
    }

    // 3. Efeito simples ao passar o mouse sobre o post destaque
    const postDestaque = document.querySelector('.post-destaque');
    
    if (postDestaque) {
        postDestaque.addEventListener('mouseover', () => {
            postDestaque.style.backgroundColor = '#fff0f0'; // Cor de destaque
        });
        
        postDestaque.addEventListener('mouseout', () => {
            postDestaque.style.backgroundColor = 'white'; // Volta ao normal
        });
    }
});