function mostrarPagina(paginaId) {
    const paginas = document.querySelectorAll('.pagina');
    
    paginas.forEach(pagina => {
        if (pagina.classList.contains('ativa')) {
            // animação de saída
            pagina.style.animation = 'fadeOut 0.5s forwards';
            setTimeout(() => {
                pagina.classList.remove('ativa');
            }, 500);
        }
    });

    setTimeout(() => {
        const novaPagina = document.getElementById(paginaId);
        novaPagina.classList.add('ativa');
        novaPagina.style.animation = 'fadeIn 0.8s ease forwards';
    }, 500);

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* Adiciona keyframes via JS para maior controle */
const estilo = document.createElement('style');
estilo.textContent = `
@keyframes fadeOut {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(40px); }
}
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-40px); }
    to { opacity: 1; transform: translateY(0); }
}`;
document.head.appendChild(estilo);
