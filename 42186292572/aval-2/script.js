/* script.js
   Comportamentos úteis em arquivo separado.
   Salve como script.js e referencie no HTML antes do </body>:
   <script src="script.js" defer></script>
*/

/* Encapsula tudo para evitar poluição global */
(() => {
  // --- Helpers ---
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // --- Mobile nav toggle (assume existência de botão #nav-toggle and .nav) ---
  function initNavToggle() {
    const btn = $('#nav-toggle');
    const nav = $('.nav');
    if (!btn || !nav) return;
    btn.addEventListener('click', () => {
      nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }

  // --- Simple form validation + example task add ---
  function initTaskForm() {
    const form = $('#task-form');
    const list = $('#task-list');
    if (!form || !list) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = form.querySelector('[name="title"]').value.trim();
      const desc = form.querySelector('[name="desc"]').value.trim();

      // Basic validation
      if (!title) {
        showToast('Por favor insira um título para a tarefa.', 'danger');
        form.querySelector('[name="title"]').focus();
        return;
      }

      // Create a simple task element
      const item = document.createElement('div');
      item.className = 'task';
      item.innerHTML = `
        <div>
          <div class="title">${escapeHtml(title)}</div>
          ${desc ? `<div class="kv" style="font-size:0.85rem;margin-top:0.2rem">${escapeHtml(desc)}</div>` : ''}
        </div>
        <div class="meta"><button class="btn secondary btn-complete" type="button">Concl.</button></div>
      `;
      // Append and clear form
      list.prepend(item);
      form.reset();
      showToast('Tarefa adicionada com sucesso.', 'success');

      // add handler for complete button
      item.querySelector('.btn-complete').addEventListener('click', () => {
        item.style.opacity = '0.55';
        item.style.textDecoration = 'line-through';
        item.querySelector('.btn-complete').disabled = true;
      });
    });
  }

  // --- Simple toast messages (ephemeral) ---
  function showToast(message, type = 'info', timeout = 3000) {
    const t = document.createElement('div');
    t.className = 'toast';
    t.style.cssText = [
      'position:fixed',
      'right:20px',
      'bottom:20px',
      'padding:0.6rem 0.9rem',
      'border-radius:8px',
      'box-shadow:0 8px 24px rgba(2,6,23,0.12)',
      'background:white',
      'font-weight:600',
      'z-index:9999'
    ].join(';');
    t.textContent = message;
    if (type === 'danger') t.style.background = '#fee2e2';
    if (type === 'success') t.style.background = '#ecfccb';
    document.body.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.addEventListener('transitionend', () => t.remove()); }, timeout);
  }

  // --- Theme toggle (dark/light) ---
  function initThemeToggle() {
    const btn = $('#theme-toggle');
    if (!btn) return;
    // restore from localStorage
    const saved = localStorage.getItem('site-theme');
    if (saved === 'dark') document.documentElement.classList.add('dark');
    btn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const nowDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('site-theme', nowDark ? 'dark' : 'light');
    });
  }

  // --- Utility: escape HTML to avoid injection from form values ---
  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[m]));
  }

  // --- Small feature: mark current nav link active by data-path attribute or URL ---
  function markActiveNav() {
    const links = $$('.nav a');
    if (!links.length) return;
    const path = location.pathname.split('/').pop() || 'index.html';
    links.forEach(a => {
      const target = a.getAttribute('href') || '';
      if (target === path || a.dataset.path === path) a.classList.add('active');
    });
  }

  // --- Init ---
  document.addEventListener('DOMContentLoaded', () => {
    initNavToggle();
    initTaskForm();
    initThemeToggle();
    markActiveNav();
  });

  // expose a tiny API if someone wants to call from console for testing
  window.__WorkApp = {
    showToast,
  };
})();
