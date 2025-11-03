/* Classe para esconder um elemento */
.modal {
  opacity: 0;
  visibility: hidden;
  transform: scale(0.8);
  transition: all 0.3s ease-out; /* Prepara para a animação */
}

/* Classe que o JS adiciona para exibir o elemento */
.modal.ativo {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
}