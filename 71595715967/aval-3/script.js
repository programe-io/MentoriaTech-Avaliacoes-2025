/* ================================
   SCRIPT PRINCIPAL DE LA PÁGINA
================================ */

/**
 * Espera a que el DOM esté completamente cargado
 */
document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ Documento listo.");

    // Mostrar mensaje de bienvenida
    mostrarBienvenida();

    // Asignar eventos
    const botonSaludo = document.querySelector("#boton-saludo");
    if (botonSaludo) botonSaludo.addEventListener("click", saludar);

    const form = document.querySelector("form");
    if (form) form.addEventListener("submit", enviarFormulario);

    // Efecto de aparición al hacer scroll
    window.addEventListener("scroll", animarElementos);
});

/* ================================
   FUNCIONES DE INTERFAZ
================================ */

/**
 * Muestra un mensaje de bienvenida al usuario
 */
function mostrarBienvenida() {
    const hora = new Date().getHours();
    let saludo;

    if (hora < 12) saludo = "¡Buenos días!";
    else if (hora < 18) saludo = "¡Buenas tardes!";
    else saludo = "¡Buenas noches!";

    console.log(saludo);
}

/**
 * Saludo personalizado al hacer clic
 */
function saludar() {
    alert("👋 ¡Hola! Gracias por visitar mi página web.");
}

/**
 * Enviar el formulario con validación
 */
function enviarFormulario(event) {
    event.preventDefault();

    const nombre = document.querySelector("#nombre");
    const email = document.querySelector("#email");

    if (!nombre.value.trim() || !email.value.trim()) {
        alert("⚠️ Por favor completa todos los campos.");
        return;
    }

    if (!validarEmail(email.value)) {
        alert("📧 El correo electrónico no es válido.");
        return;
    }

    alert(`✅ Gracias por contactarnos, ${nombre.value}. Te responderemos pronto.`);
    event.target.reset();
}

/**
 * Validar formato de correo electrónico
 */
function validarEmail(correo) {
    const regex = /^[\w.-]+@[a-zA-Z\d]()
