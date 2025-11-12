/**
 * 1. CLASSE PERSONAGEM
 * Define a estrutura básica de um personagem em nossa novela.
 */
class Personagem {
    constructor(nome, papel, statusSentimental) {
        this.nome = nome; // Ex: 'Maria'
        this.papel = papel; // Ex: 'Protagonista', 'Antagonista', 'Coadjuvante'
        this.statusSentimental = statusSentimental; // Ex: 'Solteira', 'Comprometida', 'Em Conflito'
        this.segredo = null; // Algo que pode ser revelado
        this.acoes = []; // Registro de ações importantes
    }

    // Método para simular uma ação importante
    realizarAcao(descricao) {
        this.acoes.push({
            capitulo: Novela.capituloAtual,
            acao: descricao
        });
        console.log(`[Cap. ${Novela.capituloAtual}] ${this.nome} (${this.papel}) realiza a ação: ${descricao}.`);
    }

    // Método para simular uma revelação
    revelarSegredo() {
        if (this.segredo) {
            console.log(`✨ REVELAÇÃO: O segredo de ${this.nome} é descoberto: "${this.segredo}"`);
            this.segredo = null; // O segredo foi revelado
            return true;
        }
        return false;
    }
}

/**
 * 2. CLASSE NOVELA
 * Gerencia o estado geral da novela, o enredo e o avanço dos capítulos.
 */
class Novela {
    static capituloAtual = 1;
    constructor(titulo) {
        this.titulo = titulo;
        this.personagens = [];
        this.enredoPrincipal = "";
        this.climaxCapitulos = 50; // Capítulos até o ponto alto da trama
    }

    adicionarPersonagem(personagem) {
        this.personagens.push(personagem);
    }

    definirEnredo(enredo) {
        this.enredoPrincipal = enredo;
        console.log(`\n--- NOVELA: "${this.titulo}" ---\nInício do Enredo: ${enredo}`);
    }

    avancarCapitulo() {
        Novela.capituloAtual++;
        console.log(`\n--- CAPÍTULO ${Novela.capituloAtual} ---`);
        this.simularDrama();
    }

    simularDrama() {
        const prota = this.personagens.find(p => p.papel === 'Protagonista');
        const anta = this.personagens.find(p => p.papel === 'Antagonista');

        if (Novela.capituloAtual % 10 === 0) {
            // A cada 10 capítulos, há uma grande reviravolta
            this.reviravolta("Descoberta de Paternidade");
        } else if (Novela.capituloAtual > this.climaxCapitulos && anta) {
            // Perto do final, o antagonista age
            anta.realizarAcao(`Coloca um plano maligno em ação contra ${prota.nome}.`);
            if (prota.segredo) prota.revelarSegredo(); // Chance de revelação no clímax
        } else if (prota) {
            // Rotina de drama
            prota.realizarAcao("Tem um encontro secreto.");
        }
    }

    reviravolta(tipo) {
        console.log(`\n🚨 REVIRAVOLTA! Ocorreu um evento chocante: **${tipo}**!`);
        this.personagens.forEach(p => {
            if (p.papel === 'Protagonista') p.statusSentimental = 'Em Conflito';
        });
    }

    finalizar() {
        console.log(`\n*** FIM DA NOVELA: "${this.titulo}" ***`);
        const prota = this.personagens.find(p => p.papel === 'Protagonista');
        const anta = this.personagens.find(p => p.papel === 'Antagonista');
        
        console.log(`O(A) protagonista, ${prota.nome}, finalmente encontra a felicidade e se casa.`);
        console.log(`O destino de ${anta.nome} é: Preso(a) ou Redimido(a) (depende da audiência!).`);
    }
}


/**
 * 3. EXECUÇÃO DA NOVELA
 * Criação dos objetos e simulação dos capítulos.
 */
// 1. Instanciar a Novela
const minhaNovela = new Novela("A Força do Destino");
minhaNovela.climaxCapitulos = 30; // Definimos a novela como mais curta

// 2. Criar Personagens
const maria = new Personagem("Maria da Silva", "Protagonista", "Em Conflito");
maria.segredo = "Ela é, na verdade, filha de um milionário.";

const joao = new Personagem("João dos Santos", "Antagonista", "Comprometido (mas com segundas intenções)");

const chico = new Personagem("Chico Bento", "Coadjuvante", "Solteiro");

// 3. Adicionar à Novela
minhaNovela.adicionarPersonagem(maria);
minhaNovela.adicionarPersonagem(joao);
minhaNovela.adicionarPersonagem(chico);

// 4. Iniciar e Desenvolver o Enredo
minhaNovela.definirEnredo("Maria precisa provar sua inocência e conquistar o amor verdadeiro, superando as intrigas de João.");

// 5. Simular Capítulos
for (let i = 0; i < 35; i++) {
    minhaNovela.avancarCapitulo();
}

// 6. Fim
minhaNovela.finalizar();

// Exemplo de como acessar o histórico de ações:
console.log("\n--- Histórico de Ações de Maria ---");
console.log(maria.acoes);