<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Futebol Interativo - JavaScript Completo</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Oswald:wght@600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        /* ======================
           RESET E CONFIGURAÇÕES GLOBAIS
        ====================== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary: #1B5E20;
            --secondary: #2E7D32;
            --accent: #FFCA28;
            --dark: #1B1B1B;
            --light: #F5F5F5;
            --gray: #757575;
            --success: #4CAF50;
            --danger: #F44336;
            --warning: #FFC107;
            --info: #2196F3;
        }

        body {
            font-family: 'Roboto', sans-serif;
            background: linear-gradient(135deg, #e8f5e8 0%, #f1f8e9 100%);
            color: var(--dark);
            line-height: 1.6;
            overflow-x: hidden;
        }

        img {
            max-width: 100%;
            height: auto;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        img:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        }

        a {
            text-decoration: none;
            color: inherit;
            transition: all 0.3s ease;
        }

        ul {
            list-style: none;
        }

        /* ======================
           TIPOGRAFIA
        ====================== */
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Oswald', sans-serif;
            font-weight: 600;
            line-height: 1.2;
            margin-bottom: 0.5rem;
        }

        h1 { font-size: 3.5rem; }
        h2 { font-size: 2.5rem; }
        h3 { font-size: 1.8rem; }

        p {
            margin-bottom: 1rem;
            font-size: 1.1rem;
        }

        /* ======================
           HEADER & HERO
        ====================== */
        header {
            position: relative;
            height: 100vh;
            background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), 
                        url('https://images.unsplash.com/photo-1518098268026-4e266f444f6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80') center/cover no-repeat;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            overflow: hidden;
        }

        .hero-content {
            z-index: 2;
            max-width: 900px;
            padding: 2rem;
        }

        .hero-content h1 {
            font-size: 4.5rem;
            margin-bottom: 1rem;
            text-shadow: 3px 3px 10px rgba(0,0,0,0.8);
        }

        .hero-content p {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.8);
        }

        .btn {
            display: inline-block;
            background: var(--accent);
            color: var(--dark);
            padding: 14px 32px;
            border-radius: 50px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 6px 15px rgba(255,202,40,0.4);
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .btn:hover {
            background: #ffb300;
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(255,202,40,0.5);
        }

        /* ======================
           NAVEGAÇÃO
        ====================== */
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(27, 27, 27, 0.95);
            backdrop-filter: blur(10px);
            z-index: 1000;
            transition: all 0.3s ease;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--accent);
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
        }

        .logo i {
            font-size: 2rem;
        }

        .nav-menu {
            display: flex;
            gap: 2rem;
        }

        .nav-menu a {
            color: white;
            font-weight: 500;
            padding: 0.5rem 0;
            position: relative;
            transition: color 0.3s ease;
            cursor: pointer;
        }

        .nav-menu a::after {
            content: '';
            position: absolute;
            width: 0;
            height: 3px;
            bottom: 0;
            left: 0;
            background: var(--accent);
            transition: width 0.3s ease;
        }

        .nav-menu a:hover {
            color: var(--accent);
        }

        .nav-menu a:hover::after {
            width: 100%;
        }

        .hamburger {
            display: none;
            cursor: pointer;
            color: white;
            font-size: 1.8rem;
        }

        /* ======================
           SEÇÕES
        ====================== */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        section {
            padding: 80px 0;
        }

        .section-title {
            text-align: center;
            margin-bottom: 3rem;
            position: relative;
        }

        .section-title::after {
            content: '';
            position: absolute;
            width: 80px;
            height: 4px;
            background: var(--accent);
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 2px;
        }

        /* ======================
           HISTÓRIA DO FUTEBOL
        ====================== */
        #historia {
            background: white;
        }

        .timeline {
            position: relative;
            max-width: 1000px;
            margin: 0 auto;
        }

        .timeline::before {
            content: '';
            position: absolute;
            width: 4px;
            background: var(--accent);
            top: 0;
            bottom: 0;
            left: 50%;
            margin-left: -2px;
            border-radius: 2px;
        }

        .timeline-item {
            padding: 1rem 2rem;
            position: relative;
            width: 50%;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease;
        }

        .timeline-item.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .timeline-item:nth-child(odd) {
            left: 0;
            text-align: right;
            padding-right: 4rem;
        }

        .timeline-item:nth-child(even) {
            left: 50%;
            padding-left: 4rem;
        }

        .timeline-item::before {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            background: var(--primary);
            border: 4px solid var(--accent);
            border-radius: 50%;
            top: 25px;
            z-index: 1;
        }

        .timeline-item:nth-child(odd)::before {
            right: -10px;
        }

        .timeline-item:nth-child(even)::before {
            left: -10px;
        }

        .timeline-content {
            background: white;
            padding: 1.5rem;
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            position: relative;
        }

        .timeline-content h3 {
            color: var(--primary);
            margin-bottom: 0.5rem;
        }

        /* ======================
           REGRAS DO FUTEBOL
        ====================== */
        #regras {
            background: #f9f9f9;
        }

        .rules-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .rule-card {
            background: white;
            padding: 2rem;
            border-radius: 16px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.08);
            transition: all 0.3s ease;
            border-left: 5px solid var(--accent);
            cursor: pointer;
        }

        .rule-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }

        .rule-card i {
            font-size: 2.5rem;
            color: var(--primary);
            margin-bottom: 1rem;
        }

        .rule-card h3 {
            margin-bottom: 1rem;
            color: var(--primary);
        }

        .rule-card.active {
            background: var(--primary);
            color: white;
            border-left-color: var(--accent);
        }

        .rule-card.active i,
        .rule-card.active h3,
        .rule-card.active p {
            color: white;
        }

        /* ======================
           JOGADORES FAMOSOS
        ====================== */
        #jogadores {
            background: white;
        }

        .players-controls {
            text-align: center;
            margin-bottom: 2rem;
        }

        .filter-btn {
            background: #eee;
            border: none;
            padding: 8px 16px;
            margin: 0 5px;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .filter-btn.active {
            background: var(--primary);
            color: white;
        }

        .players-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .player-card {
            background: white;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            position: relative;
            opacity: 0;
            transform: translateY(30px);
        }

        .player-card.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .player-card:hover {
            transform: translateY(-15px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .player-img {
            height: 300px;
            overflow: hidden;
            position: relative;
        }

        .player-img::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(transparent, rgba(0,0,0,0.8));
        }

        .player-info {
            padding: 1.5rem;
            text-align: center;
        }

        .player-info h3 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
        }

        .player-info .country {
            color: var(--accent);
            font-weight: 700;
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
        }

        .player-stats {
            display: flex;
            justify-content: space-around;
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid #eee;
            font-size: 0.9rem;
        }

        .stat {
            text-align: center;
        }

        .stat strong {
            display: block;
            font-size: 1.5rem;
            color: var(--primary);
        }

        /* ======================
           COPAS DO MUNDO
        ====================== */
        #copas {
            background: #f9f9f9;
        }

        .world-cup-header {
            text-align: center;
            margin-bottom: 3rem;
        }

        .world-cup-header h2 {
            margin-bottom: 1rem;
        }

        .champions-count {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: var(--primary);
            color: white;
            padding: 10px 20px;
            border-radius: 50px;
            font-weight: 700;
        }

        .champions-count i {
            font-size: 1.5rem;
        }

        .search-container {
            max-width: 500px;
            margin: 2rem auto;
            position: relative;
        }

        #search-input {
            width: 100%;
            padding: 12px 20px;
            border: 2px solid #ddd;
            border-radius: 50px;
            font-size: 1rem;
            outline: none;
            transition: all 0.3s ease;
        }

        #search-input:focus {
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(27, 94, 32, 0.1);
        }

        .cups-table {
            overflow-x: auto;
            margin-top: 2rem;
            border-radius: 12px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            border-radius: 12px;
            overflow: hidden;
        }

        th {
            background: var(--primary);
            color: white;
            padding: 1rem;
            text-align: left;
            font-weight: 600;
            cursor: pointer;
            user-select: none;
        }

        th:hover {
            background: var(--secondary);
        }

        td {
            padding: 1rem;
            border-bottom: 1px solid #eee;
        }

        tr:hover {
            background: #f1f8e9;
        }

        .flag {
            width: 30px;
            height: 20px;
            border-radius: 4px;
            vertical-align: middle;
            margin-right: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        .no-results {
            text-align: center;
            padding: 2rem;
            color: var(--gray);
            font-style: italic;
        }

        /* ======================
           MODAL
        ====================== */
        .modal {
            display: none;
            position: fixed;
            z-index: 2000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.7);
            backdrop-filter: blur(5px);
        }

        .modal-content {
            background-color: white;
            margin: 5% auto;
            padding: 2rem;
            border-radius: 16px;
            width: 90%;
            max-width: 600px;
            position: relative;
            animation: modalFadeIn 0.5s ease;
        }

        @keyframes modalFadeIn {
            from { opacity: 0; transform: translateY(-50px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .close {
            position: absolute;
            top: 15px;
            right: 20px;
            font-size: 2rem;
            color: #aaa;
            cursor: pointer;
            transition: color 0.3s ease;
        }

        .close:hover {
            color: var(--danger);
        }

        /* ======================
           FOOTER
        ====================== */
        footer {
            background: var(--dark);
            color: white;
            padding: 3rem 0 1rem;
            margin-top: 5rem;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }

        .footer-section h3 {
            color: var(--accent);
            margin-bottom: 1rem;
            font-size: 1.3rem;
        }

        .footer-section ul li {
            margin-bottom: 0.5rem;
        }

        .footer-section ul li a:hover {
            color: var(--accent);
        }

        .social-links {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
        }

        .social-links a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background: rgba(255,255,255,0.1);
            border-radius: 50%;
            transition: all 0.3s ease;
        }

        .social-links a:hover {
            background: var(--accent);
            color: var(--dark);
            transform: translateY(-3px);
        }

        .copyright {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid rgba(255,255,255,0.1);
            font-size: 0.9rem;
            color: #aaa;
        }

        /* ======================
           ANIMAÇÕES
        ====================== */
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .floating {
            animation: float 3s ease-in-out infinite;
        }

        /* ======================
           RESPONSIVO
        ====================== */
        @media (max-width: 992px) {
            .timeline::before {
                left: 30px;
            }

            .timeline-item {
                width: 100%;
                padding-left: 70px;
                padding-right: 20px;
            }

            .timeline-item:nth-child(odd) {
                left: 0;
                text-align: left;
                padding-right: 20px;
                padding-left: 70px;
            }

            .timeline-item:nth-child(even) {
                left: 0;
            }

            .timeline-item::before {
                left: 20px;
            }

            .timeline-item:nth-child(odd)::before {
                left: 20px;
            }

            h1 { font-size: 3rem; }
            .hero-content h1 { font-size: 3.5rem; }
        }

        @media (max-width: 768px) {
            .hamburger {
                display: block;
            }

            .nav-menu {
                position: fixed;
                top: 100%;
                left: -100%;
                width: 100%;
                background: var(--dark);
                flex-direction: column;
                padding: 2rem;
                transition: left 0.3s ease;
            }

            .nav-menu.active {
                left: 0;
            }

            .hero-content h1 {
                font-size: 2.8rem;
            }

            .hero-content p {
                font-size: 1.2rem;
            }

            .btn {
                padding: 12px 24px;
                font-size: 0.9rem;
            }

            h1 { font-size: 2.5rem; }
            h2 { font-size: 2rem; }
        }

        @media (max-width: 480px) {
            .container {
                padding: 0 1rem;
            }

            .hero-content h1 {
                font-size: 2.3rem;
            }

            .section-title {
                font-size: 1.8rem;
            }

            .player-stats {
                flex-direction: column;
                gap: 0.5rem;
            }
        }
    </style>
</head>
<body>

    <!-- NAVEGAÇÃO -->
    <nav>
        <div class="nav-container">
            <div class="logo">
                <i class="fas fa-futbol"></i>
                <span>Futebol Interativo</span>
            </div>
            <div class="hamburger">
                <i class="fas fa-bars"></i>
            </div>
            <div class="nav-menu">
                <a href="#inicio">Início</a>
                <a href="#historia">História</a>
                <a href="#regras">Regras</a>
                <a href="#jogadores">Jogadores</a>
                <a href="#copas">Copas</a>
            </div>
        </div>
    </nav>

    <!-- HEADER HERO -->
    <header id="inicio">
        <div class="hero-content">
            <h1 class="floating">Futebol Interativo</h1>
            <p>Explore o mundo do futebol com interatividade total. Clique, filtre, pesquise e aprenda!</p>
            <button class="btn" id="explore-btn">Começar Jornada</button>
        </div>
    </header>

    <!-- HISTÓRIA -->
    <section id="historia">
        <div class="container">
            <h2 class="section-title">Linha do Tempo da História</h2>
            
            <div class="timeline" id="timeline">
                <!-- Itens da timeline serão inseridos via JavaScript -->
            </div>
        </div>
    </section>

    <!-- REGRAS -->
    <section id="regras">
        <div class="container">
            <h2 class="section-title">Regras Interativas</h2>
            <p class="text-center">Clique em uma regra para ver detalhes completos!</p>
            
            <div class="rules-grid" id="rules-grid">
                <!-- Regras serão inseridas via JavaScript -->
            </div>
        </div>
    </section>

    <!-- JOGADORES -->
    <section id="jogadores">
        <div class="container">
            <h2 class="section-title">Lendas do Futebol</h2>
            
            <div class="players-controls">
                <button class="filter-btn active" data-filter="todos">Todos</button>
                <button class="filter-btn" data-filter="brasil">Brasil</button>
                <button class="filter-btn" data-filter="argentina">Argentina</button>
                <button class="filter-btn" data-filter="outros">Outros</button>
            </div>

            <div class="players-grid" id="players-grid">
                <!-- Jogadores serão inseridos via JavaScript -->
            </div>
        </div>
    </section>

    <!-- COPAS DO MUNDO -->
    <section id="copas">
        <div class="container">
            <div class="world-cup-header">
                <h2 class="section-title">Copas do Mundo</h2>
                <div class="champions-count">
                    <i class="fas fa-trophy"></i>
                    <span id="brazil-count">Brasil: 5 títulos</span>
                </div>
            </div>

            <div class="search-container">
                <input type="text" id="search-input" placeholder="Pesquisar por ano, país ou campeão...">
            </div>

            <div class="cups-table">
                <table id="cups-table">
                    <thead>
                        <tr>
                            <th data-sort="year">Ano</th>
                            <th data-sort="host">Sede</th>
                            <th data-sort="champion">Campeão</th>
                            <th data-sort="runnerup">Vice</th>
                            <th>Placar Final</th>
                        </tr>
                    </thead>
                    <tbody id="cups-body">
                        <!-- Copas serão inseridas via JavaScript -->
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!-- MODAL -->
    <div id="rule-modal" class="modal">
        <div class="modal-content">
            <span class="close">×</span>
            <h2 id="modal-title"></h2>
            <div id="modal-content"></div>
        </div>
    </div>

    <!-- FOOTER -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3><i class="fas fa-futbol"></i> Futebol Interativo</h3>
                    <p>Site educativo e interativo sobre o esporte mais amado do mundo.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h3>Navegação</h3>
                    <ul>
                        <li><a href="#inicio">Início</a></li>
                        <li><a href="#historia">História</a></li>
                        <li><a href="#regras">Regras</a></li>
                        <li><a href="#jogadores">Jogadores</a></li>
                        <li><a href="#copas">Copas do Mundo</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Campeões</h3>
                    <ul id="champions-list">
                        <!-- Campeões serão inseridos via JavaScript -->
                    </ul>
                </div>
            </div>
            
            <div class="copyright">
                <p>&copy; 2025 Futebol Interativo. Desenvolvido com JavaScript puro.</p>
            </div>
        </div>
    </footer>

    <script>
        // ======================
        // DADOS
        // ======================
        const timelineData = [
            { year: "Antiguidade", title: "Origens Antigas", desc: "Jogos com bola existiam na China (Cuju, 200 a.C.), Grécia e Roma. Eram rituais e treinamentos militares." },
            { year: "1863", title: "Inglaterra - Regras Oficiais", desc: "Fundação da Football Association. Primeiras regras oficiais do futebol moderno em Londres." },
            { year: "1904", title: "Criação da FIFA", desc: "Fédération Internationale de Football Association fundada em Paris." },
            { year: "1930", title: "Primeira Copa", desc: "Uruguai sedia e vence a primeira Copa do Mundo, derrotando a Argentina por 4 a 2." },
            { year: "1950", title: "Maracanazo", desc: "Uruguai vence o Brasil no Maracanã. Um dos maiores zebras da história." },
            { year: "2022", title: "Catar", desc: "Argentina conquista seu terceiro título mundial com Messi como capitão." }
        ];

        const rulesData = [
            { 
                icon: "fa-users", 
                title: "11 Jogadores", 
                short: "Cada time tem 11 jogadores em campo, incluindo o goleiro.",
                full: "<p>Cada equipe é composta por 11 jogadores, sendo um goleiro e dez jogadores de linha. Substituições variam conforme a competição:</p><ul><li>Competições oficiais: até 5 substituições</li><li>Amistosos: até 6</li><li>Jogos com prorrogação: +1 substituição</li></ul><p>O goleiro é o único que pode usar as mãos, mas apenas dentro da área de grande penalidade.</p>"
            },
            { 
                icon: "fa-futbol", 
                title: "Objetivo do Jogo", 
                short: "Marcar mais gols que o adversário.",
                full: "<p>O objetivo é marcar gols fazendo a bola ultrapassar completamente a linha do gol adversário, entre as traves e sob o travessão.</p><p><strong>Gol válido quando:</strong></p><ul><li>A bola cruza totalmente a linha</li><li>Não há infração prévia (impedimento, falta)</li><li>O jogo está em andamento</li></ul>"
            },
            { 
                icon: "fa-clock", 
                title: "Duração", 
                short: "90 minutos divididos em dois tempos de 45 minutos.",
                full: "<p>O jogo tem duração de 90 minutos, divididos em dois tempos de 45 minutos cada, com intervalo de até 15 minutos.</p><p><strong>Acréscimos:</strong></p><ul><li>Substituições</li><li>Lesões e atendimento médico</li><li>Perda de tempo intencional</li><li>Revisão do VAR</li></ul>"
            },
            { 
                icon: "fa-flag", 
                title: "Impedimento", 
                short: "Jogador não pode estar à frente da bola e do penúltimo adversário.",
                full: "<p>Um jogador está em impedimento se:</p><ul><li>Qualquer parte do corpo (exceto mãos/braços) estiver mais próxima da linha de gol adversária do que a bola e o penúltimo adversário</li><li>No momento em que a bola é jogada por companheiro</li></ul><p><strong>Não é impedimento se:</strong></p><ul><li>Em seu próprio campo</li><li>Recebe tiro de meta, arremesso lateral ou escanteio</li></ul>"
            },
            { 
                icon: "fa-card-yellow", 
                title: "Cartões", 
                short: "Amarelo: advertência. Vermelho: expulsão.",
                full: "<p><strong>Cartão Amarelo:</strong> Advertência por conduta antidesportiva, simulação, perda de tempo, etc.</p><p><strong>Cartão Vermelho:</strong> Expulsão imediata por:</p><ul><li>Conduta violenta</li><li>Impedir gol com mão (exceto goleiro)</li><li>Ofensas graves</li><li>Dois cartões amarelos</li></ul>"
            },
            { 
                icon: "fa-hand-paper", 
                title: "Faltas", 
                short: "Contato físico intencional resulta em falta.",
                full: "<p>Faltas são punidas com tiro livre direto ou indireto. Exemplos:</p><ul><li>Chute ou tentativa de chutar adversário</li><li>Trombada intencional</li><li>Empurrão</li><li>Carrinho por trás</li><li>Conduzir com a mão</li></ul><p><strong>Pênalti:</strong> Falta grave dentro da área de grande penalidade.</p>"
            }
        ];

        const playersData = [
            { name: "Pelé", country: "Brasil", flag: "br", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa", stats: { copas: 3, gols: 1283, anos: 77 }, filter: "brasil" },
            { name: "Lionel Messi", country: "Argentina", flag: "ar", img: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c", stats: { ballon: 8, copas: 1, gols: "800+" }, filter: "argentina" },
            { name: "Cristiano Ronaldo", country: "Portugal", flag: "pt", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018", stats: { ballon: 5, gols: "900+", ucl: 5 }, filter: "outros" },
            { name: "Diego Maradona", country: "Argentina", flag: "ar", img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963", stats: { copas: 1, ano: 1986, gols: 34 }, filter: "argentina" },
            { name: "Neymar Jr", country: "Brasil", flag: "br", img: "https://images.unsplash.com/photo-1628188859251-4b18d8da943b", stats: { gols: "400+", tit:: "PSG", idade: 33 }, filter: "brasil" },
            { name: "Zinedine Zidane", country: "França", flag: "fr", img: "https://images.unsplash.com/photo-1623091411390-7e8a7b1b0872", stats: { copas: 1, ballon: 1, ano: 1998 }, filter: "outros" }
        ];

        const worldCupsData = [
            { year: 1930, host: "Uruguai", hostFlag: "uy", champion: "Uruguai", championFlag: "uy", runnerup: "Argentina", runnerupFlag: "ar", score: "4-2" },
            { year: 1950, host: "Brasil", hostFlag: "br", champion: "Uruguai", championFlag: "uy", runnerup: "Brasil", runnerupFlag: "br", score: "2-1" },
            { year: 1958, host: "Suécia", hostFlag: "se", champion: "Brasil", championFlag: "br", runnerup: "Suécia", runnerupFlag: "se", score: "5-2" },
            { year: 1970, host: "México", hostFlag: "mx", champion: "Brasil", championFlag: "br", runnerup: "Itália", runnerupFlag: "it", score: "4-1" },
            { year: 1986, host: "México", hostFlag: "mx", champion: "Argentina", championFlag: "ar", runnerup: "Alemanha", runnerupFlag: "de", score: "3-2" },
            { year: 1994, host: "EUA", hostFlag: "us", champion: "Brasil", championFlag: "br", runnerup: "Itália", runnerupFlag: "it", score: "0-0 (3-2 pên.)" },
            { year: 2002, host: "Coreia/Japão", hostFlag: "kr", champion: "Brasil", championFlag: "br", runnerup: "Alemanha", runnerupFlag: "de", score: "2-0" },
            { year: 2014, host: "Brasil", hostFlag: "br", champion: "Alemanha", championFlag: "de", runnerup: "Argentina", runnerupFlag: "ar", score: "1-0 (prorr.)" },
            { year: 2018, host: "Rússia", hostFlag: "ru", champion: "França", championFlag: "fr", runnerup: "Croácia", runnerupFlag: "hr", score: "4-2" },
            { year: 2022, host: "Catar", hostFlag: "qa", champion: "Argentina", championFlag: "ar", runnerup: "França", runnerupFlag: "fr", score: "3-3 (4-2 pên.)" }
        ];

        // ======================
        // FUNÇÕES PRINCIPAIS
        // ======================
        document.addEventListener('DOMContentLoaded', function() {
            initNavigation();
            initHero();
            initTimeline();
            initRules();
            initPlayers();
            initWorldCups();
            initModal();
            initSearch();
            initSorting();
            initFooter();
            initAnimations();
        });

        function initNavigation() {
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            const navLinks = document.querySelectorAll('.nav-menu a');

            hamburger.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });

            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                    }
                });
            });

            // Scroll suave
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }

        function initHero() {
            const exploreBtn = document.getElementById('explore-btn');
            exploreBtn.addEventListener('click', () => {
                document.querySelector('#historia').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }

        function initTimeline() {
            const timeline = document.getElementById('timeline');
            
            timelineData.forEach((item, index) => {
                const timelineItem = document.createElement('div');
                timelineItem.className = `timeline-item ${index % 2 === 0 ? '' : ''}`;
                
                const content = document.createElement('div');
                content.className = 'timeline-content';
                content.innerHTML = `
                    <h3>${item.year} - ${item.title}</h3>
                    <p>${item.desc}</p>
                `;
                
                timelineItem.appendChild(content);
                timeline.appendChild(timelineItem);
            });

            // Animação ao rolar
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const items = entry.target.querySelectorAll('.timeline-item');
                        items.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add('visible');
                            }, index * 200);
                        });
                    }
                });
            }, { threshold: 0.3 });

            observer.observe(timeline);
        }

        function initRules() {
            const rulesGrid = document.getElementById('rules-grid');
            
            rulesData.forEach(rule => {
                const card = document.createElement('div');
                card.className = 'rule-card';
                card.innerHTML = `
                    <i class="fas ${rule.icon}"></i>
                    <h3>${rule.title}</h3>
                    <p>${rule.short}</p>
                `;
                
                card.addEventListener('click', () => {
                    openModal(rule.title, rule.full);
                    // Destacar card ativo
                    document.querySelectorAll('.rule-card').forEach(c => c.classList.remove('active'));
                    card.classList.add('active');
                });
                
                rulesGrid.appendChild(card);
            });
        }

        function initPlayers() {
            const playersGrid = document.getElementById('players-grid');
            const filterBtns = document.querySelectorAll('.filter-btn');
            
            function renderPlayers(filter = 'todos') {
                playersGrid.innerHTML = '';
                
                const filtered = filter === 'todos' ? playersData : playersData.filter(p => p.filter === filter);
                
                filtered.forEach((player, index) => {
                    const card = document.createElement('div');
                    card.className = 'player-card';
                    card.style.transitionDelay = `${index * 100}ms`;
                    
                    let statsHTML = '';
                    for (const [key, value] of Object.entries(player.stats)) {
                        const label = key === 'copas' ? 'Copas' : 
                                     key === 'ballon' ? "Ballon d'Or" :
                                     key === 'gols' ? 'Gols' :
                                     key === 'ucl' ? 'UCL' :
                                     key === 'ano' ? 'Melhor Ano' :
                                     key === 'idade' ? 'Idade' : key;
                        statsHTML += `
                            <div class="stat">
                                <strong>${value}</strong>
                                <span>${label}</span>
                            </div>
                        `;
                    }
                    
                    card.innerHTML = `
                        <div class="player-img">
                            <img src="${player.img}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="${player.name}">
                        </div>
                        <div class="player-info">
                            <h3>${player.name}</h3>
                            <div class="country">
                                <img src="https://flagcdn.com/${player.flag}.svg" class="flag" alt="${player.country}">
                                ${player.country}
                            </div>
                            <div class="player-stats">
                                ${statsHTML}
                            </div>
                        </div>
                    `;
                    
                    playersGrid.appendChild(card);
                    
                    // Animação de entrada
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, 100);
                });
            }
            
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    renderPlayers(btn.dataset.filter);
                });
            });
            
            renderPlayers();
        }

        function initWorldCups() {
            const tbody = document.getElementById('cups-body');
            let currentSort = { column: null, direction: 'asc' };
            
            function renderTable(data) {
                tbody.innerHTML = '';
                
                if (data.length === 0) {
                    tbody.innerHTML = '<tr><td colspan="5" class="no-results">Nenhum resultado encontrado.</td></tr>';
                    return;
                }
                
                data.forEach(cup => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${cup.year}</td>
                        <td><img src="https://flagcdn.com/${cup.hostFlag}.svg" class="flag" alt="${cup.host}"> ${cup.host}</td>
                        <td><img src="https://flagcdn.com/${cup.championFlag}.svg" class="flag" alt="${cup.champion}"> ${cup.champion}</td>
                        <td><img src="https://flagcdn.com/${cup.runnerupFlag}.svg" class="flag" alt="${cup.runnerup}"> ${cup.runnerup}</td>
                        <td>${cup.score}</td>
                    `;
                    tbody.appendChild(row);
                });
            }
            
            renderTable(worldCupsData);
            
            // Contagem de títulos do Brasil
            const brazilWins = worldCupsData.filter(c => c.champion === 'Brasil').length;
            document.getElementById('brazil-count').textContent = `Brasil: ${brazilWins} títulos (Recorde)`;
        }

        function initSearch() {
            const searchInput = document.getElementById('search-input');
            const tbody = document.getElementById('cups-body');
            
            searchInput.addEventListener('input', () => {
                const query = searchInput.value.toLowerCase().trim();
                const rows = tbody.querySelectorAll('tr');
                
                rows.forEach(row => {
                    const text = row.textContent.toLowerCase();
                    row.style.display = text.includes(query) ? '' : 'none';
                });
                
                // Mostrar mensagem se não houver resultados
                const visibleRows = Array.from(rows).filter(r => r.style.display !== 'none' && !r.querySelector('.no-results'));
                if (visibleRows.length === 0 && query) {
                    if (!tbody.querySelector('.no-results')) {
                        const noResults = document.createElement('tr');
                        noResults.innerHTML = '<td colspan="5" class="no-results">Nenhum resultado encontrado.</td>';
                        tbody.appendChild(noResults);
                    }
                } else {
                    const noResults = tbody.querySelector('.no-results');
                    if (noResults) noResults.remove();
                }
            });
        }

        function initSorting() {
            const headers = document.querySelectorAll('th[data-sort]');
            let currentData = [...worldCupsData];
            
            headers.forEach(header => {
                header.addEventListener('click', () => {
                    const column = header.dataset.sort;
                    const direction = header.classList.contains('asc') ? 'desc' : 'asc';
                    
                    // Remover classes de ordenação
                    headers.forEach(h => {
                        h.classList.remove('asc', 'desc');
                    });
                    
                    header.classList.add(direction);
                    
                    // Ordenar dados
                    currentData.sort((a, b) => {
                        let valA, valB;
                        
                        switch(column) {
                            case 'year':
                                valA = a.year; valB = b.year;
                                break;
                            case 'host':
                                valA = a.host; valB = b.host;
                                break;
                            case 'champion':
                                valA = a.champion; valB = b.champion;
                                break;
                            case 'runnerup':
                                valA = a.runnerup; valB = b.runnerup;
                                break;
                        }
                        
                        if (direction === 'asc') {
                            return valA > valB ? 1 : -1;
                        } else {
                            return valA < valB ? 1 : -1;
                        }
                    });
                    
                    // Renderizar tabela ordenada
                    const tbody = document.getElementById('cups-body');
                    tbody.innerHTML = '';
                    currentData.forEach(cup => {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${cup.year}</td>
                            <td><img src="https://flagcdn.com/${cup.hostFlag}.svg" class="flag" alt="${cup.host}"> ${cup.host}</td>
                            <td><img src="https://flagcdn.com/${cup.championFlag}.svg" class="flag" alt="${cup.champion}"> ${cup.champion}</td>
                            <td><img src="https://flagcdn.com/${cup.runnerupFlag}.svg" class="flag" alt="${cup.runnerup}"> ${cup.runnerup}</td>
                            <td>${cup.score}</td>
                        `;
                        tbody.appendChild(row);
                    });
                });
            });
        }

        function initModal() {
            const modal = document.getElementById('rule-modal');
            const closeBtn = document.querySelector('.close');
            
            window.openModal = function(title, content) {
                document.getElementById('modal-title').textContent = title;
                document.getElementById('modal-content').innerHTML = content;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            };
            
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
                // Remover destaque do card
                document.querySelectorAll('.rule-card').forEach(c => c.classList.remove('active'));
            });
            
            window.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                    document.querySelectorAll('.rule-card').forEach(c => c.classList.remove('active'));
                }
            });
        }

        function initFooter() {
            const championsList = document.getElementById('champions-list');
            const championsCount = {};
            
            worldCupsData.forEach(cup => {
                championsCount[cup.champion] = (championsCount[cup.champion] || 0) + 1;
            });
            
            const sorted = Object.entries(championsCount)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 5);
                
            sorted.forEach(([country, count]) => {
                const flag = worldCupsData.find(c => c.champion === country)?.championFlag || '';
                const li = document.createElement('li');
                li.innerHTML = `<img src="https://flagcdn.com/${flag}.svg" class="flag" alt="${country}"> ${country} - ${count}`;
                championsList.appendChild(li);
            });
        }

        function initAnimations() {
            // Animação de contagem para títulos do Brasil
            const countElement = document.querySelector('.champions-count span');
            if (countElement) {
                const finalText = countElement.textContent;
                const match = finalText.match(/(\d+)/);
                if (match) {
                    const target = parseInt(match[0]);
                    let current = 0;
                    const interval = setInterval(() => {
                        if (current <= target) {
                            countElement.textContent = finalText.replace(/\d+/, current);
                            current++;
                        } else {
                            countElement.textContent = finalText;
                            clearInterval(interval);
                        }
                    }, 400);
                }
            }
        }

        // ======================
        // FUNÇÕES UTILITÁRIAS
        // ======================
        function debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }

        // Scroll reveal para seções
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'all 0.6s ease';
            scrollObserver.observe(section);
        });
    </script>
</body>
</html>