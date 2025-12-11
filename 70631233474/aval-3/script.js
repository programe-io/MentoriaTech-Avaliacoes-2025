class GerenciadorDeHabitos {
    constructor() {
        this.habitos = {};
    }

    adicionarHabito(nome, metaSemanal) {
        if (this.habitos[nome]) {
            console.warn(`O hábito "${nome}" já existe.`);
            return;
        }
        this.habitos[nome] = {
            meta: metaSemanal,
            progresso: 0,
            dataCriacao: new Date().toLocaleDateString('pt-BR')
        };
        console.log(`✅ Hábito "${nome}" adicionado com meta semanal de ${metaSemanal}.`);
    }

    registrarConclusao(nome) {
        if (!this.habitos[nome]) {
            console.error(`❌ Erro: Hábito "${nome}" não encontrado.`);
            return;
        }
        this.habitos[nome].progresso += 1;
        console.log(`✨ Progresso registrado para "${nome}". Total esta semana: ${this.habitos[nome].progresso}.`);
    }

    resetarProgresso(nome) {
        if (!this.habitos[nome]) {
            console.error(`❌ Erro: Hábito "${nome}" não encontrado.`);
            return;
        }
        this.habitos[nome].progresso = 0;
        console.log(`🔄 Progresso de "${nome}" resetado para 0.`);
    }

    verificarStatus(nome) {
        const habito = this.habitos[nome];
        if (!habito) {
            console.error(`❌ Erro: Hábito "${nome}" não encontrado.`);
            return;
        }

        const porcentagem = (habito.progresso / habito.meta) * 100;
        let status;

        if (habito.progresso >= habito.meta) {
            status = "CONCLUÍDO! (🎉 Meta atingida ou superada)";
        } else if (porcentagem >= 50) {
            status = `QUASE LÁ! (${porcentagem.toFixed(0)}% da meta)`;
        } else {
            status = `Em andamento. (${porcentagem.toFixed(0)}% da meta)`;
        }

        console.log(`\n--- Status do Hábito: ${nome} ---`);
        console.log(`   Criado em: ${habito.dataCriacao}`);
        console.log(`   Meta Semanal: ${habito.meta} vezes`);
        console.log(`   Progresso Atual: ${habito.progresso} vezes`);
        console.log(`   Status: ${status}`);
        console.log("-----------------------------------");
    }

    exibirTodosHabitos() {
        console.log("\n==================================");
        console.log("      RELATÓRIO SEMANAL DE HÁBITOS");
        console.log("==================================");
        
        if (Object.keys(this.habitos).length === 0) {
            console.log("Nenhum hábito registrado ainda.");
            return;
        }
        
        for (const nome in this.habitos) {
            this.verificarStatus(nome);
        }
    }
}

const gerenciador = new GerenciadorDeHabitos();

gerenciador.adicionarHabito("Meditação", 5);
gerenciador.adicionarHabito("Estudo Java", 7);
gerenciador.adicionarHabito("Academia", 3);

console.log("\n--- Início do Registro na Segunda-feira ---");

gerenciador.registrarConclusao("Meditação");
gerenciador.registrarConclusao("Estudo Java");
gerenciador.registrarConclusao("Academia");

gerenciador.registrarConclusao("Meditação");
gerenciador.registrarConclusao("Estudo Java");

gerenciador.verificarStatus("Academia");

gerenciador.registrarConclusao("Academia");
gerenciador.registrarConclusao("Academia");
gerenciador.registrarConclusao("Meditação");
gerenciador.registrarConclusao("Meditação");

gerenciador.exibirTodosHabitos();

gerenciador.resetarProgresso("Meditação");
gerenciador.verificarStatus("Meditação");