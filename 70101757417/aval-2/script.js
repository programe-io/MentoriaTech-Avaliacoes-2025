document.addEventListener('DOMContentLoaded', () => {
  const newsContainer = document.getElementById('news-container');
  const btnCarregar = document.getElementById('btn-carregar');
  const form = document.getElementById('form-contato');
  const msgSucesso = document.getElementById('msg-sucesso');

  let noticiasPagina = 0;

  const noticiasFake = [
    {
      titulo: 'Times se preparam para o grande clássico',
      resumo: 'Expectativa alta para o confronto entre os clubes rivais neste fim de semana.',
    },
    {
      titulo: 'Jogador X anuncia aposentadoria',
      resumo: 'Após carreira brilhante, o jogador pendura as chuteiras e agradece aos torcedores.',
    },
    {
      titulo: 'Campeonato local com novos patrocinadores',
      resumo: 'Empresas investem no futebol de base trazendo recursos para infraestrutura.',
    },
    {
      titulo: 'Mulheres no futebol: avanço e reconhecimento',
      resumo: 'O futebol feminino ganha cada vez mais espaço e visibilidade.',
    },
    {
      titulo: 'Estádio moderno vai ser inaugurado',
      resumo: 'Nova arena promete conforto e tecnologia para os torcedores.',
    },
    {
      titulo: 'Reforços confirmados para a próxima temporada',
      resumo: 'Clubes anunciam contratações visando título no próximo ano.',
    },
  ];

  function carregarNoticias() {
    const inicio = noticiasPagina * 2;
    const fim = inicio + 2;
    const slice = noticiasFake.slice(inicio, fim);

    slice.forEach(item => {
      const div = document.createElement('div');
      div.className = 'noticia';
      div.innerHTML = `<h3>${item.titulo}</h3><p>${item.resumo}</p>`;
      newsContainer.appendChild(div);
    });

    noticiasPagina++;
    if (fim >= noticiasFake.length) {
      btnCarregar.disabled = true;
      btnCarregar.innerText = 'Não há mais notícias';
    }
  }

  btnCarregar.addEventListener('click', carregarNoticias);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Aqui você pode enviar via AJAX para um servidor real, ou só mostrar mensagem:
    form.reset();
    msgSucesso.classList.remove('hidden');
    setTimeout(() => {
      msgSucesso.classList.add('hidden');
    }, 3000);
  });

  // Carregar as primeiras notícias automaticamente
  carregarNoticias();
});
