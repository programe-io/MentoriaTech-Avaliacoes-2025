// Seleciona o botão de buscar rimas e a lista de resultado
const btn = document.querySelector('button');
const resultado = document.getElementById('resultado');

// Adiciona evento de clique ao botão
btn.addEventListener('click', (e) => {
  e.preventDefault(); // evita recarregar o formulário
  const palavra = document.getElementById('palavra').value.trim().toLowerCase();
  resultado.innerHTML = ''; // limpa resultados anteriores

  if (!palavra) {
    resultado.innerHTML = '<li>Por favor, digite uma palavra.</li>';
    return;
  }

  // Lista de rimas
  const rimas = {
    "amor": ["flor", "dor", "cor", "calor"],
    "coração": ["paixão", "canção", "balão", "pão"],
    "vida": ["ferida", "partida", "descida", "querida"],
    "lua": ["nua", "tua", "rua", "pua"],
    "sol": ["farol", "col", "rol", "caracol"]
  };

  // Mostra as rimas ou mensagem caso não encontre
  if (rimas[palavra]) {
    resultado.innerHTML = rimas[palavra].map(r => `<li>${r}</li>`).join('');
  } else {
    resultado.innerHTML = '<li>Não encontrei rimas, tente outra palavra!</li>';
  }
});
