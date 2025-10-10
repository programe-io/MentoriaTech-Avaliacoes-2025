/* script-completo.js
   Demonstra muitas funções e APIs modernas do JavaScript para web:
   DOM, eventos, armazenamento local, fetch, classes, módulos, async/await,
   promessas, animações, observers e mais. */

// =============================
// VARIÁVEIS GLOBAIS E CONSTANTES
// =============================
const APP_NAME = 'Exemplo Completo JS';
const VERSION = '1.0.0';
let state = {
  theme: 'light',
  user: null,
  todos: []
};

// =============================
// FUNÇÕES UTILITÁRIAS
// =============================
function log(...args) {
  console.log(`[${APP_NAME}]`, ...args);
}

function $(selector, parent=document) {
  return parent.querySelector(selector);
}

function $all(selector, parent=document) {
  return Array.from(parent.querySelectorAll(selector));
}

// =============================
// MANIPULAÇÃO DO DOM
// =============================
function setTheme(mode) {
  document.documentElement.dataset.theme = mode;
  localStorage.setItem('theme', mode);
  state.theme = mode;
}

function toggleTheme() {
  setTheme(state.theme === 'light' ? 'dark' : 'light');
}

// =============================
// EVENTOS E INTERAÇÃO
// =============================
function registerEvents() {
  const btn = document.getElementById('toggleTheme');
  if(btn) btn.addEventListener('click', toggleTheme);

  const todoForm = document.getElementById('todoForm');
  if(todoForm) {
    todoForm.addEventListener('submit', e => {
      e.preventDefault();
      const input = $('#todoInput');
      if(!input.value.trim()) return;
      addTodo(input.value.trim());
      input.value = '';
    });
  }
}

// =============================
// TODO LIST — exemplo prático
// =============================
function addTodo(text) {
  const id = Date.now();
  state.todos.push({ id, text, done:false });
  renderTodos();
  saveTodos();
}

function toggleTodo(id) {
  const item = state.todos.find(t => t.id === id);
  if(item) item.done = !item.done;
  renderTodos();
  saveTodos();
}

function deleteTodo(id) {
  state.todos = state.todos.filter(t => t.id !== id);
  renderTodos();
  saveTodos();
}

function renderTodos() {
  const list = $('#todoList');
  if(!list) return;
  list.innerHTML = '';
  for(const todo of state.todos) {
    const li = document.createElement('li');
    li.className = todo.done ? 'done' : '';
    li.innerHTML = `
      <input type="checkbox" ${todo.done?'checked':''} data-id="${todo.id}"> 
      <span>${todo.text}</span>
      <button class="delete" data-id="${todo.id}">x</button>`;
    list.appendChild(li);
  }

  list.querySelectorAll('input[type=checkbox]').forEach(cb =>
    cb.addEventListener('change', e => toggleTodo(+e.target.dataset.id)));
  list.querySelectorAll('.delete').forEach(btn =>
    btn.addEventListener('click', e => deleteTodo(+e.target.dataset.id)));
}

// =============================
// LOCAL STORAGE
// =============================
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(state.todos));
}

function loadTodos() {
  try {
    const data = JSON.parse(localStorage.getItem('todos'));
    if(Array.isArray(data)) state.todos = data;
  } catch(e) { log('Erro ao carregar todos', e); }
  renderTodos();
}

// =============================
// FETCH E PROMESSAS
// =============================
async function fetchPost() {
  const box = $('#apiData');
  box.textContent = 'Buscando...';
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if(!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    box.textContent = JSON.stringify(data, null, 2);
  } catch(err) {
    box.textContent = 'Erro: ' + err.message;
  }
}

// =============================
// CLASSES E MÓDULOS
// =============================
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  greet() {
    return `Olá, ${this.name}!`;
  }
}

// =============================
// ANIMAÇÕES
// =============================
function animateBox() {
  const box = $('#animBox');
  if(!box) return;
  box.animate([
    { transform: 'translateX(0)', background:'#0066ff' },
    { transform: 'translateX(100px)', background:'#00cc88' }
  ], {
    duration: 1000,
    iterations: 2,
    direction: 'alternate'
  });
}

// =============================
// OBSERVERS (IntersectionObserver)
// =============================
function observeSections() {
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add('fade-in');
    });
  }, { threshold: 0.2 });

  $all('section').forEach(sec => observer.observe(sec));
}

// =============================
// INICIALIZAÇÃO
// =============================
window.addEventListener('DOMContentLoaded', ()=>{
  log(`Versão ${VERSION} iniciada`);

  // Carregar tema salvo
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  // Carregar dados
  loadTodos();

  // Registrar eventos
  registerEvents();

  // Ativar observer
  observeSections();

  // Exemplo de uso da classe
  const user = new User('Visitante','visitante@exemplo.com');
  state.user = user;
  log(user.greet());

  // Exemplo de animação automática
  animateBox();
});