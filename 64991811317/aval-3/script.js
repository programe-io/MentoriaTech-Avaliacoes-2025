// Toggle modo escuro
const btnTema = document.getElementById('btnTema');
btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    btnTema.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Escuro';
});

// Validação e envio do formulário
const form = document.getElementById('formContato');
const sucesso = document.getElementById('mensagemSucesso');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    if (nome && email && mensagem) {
        sucesso.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
        sucesso.style.color = 'green';
        form.reset();
    } else {
        sucesso.textContent = 'Por favor, preencha todos os campos.';
        sucesso.style.color = 'red';
    }
});

// Botão para rolar ao topo
const btnTopo = document.getElementById('btnTopo');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnTopo.style.display = 'block';
    } else {
        btnTopo.style.display = 'none';
    }
});
btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Rolagem suave para links de navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});