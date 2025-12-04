// Efeito de "digitando" no subtítulo
const typingElement = document.getElementById("typing-text");
if (typingElement) {
  const originalText = typingElement.dataset.text || typingElement.textContent;
  typingElement.textContent = "";

  let index = 0;

  function typeText() {
    if (index <= originalText.length) {
      typingElement.textContent = originalText.slice(0, index);
      index++;
      setTimeout(typeText, 50); // Velocidade da digitação
    }
  }

  window.addEventListener("load", typeText);
}

// Saudação no rodapé (Bom dia / Boa tarde / Boa noite)
const greetingElement = document.getElementById("greeting");
if (greetingElement) {
  const hour = new Date().getHours();
  let message = "Olá!";

  if (hour >= 5 && hour < 12) {
    message = "Bom dia!";
  } else if (hour >= 12 && hour < 18) {
    message = "Boa tarde!";
  } else {
    message = "Boa noite!";
  }

  greetingElement.textContent = message;
}
