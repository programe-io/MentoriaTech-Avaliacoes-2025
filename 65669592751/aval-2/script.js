// Seleciona o botão e o aside
const toggleBtn = document.getElementById('toggleAsideBtn');
const sidebar = document.getElementById('sidebar');

// Adiciona o evento de clique no botão
toggleBtn.addEventListener('click', () => {
    // Verifica se o sidebar está visível
    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
        sidebar.style.display = 'block'; // Mostra o sidebar
        toggleBtn.textContent = 'Ocultar Sidebar';
    } else {
        sidebar.style.display = 'none'; // Oculta o sidebar
        toggleBtn.textContent = 'Mostrar Sidebar';
    }
});
