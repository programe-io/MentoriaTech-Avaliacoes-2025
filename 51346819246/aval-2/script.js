document.getElementById('btnShowProjects')?.addEventListener('click', ()=> {
      const proj = document.querySelectorAll('.project');
        if(!proj || proj.length===0) { alert('Nenhum projeto listado'); return; }
          let text = 'Projetos:\\n';
            proj.forEach(p => text += '- ' + (p.querySelector('h3')?.textContent || 'Projeto') + '\\n');
              alert(text);
              });

              document.getElementById('btnContactMe')?.addEventListener('click', ()=> {
                const nomeInput = document.getElementById('nome');
                  if(nomeInput) nomeInput.scrollIntoView({behavior:'smooth', block:'center'});
                  });

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
})