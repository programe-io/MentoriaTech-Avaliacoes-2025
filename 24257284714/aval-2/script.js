// funcionalidades simples
document.getElementById('btnShowBio')?.addEventListener('click', ()=> {
  const bio = document.querySelector('#bio');
    bio?.scrollIntoView({behavior:'smooth', block:'center'});
    });

    document.getElementById('btnScrollContato')?.addEventListener('click', ()=> {
      const c = document.getElementById('contato');
        c?.scrollIntoView({behavior:'smooth', block:'center'});
        });

        document.getElementById('btnEnviar')?.addEventListener('click', enviarMensagem);

        function enviarMensagem() {
          const nome = document.getElementById('nome').value.trim();
            const msg = document.getElementById('mensagem').value.trim();
              const retorno = document.getElementById('retorno');

                if (!nome || !msg) {
                    retorno.textContent = 'Preencha todos os campos.';
                        retorno.style.color = 'red';
                            return;
                              }

                                retorno.textContent = 'Mensagem enviada com sucesso!';
                                  retorno.style.color = 'green';
                                    document.getElementById('nome').value = '';
                                      document.getElementById('mensagem').value = '';
                                      }