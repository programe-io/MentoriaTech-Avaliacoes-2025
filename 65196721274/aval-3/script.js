// --- Funções e inicialização --- //
const qs = sel => document.querySelector(sel);
const qsa = sel => document.querySelectorAll(sel);

// Elements
const nomeInput = qs('#nome');
const bioInput = qs('#bio');
const btnSalvarPerfil = qs('#btnSalvarPerfil');
const btnLimparPerfil = qs('#btnLimparPerfil');
const usernameDisplay = qs('#username-display');
const smallYear = qs('#yearSpan');

const tarefaInput = qs('#tarefaInput');
const btnAddTarefa = qs('#btnAddTarefa');
const listaTarefas = qs('#listaTarefas');
const btnLimparTarefas = qs('#btnLimparTarefas');

const notaInput = qs('#nota');
const btnSalvarNota = qs('#btnSalvarNota');
const notasSalvasDiv = qs('#notasSalvas');
const btnLimparNotas = qs('#btnLimparNotas');

const LS = window.localStorage;

// Keys
const KEY_PERFIL = 'meuCotidiano_perfil';
const KEY_TAREFAS = 'meuCotidiano_tarefas';
const KEY_NOTAS  = 'meuCotidiano_notas';

// ---------- Helpers ---------- //
function saveJSON(key, obj) {
    try { LS.setItem(key, JSON.stringify(obj)); } catch(e){}
}
function loadJSON(key, fallback) {
    try {
        const v = LS.getItem(key);
        return v ? JSON.parse(v) : fallback;
    } catch(e){ return fallback; }
}

// ---------- Perfil ---------- //
function salvarPerfil() {
    const perfil = { nome: nomeInput.value.trim(), bio: bioInput.value.trim() };
    saveJSON(KEY_PERFIL, perfil);
    aplicarPerfil(perfil);
}

function aplicarPerfil(perfil) {
    if (perfil && perfil.nome) {
        usernameDisplay.textContent = `Bem-vindo(a), ${perfil.nome}`;
        usernameDisplay.classList.remove('username-hidden');
        usernameDisplay.classList.add('username-visible');
    } else {
        usernameDisplay.textContent = '';
        usernameDisplay.classList.remove('username-visible');
        usernameDisplay.classList.add('username-hidden');
    }
}

function limparPerfil() {
    nomeInput.value = '';
    bioInput.value = '';
    saveJSON(KEY_PERFIL, { nome: '', bio: '' });
    aplicarPerfil({ nome: '', bio: '' });
}

// ---------- Tarefas ---------- //
function renderTarefas() {
    listaTarefas.innerHTML = '';
    const tarefas = loadJSON(KEY_TAREFAS, []);
    tarefas.forEach((t, idx) => {
        const li = document.createElement('li');

        const spanText = document.createElement('span');
        spanText.className = 'task-text';
        spanText.textContent = t.text;

        // span interna (garante presença de <span> em itens)
        const metaSpan = document.createElement('span');
        metaSpan.className = 'meta-span';
        metaSpan.textContent = t.date ? ` (${t.date})` : '';

        const actions = document.createElement('div');
        actions.className = 'task-actions';

        const btnDone = document.createElement('button');
        btnDone.textContent = '✓';
        btnDone.title = 'Marcar concluída';
        btnDone.addEventListener('click', () => toggleConcluida(idx));

        const btnDel = document.createElement('button');
        btnDel.textContent = 'Excluir';
        btnDel.title = 'Excluir tarefa';
        btnDel.addEventListener('click', () => excluirTarefa(idx));

        if (t.done) {
            spanText.style.textDecoration = 'line-through';
            spanText.style.opacity = '0.6';
        }

        actions.appendChild(btnDone);
        actions.appendChild(btnDel);

        li.appendChild(spanText);
        li.appendChild(metaSpan);
        li.appendChild(actions);

        listaTarefas.appendChild(li);
    });
}

function adicionarTarefa() {
    const texto = tarefaInput.value.trim();
    if (!texto) return;
    const tarefas = loadJSON(KEY_TAREFAS, []);
    tarefas.push({ text: texto, date: new Date().toLocaleDateString(), done: false });
    saveJSON(KEY_TAREFAS, tarefas);
    tarefaInput.value = '';
    renderTarefas();
}

function excluirTarefa(index) {
    const tarefas = loadJSON(KEY_TAREFAS, []);
    tarefas.splice(index,1);
    saveJSON(KEY_TAREFAS, tarefas);
    renderTarefas();
}

function toggleConcluida(index) {
    const tarefas = loadJSON(KEY_TAREFAS, []);
    if (!tarefas[index]) return;
    tarefas[index].done = !tarefas[index].done;
    saveJSON(KEY_TAREFAS, tarefas);
    renderTarefas();
}

function limparTodasTarefas() {
    if (!confirm('Deseja realmente limpar todas as tarefas?')) return;
    saveJSON(KEY_TAREFAS, []);
    renderTarefas();
}

// ---------- Notas ---------- //
function renderNotas() {
    notasSalvasDiv.innerHTML = '';
    const notas = loadJSON(KEY_NOTAS, []);
    notas.forEach((n, idx) => {
        const p = document.createElement('p');
        p.textContent = `${n.text} — ${n.date || ''}`;

        const btn = document.createElement('button');
        btn.textContent = 'Excluir';
        btn.style.marginLeft = '8px';
        btn.addEventListener('click', () => {
            excluirNota(idx);
        });

        // colocar botão como span ao lado (mas mantemos <p>)
        const spanWrap = document.createElement('span');
        spanWrap.style.float = 'right';
        spanWrap.appendChild(btn);

        p.appendChild(spanWrap);
        notasSalvasDiv.appendChild(p);
    });
}

function salvarNota() {
    const texto = notaInput.value.trim();
    if (!texto) return;
    const notas = loadJSON(KEY_NOTAS, []);
    notas.unshift({ text: texto, date: new Date().toLocaleString() }); // newest first
    saveJSON(KEY_NOTAS, notas);
    notaInput.value = '';
    renderNotas();
}

function excluirNota(index) {
    const notas = loadJSON(KEY_NOTAS, []);
    notas.splice(index,1);
    saveJSON(KEY_NOTAS, notas);
    renderNotas();
}

function limparNotas() {
    if (!confirm('Deseja realmente limpar todas as notas?')) return;
    saveJSON(KEY_NOTAS, []);
    renderNotas();
}

// ---------- Inicialização ---------- //
function init() {
    // data no footer
    smallYear.textContent = (new Date()).getFullYear();

    // carregar perfil
    const perfil = loadJSON(KEY_PERFIL, { nome:'', bio:'' });
    nomeInput.value = perfil.nome || '';
    bioInput.value = perfil.bio || '';
    aplicarPerfil(perfil);

    // carregar listas
    renderTarefas();
    renderNotas();

    // eventos
    btnSalvarPerfil.addEventListener('click', salvarPerfil);
    btnLimparPerfil.addEventListener('click', limparPerfil);

    btnAddTarefa.addEventListener('click', adicionarTarefa);
    tarefaInput.addEventListener('keydown', e => { if (e.key === 'Enter') adicionarTarefa(); });
    btnLimparTarefas.addEventListener('click', limparTodasTarefas);

    btnSalvarNota.addEventListener('click', salvarNota);
    btnLimparNotas.addEventListener('click', limparNotas);
}

// start
document.addEventListener('DOMContentLoaded', init);
