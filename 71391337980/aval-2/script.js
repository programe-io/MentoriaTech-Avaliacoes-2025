   // JavaScript do menu mobile
    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.getElementById("navbar");

    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("show");
    });