document.addEventListener("DOMContentLoaded", () => {

    // Ano automático
    document.getElementById("year").textContent = new Date().getFullYear();

    // Formulário
    const form = document.getElementById("loserForm");
    const dialog = document.getElementById("dialog");
    const closeDialog = document.getElementById("closeDialog");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        dialog.showModal();
    });

    closeDialog.addEventListener("click", () => dialog.close());

    // Canvas
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.font = "30px Arial";
    ctx.fillText("🎈 Bem-vindo a Derry!", 20, 70);
});
