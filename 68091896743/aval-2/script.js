// script.js - interatividade básica e manipulação DOM

document.addEventListener('DOMContentLoaded', () => {
  // Atualiza ano no rodapé
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menu toggle para mobile
  const menuToggle = document.getElementById('menuToggle');
  const mainMenu = document.getElementById('mainMenu');
  if (menuToggle && mainMenu) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      mainMenu.style.display = expanded ? 'none' : 'flex';
    });
  }

  // Filtrar membros
  const searchForm = document.getElementById('searchMember');
  const memberQuery = document.getElementById('memberQuery');
  const members = Array.from(document.querySelectorAll('.member'));
  const resetBtn = document.getElementById('resetSearch');

  function showAllMembers() {
    members.forEach(m => m.style.display = '');
  }

  if (searchForm && memberQuery) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = memberQuery.value.trim().toLowerCase();
      if (!q) {
        showAllMembers();
        return;
      }
      members.forEach(m => {
        const name = (m.dataset.name || m.querySelector('h3')?.textContent || '').toLowerCase();
        m.style.display = name.includes(q) ? '' : 'none';
      });
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      memberQuery.value = '';
      showAllMembers();
    });
  }

  // Formulário de fã - validação simples e feedback via <output>
  const fanForm = document.getElementById('fanForm');
  const formResult = document.getElementById('formResult');
  const fanMeter = document.getElementById('fanMeter');
  const downloadProg = document.getElementById('downloadProg');

  if (fanForm && formResult) {
    fanForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = fanForm.fanName.value.trim() || 'Fã';
      const member = fanForm.memberSelect.value || '—';
      const message = fanForm.fanMessage.value.trim();
      formResult.textContent = `Obrigado, ${name}! Membro favorito: ${member}. Mensagem recebida (${message.length} caracteres).`;

      // Aumenta o meter como "participação"
      if (fanMeter) {
        let val = Math.min(100, Number(fanMeter.value || 0) + 5);
        fanMeter.value = val;
      }

      // Simula progresso (downloadProg)
      if (downloadProg) {
        let prog = 0;
        downloadProg.value = 0;
        const interval = setInterval(() => {
          prog += 10;
          downloadProg.value = prog;
          if (prog >= 100) {
            clearInterval(interval);
          }
        }, 120);
      }

      fanForm.reset();
    });
  }

  // "Mais" botão em cada member card: alterna <details> se existir
  document.querySelectorAll('.more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const article = btn.closest('.member');
      const details = article && article.querySelector('details');
      if (details) {
        details.open = !details.open;
        btn.setAttribute('aria-expanded', details.open);
        btn.textContent = details.open ? 'Menos' : 'Mais';
      } else {
        // fallback: mostrar alert simples
        alert('Mais detalhes não disponíveis para este membro.');
      }
    });
  });

  // Pequena acessibilidade: liga/dispara teclado para menu toggle (Enter/Space)
  if (menuToggle) {
    menuToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        menuToggle.click();
      }
    });
  }

  // Exemplo: adicionar novo membro via template (demonstração)
  const tpl = document.getElementById('memberTemplate');
  if (tpl && members.length < 12) {
    const clone = tpl.content.cloneNode(true);
    clone.querySelector('h3').textContent = 'Membro Extra';
    clone.querySelector('img').src = 'https://via.placeholder.com/200?text=Extra';
    clone.querySelector('img').alt = 'Membro Extra';
    document.querySelector('.members-grid').appendChild(clone);
  }

});
