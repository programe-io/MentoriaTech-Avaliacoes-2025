// xbelinha.js

// Função para exibir uma mensagem de boas-vindas no console
function boasVindasXbelinha() {
  console.log("Bem-vindo(a) ao mundo de Xbelinha!");
  }

  // Função para gerar um número aleatório entre 1 e 100
  function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
    }

    // Função para verificar se um número é par ou ímpar
    function ehPar(numero) {
      return numero % 2 === 0;
      }

      // Objeto com informações sobre Xbelinha
      const xbelinha = {
        nome: "Xbelinha",
          idade: 17,
            interesses: ["Free Fire", "Programação", "Música"],
              apresentar: function() {
                  console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e gosto de ${this.interesses.join(", ")}.`);
                    }
                    };

                    // Chamar as funções e usar o objeto
                    boasVindasXbelinha();

                    const numeroAleatorio = gerarNumeroAleatorio();
                    console.log(`Número aleatório gerado: ${numeroAleatorio}`);

                    if (ehPar(numeroAleatorio)) {
                      console.log(`${numeroAleatorio} é um número par.`);
                      } else {
                        console.log(`${numeroAleatorio} é um número ímpar.`);
                        }

                        xbelinha.apresentar();
                        