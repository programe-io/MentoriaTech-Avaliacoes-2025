let contador = 0;

document.getElementById("form-contato").addEventListener("submit", function (e) {
  e.preventDefault();
    const nome = document.getElementById("nome").value;
      contador++;
        document.getElementById("contador-mensagens").textContent = contador;
          alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso 🚀`);
          });
          
