<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Loja de Sapatos - Calçados com Estilo</title>
    </head>
<body>

    <header>
        <h1><a href="index.html">ShoeStore</a></h1>
        <nav>
            <ul>
                <li><a href="#feminino">Feminino</a></li>
                <li><a href="#masculino">Masculino</a></li>
                <li><a href="#infantil">Infantil</a></li>
                <li><a href="contato.html">Contato</a></li>
                <li><a href="carrinho.html">🛒 Carrinho (0)</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="destaques">
            <h2>Nova Coleção de Inverno</h2>
            <img src="banner_inverno.jpg" alt="Banner da Nova Coleção de Sapatos de Inverno">
            <p>Conheça os lançamentos mais quentes da estação. <a href="#novidades">Ver Mais</a></p>
        </section>

        <section id="produtos">
            <h2>Nossos Produtos</h2>

            <article class="produto-card">
                <img src="tenis_feminino.jpg" alt="Tênis Casual Feminino Rosa">
                <h3>Tênis Casual Confort</h3>
                <p class="categoria">Feminino</p>
                <p class="preco">R$ 199,90</p>
                <a href="produto_tenis.html" class="btn-detalhes">Ver Detalhes</a>
                <button class="btn-comprar">Adicionar ao Carrinho</button>
            </article>

            <article class="produto-card">
                <img src="bota_masculina.jpg" alt="Bota de Couro Masculina Marrom">
                <h3>Bota Adventure Urban</h3>
                <p class="categoria">Masculino</p>
                <p class="preco">R$ 349,90</p>
                <a href="produto_bota.html" class="btn-detalhes">Ver Detalhes</a>
                <button class="btn-comprar">Adicionar ao Carrinho</button>
            </article>

            <article class="produto-card">
                <img src="sandalia_infantil.jpg" alt="Sandália Infantil com Estampa Divertida">
                <h3>Sandália Kids Alegria</h3>
                <p class="categoria">Infantil</p>
                <p class="preco">R$ 89,90</p>
                <a href="produto_sandalia.html" class="btn-detalhes">Ver Detalhes</a>
                <button class="btn-comprar">Adicionar ao Carrinho</button>
            </article>

            </section>

        <section id="vantagens">
            <h2>Por que comprar conosco?</h2>
            <ul>
                <li>Frete Grátis acima de R$ 250,00</li>
                <li>Troca Fácil em até 30 dias</li>
                <li>Pagamento em até 10x sem juros</li>
            </ul>
        </section>
    </main>

    <footer>
        <div class="newsletter">
            <h4>Assine nossa Newsletter</h4>
            <form action="/subscribe" method="POST">
                <input type="email" placeholder="Seu e-mail" required>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
        <div class="links-rodape">
            <p>&copy; 2025 ShoeStore. Todos os direitos reservados.</p>
            <ul>
                <li><a href="politica.html">Política de Privacidade</a></li>
                <li><a href="termos.html">Termos de Uso</a></li>
                <li><a href="fale-conosco.html">Fale Conosco</a></li>
            </ul>
        </div>
    </footer>

    </body>
</html>