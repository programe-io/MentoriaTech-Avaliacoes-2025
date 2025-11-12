// app.js — JavaScript para o site "Laboratório IA"

// Seleciona elementos principais
const promptEl = document.getElementById('prompt');
const genBtn = document.getElementById('generate');
const out = document.getElementById('output');
const timeEst = document.getElementById('timeEst');
const themeToggle = document.getElementById('themeToggle');

// Conjunto de respostas simuladas
const respostas = [
  (q) => `Resumo: ${q.slice(0,120)}...\n\nExplicação breve: IA usa dados para aprender padrões e gerar previsões ou conteúdo.`,
  (q) => `Ideias para ${q}: 1) Coletar dados limpos. 2) Treinar modelos. 3) Avaliar e iterar.`,
  (q) => `Um passo-a-passo simples para ${q}: entender o problema → preparar dados → escolher modelo → treinar → avaliar.`,
  (q) => `Pergunta interessante sobre ${q}! Em termos gerais, considere dividir o problema em subtarefas e aplicar validação cruzada.`
];

// Funções utilitárias
function fakeThinking(prompt){
  const base = Math.min(2500, 300 + prompt.length * 30);
  return base;
}

function chooseResponse(prompt){
  const idx = Math.floor(Math.random() * respostas.length);
  return respostas[idx](prompt);
}

// Geração de resposta simulada
genBtn.addEventListener('click', ()=>{
  const q = promptEl.value.trim();
  if(!q){
    out.textContent = 'Por favor escreva uma pergunta ou tema no campo acima.';
    return;
  }
  const ms = fakeThinking(q);
  timeEst.textContent = `${Math.round(ms/1000)}s`;
  out.textContent = 'Pensando...';
  genBtn.disabled = true;
  setTimeout(()=>{
    out.textContent = chooseResponse(q);
    genBtn.disabled = false;
  }, ms);
});

// Alternar tema claro/escuro
themeToggle.addEventListener('click', ()=>{
  const root = document.documentElement;
  if(root.style.getPropertyValue('--bg') === ''){
    // alternar para tema claro
    root.style.setProperty('--bg','#f6f8fb');
    root.style.setProperty('--card','#ffffff');
    root.style.setProperty('--muted','#475569');
    root.style.setProperty('--accent','#7c5cff');
    document.body.style.color = '#061428';
    document.body.style.background = 'linear-gradient(180deg,#f7fafc,#eef2ff)';
  } else {
    // voltar ao tema escuro
    root.style.removeProperty('--bg');
    root.style.removeProperty('--card');
    root.style.removeProperty('--muted');
    document.body.style.color = '';
    document.body.style.background = '';
  }
});

// Atalho: Ctrl/Cmd + Enter para gerar
window.addEventListener('keydown', (e)=>{
  if((e.ctrlKey || e.metaKey) && e.key === 'Enter'){
    genBtn.click();
  }
});