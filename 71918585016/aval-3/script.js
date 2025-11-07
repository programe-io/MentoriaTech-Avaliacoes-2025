/* --------------------------------------
   Myrella Fashion Blog 💄✨
   Interatividade e charme com JavaScript
--------------------------------------- */

// === 1. MODO CLARO / ESCURO ===
const toggleThemeBtn = document.createElement("button");
toggleThemeBtn.innerText = "🌙 Modo Escuro";
toggleThemeBtn.classList.add("theme-btn");

// Adiciona o botão no topo da página
document.body.prepend(toggleThemeBtn);

// Detecta se o modo escuro está ativo
let darkMode = false;

toggleThemeBtn.addEventListener("click", () => {
    darkMode = !darkMode;
    document.body.classList.toggle("dark-theme", darkMode);
    toggleThemeBtn.innerText = darkMode ? "☀️ Modo Claro" : "🌙 Modo Escuro";
});


// === 2. BOTÃO VOLTAR AO TOPO ===
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "⬆️";
scrollBtn.classList.add("scroll-top-btn");
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});


// === 3. SISTEMA DE COMENTÁRIOS SIMPLES ===
const commentSection = document.createElement("section");
commentSection.classList.add("comentarios");
commentSection.innerHTML = `
    <h2>💬 Deixe seu comentário</h2>
    <form id="commentForm">
        <input type="text" id="nome" placeholder="Seu nome" required>
        <textarea id="comentario" placeholder="Escreva seu comentário..." required></textarea>
        <button type="submit">Publicar</button>
    </form>
    <div id="commentList"></div>
`;
document.querySelector(".container").appendChild(commentSection);

const commentForm = document.getElementById("commentForm");
const commentList = document.getElementById("commentList");

// Função para exibir comentários salvos no localStorage
function carregarComentarios() {
    const comentariosSalvos = JSON.parse(localStorage.getItem("comentarios")) || [];
    commentList.innerHTML = "";
    comentariosSalvos.forEach(c => {
        const div = document.createElement("div");
        div.classList.add("comentario");
        div.innerHTML = `<strong>${c.nome}</strong><p>${c.texto}</p>`;
        commentList.appendChild(div);
    });
}

carregarComentarios();

// Envio de novo comentário
commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const texto = document.getElementById("comentario").value;

    const novoComentario = { nome, texto };
    const comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
    comentarios.push(novoComentario);
    localStorage.setItem("comentarios", JSON.stringify(comentarios));

    commentForm.reset();
    carregarComentarios();
});


// === 4. ANIMAÇÕES SUAVES AO ROLAR ===
const artigos = document.querySelectorAll("article");

function aparecerAoRolar() {
    const triggerBottom = window.innerHeight * 0.85;
    artigos.forEach(art => {
        const boxTop = art.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            art.classList.add("visivel");
        } else {
            art.classList.remove("visivel");
        }
    });
}

window.addEventListener("scroll", aparecerAoRolar);
aparecerAoRolar();


// === 5. ESTILOS ADICIONAIS PELO JS ===
const style = document.createElement("style");
style.innerHTML = `
/* ===== Estilos JS ===== */

.theme-btn {
    position: fixed;
    top: 15px;
    right: 15px;
    background-color: #f8c1cc;
    border: none;
    padding: 10px 18px;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bold;
    color: #333;
    box-shadow: 0 3px 8px rgba(0,0,0,0.15);
    transition: 0.3s;
    z-index: 1000;
}
.theme-btn:hover {
    background-color: #e63946;
    color: #fff;
}

/* Modo escuro */
body.dark-theme {
    background-color: #222;
    color: #eee;
}
body.dark-theme header,
body.dark-theme nav,
body.dark-theme footer {
    background-color: #333;
    color: #eee;
}
body.dark-theme a {
    color: #f48fb1;
}

/* Botão voltar ao topo */
.scroll-top-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #e63946;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 22px;
    width: 45px;
    height: 45px;
    display: none;
    cursor: pointer;
    box-shadow: 0 3px 10px rgba(0,0,0,0.2);
    transition: 0.3s;
    z-index: 999;
}
.scroll-top-btn:hover {
    background-color: #c51b29;
}

/* Comentários */
.comentarios {
    background-color: #fff;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.comentarios h2 {
    color: #e63946;
    margin-bottom: 20px;
}
.comentarios form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
}
.comentarios input,
.comentarios textarea {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
}
.comentarios button {
    background-color: #e63946;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;
}
.comentarios button:hover {
    background-color: #c51b29;
}
.comentario {
    background-color: #fff7f7;
    padding: 10px 15px;
    border-radius: 8px;
    margin-bottom: 10px;
    border-left: 3px solid #e63946;
}

/* Animações de entrada */
article {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s ease;
}
article.visivel {
    opacity: 1;
    transform: translateY(0);
}
`;
document.head.appendChild(style);
