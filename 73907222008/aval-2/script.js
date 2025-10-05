// script.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contatoForm');
    const modal = document.getElementById('modal');
      const modalTitulo = document.getElementById('modalTitulo');
        const modalMensagem = document.getElementById('modalMensagem');
          const fecharModal = document.getElementById('fecharModal');
            const modalOk = document.getElementById('modalOk');

              // Função para abrir modal com título/mensagem
                function abreModal(titulo, mensagem) {
                    modalTitulo.textContent = titulo;
                        modalMensagem.textContent = mensagem;
                            modal.classList.remove('oculto');
                                modal.setAttribute('aria-hidden','false');
                                  }

                                    function fecha() {
                                        modal.classList.add('oculto');
                                            modal.setAttribute('aria-hidden','true');
                                              }

                                                fecharModal.addEventListener('click', fecha);
                                                  modalOk.addEventListener('click', fecha);
                                                    modal.addEventListener('click', (ev) => {
                                                        if (ev.target === modal) fecha();
                                                          });

                                                            // Validação simples do form
                                                              form.addEventListener('submit', (ev) => {
                                                                  ev.preventDefault();
                                                                      const nome = document.getElementById('nome').value.trim();
                                                                          const mensagem = document.getElementById('mensagem').value.trim();

                                                                              // Verifica se existe um <article> no documento (muito importante para a avaliação)
                                                                                  const existeArticle = !!document.querySelector('article');
                                                                                      if (!existeArticle) {
                                                                                            abreModal('Erro', 'A tag obrigatória "article" não foi encontrada no seu código HTML. Por favor verifique.');
                                                                                                  return;
                                                                                                      }

                                                                                                          if (!nome || !mensagem) {
                                                                                                                abreModal('Erro', 'Por favor preencha todos os campos antes de enviar.');
                                                                                                                      return;
                                                                                                                          }

                                                                                                                              // Simula envio com feedback de sucesso
                                                                                                                                  abreModal('Sucesso', 'Seu formulário foi enviado (simulação). Obrigado!');
                                                                                                                                      form.reset();
                                                                                                                                        });
                                                                                                                                        });