document.getElementById('btnCuriosidades').addEventListener('click', () => {
    const curiosidadesDiv = document.getElementById('curiosidadesConteudo');
    if (curiosidadesDiv.style.display === 'none') {
        curiosidadesDiv.style.display = 'block';
    } else {
        curiosidadesDiv.style.display = 'none';
    }
});
