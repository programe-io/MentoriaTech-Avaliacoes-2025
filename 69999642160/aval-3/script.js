/* Variáveis para cores */
:root {
    --color-primary: #1e3a8a; /* Azul escuro da navbar */
    --color-background: #1f2937; /* Fundo principal */
    --color-card-bg: #374151; /* Fundo dos cards */
    --color-text-light: #f3f4f6; /* Texto claro */
    --color-timestamp: #9ca3af; /* Cor do timestamp */
    --color-price: #ef4444; /* Cor do preço (vermelho/laranja) */
}

/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: var(--color-background);
    color: var(--color-text-light);
    min-height: 100vh;
}

/* Barra de Navegação (Navbar) */
.navbar {
    background-color: var(--color-primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 40px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.logo {
    font-size: 24px;
    font-weight: bold;
    color: var(--color-text-light);
}

.nav-links a {
    color: var(--color-text-light);
    text-decoration: none;
    margin-left: 25px;
    font-size: 16px;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #a8b0c4;
}

/* Estilo para a tag <h2> */
.section-title {
    text-align: center;
    color: var(--color-text-light);
    padding: 20px 0 0;
    font-size: 24px;
    font-weight: 300;
}


/* Container Principal dos Cards */
.content-container {
    display: flex;
    justify-content: center;
    gap: 30px; /* Espaço entre os cards */
    padding: 40px;
    max-width: 1300px;
    margin: 0 auto;
}

/* Estilo do Card Individual */
.card {
    background-color: var(--color-card-bg);
    border-radius: 8px;
    padding: 20px 20px 10px 20px;
    width: 33.33%;
    max-width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
}

/* Cabeçalho do Card (Avatar e Nome) */
.card-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    border: 2px solid #6b7280;
    object-fit: cover;
}

.username {
    font-size: 18px;
    font-weight: bold;
    color: var(--color-text-light);
}

/* Conteúdo de Imagens do Card */
.card-image-content {
    background-color: #2c3541;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 20px;
}

.app-screens {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 15px;
}

.app-screen {
    width: 30%;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    height: auto; 
}

.main-burger {
    width: 35%;
    transform: translateY(-5px);
}

.price-action {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
}

.price {
    font-size: 20px;
    font-weight: bold;
    color: var(--color-price);
}

.action-btn {
    background-color: var(--color-price);
    color: var(--color-text-light);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.2s;
}

.action-btn:hover {
    background-color: #dc2626;
}

/* Rodapé do Card (Descrição e Timestamp) */
.card-footer {
    padding-top: 10px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.description {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 15px;
}

.timestamp {
    align-self: flex-end;
    font-size: 12px;
    color: var(--color-timestamp);
    padding-bottom: 10px;
}

/* Responsividade */
@media (max-width: 992px) {
    .content-container {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .card {
        width: 90%;
        max-width: 500px;
    }
}