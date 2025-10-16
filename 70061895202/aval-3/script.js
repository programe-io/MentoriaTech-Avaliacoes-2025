document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const output = document.getElementById("outputMsg");

  if (email === "admin@email.com" && senha === "123") {
    output.textContent = "Login bem-sucedido!";
    output.style.color = "green";
  } else {
    output.textContent = "Email ou senha incorretos!";
    output.style.color = "red";
  }
});
