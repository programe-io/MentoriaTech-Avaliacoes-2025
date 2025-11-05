// Função do botão "Curtir"
function curtir(botao) {
    if(botao.innerText.includes('👍')) {
        botao.innerText = '✅ Curtido';
        botao.style.backgroundColor = '#16a085';
    } else {
        botao.innerText = 'Curtir 👍';
        botao.style.backgroundColor = '#2c3e50';
    }
}

// Formulário de contato
const form = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if(nome && email && mensagem) {
        formResponse.innerText = `Obrigado, ${nome}! Sua mensagem foi enviada.`;
        form.reset();
    } else {
        formResponse.innerText = "Por favor, preencha todos os campos.";
    }
});
