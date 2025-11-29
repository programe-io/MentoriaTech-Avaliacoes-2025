function enviarFormulario(event) {
    event.preventDefault();

    const form = event.target;
    const mensagem = document.getElementById('mensagem');
    const botaoEnviar = form.querySelector('button[type="submit"]');

    // ===== Validação simples =====
    const inputs = form.querySelectorAll("input, textarea");
    let valido = true;

    inputs.forEach(campo => {
        if (campo.value.trim() === "") {
            campo.classList.add("erro");
            valido = false;
        } else {
            campo.classList.remove("erro");
            campo.classList.add("ok");
        }
    });

    // Se tiver erro → treme o formulário
    if (!valido) {
        form.classList.add("shake");
        setTimeout(() => form.classList.remove("shake"), 500);
        return;
    }

    // ===== Evita cliques repetidos =====
    botaoEnviar.disabled = true;
    botaoEnviar.classList.add("enviando");
    botaoEnviar.innerText = "Enviando...";

    // ===== Som de confirmação =====
    const audio = new Audio(
        "https://cdn.pixabay.com/download/audio/2022/03/15/audio_08efcb69f3.mp3"
    );
    audio.volume = 0.5;
    audio.play();

    // ===== Fade-in da mensagem =====
    mensagem.style.opacity = 0;
    mensagem.style.display = "block";

    let op = 0;
    const fadeIn = setInterval(() => {
        if (op >= 1) {
            clearInterval(fadeIn);

            // Fade-out depois de 3s
            setTimeout(() => {
                let opOut = 1;
                const fadeOut = setInterval(() => {
                    if (opOut <= 0) {
                        clearInterval(fadeOut);
                        mensagem.style.display = "none";

                        // Volta o botão ao normal
                        botaoEnviar.disabled = false;
                        botaoEnviar.classList.remove("enviando");
                        botaoEnviar.innerText = "Enviar";

                        // Reseta form e estilos
                        form.reset();
                        inputs.forEach(c => c.classList.remove("ok"));
                    } else {
                        opOut -= 0.05;
                        mensagem.style.opacity = opOut;
                    }
                }, 50);
            }, 3000);

        } else {
            op += 0.05;
            mensagem.style.opacity = op;
        }
    }, 30);
}


// ===== Validação ao vivo (inputs ficam coloridos) =====
document.querySelectorAll("input, textarea").forEach(campo => {
    campo.addEventListener("input", () => {
        if (campo.value.trim() !== "") {
            campo.classList.remove("erro");
            campo.classList.add("ok");
        } else {
            campo.classList.remove("ok");
        }
    });
});
