// Armazena usuários e posts no localStorage
function getUsers() {
  return JSON.parse(localStorage.getItem("users") || "{}");
}

function getPosts() {
  return JSON.parse(localStorage.getItem("posts") || "[]");
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function savePosts(posts) {
  localStorage.setItem("posts", JSON.stringify(posts));
}

// Cadastro
function register() {
  const user = document.getElementById("registerUser").value;
  const pass = document.getElementById("registerPass").value;
  const users = getUsers();

  if (users[user]) {
    alert("Usuário já existe!");
    return;
  }

  users[user] = pass;
  saveUsers(users);
  alert("Usuário cadastrado com sucesso!");
}

// Login
function login() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;
  const users = getUsers();

  if (users[user] === pass) {
    localStorage.setItem("loggedUser", user);
    window.location.href = "feed.html";
  } else {
    alert("Usuário ou senha incorretos.");
  }
}

// Logout
function logout() {
  localStorage.removeItem("loggedUser");
  window.location.href = "index.html";
}

// Página de Feed
if (window.location.pathname.includes("feed.html")) {
  const user = localStorage.getItem("loggedUser");
  if (!user) {
    alert("Você precisa estar logado.");
    window.location.href = "index.html";
  } else {
    document.getElementById("username").textContent = user;
    renderPosts();
  }
}

// Postar
function postar() {
  const texto = document.getElementById("postText").value.trim();
  const user = localStorage.getItem("loggedUser");
  if (!texto) return;

  const posts = getPosts();
  posts.unshift({ user, texto, data: new Date().toLocaleString() })
container.innerHTML = posts.map(post => `
  <div class="post">
    <strong>${post.user}</strong> <small>${post.data}</small>
    <p>${post.texto}</p>
  </div>
`).join("");
container.innerHTML = posts.map(post => `
  <div class="post">
    <img src="https://i.pravatar.cc/40?u=${post.user}" alt="Avatar de ${post.user}" class="avatar">
    <div>
      <strong>${post.user}</strong> <small>${post.data}</small>
      <p>${post.texto}</p>
    </div>
  </div>
`).join("");
<p>${post.texto}</p>
