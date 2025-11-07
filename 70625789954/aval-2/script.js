// Validação simples do formulário
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if(nome && email && mensagem) {
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        this.reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
