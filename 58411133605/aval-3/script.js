<script>
    // === Modo Escuro ===
    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
        const btn = document.querySelector(".toggle-mode");
        if (document.body.classList.contains("dark-mode")) {
            btn.textContent = "☀️ Modo Claro";
        } else {
            btn.textContent = "🌙 Modo Escuro";
        }
    }

    // === Botão "Voltar ao Topo" ===
    const topBtn = document.getElementById("topBtn");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            topBtn.classList.add("show");
        } else {
            topBtn.classList.remove("show");
        }
    });

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
</script>
