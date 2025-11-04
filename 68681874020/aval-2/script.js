// Botão "Voltar ao topo"
const btnTopo = document.getElementById('btn-topo');
btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Formulário de contato
const form = document.getElementById('form-contato');
const mensagemEnvio = document.getElementById('mensagem-envio');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    mensagemEnvio.textContent = `Obrigado, ${document.getElementById('nome').value}! Sua mensagem foi enviada com sucesso.`;
    form.reset();
});

// Alternar modo escuro
const toggleTema = document.getElementById('toggle-tema');
toggleTema.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleTema.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
