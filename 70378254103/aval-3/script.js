// Variáveis principais
const range = document.getElementById("range");
const result = document.getElementById("result");
const image = document.getElementById("image");

// Função para atualizar o conteúdo
function atualizarSimulacao(valor) {
  result.textContent = valor + "L";

  // Define imagem com base na quantidade
  let caminhoImg = "https://ae01.alicdn.com/kf/S172e28b4a1594b93b1546f2d93d588b0F.jpg";

  if (valor > 50) {
    caminhoImg = "https://gartic.com.br/imgs/mural/gu/gustavoscb2015/rios-poluidos.png";
  }
  if (valor > 150) {
    caminhoImg = "https://static.biologianet.com/conteudo/images/rios-poluidos.jpg";
  }

  image.src = caminhoImg;
}

// Evento para detectar mudança no range
range.addEventListener("input", () => {
  const valor = Number(range.value);
  atualizarSimulacao(valor);
});

// Inicia carregando valor padrão
atualizarSimulacao(range.value);