// Saudação simples
document.getElementById("saudacao").addEventListener("click", function() {
  alert("Olá, Heric Antônio te dá boas-vindas à sua página pessoal! 👋");
  });

  // Envio de formulário (simulado)
  document.getElementById("formContato").addEventListener("submit", function(e) {
    e.preventDefault();
      const nome = document.getElementById("nome").value;
        const msg = document.getElementById("mensagem").value;
          if (nome && msg) {
              document.getElementById("respostaForm").classList.remove("oculto");
                  document.getElementById("formContato").reset();
                      setTimeout(() => {
                            document.getElementById("respostaForm").classList.add("oculto");
                                }, 4000);
                                  }
                                  });