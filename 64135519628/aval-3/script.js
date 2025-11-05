const postButton = document.getElementById("postButton");
const postText = document.getElementById("postText");
const feed = document.getElementById("feed");

function createPost(text) {
  const post = document.createElement("div");
  post.classList.add("post");

  const postHTML = `
    <div class="author">👤 @usuario_${Math.floor(Math.random() * 1000)}</div>
    <div class="content">${text}</div>
    <div class="like-section">
      <button class="like-button">💙 Curtir</button>
      <span class="like-count">0</span>
    </div>
  `;
  post.innerHTML = postHTML;

  const likeButton = post.querySelector(".like-button");
  const likeCount = post.querySelector(".like-count");
  let likes = 0;

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("liked");
    if (likeButton.classList.contains("liked")) {
      likes++;
      likeButton.textContent = "❤️ Curtido";
    } else {
      likes--;
      likeButton.textContent = "💙 Curtir";
    }
    likeCount.textContent = likes;
  });

  feed.prepend(post);
}

postButton.addEventListener("click", () => {
  const text = postText.value.trim();
  if (text) {
    createPost(text);
    postText.value = "";
  } else {
    alert("Digite algo antes de publicar!");
  }
});
