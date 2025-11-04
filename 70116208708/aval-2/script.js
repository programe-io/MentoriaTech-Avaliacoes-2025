<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Academia Layssa</title>
    <style>
        /* ======== ESTILO GERAL ======== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: "Arial", sans-serif;
            background-color: #000;
            color: #fff;
            line-height: 1.6;
        }

        /* ======== CABEÇALHO ======== */
        header {
            background-color: #111;
            padding: 20px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid #ff0077;
            position: sticky;
            top: 0;
        }

        header h1 {
            color: #ff0077;
        }

        nav a {
            color: #fff;
            margin-left: 20px;
            text-decoration: none;
            font-weight: bold;
            transition: 0.3s;
        }

        nav a:hover {
            color: #ff0077;
        }

        /* ======== SEÇÃO HERO ======== */
        .hero {
            background: url('https://images.unsplash.com/photo-1599058917212-d750089bc07d?auto=format&fit=crop&w=1350&q=80') center/cover no-repeat;
            height: 90vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
        }

        .overlay {
            background-color: rgba(0, 0, 0, 0.7);
            padding: 40px;
            border-radius: 10px;
        }

        .hero h2 {
            color: #ff0077;
            font-size: 2.5em;
            margin-bottom: 10px;
        }

        .hero p {
            font-size: 1.2em;
            margin-bottom: 20px;
        }

        .btn {
            background-color: #ff0077;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            transition: 0.3s;
        }

        .btn:hover {
            background-color: #fff;
            color: #ff0077;
        }

        /* ======== SEÇÃO FORMULÁRIO ======== */
        section {
            padding: 60px 40px;
            text-align: center;
        }

        form {
            background-color: #111;
            border: 2px solid #ff0077;
            border-radius: 10px;
            padding: 30px;
            max-width: 400px;
            margin: auto;
            text-align: left;
        }

        form label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }

        form input {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: none;
            border-radius: 5px;
            background-color: #222;
            color: #fff;
        }

        form input:focus {
            outline: 2px solid #ff0077;
        }

        /* ======== RODAPÉ ======== */
        footer {
            background-color: #111;
            text-align: center;
            padding: 20px;
            border-top: 2px solid #ff0077;
            margin-top: 40px;
        }
    </style>
</head>
<body>
    <header>
        <h1>🏋️ Academia Layssa</h1>
        <nav>
            <a href="#home">Home</a>
            <a href="#cadastro">Cadastro</a>
            <a href="#contato">Contato</a>
        </nav>
    </header>

    <section id="home" class="hero">
        <div class="overlay">
            <h2>Treine Forte. Viva Melhor.</h2>
            <p>Venha para a Academia Layssa e alcance seus objetivos com energia e foco!</p>
            <button class="btn" onclick="mostrarMensagem()">Saiba Mais</button>
        </div>
    </section>

    <section id="cadastro">
        <h2>Cadastre-se Agora</h2>
        <p>Preencha o formulário abaixo e junte-se à Academia Layssa!</p>

        <form id="formCadastro">
            <label for="nome">Nome Completo:</label>
            <input type="text" id="nome" placeholder="Digite seu nome" required>

            <label for="email">E-mail:</label>
            <input type="email" id="email" placeholder="Digite seu e-mail" required>

            <label for="plano">Plano Desejado:</label>
            <input type="text" id="plano" placeholder="Ex: Premium, Básico..." required>

            <button type="submit" class="btn">Enviar</button>
        </form>
    </section>

    <section id="contato">
        <h2>Contato</h2>
        <p>📞 (11) 99999-9999</p>
        <p>📧 contato@academialayssa.com</p>
    </section>

    <footer>
        <p>© 2025 Academia Layssa — Todos os direitos reservados.</p>
    </footer>

    <script>
        // Exibe uma mensagem quando o botão "Saiba Mais" é clicado
        function mostrarMensagem() {
            alert("A Academia Layssa é o seu espaço de superação! 💪");
        }

        // Captura o envio do formulário e exibe mensagem personalizada
        document.getElementById("formCadastro").addEventListener("submit", function(event) {
            event.preventDefault(); // impede o recarregamento da página
            const nome = document.getElementById("nome").value;
            const plano = document.getElementById("plano").value;
            alert(`Bem-vindo(a), ${nome}! 🎉\nSeu cadastro no plano "${plano}" foi realizado com sucesso!`);
            document.getElementById("formCadastro").reset();
        });
    </script>
</body>
</html>
