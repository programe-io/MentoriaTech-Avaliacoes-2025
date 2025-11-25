let carrinho = [];
let total = 0;

document.getElementById("btnCarrinho").onclick = function () {
    document.getElementById("carrinho").style.right = "0";
    };

    document.getElementById("fecharCarrinho").onclick = function () {
        document.getElementById("carrinho").style.right = "-300px";
        };

        function adicionar(nome, preco) {
            carrinho.push({ nome, preco });
                total += preco;

                    atualizarCarrinho();
                    }

                    function atualizarCarrinho() {
                        let lista = document.getElementById("listaItens");
                            lista.innerHTML = "";

                                carrinho.forEach((item, index) => {
                                        lista.innerHTML += `
                                                    <li>
                                                                    ${item.nome} - R$ ${item.preco.toFixed(2)}
                                                                                    <button onclick="remover(${index})">X</button>
                                                                                                </li>
                                                                                                        `;
                                                                                                            });

                                                                                                                document.getElementById("valorTotal").innerText = total.toFixed(2);
                                                                                                                }

                                                                                                                function remover(i) {
                                                                                                                    total -= carrinho[i].preco;
                                                                                                                        carrinho.splice(i, 1);
                                                                                                                            atualizarCarrinho();
                                                                                                                            }