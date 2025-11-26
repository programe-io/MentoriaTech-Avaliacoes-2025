<script>
    // Seleciona o botão
    const btnTopo = document.getElementById('btnVoltarAoTopo');

    // Função para mostrar ou ocultar o botão
    window.onscroll = function() {
        // Se a rolagem vertical for maior que 300px, mostra o botão
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            btnTopo.classList.remove('opacity-0', 'invisible');
            btnTopo.classList.add('opacity-100', 'visible');
        } else {
            // Caso contrário, oculta o botão
            btnTopo.classList.remove('opacity-100', 'visible');
            btnTopo.classList.add('opacity-0', 'invisible');
        }
    };

    // Função para rolar para o topo da página ao clicar no botão
    btnTopo.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Rola suavemente
        });
    });

    // Função para alternar o menu de navegação em telas pequenas (bônus)
    // Se quiser um menu mobile, você precisaria de um botão e um menu
    // que seria escondido/mostrado com essa lógica.
    // Exemplo de como selecionar o menu, caso implemente um botão mobile:
    // const menu = document.querySelector('nav');
    // ...
</script>