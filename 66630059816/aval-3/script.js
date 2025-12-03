// ===============================
// SISTEMA DE COMENTÁRIOS
// ===============================

document.querySelectorAll(".post").forEach((post, index) => {
    
    const textarea = document.createElement("textarea");
    const button = document.createElement("button");
    const commentsList = document.createElement("div");

    // Estilos básicos via JS (opcional)
    textarea.placeholder = "Escreva seu comentário...";
    textarea.classList.add("comment-area");
    button.textContent = "Enviar";
    button.classList.add("comment-btn");

    post.appendChild(textarea);
    post.appendChild(button);
    post.appendChild(commentsList);

    // Carregar comentários do LocalStorage
    const savedComments = localStorage.getItem("comments_post_" + index);
    if (savedComments) commentsList.innerHTML = savedComments;

    button.addEventListener("click", () => {
        const text = textarea.value.trim();

        if (text === "") {
            alert("Digite algo antes de enviar!");
            return;
        }

        const comment = document.createElement("p");
        comment.textContent = "• " + text;
        comment.style.background = "#1a1a1a";
        comment.style.padding = "8px 10px";
        comment.style.borderLeft = "4px solid #ff0000";
        comment.style.marginTop = "5px";

        commentsList.appendChild(comment);

        // Salva no LocalStorage
        localStorage.setItem("comments_post_" + index, commentsList.innerHTML);

        textarea.value = "";
    });
});


// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================

const topBtn = document.createElement("button");
topBtn.textContent = "⬆ Topo";
topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "10px 20px";
topBtn.style.background = "red";
topBtn.style.color = "white";
topBtn.style.border = "none";
topBtn.style.borderRadius = "5px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 0 10px red";
topBtn.style.fontWeight = "bold";
topBtn.style.zIndex = 999;

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// ===============================
// ANIMAÇÃO AO ROLAR (scroll reveal)
// ===============================

const revealElements = document.querySelectorAll(".post, .sidebar");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

revealElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    el.style.transition = "0.8s";
    observer.observe(el);
});


// ===============================
// MODO ESCURO / CLARO
// ===============================

const modeBtn = document.createElement("button");
modeBtn.textContent = "🌙 Modo Noturno";
modeBtn.style.position = "fixed";
modeBtn.style.bottom = "20px";
modeBtn.style.left = "20px";
modeBtn.style.padding = "10px 15px";
modeBtn.style.background = "#111";
modeBtn.style.color = "#fff";
modeBtn.style.border = "1px solid red";
modeBtn.style.borderRadius = "5px";
modeBtn.style.cursor = "pointer";
modeBtn.style.fontWeight = "bold";
modeBtn.style.zIndex = 999;

document.body.appendChild(modeBtn);

let dark = true;

modeBtn.addEventListener("click", () => {
    dark = !dark;

    if (dark) {
        document.body.style.background = "#0b0b0b";
        document.body.style.color = "#eee";
        modeBtn.textContent = "🌙 Modo Noturno";
    } else {
        document.body.style.background = "#f5f5f5";
        document.body.style.color = "#111";
        modeBtn.textContent = "☀ Modo Claro";
    }
});
