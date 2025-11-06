// script.js - blog simples com localStorage
const postsEl = document.getElementById('posts');
const newPostBtn = document.getElementById('new-post-btn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal');
const cancelBtn = document.getElementById('cancel');
const postForm = document.getElementById('post-form');
const modalTitle = document.getElementById('modal-title');

const titleInput = document.getElementById('title');
const categoryInput = document.getElementById('category');
const contentInput = document.getElementById('content');

let posts = [];
let editId = null;

function savePostsToStorage(){
  localStorage.setItem('meuBlog.posts', JSON.stringify(posts));
}

function loadPostsFromStorage(){
  const raw = localStorage.getItem('meuBlog.posts');
  if (raw) {
    try{
      posts = JSON.parse(raw) || [];
    }catch(e){ posts = [] }
  } else {
    posts = [];
  }
}

function formatDate(ts){
  const d = new Date(ts);
  return d.toLocaleString();
}

function renderPosts(){
  postsEl.innerHTML = '';
  if (posts.length === 0){
    postsEl.innerHTML = `<div class="post"><h2>Sem posts ainda</h2><p class="excerpt">Clique em "Novo Post" para adicionar seu primeiro artigo.</p></div>`;
    return;
  }
  posts.slice().reverse().forEach(post => {
    const div = document.createElement('article');
    div.className = 'post';
    div.innerHTML = `
      <h2>${escapeHtml(post.title)}</h2>
      <div class="meta">${escapeHtml(post.category || 'Sem categoria')} • ${formatDate(post.createdAt)}</div>
      <p class="excerpt">${escapeHtml(truncate(post.content, 300))}</p>
      <div class="actions">
        <button class="btn" data-action="read" data-id="${post.id}">Ler</button>
        <button class="btn" data-action="edit" data-id="${post.id}">Editar</button>
        <button class="btn" data-action="delete" data-id="${post.id}">Excluir</button>
      </div>
    `;
    postsEl.appendChild(div);
  });
}

// Segurança simples: escapar HTML para evitar XSS
function escapeHtml(str = ''){
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function truncate(text, n){
  if(!text) return '';
  return text.length > n ? text.slice(0,n) + '…' : text;
}

function openModal(edit = null){
  if(edit){
    modalTitle.textContent = 'Editar Post';
    titleInput.value = edit.title;
    categoryInput.value = edit.category || '';
    contentInput.value = edit.content;
    editId = edit.id;
  } else {
    modalTitle.textContent = 'Novo Post';
    postForm.reset();
    editId = null;
  }
  modal.classList.remove('hidden');
}

function closeModal(){
  modal.classList.add('hidden');
  editId = null;
}

function createPost({title, category, content}){
  const post = {
    id: Date.now().toString(36),
    title: title.trim(),
    category: category.trim(),
    content: content.trim(),
    createdAt: Date.now()
  };
  posts.push(post);
  savePostsToStorage();
  renderPosts();
}

function updatePost(id, {title, category, content}){
  const idx = posts.findIndex(p => p.id === id);
  if(idx >= 0){
    posts[idx].title = title.trim();
    posts[idx].category = category.trim();
    posts[idx].content = content.trim();
    savePostsToStorage();
    renderPosts();
  }
}

function deletePost(id){
  if(!confirm('Deseja realmente excluir este post?')) return;
  posts = posts.filter(p => p.id !== id);
  savePostsToStorage();
  renderPosts();
}

function readPost(id){
  const p = posts.find(x => x.id === id);
  if(!p) return alert('Post não encontrado');
  // mostra em modal simples (reutilizamos modal)
  modalTitle.textContent = p.title;
  titleInput.value = p.title;
  categoryInput.value = p.category || '';
  contentInput.value = p.content;
  // bloquear edição direta (desabilitar inputs)
  titleInput.setAttribute('readonly','');
  categoryInput.setAttribute('readonly','');
  contentInput.setAttribute('readonly','');
  document.querySelector('.form-actions').style.display = 'none';
  modal.classList.remove('hidden');
}

function restoreModalForEdit(){
  titleInput.removeAttribute('readonly');
  categoryInput.removeAttribute('readonly');
  contentInput.removeAttribute('readonly');
  document.querySelector('.form-actions').style.display = '';
}

newPostBtn.addEventListener('click', () => {
  restoreModalForEdit();
  openModal(null);
});

closeModalBtn.addEventListener('click', () => {
  restoreModalForEdit();
  closeModal();
});
cancelBtn.addEventListener('click', () => {
  restoreModalForEdit();
  closeModal();
});

postForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    title: titleInput.value,
    category: categoryInput.value,
    content: contentInput.value
  };
  if(editId){
    updatePost(editId, data);
  } else {
    createPost(data);
  }
  restoreModalForEdit();
  closeModal();
});

postsEl.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-action]');
  if(!btn) return;
  const id = btn.getAttribute('data-id');
  const action = btn.getAttribute('data-action');
  if(action === 'delete') deletePost(id);
  if(action === 'edit'){
    const p = posts.find(x => x.id === id);
    if(p){
      restoreModalForEdit();
      openModal(p);
    }
  }
  if(action === 'read') {
    readPost(id);
  }
});

// inicialização
(function init(){
  document.getElementById('year').textContent = new Date().getFullYear();
  loadPostsFromStorage();
  renderPosts();
})();
