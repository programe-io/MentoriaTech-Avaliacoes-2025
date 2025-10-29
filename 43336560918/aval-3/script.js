const buscaInput = document.getElementById('busca');
const receitas = document.querySelectorAll('.receita');

buscaInput.addEventListener('input', () => {
    const termo = buscaInput.value.toLowerCase();
    receitas.forEach(receita => {
        const nome = receita.getAttribute('data-nome');
        receita.style.display = nome.includes(termo) ? '' : 'none';
    });
});
