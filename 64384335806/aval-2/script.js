document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('notasForm');
  const resultados = document.getElementById('resultados');
  const mediasBimestraisDiv = document.getElementById('mediasBimestrais');
  const mediaSemanalP = document.getElementById('mediaSemanal');
  const mediaFinalP = document.getElementById('mediaFinal');

  form.addEventListener('submit', e => {
    e.preventDefault();

    // Coletar notas
    let notas = [];
    for(let i = 1; i <= 8; i++) {
      const notaInput = document.getElementById(`nota${i}`);
      let valor = parseFloat(notaInput.value);
      if(isNaN(valor) || valor < 0 || valor > 10) {
        alert(`Por favor, informe uma nota válida entre 0 e 10 para Nota ${i}`);
        notaInput.focus();
        return;
      }
      notas.push(valor);
    }

    // Calcular médias bimestrais (pares de notas)
    let mediasBimestrais = [];
    for(let i = 0; i < 8; i += 2) {
      mediasBimestrais.push(((notas[i] + notas[i+1]) / 2).toFixed(2));
    }

    // Média semanal aproximada: média anual / 40 semanas
    let mediaAnual = notas.reduce((acc, cur) => acc + cur, 0) / notas.length;
    let mediaSemanal = mediaAnual / 40;

    // Exibir resultados
    mediasBimestraisDiv.innerHTML = `<strong>Médias Bimestrais:</strong> ${mediasBimestrais.join(', ')}`;
    mediaSemanalP.innerHTML = `<strong>Média Semanal Aproximada:</strong> ${mediaSemanal.toFixed(3)}`;
    mediaFinalP.innerHTML = `<strong>Média Final Anual:</strong> ${mediaAnual.toFixed(2)}`;

    resultados.style.display = 'block';
  });

  // Modal Gerenciar Sistema
  const btnGerenciar = document.getElementById('btnGerenciar');
  const modal = document.getElementById('modalMenu');
  const closeBtn = modal.querySelector('.close-btn');
  const tabs = modal.querySelectorAll('.menu-list li');
  const contentArea = document.getElementById('modalContent');

  btnGerenciar.addEventListener('click', () => {
    modal.classList.add('active');
    modal.focus();
    btnGerenciar.setAttribute('aria-expanded', 'true');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    btnGerenciar.setAttribute('aria-expanded', 'false');
    btnGerenciar.focus();
  });

  // Fecha modal com ESC
  window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
      btnGerenciar.setAttribute('aria-expanded', 'false');
      btnGerenciar.focus();
    }
  });

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
        t.setAttribute('tabindex', '-1');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      tab.setAttribute('tabindex', '0');

      // Mudar conteúdo de acordo com o tab clicado
      const content = tab.dataset.content;
      switch(content) {
        case 'materia':
          contentArea.innerHTML = '<p><strong>Gerenciar Matéria:</strong> Aqui você poderá adicionar, editar ou remover matérias.</p>';
          break;
        case 'professor':
          contentArea.innerHTML = '<p><strong>Gerenciar Professor:</strong> Cadastre e atualize informações dos professores.</p>';
          break;
        case 'aluno':
          contentArea.innerHTML = '<p><strong>Gerenciar Aluno:</strong> Controle as informações dos alunos matriculados.</p>';
          break;
        case 'notas':
          contentArea.innerHTML = '<p><strong>Gerenciar Notas:</strong> Consulte, altere ou registre notas escolares.</p>';
          break;
        default:
          contentArea.innerHTML = '<p>Selecione uma opção no menu acima para começar.</p>';
      }
    });
  });

  // Permite navegar pelos tabs com teclado (setas)
  modal.querySelector('.menu-list').addEventListener('keydown', e => {
    let index = Array.from(tabs).findIndex(t => t === document.activeElement);
    if(e.key === 'ArrowRight') {
      index = (index + 1) % tabs.length;
      tabs[index].focus();
      tabs[index].click();
      e.preventDefault();
    } else if(e.key === 'ArrowLeft') {
      index = (index - 1 + tabs.length) % tabs.length;
      tabs[index].focus();
      tabs[index].click();
      e.preventDefault();
    }
  });
});
