 const form = document.getElementById('estudoForm');

 form.addEventListener('submit', function(e) {
     e.preventDefault(); // Evita envio tradicional

         const nome = document.getElementById('nome').value;
             const email = document.getElementById('email').value;
                 const materia = document.getElementById('materia').value;

                     alert(`Obrigado, ${nome}! Seu cadastro para ${materia} foi recebido.\nEnviaremos informações para ${email}.`);

                         form.reset();
                         });
                                                   