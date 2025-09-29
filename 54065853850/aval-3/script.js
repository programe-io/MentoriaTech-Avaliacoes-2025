
  <script>
    let carrinho = [];

    function adicionarCarrinho(nomeProduto, preco) {
      carrinho.push({ nome: nomeProduto, preco: preco });
      alert(nomeProduto + " adicionado ao carrinho!\nTotal de itens: " + carrinho.length);
      console.log("Carrinho:", carrinho);
    }
  </script>
