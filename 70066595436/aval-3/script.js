// script.js

// Elementos do DOM
const loginSection = document.getElementById('login-section');
const feedSection = document.getElementById('feed-section');
const loginBtn = document.getElementById('login-btn');
const usernameInput = document.getElementById('username');
const userDisplay = document.getElementById('user-display');
const postBtn = document.getElementById('post-btn');
const postContent = document.getElementById('post-content');
const postsContainer = document.getElementById('posts-container');

let currentUser = "";

// Função para logar
loginBtn.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  if (username.length > 0) {
    currentUser = username;
    userDisplay.textContent = currentUser;

    loginSection.style.display = 'none';
    feedSection.style.display = 'block';
  } else {
    alert('Por favor, digite seu nome');
  }
});

// Função para postar no feed
postBtn.addEventListener('click', () => {
  const content = postContent.value.trim();
  if (content.length > 0) {
    addPost(currentUser, content);
    postContent.value = '';
  } else {
    alert('Escreva algo para postar!');
  }
});

// Adiciona post no feed
function addPost(user, content) {
  const postDiv = document.createElement('div');
  postDiv.classList.add('post');
  const now = new Date().toLocaleString();

  postDiv.innerHTML = `
    <strong>${user}</strong> <small>${now}</small>
    <p>${content}</p>
  `;

  postsContainer.prepend(postDiv); // adiciona no topo
}
