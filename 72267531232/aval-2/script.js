<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Futebol Total - O Portal Verde e Branco</title>
    
    <style>
        /*
         * 1. Cores e Reset Básico
         */
        :root {
            --verde-principal: #008000; /* Verde do campo */
            --verde-escuro: #006400; /* Verde mais escuro para fundo/hover */
            --branco: #ffffff;
            --cinza-claro: #f4f4f4;
            --texto-escuro: #333;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /*
         * 2. Estilos do Corpo e Layout Principal (Flexbox)
         */
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            background-color: var(--cinza-claro);
            color: var(--texto-escuro);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        /*
         * 3. Cabeçalho (Banner com Imagem de Fundo e Overlay)
         */
        .cabecalho {
            color: var(--branco);
            padding: 100px 20px;
            /* Imagem de Fundo (Temática de estádio) */
            background-image: url('https://source.unsplash.com/random/1600x450/?football,stadium');
            background-size: cover;
            background-position: center;
            position: relative;
            text-align: center;
        }

        /* Overlay Verde para o Fundo */
        .cabecalho::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 128, 0, 0.75); /* Verde com 75% de opacidade */
            z-index: 1;
        }

        .cabecalho-conteudo {
            position: relative;
            z-index: 2;
        }

        .cabecalho h1 {
            font-size: 3.5em;
            margin-bottom: 5px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        /* Navegação */
        .menu-principal {
            position: relative;
            z-index: 2;
            background-color: var(--verde-escuro); 
            padding: 15px 0;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        .menu-principal ul {
            list-style: none;
            display: flex;
            justify-content: center;
            gap: 40px;
        }

        .menu-principal ul li a {
            color: var(--branco);
            text-decoration: none;
            font-weight: bold;
            padding: 8px 15px;
            transition: background-color 0.3s;
            border-radius: 4px;
        }

        .menu-principal ul li a:hover {
            background-color: var(--verde-principal);
        }

        /*
         * 4. Conteúdo Principal (Main) - Configuração de Colunas
         */
        .principal {
            flex: 1;
            padding: 40px 20px;
            max-width: 1200px;
            margin: 0 auto;
            width: 100%;
            display: flex; 
            gap: 25px;
            flex-wrap: wrap; 
        }

        /* Estilos da Coluna de Conteúdo Principal */
        .conteudo-principal-wrapper {
            flex: 3; 
            min-width: 60%;
        }

        /* Estilos da Tag ASIDE (Barra Lateral) */
        .barra-lateral {
            flex: 1; 
            min-width: 250px;
            background-color: var(--branco);
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
            height: fit-content; 
        }
        
        .barra-lateral h4 {
            color: var(--verde-escuro);
            border-bottom: 2px solid var(--verde-principal);
            padding-bottom: 10px;
            margin-bottom: 15px;
        }

        .barra-lateral ul {
            list-style: none;
        }
        
        .barra-lateral ul li {
            margin-bottom: 10px;
        }
        
        .barra-lateral ul li a {
            color: var(--texto-escuro);
            text-decoration: none;
        }
        
        .barra-lateral ul li a:hover {
            color: var(--verde-principal);
        }


        .destaque {
            background-color: var(--branco);
            border-left: 8px solid var(--verde-principal); 
            padding: 30px;
            margin-bottom: 40px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .destaque h2 {
            color: var(--verde-principal);
            font-size: 2.2em;
            margin-bottom: 10px;
        }

        /* Layout de Cards de Notícias */
        .cards-container {
            display: flex;
            flex-wrap: wrap; 
            gap: 25px;
        }
        
        .cards-container h3 {
            font-size: 2em;
            color: var(--texto-escuro);
            margin-bottom: 30px;
            width: 100%; 
            text-align: center;
        }
        
        /* Estilo da tag <article> */
        article {
            background-color: var(--branco);
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
            padding-bottom: 20px;
            width: calc(50% - 12.5px); /* Dois artigos por linha no wrapper principal */
            min-width: 280px;
            text-align: left;
            overflow: hidden;
            transition: box-shadow 0.3s, transform 0.3s;
        }

        article:hover {
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
            transform: translateY(-5px);
        }

        .card-imagem {
            width: 100%;
            height: 180px;
            object-fit: cover;
            margin-bottom: 15px;
        }

        article h4 {
            color: var(--verde-escuro);
            font-size: 1.4em;
            margin: 0 15px 10px 15px;
        }

        /* Botões */
        .botao {
            display: inline-block;
            background-color: var(--verde-principal);
            color: var(--branco);
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            transition: background-color 0.3s, transform 0.2s;
            margin-left: 15px;
        }

        .botao:hover {
            background-color: var(--verde-escuro);
            transform: translateY(-1px);
        }

        /*
         * 5. Rodapé
         */
        .rodape {
            background-color: var(--verde-escuro);
            color: var(--branco);
            text-align: center;
            padding: 20px 0;
            margin-top: 40px;
            font-size: 0.9em;
        }

        /*
         * 6. Responsividade
         */
        @media (max-width: 900px) {
            .principal {
                flex-direction: column; /* Empilha as colunas (conteúdo e aside) */
            }

            .conteudo-principal-wrapper, .barra-lateral {
                flex: none;
                width: 100%;
            }
        }

        @media (max-width: 600px) {
            article {
                width: 100%; /* Um artigo/card por linha em celulares */
            }
            .cabecalho h1 {
                font-size: 2.5em;
            }

            .menu-principal ul {
                flex-direction: column;
                gap: 5px;
            }
        }
    </style>
    </head>
<body>
    <header class="cabecalho">
        <div class="cabecalho-conteudo">
            <h1>Futebol Total ⚽</h1>
            <p>Seu portal diário de notícias, resultados e análises.</p>
        </div>
        <nav class="menu-principal">
            <ul>
                <li><a href="#">Início</a></li>
                <li><a href="#">Notícias</a></li>
                <li><a href="#">Resultados</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
    </header>

    <main class="principal">
        
        <div class="conteudo-principal-wrapper">
            
            <section class="destaque">
                <h2>🏆 Destaque da Semana: Vitória Histórica!</h2>
                <p>O 'Verdão da Capital' garantiu o título após uma campanha impecável, com o melhor ataque e a melhor defesa do campeonato. Uma performance digna de campeões!</p>
                <a href="#" class="botao" style="border: 2px solid var(--verde-escuro);">Ver Melhores Momentos</a>
            </section>

            <section class="cards-container">
                <h3>Últimas Notícias</h3>
                
                <article>
                    <img src="https://via.placeholder.com/300x180/008000/FFFFFF?text=Escudo" alt="Novo Escudo do Time" class="card-imagem">
                    <h4>Novo Escudo Apresentado</h4>
                    <p>O clube revelou seu novo emblema, modernizando o visual sem perder a tradição verde e branca.</p>
                    <a href="#" class="botao">Detalhes</a>
                </article>
                <article>
                    <img src="https://via.placeholder.com/300x180/FFFFFF/008000?text=Entrevista" alt="Entrevista com o capitão" class="card-imagem">
                    <h4>Capitão Comenta a Próxima Fase</h4>
                    <p>Em entrevista exclusiva, o capitão do time fala sobre os desafios e a motivação da equipe.</p>
                    <a href="#" class="botao">Detalhes</a>
                </article>
                </section>
        </div>
        
        <aside class="barra-lateral">
            <h4>Tabela Rápida</h4>
            <ul>
                <li><a href="#">1. Time A - 25 pts</a></li>
                <li><a href="#">2. Time B - 22 pts</a></li>
                <li><a href="#">3. Time C - 21 pts</a></li>
                <li><a href="#">4. Time D - 20 pts</a></li>
            </ul>
            
            <a href="#" class="botao" style="display: block; text-align: center; margin-top: 25px; border: none; padding: 10px;">Ver Classificação Completa</a>
        </aside>

    </main>

    <footer class="rodape">
        <p>&copy; 2025 Futebol Verde e Branco. Todos os direitos reservados.</p>
    </footer>
</body>
</html>