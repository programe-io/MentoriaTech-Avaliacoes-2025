/* =======================================================
   SCRIPT.JS — Funções gerais para página HTML completa
   ======================================================= */

// Espera o carregamento total do DOM
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Página carregada e script.js inicializado.");

  /* -------------------------------------------------------
     1. INSERIR ANO AUTOMÁTICO NO RODAPÉ
  ------------------------------------------------------- */
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  /* -------------------------------------------------------
     2. VALIDAÇÃO DE FORMULÁRIO DE CONTATO
  ------------------------------------------------------- */
  const form = document.getElementById("contactForm");
  const statusMsg = document.getElementById("formStatus");
  const limparBtn = document.getElementById("limpar");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Impede o envio padrão

      // Captura e limpa dados
      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const msg = form.mensagem.value.trim();
      statusMsg.textContent = "";
      statusMsg.style.color = "#111";

      // Verificações simples
      if (!nome || !email || !msg) {
        showError("Por favor, preencha todos os campos obrigatórios.");
        return;
      }

      if (!isValidEmail(email)) {
        showError("Informe um e-mail válido.");
        return;
      }

      // Simula envio
      statusMsg.textContent = "Enviando...";
      setTimeout(() => {
        statusMsg.textContent = "Mensagem enviada com sucesso! ✅";
        statusMsg.style.color = "green";
        form.reset();
      }, 800);
    });
  }

  // Função auxiliar para erro
  function showError(msg) {
    statusMsg.textContent = msg;
    statusMsg.style.color = "crimson";
  }

  // Função auxiliar para validar e-mail
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Botão de limpar
  if (limparBtn) {
    limparBtn.addEventListener("click", () => {
      form.reset();
      statusMsg.textContent = "";
    });
  }

  /* -------------------------------------------------------
     3. MENU MOBILE (RESPONSIVO)
  ------------------------------------------------------- */
  const nav = document.querySelector("nav");
  const menuToggle = document.createElement("button");
  menuToggle.textContent = "☰ Menu";
  menuToggle.classList.add("menu-toggle");

  // Insere botão antes do menu no mobile
  if (window.innerWidth <= 900 && nav) {
    nav.parentNode.insertBefore(menuToggle, nav);
    nav.style.display = "none";
  }

  menuToggle.addEventListener("click", () => {
    const visible = nav.style.display === "flex";
    nav.style.display = visible ? "none" : "flex";
    menuToggle.textContent = visible ? "☰ Menu" : "✖ Fechar";
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      nav.style.display = "flex";
      menuToggle.style.display = "none";
    } else {
      nav.style.display = "none";
      menuToggle.style.display = "inline-block";
    }
  });

  /* -------------------------------------------------------
     4. BOTÃO "DEMO" — INTERAÇÃO SIMPLES
  ------------------------------------------------------- */
  const demoBtn = document.getElementById("demoBtn");
  if (demoBtn) {
    demoBtn.addEventListener("click", () => {
      alert("🚀 Este é um exemplo de interação. Personalize à vontade!");
    });
  }

  /* -------------------------------------------------------
     5. ANIMAÇÕES DE ENTRADA SUAVE (FADE-IN)
  ------------------------------------------------------- */
  const fadeEls = document.querySelectorAll(".fade-in, .card, .hero, .contact");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeEls.forEach((el) => observer.observe(el));

  /* -------------------------------------------------------
     6. BOTÃO "VOLTAR AO TOPO"
  ------------------------------------------------------- */
  const scrollTopBtn = document.createElement("button");
  scrollTopBtn.textContent = "↑";
  scrollTopBtn.id = "scrollTopBtn";
  document.body.appendChild(scrollTopBtn);

  Object.assign(scrollTopBtn.style, {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    background: "var(--primary)",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "45px",
    height: "45px",
    cursor: "pointer",
    display: "none",
    boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
    fontSize: "1.3rem",
    transition: "opacity .3s ease"
  });

  window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* -------------------------------------------------------
     7. ACESSIBILIDADE — FOCO POR TECLADO
  ------------------------------------------------------- */
  window.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      document.body.classList.add("user-is-tabbing");
    }
  });

  /* -------------------------------------------------------
     8. LOGO COM ANIMAÇÃO (DECORATIVO)
  ------------------------------------------------------- */
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.addEventListener("mouseenter", () => {
      logo.style.transform = "rotate(6deg) scale(1.05)";
      logo.style.transition = "transform 0.3s ease";
    });
    logo.addEventListener("mouseleave", () => {
      logo.style.transform = "rotate(0deg) scale(1)";
    });
  }

  /* -------------------------------------------------------
     9. SALVAR DADOS NO LOCALSTORAGE (DEMONSTRAÇÃO)
  ------------------------------------------------------- */
  const saveDemoData = () => {
    const data = { visit: new Date().toLocaleString() };
    localStorage.setItem("ultimaVisita", JSON.stringify(data));
  };

  saveDemoData();
  const visitData = localStorage.getItem("ultimaVisita");
  if (visitData) {
    console.log("📅 Última visita registrada:", JSON.parse(visitData).visit);
  }
});
