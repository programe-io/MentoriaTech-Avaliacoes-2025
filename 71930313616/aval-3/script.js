// Pega elementos do DOM
const form = document.getElementById('post-form');
const usernameInput = document.getElementById('username');
const messageInput = document.getElementById('message');
const postsContainer = document.getElementById('posts-container');

// Função para carregar posts do localStorage
function loadPosts() {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  postsContainer.innerHTML = '';

  // Mostrar os posts mais recentes primeiro
  posts.reverse().forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    const usernameEl = document.createElement('div');
    usernameEl.classList.add('username');
    usernameEl.textContent = post.username;

    const dateEl = document.createElement('div');
    dateEl.classList.add('date');
    dateEl.textContent = new Date(post.date).toLocaleString();

    const messageEl = document.createElement('div');
    messageEl.classList.add('message');
    messageEl.textContent = post.message;

    postDiv.appendChild(usernameEl);
    postDiv.appendChild(dateEl);
    postDiv.appendChild(messageEl);

    postsContainer.appendChild(postDiv);
  });
}

// Função para salvar novo post
function savePost(username, message) {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.push({
    username,
    message,
    date: new Date().toISOString()
  });
  localStorage.setItem('posts', JSON.stringify(posts));
}

// Evento do form
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const message = messageInput.value.trim();

  if (username && message) {
    savePost(username, message);
    usernameInput.value = '';
    messageInput.value = '';
    loadPosts();
  }
});

// Carrega os posts ao abrir a página
loadPosts();
