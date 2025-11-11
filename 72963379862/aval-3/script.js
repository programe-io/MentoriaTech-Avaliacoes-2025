document.addEventListener("DOMContentLoaded", () => {
  const posts = document.querySelectorAll(".post-card");
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");

  // Animação de clique nos posts
  posts.forEach(post => {
    post.addEventListener("click", () => {
      post.classList.toggle("liked");
      if (post.classList.contains("liked")) {
        post.style.boxShadow = "0 0 15px rgba(59, 130, 246, 0.6)";
      } else {
        post.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
      }
    });
  });

  // Menu hamburguer (usando span)
  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
