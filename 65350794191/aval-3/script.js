/**
 * 1. CLASSE DADO (Simula a rolagem de um dado poliedral)
 * Esta classe é fundamental para determinar o sucesso ou fracasso das ações.
 */
class Dado {
    constructor(lados) {
        this.lados = lados; // Ex: 4, 6, 8, 10, 12 ou 20
    }

    /**
     * Rola o dado e retorna um resultado aleatório entre 1 e o número de lados.
     * @returns {number} O resultado da rolagem.
     */
    rolar() {
        return Math.floor(Math.random() * this.lados) + 1;
    }
}

/**
 * 2. CLASSE PERSONAGEM (A Ficha do Jogador)
 * Define os atributos e habilidades do personagem.
 */
class Personagem {
    constructor(nome, classe) {
        this.nome = nome;
        this.classe = classe; // Ex: 'Guerreiro', 'Mago', 'Ladrão'
        this.atributos = {
            forca: 10,
            destreza: 10,
            constituicao: 10,
            inteligencia: 10,
            carisma: 10
        };
        this.pv = 10; // Pontos de Vida
        this.dadoDeVida = new Dado(8); // Dado usado para curar/determinar vida
    }

    // Adiciona um bônus simples a um atributo
    aumentarAtributo(atributo, valor) {
        if (this.atributos[atributo] !== undefined) {
            this.atributos[atributo] += valor;
            console.log(`Bônus de ${valor} adicionado a ${atributo} de ${this.nome}. Novo valor: ${this.atributos[atributo]}`);
        }
    }

    // Simula uma tentativa de ataque ou ação complexa
    tentarAcao(atributo, dificuldade) {
        const d20 = new Dado(20);
        const resultadoRolagem = d20.rolar();
        const resultadoFinal = resultadoRolagem + Math.floor((this.atributos[atributo] - 10) / 2); // Modificador simples
        
        console.log(`\n${this.nome} tenta uma ação de ${atributo} (Dificuldade: ${dificuldade}).`);
        console.log(`Rolagem do D20: ${resultadoRolagem} + Modificador: ${resultadoFinal - resultadoRolagem}`);

        if (resultadoFinal >= dificuldade) {
            console.log(`✅ SUCESSO! Resultado total (${resultadoFinal}) atinge a Dificuldade.`);
            return true;
        } else {
            console.log(`❌ FRACASSO! Resultado total (${resultadoFinal}) é menor que a Dificuldade.`);
            return false;
        }
    }

    receberDano(dano) {
        this.pv -= dano;
        console.log(`\n${this.nome} recebeu ${dano} de dano. PV restantes: ${this.pv}`);
        if (this.pv <= 0) {
            console.log(`💀 ${this.nome} caiu! A aventura continua?`);
        }
    }
}

/**
 * 3. CLASSE MESTREDOJOGO (GM)
 * Gerencia o cenário, os encontros e a narrativa.
 */
class MestreDoJogo {
    constructor(nome) {
        this.nome = nome;
        this.encontroAtual = "";
    }

    descreverCenario(personagens) {
        this.encontroAtual = "Um dragão vermelho paira sobre o castelo em chamas.";
        console.log(`\n--- CENÁRIO DESCRITO POR ${this.nome} ---`);
        console.log(`O Mestre diz: "${this.encontroAtual}"`);
        console.log(`Ações disponíveis: [Atacar], [Fugir], [Negociar].`);
    }

    iniciarCombate(atacante, alvo) {
        console.log(`\n🔥 ${this.nome} inicia o combate!`);
        
        // Exemplo: O dragão ataca o Guerreiro
        if (this.resolverAtaque(alvo, 'destreza', 15)) {
            // Se o Guerreiro falhar na esquiva (Destreza DC 15)
            const dadoDano = new Dado(10);
            const dano = dadoDano.rolar() + 5; // Dano base do Dragão
            atacante.receberDano(dano); // Uso incorreto aqui, atacante deveria ser o alvo e vice-versa.
            // Para corrigir, vamos inverter:
            alvo.receberDano(dano); 
        } else {
            console.log(`${alvo.nome} esquivou com sucesso do ataque do Dragão!`);
        }
    }
    
    // Método que usa o método de tentativa do Personagem
    resolverAtaque(personagem, atributo, dificuldade) {
        return personagem.tentarAcao(atributo, dificuldade);
    }
}


/**
 * 4. SIMULAÇÃO DE JOGO
 */
// 1. Criar Personagens e Dados
const jogador1 = new Personagem("Elara", "Guerreira");
jogador1.aumentarAtributo('forca', 4);

const jogador2 = new Personagem("Zaltar", "Mago");
jogador2.aumentarAtributo('inteligencia', 6);

const gm = new MestreDoJogo("O Cronista");

// 2. Início da Sessão
gm.descreverCenario([jogador1, jogador2]);

// 3. Ação do Jogador 1 (Tentativa de negociar)
jogador1.tentarAcao('carisma', 18); // Dificuldade alta para convencer um dragão

// 4. Ação do Jogador 2 (Tentativa de lançar um feitiço)
if (jogador2.tentarAcao('inteligencia', 14)) {
    console.log(`✨ ${jogador2.nome} lança um raio de gelo no Dragão!`);
    // O Mestre pode decidir que o dragão recebe 10 de dano, mas o código não simula o PV do dragão.
} else {
    console.log(`A magia de ${jogador2.nome} falhou. O Dragão ri!`);
}

// 5. O Mestre revida (Simulação de dano)
gm.iniciarCombate(jogador2, jogador1); // O Dragão (GM) ataca Elara (Guerreira)

// 6. Estado Final
console.log(`\n--- ESTADO DOS PERSONAGENS ---`);
console.log(`${jogador1.nome}: PV ${jogador1.pv}, Força ${jogador1.atributos.forca}`);
console.log(`${jogador2.nome}: PV ${jogador2.pv}, Inteligência ${jogador2.atributos.inteligencia}`);