const feed = document.getElementById("feed");
const postButton = document.getElementById("postButton");
const postContent = document.getElementById("postContent");
const imageInput = document.getElementById("imageInput");
const previewImage = document.getElementById("previewImage");
const navLinks = document.querySelectorAll("nav a");
const pages = document.querySelectorAll(".page");
const darkToggle = document.getElementById("darkModeToggle");

let selectedImage = null;

// ======== PRÉVIA DE IMAGEM ========
imageInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      previewImage.src = event.target.result;
      previewImage.style.display = "block";
      selectedImage = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// ======== PUBLICAR POST ========
postButton.addEventListener("click", () => {
  const content = postContent.value.trim();
  if (content === "" && !selectedImage) {
    return alert("Digite algo ou adicione uma imagem antes de publicar!");
  }

  const post = createPost("Usuário Anônimo", content, selectedImage);
  feed.prepend(post);

  postContent.value = "";
  imageInput.value = "";
  previewImage.style.display = "none";
  selectedImage = null;
});

// ======== CRIAR POST ========
function createPost(authorName, text, imageSrc) {
  const post = document.createElement("div");
  post.classList.add("post");

  const del = document.createElement("button");
  del.classList.add("delete-post");
  del.textContent = "🗑️";
  del.addEventListener("click", () => post.remove());

  const author = document.createElement("div");
  author.classList.add("author");
  author.innerHTML = `Postado por <span>${authorName}</span>`;

  const time = document.createElement("div");
  time.classList.add("time");
  time.innerHTML = `<span>${new Date().toLocaleString()}</span>`;

  const content = document.createElement("div");
  content.classList.add("content");
  content.innerHTML = `<span>${text}</span>`;

  post.append(del, author, time);

  if (imageSrc) {
    const img = document.createElement("img");
    img.src = imageSrc;
    img.classList.add("post-image");
    post.appendChild(img);
  }

  post.appendChild(content);

  const actions = document.createElement("div");
  actions.classList.add("actions");

  const likeButton = document.createElement("button");
  let likes = 0;
  likeButton.innerHTML = `<span>❤️</span> Curtir (<span class="like-count">${likes}</span>)`;
  likeButton.addEventListener("click", () => {
    likes++;
    likeButton.querySelector(".like-count").textContent = likes;
  });

  actions.append(likeButton);
  post.appendChild(actions);

  const commentsSection = document.createElement("div");
  commentsSection.classList.add("comments");

  const addComment = document.createElement("div");
  addComment.classList.add("add-comment");

  const input = document.createElement("input");
  input.placeholder = "Escreva um comentário...";

  const sendButton = document.createElement("button");
  sendButton.textContent = "Enviar";

  sendButton.addEventListener("click", () => {
    const commentText = input.value.trim();
    if (commentText === "") return;
    const comment = document.createElement("div");
    comment.classList.add("comment");
    comment.innerHTML = `<span>${commentText}</span> <span class="delete-comment">🗑️</span>`;
    comment.querySelector(".delete-comment").addEventListener("click", () => comment.remove());
    commentsSection.appendChild(comment);
    input.value = "";
  });

  addComment.append(input, sendButton);
  commentsSection.appendChild(addComment);
  post.appendChild(commentsSection);

  return post;
}

// ======== NAVEGAÇÃO ========
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const pageName = link.dataset.page;
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    pages.forEach(page => {
      page.style.display = page.classList.contains(`${pageName}-page`) ? "block" : "none";
    });
  });
});

// ======== MODO ESCURO ========
darkToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", darkToggle.checked);
});
