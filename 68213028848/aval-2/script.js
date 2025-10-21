<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Essência Divina - Perfumaria Interativa</title>
    <link rel="stylesheet" href="style.css"> 
</head>
<body>

    <header>
        <div class="container">
            <h1>Essência Divina</h1>
            <nav>
                <ul>
                    <li><a href="#produtos">Produtos</a></li>
                    <li><a href="#carrinho" id="btn-carrinho">🛒 Carrinho (<span id="contador-carrinho">0</span>)</a></li>
                    <li><a href="#contato" class="btn-contato">Contato</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main class="container">
        
        <section id="produtos">
            <h2>✨ Nossas Fragrâncias</h2>
            <div id="lista-produtos" class="produtos-grid">
                </div>
        </section>

        <section id="carrinho" class="contato-form">
            <h2>🛒 Seu Carrinho de Compras</h2>
            <ul id="itens-carrinho">
                <li>Seu carrinho está vazio.</li>
            </ul>
            <p class="total-carrinho">Total: <span id="total-carrinho">R$ 0,00</span></p>
            <button id="btn-finalizar" class="btn-comprar">Finalizar Compra</button>
        </section>

        <section id="contato" class="contato-form">
            <h2>Fale Conosco 📧</h2>
            <form action="#">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <label for="mensagem">Mensagem:</label>
                <textarea id="mensagem" name="mensagem" rows="5" required></textarea>
                <button type="submit" class="btn-comprar">Enviar Mensagem</button>
            </form>
        </section>
        
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2025 Essência Divina Perfumaria.</p>
        </div>
    </footer>

    <script src="script.js"></script> 
</body>
</html>