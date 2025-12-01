const toggleBtn = document.getElementById('toggleAsideBtn');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
        sidebar.style.display = 'block';
        toggleBtn.textContent = 'Ocultar Sidebar';
    } else {
        sidebar.style.display = 'none';
        toggleBtn.textContent = 'Mostrar Sidebar';
    }
});
