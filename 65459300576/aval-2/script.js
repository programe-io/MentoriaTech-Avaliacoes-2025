document.addEventListener('DOMContentLoaded', function() {
    // Adiciona interatividade ao botão "Fale Conosco"
    const botaoContato = document.getElementById('btn-contato');

    botaoContato.addEventListener('click', function() {
        alert('Obrigado por seu interesse! Em breve, um de nossos consultores entrará em contato.');
    });
});