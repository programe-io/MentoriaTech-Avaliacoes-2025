// ======= Alternar modo escuro =======
const darkToggle = document.getElementById('dark-toggle');

darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        darkToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        darkToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// Mantém tema salvo
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    darkToggle.textContent = '☀️';
}

// ======= Envio de formulário =======
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✅ Mensagem enviada com sucesso!');
    form.reset();
});