/* ============================================================
   Funções utilitárias
============================================================ */
function select(el) {
  return document.querySelector(el);
}

function selectAll(el) {
  return document.querySelectorAll(el);
}

function showMessage(text, type = "success") {
  const box = document.createElement("div");
  box.className = `alert ${type}`;
  box.innerText = text;

  document.body.appendChild(box);

  setTimeout(() => {
    box.style.opacity = "0";
    setTimeout(() => box.remove(), 400);
  }, 2500);
}

/* ============================================================
   MENU MOBILE
============================================================ */
const btnMenu = select("#btnMenu");
const navMenu = select("#mobileMenu");

if (btnMenu) {
  btnMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    const opened = navMenu.classList.contains("active");
    btnMenu.setAttribute("aria-expanded", opened ? "true" : "false");
  });
}

/* Fecha o menu ao clicar em algum link */
selectAll("#mobileMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    btnMenu.setAttribute("aria-expanded", "false");
  });
});

/* ============================================================
   MODO ESCURO / CLARO com localStorage
============================================================ */
const themeBtn = select("#themeToggle");

function applyTheme(mode) {
  if (mode === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    themeBtn.innerText = "Modo Claro";
  } else {
    document.documentElement.removeAttribute("data-theme");
    themeBtn.innerText = "Modo Escuro";
  }
}

const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

themeBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  const next = current === "dark" ? "light" : "dark";

  applyTheme(next);
  localStorage.setItem("theme", next);

  showMessage(`Tema alterado para: ${next === "dark" ? "Escuro" : "Claro"}`);
});

/* ============================================================
   BOTÃO "VOLTAR AO TOPO"
============================================================ */
const btnTop = select("#btnTop");

if (btnTop) {
  btnTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* Exibir botão apenas ao descer a página */
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btnTop.classList.add("visible");
  } else {
    btnTop.classList.remove("visible");
  }
});

/* ============================================================
   FORMULÁRIO (validação + simulação de envio)
============================================================ */
const form = select("#contactForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = select("#name").value.trim();
    const email = select("#email").value.trim();
    const msg = select("#message").value.trim();

    if (!name || !email || !msg) {
      showMessage("Preencha todos os campos obrigatórios!", "error");
      return;
    }

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    if (!emailRegex.test(email)) {
      showMessage("E-mail inválido!", "error");
      return;
    }

    showMessage("Enviando mensagem...");

    /* Simulação de envio */
    setTimeout(() => {
      form.reset();
      showMessage("Mensagem enviada com sucesso!", "success");
    }, 1200);
  });
}

/* ============================================================
   ANIMAÇÕES SIMPLES AO ROLAR
============================================================ */
function revealOnScroll() {
  const elements = selectAll(".reveal");

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ============================================================
   TEXTO DIGITANDO (typing effect)
============================================================ */
function typeWriter(element, speed = 60) {
  const text = element.innerHTML;
  element.innerHTML = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

const typingEl = select("#typing");
if (typingEl) {
  typeWriter(typingEl);
}

/* ============================================================
   DEBUG (apenas para testes)
============================================================ */
// console.log("JS carregado com sucesso!");
