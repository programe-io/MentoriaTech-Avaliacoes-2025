document.querySelectorAll('article.post h2').forEach(titulo => {
    titulo.style.cursor = 'pointer';
    titulo.addEventListener('click', () => {
        alert(`Você clicou no post: "${titulo.textContent}"`);
    });
});
