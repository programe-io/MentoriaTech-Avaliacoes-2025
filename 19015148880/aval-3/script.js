// Alterna o modo escuro e salva no localStorage
const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const dark = document.body.classList.contains('dark-mode');
    darkModeBtn.textContent = dark ? '☀️' : '🌙';
    localStorage.setItem('darkMode', dark);
});

// Carrega a preferência ao iniciar
window.addEventListener('load', () => {
    const dark = localStorage.getItem('darkMode') === 'true';
    if (dark) {
        document.body.classList.add('dark-mode');
        darkModeBtn.textContent = '☀️';
    }
});
