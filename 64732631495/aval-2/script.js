<script>
    function enviarFormulario(event) {
        event.preventDefault(); // Evita que o formulário seja enviado e a página recarregue
        const mensagem = document.getElementById('mensagem'); // Seleciona o elemento de mensagem
        mensagem.style.display = 'block'; // Mostra a mensagem de sucesso
    }
</script>
