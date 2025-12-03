<script>
// ===============================
// BOTÃO "ENVIAR" DOS COMENTÁRIOS
// ===============================

document.querySelectorAll(".post").forEach((post, index) => {
    
    const button = post.querySelector("button");
    const textarea = post.querySelector("textarea");

    // Criar container para mostrar comentários
    const commentsList = document.createElement("div");
    commentsList.classList.add("comments-list");
    commentsList.style.marginTop = "15px";
    commentsList.style.paddingLeft = "10px";

    post.appendChild(commentsList);

    // Carregar comentários salvos (LocalStorage)
    const saved = localStorage.getItem("comments_post_" + index);
    if (saved) commentsList.innerHTML = saved;

    // Quando clicar em enviar
    button.addEventListener("click", () => {
        const text = textarea.value.trim();

        if (text === "") {
            alert("Digite um comentário antes de enviar!");
            return;
        }

        const comment = document.createElement("p");
        comment.textContent = "• " + text;

        comment.style.borderLeft = "3px solid red";
        comment.style.padding = "5px 10px";
        comment.style.margin = "5px 0";
        comment.style.background = "#1a1a1a";

        commentsList.appendChild(comment);

        // Salvar no LocalStorage
        localStorage.setItem("comments_post_" + index, commentsList.innerHTML);

        textarea.value = "";
    });
});


// ===============================
// BOTÃO "VOLTAR AO TOPO"
// ===============================

const topButton = document.createElement("button");
topButton.textContent = "⬆ Topo";
topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "10px 20px";
topButton.style.background = "red";
topButton.style.color = "#fff";
topButton.style.border = "none";
topButton.style.borderRadius = "5px";
topButton.style.cursor = "pointer";
topButton.style.fontWeight = "bold";
topButton.style.display = "none";
topButton.style.boxShadow = "0 0 10px red";
topButton.style.zIndex = "999";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {
    topButton.style.display = window.scrollY > 200 ? "block" : "none";
});

topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// ===============================
// EFEITO DE ANIMAÇÃO AO ROLAR (fade-in)
// ===============================

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".post, .sidebar").forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    el.style.transition = "0.8s";
    observer.observe(el);
});


// ===============================
// MODO ESCURO / CLARO (opcional)
// ===============================

const toggle = document.createElement("button");
toggle.textContent = "🌙 Modo Noturno";
toggle.style.position = "fixed";
toggle.style.bottom = "20px";
toggle.style.left = "20px";
toggle.style.padding = "10px 15px";
toggle.style.background = "#111";
toggle.style.color = "#fff";
toggle.style.border = "1px solid red";
toggle.style.borderRadius = "5px";
toggle.style.cursor = "pointer";
toggle.style.fontWeight = "bold";
toggle.style.zIndex = "999";

document.body.appendChild(toggle);

let darkMode = true;

toggle.addEventListener("click", () => {
    darkMode = !darkMode;

    if (darkMode) {
        document.body.style.background = "#0b0b0b";
        toggle.textContent = "🌙 Modo Noturno";
    } else {
        document.body.style.background = "#f5f5f5";
        toggle.textContent = "☀ Modo Claro";
    }
});
</script>
