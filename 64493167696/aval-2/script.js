document.addEventListener("DOMContentLoaded", () => {
  // ================== MENU RESPONSIVO ==================
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navbar.classList.toggle("active");
  });

  document.querySelectorAll(".menu li a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const section = document.getElementById(targetId);

      section.scrollIntoView({ behavior: "smooth" });
      menuToggle.classList.remove("active");
      navbar.classList.remove("active");
    });
  });

  // ================== BOTÃO VOLTAR AO TOPO ==================
  const topButton = document.getElementById("topButton");
  window.addEventListener("scroll", () => {
    topButton.style.display = window.scrollY > 300 ? "block" : "none";
  });
  topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ================== ANIMAÇÃO FADE-IN ==================
  const faders = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
  faders.forEach(el => observer.observe(el));

    // Código do carrossel foi totalmente removido a pedido da usuária.
});
