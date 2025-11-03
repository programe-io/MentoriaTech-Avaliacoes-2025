function mostrarHorario(dia) {
  const tabela = document.getElementById('tabelaHorario');
  const linhas = tabela.getElementsByTagName('tr');

  for (let i = 1; i < linhas.length; i++) {
    const colunas = linhas[i].getElementsByTagName('td');
    for (let j = 1; j < colunas.length; j++) {
      if (tabela.rows[0].cells[j].innerText.toLowerCase() === dia) {
        colunas[j].style.backgroundColor = '#d2b4de';
      } else {
        colunas[j].style.backgroundColor = '#e8daef';
      }
    }
  }
}

// Pesquisa dinâmica de matérias
document.getElementById('campoPesquisa').addEventListener('input', function() {
  const filtro = this.value.toLowerCase();
  const materias = document.querySelectorAll('.materia');

  materias.forEach(materia => {
    const nome = materia.querySelector('h3').innerText.toLowerCase();
    materia.style.display = nome.includes(filtro) ? 'block' : 'none';
  });
});
