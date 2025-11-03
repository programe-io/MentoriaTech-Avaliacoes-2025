document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    // Função para alternar as abas
    const switchTab = (tabName) => {
        tabButtons.forEach(button => {
            button.classList.remove('active', 'bg-indigo-500', 'text-white', 'hover:bg-indigo-600');
            button.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
        });
        tabPanes.forEach(pane => pane.classList.add('hidden'));

        const activeTabButton = document.querySelector(`.tab-button[data-tab="${tabName}"]`);
        const activeTabPane = document.querySelector(`.tab-pane[data-content="${tabName}"]`);

        if (activeTabButton) {
            activeTabButton.classList.add('active', 'bg-indigo-500', 'text-white', 'hover:bg-indigo-600');
            activeTabButton.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
        }

        if (activeTabPane) {
            activeTabPane.classList.remove('hidden');
            activeTabPane.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Evento de clique nas abas
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');
            switchTab(tabName);
        });
    });

    // Aba inicial
    switchTab('basico');
});