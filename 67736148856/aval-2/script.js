document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  menuToggle.onclick = () => {
    menuToggle.classList.toggle("active");
    navbar.classList.toggle("active");
  };

  document.querySelectorAll(".menu a").forEach(link => {
    link.onclick = e => {
      e.preventDefault();
      const target = document.getElementById(link.hash.substring(1));
      if(target) target.scrollIntoView({ behavior: "smooth" });
      menuToggle.classList.remove("active");
      navbar.classList.remove("active");
    };
  });

  const topButton = document.getElementById("topButton");
  window.addEventListener("scroll", () => {
    topButton.style.display = window.scrollY > 300 ? "block" : "none";
  });
  topButton.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
});
