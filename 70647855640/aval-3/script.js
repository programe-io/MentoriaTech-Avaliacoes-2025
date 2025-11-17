/**
 * CLASSE SHINIGAMI
 * Representa um Shinigami com atributos básicos e a capacidade de usar Bankai.
 */
class Shinigami {
    constructor(nome, zanpakuto, reiatsuCor) {
        this.nome = nome;
        this.zanpakuto = zanpakuto;
        this.reiatsuCor = reiatsuCor;
        this.nivelPoder = 1000;
        this.bankaiAtiva = false;
    }

    ativarBankai() {
        if (!this.bankaiAtiva) {
            this.bankaiAtiva = true;
            this.nivelPoder *= 10; // Aumento massivo de poder
            return `${this.nome}: BANKAI! ${this.zanpakuto} evolui para Tensa ${this.zanpakuto}!`;
        } else {
            return `${this.nome} já está com a Bankai ativada.`;
        }
    }

    mostrarStatus() {
        return `
            --- Status de ${this.nome} ---
            Zanpakutō: ${this.zanpakuto}
            Cor do Reiatsu: ${this.reiatsuCor}
            Nível de Poder Atual: ${this.nivelPoder}
            Bankai Ativa: ${this.bankaiAtiva ? 'Sim' : 'Não'}
        `;
    }
}

/**
 * CLASSE ICHIGO KUROSAKI (HERANÇA)
 * Estende a classe Shinigami e adiciona sua técnica especial.
 */
class IchigoKurosaki extends Shinigami {
    constructor() {
        // Chama o construtor da classe pai (Shinigami)
        super("Ichigo Kurosaki", "Zangetsu", "Laranja/Preto");
        this.habilidades = ["Getsuga Tenshō", "Gran Rey Cero (Hollow)"];
    }

    /**
     * Método