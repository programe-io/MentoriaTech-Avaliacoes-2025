/* script.js — atualizado para trabalhar com spans e manter interatividade simples */

document.addEventListener('DOMContentLoaded', function () {
  var btnStatus = document.getElementById('btn-status');
  var obraNote = document.getElementById('obra-note');
  var btnObraMore = document.getElementById('btn-obra-more');
  var btnObraToggle = document.getElementById('btn-obra-toggle');

  // marcar todos os spans relevantes (apenas demonstração de seleção)
  var importantSpans = document.querySelectorAll('main span, header span, footer span');
  // adiciona atributo data-timestamp para debug/controle
  importantSpans.forEach(function (el, idx) {
    el.setAttribute('data-span-id', 's' + (idx + 1));
  });

  var obraVisible = false;

  if (btnStatus) {
    btnStatus.addEventListener('click', function () {
      obraVisible = !obraVisible;
      toggleObraNote(obraVisible);
      // atualiza aria-pressed no botão para acessibilidade
      btnStatus.setAttribute('aria-pressed', obraVisible ? 'true' : 'false');
    });
  }

  if (btnObraMore) {
    btnObraMore.addEventListener('click', function () {
      // em vez de alert modal repetitivo, cria um painel temporário no DOM
      showTempPanel(
        'Reforma — resumo',
        '- Contrato/empreitada para reforma geral e cobertura da quadra.\n- Fonte: Diário Oficial do Estado do Piauí.\nConsulte SEDUC-PI para cronograma completo.'
      );
    });
  }

  if (btnObraToggle) {
    btnObraToggle.addEventListener('click', function () {
      obraVisible = !obraVisible;
      toggleObraNote(obraVisible);
    });
  }

  function toggleObraNote(show) {
    if (!obraNote) return;
    if (show) {
      obraNote.classList.remove('hidden');
      btnStatus && (btnStatus.textContent = 'Ocultar status da obra');
    } else {
      obraNote.classList.add('hidden');
      btnStatus && (btnStatus.textContent = 'Ver status da obra');
    }
  }

  // função utilitária que mostra um painel temporário (não usa alert)
  function showTempPanel(title, text) {
    var panel = document.createElement('div');
    panel.className = 'temp-panel';
    panel.style.position = 'fixed';
    panel.style.right = '16px';
    panel.style.bottom = '16px';
    panel.style.background = '#fff';
    panel.style.border = '1px solid rgba(0,0,0,0.08)';
    panel.style.padding = '12px';
    panel.style.borderRadius = '10px';
    panel.style.boxShadow = '0 10px 30px rgba(10,10,30,0.08)';
    panel.style.zIndex = 9999;
    panel.innerHTML = '<strong>' + escapeHtml(title) + '</strong><p style="margin-top:6px;white-space:pre-line;">' + escapeHtml(text) + '</p>';

    document.body.appendChild(panel);
    setTimeout(function () { panel.remove(); }, 6000);
  }

  // pequena função de escape para segurança
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (s) {
      return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]);
    });
  }

  // inicializa oculto
  toggleObraNote(false);

  // interação no card de contato: exibe número em destaque (não altera DOM permanentemente)
  var contatoCard = document.querySelector('.contact-card');
  if (contatoCard) {
    contatoCard.addEventListener('click', function () {
      var temp = document.createElement('div');
      temp.className = 'contact-temp';
      temp.textContent = 'Telefone de referência: (86) 3216-2056 — confirme antes de ir.';
      temp.style.padding = '8px';
      temp.style.borderRadius = '6px';
      temp.style.background = 'rgba(11,92,255,0.06)';
      temp.style.marginTop = '8px';
      contatoCard.appendChild(temp);
      setTimeout(function () { temp.remove(); }, 3000);
    });
  }
});
