<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meus Hábitos Diários</title>
    <style>
        /* Estilos Básicos para Estrutura e Leitura */
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f9; color: #333; }
        header { background-color: #4CAF50; color: white; padding: 1em 0; text-align: center; }
        nav { background-color: #388E3C; padding: 0.5em; text-align: center; }
        nav a { color: white; margin: 0 15px; text-decoration: none; }
        main { display: flex; max-width: 1200px; margin: 20px auto; padding: 0 20px; }
        #habits-section { flex-grow: 3; padding-right: 20px; }
        aside { flex-grow: 1; background-color: #e8eaf6; padding: 15px; border-radius: 8px; }
        footer { background-color: #ccc; text-align: center; padding: 10px 0; margin-top: 20px; font-size: 0.9em; }
        .habit-card { background-color: white; border: 1px solid #ddd; padding: 15px; margin-bottom: 10px; border-radius: 5px; }
        .habit-card span { display: block; margin-top: 5px; font-style: italic; color: #666; }
    </style>
</head>
<body>

    <header>
        <h1>🎯 Rastreador de Hábitos</h1>
    </header>

    <nav>
        <a href="#home">Início</a> |
        <a href="#adicionar">Adicionar Hábito</a> |
        <a href="#progresso">Progresso</a>
    </nav>

    <main>
        <div id="habits-container">
            <section id="habits-section">
                <h2>Meus Hábitos Atuais</h2>
                <div id="habits-list">
                    <article class="habit-card" id="habit-reading">
                        <h3>Ler um livro (30 minutos)</h3>
                        <p>Meta diária de leitura focada.</p>
                        <img src="https://via.placeholder.com/50x50?text=Livro" alt="Ícone de livro" width="50" height="50">
                        <span id="status-reading">Status: Pendente</span>
                    </article>

                    <article class="habit-card" id="habit-water">
                        <h3>Beber Água (8 copos)</h3>
                        <p>Garantir a hidratação ao longo do dia.</p>
                        <img src="https://via.placeholder.com/50x50?text=Água" alt="Ícone de copo d'água" width="50" height="50">
                        <span id="status-water">Status: Pendente</span>
                    </article>
                </div>
            </section>
        </div>

        <aside>
            <h3>💡 Dica do Dia</h3>
            <p>O melhor momento para começar um novo hábito é agora. Comece pequeno, seja consistente!</p>
            <p>Você tem **<span id="habit-count-aside">2</span>** hábitos registrados.</p>
        </aside>
    </main>

    <footer>
        <p>&copy; 2025 Rastreador Simples de Hábitos. Desenvolvido com HTML e JavaScript.</p>
    </footer>

    <script>
        // Variável de controle para os hábitos (simulação de dados)
        let habits = [
            { id: 'reading', name: 'Ler um livro', status: 'Pendente' },
            { id: 'water', name: 'Beber Água', status: 'Pendente' }
        ];

        // Referências aos elementos do DOM
        const habitsListDiv = document.getElementById('habits-list');
        const asideCountSpan = document.getElementById('habit-count-aside');
        
        /**
         * FUNÇÃO: Renderiza a lista de hábitos na tela e atualiza o status.
         */
        function renderHabits() {
            // Atualiza a contagem na barra lateral (aside)
            asideCountSpan.textContent = habits.length;

            // Exemplo de como você atualizaria um status
            const waterStatusSpan = document.getElementById('status-water');

            // Lógica de exemplo: Marcar como concluído se for ímpar (só para demonstração)
            const currentMinute = new Date().getMinutes();
            if (currentMinute % 2 !== 0) {
                // Encontra e atualiza o objeto no array
                const waterHabit = habits.find(h => h.id === 'water');
                if (waterHabit) {
                    waterHabit.status = 'Concluído ✅';
                }
                waterStatusSpan.textContent = 'Status: Concluído ✅';
            } else {
                 waterStatusSpan.textContent = 'Status: Pendente';
            }
            
            console.log('Array de Hábitos Atualizado:', habits);
        }

        // Adiciona um novo hábito dinamicamente ao array e ao DOM
        function addExampleHabit() {
            const newHabit = {
                id: 'meditate',
                name: 'Meditar (10 minutos)',
                status: 'Pendente'
            };

            // 1. Adiciona ao array
            habits.push(newHabit);

            //