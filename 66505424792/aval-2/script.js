/* ========================================= */
/* 1. VARIÁVEIS E RESET BÁSICO (Mobile-First) */
/* ========================================= */
:root {
    /* Cores principais */
    --cor-principal: #3498db;      /* Azul */
    --cor-secundaria: #2ecc71;    /* Verde */
    --cor-fundo: #f4f4f9;         /* Cinza claro */
    --cor-texto: #333;
    --cor-fundo-card: #ffffff;
    
    /* Espaçamentos e Sombras */
    --padding-padrao: 15px;
    --sombra-leve: 0 4px 6px rgba(0, 0, 0, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
    font-family: 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.6;
}

a {
    text-decoration: none;
    color: var(--cor-principal);
}

/* ========================================= */
/* 2. CABEÇALHO (HEADER) E NAVEGAÇÃO */
/* ========================================= */
header {
    background-color: var(--cor-principal);
    color: white;
    padding: 10px var(--padding-padrao);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: var(--sombra-leve);
    position: sticky; /* Fixo no topo do mobile */
    top: 0;
    z-index: 100;
}

.logo {
    font-size: 1.6em;
    font-weight: 700;
}

/* Botão do Menu Hamburguer (Mobile) */
.menu-toggle {
    background: none;
    border: none;
    color: white;
    font-size: 2em;
    cursor: pointer;
    padding: 5px;
    display: block; 
}

/* Menu de Navegação (Mobile: Oculto e Vertical) */
.menu ul {
    list-style: none;
    display: none; 
    position: absolute;
    top: 60px; 
    right: 0;
    background-color: #2980b9; /* Cor um pouco mais escura */
    width: 100%;
    max-height: 80vh; /* Limita a altura do menu */
    overflow-y: auto; /* Adiciona scroll se o menu for grande */
    box-shadow: var(--sombra-leve);
    z-index: 90;
}

.menu.active ul {
    display: block; 
}

.menu ul li a {
    color: white;
    padding: 15px var(--padding-padrao);
    display: block;
    transition: background-color 0.3s;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;
}

.menu ul li a:hover {
    background-color: #1e6490;
}

/* ========================================= */
/* 3. SEÇÃO HERO (DESTAQUE) */
/* ========================================= */
.hero {
    text-align: center;
    padding: 60px var(--padding-padrao);
    background: linear-gradient(135deg, var(--cor-principal), #5dade2);
    color: white;
}

.hero h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
}

.hero p {
    font-size: 1.2em;
    margin-bottom: 25px;
}

.hero button {
    padding: 12px 30px;
    background-color: var(--cor-secundaria);
    color: white;
    border: none;
    border-radius: 50px; /* Botão arredondado */
    cursor: pointer;
    font-size: 1em;
    text-transform: uppercase;
    font-weight: bold;
    transition: background-color 0.3s, transform 0.2s;
}

.hero button:hover {
    background-color: #27ae60;
    transform: translateY(-2px);
}

/* ========================================= */
/* 4. CONTEÚDO PRINCIPAL (WRAPPERS) */
/* ========================================= */
.main-content-wrapper {
    padding: 20px;
    display: flex;
    flex-direction: column; 
    gap: 30px; /* Espaço maior entre a galeria e o aside */
}

/* ========================================= */
/* 5. GALERIA DE PRODUTOS (CARDS) - Mobile */
/* ========================================= */
.cards-container {
    display: flex;
    flex-direction: column; /* Pilha de cards em mobile */
    gap: 20px;
}

.card {
    background-color: var(--cor-fundo-card);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
    border: 1px solid #ddd;
    transition: transform 0.3s;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* Adicionando conteúdo de celular/produto ao card (exemplo) */
.card::before {
    content: "📱"; /* Ícone de celular */
    font-size: 3em;
    display: block;
    margin-bottom: 10px;
}
.card h4 {
    color: var(--cor-principal);
    margin-bottom: 8px;
}
.card p {
    font-size: 0.9em;
    color: #666;
}

/* ========================================= */
/* 6. BARRA LATERAL (ASIDE) - Mobile */
/* ========================================= */
.sidebar {
    background-color: #ecf0f1;
    padding: var(--padding-padrao);
    border-radius: 8px;
    box-shadow: var(--sombra-leve);
    border-left: 5px solid var(--cor-secundaria); /* Linha de destaque */
}

.sidebar h3 {
    margin-bottom: 12px;
    color: var(--cor-principal);
    border-bottom: 2px solid #ccc;
    padding-bottom: 5px;
}

.sidebar ul {
    list-style: none;
    margin-bottom: 15px;
}

.sidebar ul li a {
    text-decoration: none;
    color: var(--cor-texto);
    display: block;
    padding: 8px 0;
    transition: color 0.2s;
}

.sidebar ul li a:hover {
    color: var(--cor-secundaria);
}

/* ========================================= */
/* 7. RODAPÉ (FOOTER) */
/* ========================================= */
footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 20px 0;
    margin-top: 30px;
}

/* ========================================= */
/* 8. MEDIA QUERIES (Ajustes para Desktop) */
/* ========================================= */
@media (min-width: 768px) {
    
    /* Aumenta o espaçamento padrão */
    :root {
        --padding-padrao: 30px;
    }
    
    /* --- HEADER (Menu Desktop) --- */
    .menu-toggle {
        display: none; 
    }

    .menu ul {
        display: flex; 
        position: static;
        width: auto;
        background-color: transparent;
        box-shadow: none;
    }

    .menu ul li a {
        padding: 10px 15px;
        border-bottom: none;
    }
    
    /* --- LAYOUT GRID/FLEX para Conteúdo Principal --- */
    .main-content-wrapper {
        flex-direction: row; /* Conteúdo principal e aside lado a lado */
        align-items: flex-start;
        max-width: 1200px; 
        margin: 30px auto; /* Centraliza na tela */
    }
    
    .cards-container {
        flex: 3; /* Galeria de Cards ocupa 70% */
        display: grid; /* Usa Grid para a galeria */
        grid-template-columns: repeat(3, 1fr); /* 3 colunas iguais */
        gap: 20px;
        order: 1;
    }
    
    .card {
         /* Remove o max-width do card, ele é controlado pelo grid */
         max-width: none; 
    }
    
    .sidebar {
        flex: 1; /* Sidebar ocupa 30% */
        order: 2;
        /* Estilos de desktop para aside */
        margin-left: 20px;
        position: sticky; /* Mantém o aside na tela enquanto o usuário rola o main */
        top: 80px; 
    }
    
    /* --- HERO --- */
    .hero {
        padding: 100px var(--padding-padrao);
    }
}

/* Media Query Extra para Telas Grandes (Desktop Grande) */
@media (min-width: 1200px) {
    .cards-container {
        grid-template-columns: repeat(4, 1fr); /* 4 colunas em telas muito grandes */
    }
}