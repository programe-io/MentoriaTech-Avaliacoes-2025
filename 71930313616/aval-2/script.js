function saudacao() {
  const agora = new Date();
  const hora = agora.getHours();
  const elemento = document.getElementById('saudacao');

  if (hora >= 5 && hora < 12) {
    elemento.textContent = 'Bom dia! Seja bem-vindo ao Oh Blog.';
  } else if (hora >= 12 && hora < 18) {
    elemento.textContent = 'Boa tarde! Aproveite a leitura no Oh Blog.';
  } else {
    elemento.textContent = 'Boa noite! Que tal uma leitura no Oh Blog?';
  }
}

saudacao();
