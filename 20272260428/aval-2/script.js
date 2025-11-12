/**
 * Classe que representa um Jogador de Vôlei, demonstrando Atributos (características)
 * e Métodos (comportamentos).
 */
public class JogadorVolei {
    
    // ATRIBUTOS (Variáveis de instância)
    private String nome;
    private String posicao; // Ex: Levantador, Ponteiro, Líbero
    private int numeroCamisa;
    private int alturaCm; // Altura em centímetros

    // CONSTRUTOR
    // Método especial usado para criar (instanciar) um novo objeto da classe.
    public JogadorVolei(String nome, String posicao, int numeroCamisa, int alturaCm) {
        this.nome = nome;
        this.posicao = posicao;
        this.numeroCamisa = numeroCamisa;
        this.alturaCm = alturaCm;
    }

    // MÉTODOS (GETTERS e SETTERS)
    // Usados para acessar e modificar atributos privados.
    
    public String getNome() {
        return nome;
    }

    public String getPosicao() {
        return posicao;
    }

    public void setPosicao(String novaPosicao) {
        this.posicao = novaPosicao;
        System.out.println(nome + " mudou de posição para: " + novaPosicao);
    }
    
    // MÉTODOS DE COMPORTAMENTO
    
    public void atacar() {
        System.out.println(nome + " (" + posicao + ") saltou " + calcularAlcanceAtaque() + " cm para cortar a bola!");
    }

    public void defender() {
        if (posicao.equals("Líbero")) {
            System.out.println(nome + " fez uma defesa incrível de peixinho!");
        } else {
            System.out.println(nome + " defendeu a bola com a manchete.");
        }
    }
    
    /**
     * Método para calcular um alcance aproximado do ataque (exemplo simples).
     * Retorna a altura máxima que o jogador pode atingir.
     */
    public int calcularAlcanceAtaque() {
        // Altura do jogador + 100 cm de salto e braços esticados (estimativa)
        return alturaCm + 100; 
    }
}