// Alternar abas HTML / CSS / JS
const tabs = document.querySelectorAll('.tab');
const panes = document.querySelectorAll('.pane');

tabs.forEach(t => {
  t.addEventListener('click', () => {
    tabs.forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    panes.forEach(p => p.style.display = (p.id === t.dataset.target ? '' : 'none'));
  });
});

// Referências aos campos
const preview = document.getElementById('preview');
const htmlInput = document.getElementById('html-input');
const cssInput = document.getElementById('css-input');
const jsInput = document.getElementById('js-input');
const runBtn = document.getElementById('run');
const autoBtn = document.getElementById('autoRun');

// Função que gera o preview
function buildPreview() {
  const full = `
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>${cssInput.value}</style>
</head>
<body>
${htmlInput.value}
<script>
${jsInput.value}
<\/script>
</body>
</html>`;

  const blob = new Blob([full], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  preview.src = url;

  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

runBtn.addEventListener('click', buildPreview);

// Auto preview
let auto = false;
autoBtn.addEventListener('click', () => {
  auto = !auto;
  autoBtn.textContent = 'Auto Preview: ' + (auto ? 'ON' : 'OFF');

  if (auto) {
    htmlInput.addEventListener('input', buildPreview);
    cssInput.addEventListener('input', buildPreview);
    jsInput.addEventListener('input', buildPreview);
  } else {
    htmlInput.removeEventListener('input', buildPreview);
    cssInput.removeEventListener('input', buildPreview);
    jsInput.removeEventListener('input', buildPreview);
  }
});

// Preview inicial
buildPreview();

// Botão "Enviar"
const submitBtn = document.getElementById('submit');
const status = document.getElementById('status');

submitBtn.addEventListener('click', () => {
  status.style.display = 'block';
  status.textContent = 'Enviado ✔';
});

// Abrir em nova aba
document.getElementById('openNew').addEventListener('click', () => {
  const w = window.open();
  w.document.write(preview.contentWindow.document.documentElement.outerHTML);
  w.document.close();
});

// Copiar HTML
document.getElementById('copyHtml').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(preview.contentWindow.document.documentElement.outerHTML);
    alert('Copiado!');
  } catch (e) {
    alert('Erro ao copiar.');
  }
});
