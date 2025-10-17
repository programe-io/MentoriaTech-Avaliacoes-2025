const imagens = document.querySelectorAll('.imagem img');

        imagens.forEach(img => {
            img.addEventListener('mouseenter', () => {
                img.style.transform = 'scale(1.1)';
                img.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
                img.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
            });

            img.addEventListener('mouseleave', () => {
                img.style.transform = 'scale(1)';
                img.style.boxShadow = 'none';
            });
        });

        // Botão de curtir
        const botoesCurtir = document.querySelectorAll('.curtir-btn');

        botoesCurtir.forEach(botao => {
            botao.addEventListener('click', () => {
                const contador = botao.nextElementSibling;
                let numero = parseInt(contador.textContent);
                numero++;
                contador.textContent = `${numero} curtida${numero > 1 ? 's' : ''}`;
                botao.disabled = true;
                botao.textContent = '❤️ Curtido';
                botao.style.backgroundColor = '#ff3366';
                botao.style.color = 'white';
            });
        });