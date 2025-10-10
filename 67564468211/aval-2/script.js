// Espera o envio do formulário
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // impede o envio automático

  // Pega os valores dos campos
  const nome = document.querySelector("input[name='nome']").value;
  const email = document.querySelector("input[name='email']").value;
  const senha = document.querySelector("input[name='senha']").value;

  // Verifica se todos os campos estão preenchidos
  if (nome === "" || email === "" || senha === "") {
    alert("Por favor, preencha todos os campos!");
  } else {
    alert("Cadastro realizado com sucesso!");
    // Aqui você pode colocar código para enviar os dados a um servidor
    document.querySelector("form").reset(); // limpa os campos
  }
});
