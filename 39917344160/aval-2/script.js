// Interatividade simples
document.getElementById('form-contato').addEventListener('submit', function (e) {
  e.preventDefault();
    const nome = document.getElementById('nome').value;
      alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso 🚀`);
      });

      // Efeito visual no título
      document.querySelector('h1').addEventListener('mouseover', function () {
        this.style.color = '#00bcd4';
        });
        document.querySelector('h1').addEventListener('mouseout', function () {
          this.style.color = '#fff';
          });
          