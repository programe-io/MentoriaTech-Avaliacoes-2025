// Seleciona o botão e o parágrafo oculto
const btn = document.getElementById('maisInfoBtn');
const info = document.getElementById('maisInfo');

btn.addEventListener('click', () => {
    if (info.classList.contains('oculto')) {
        info.classList.remove('oculto');
        btn.textContent = "Mostrar menos";
    } else {
        info.classList.add('oculto');
        btn.textContent = "Clique para mais detalhes";
    }
});
