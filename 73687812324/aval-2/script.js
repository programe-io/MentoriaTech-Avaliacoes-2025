// Classe base (superclasse)
class Pessoa {
    protected String nome;
    protected int idade;

    public Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    public void apresentar() {
        System.out.println("Nome: " + nome);
        System.out.println("Idade: " + idade);
    }
}

// Subclasse que estende Pessoa
class Aluno extends Pessoa {
    private String matricula;

    public Aluno(String nome, int idade, String matricula) {
        super(nome, idade);
        this.matricula = matricula;
    }

    @Override
    public void apresentar() {
        super.apresentar();
        System.out.println("Matrícula: " + matricula);
    }
}

// Subclasse que estende Pessoa
class Professor extends Pessoa {
    private String disciplina;

    public Professor(String nome, int idade, String disciplina) {
        super(nome, idade);
        this.disciplina = disciplina;
    }

    @Override
    public void apresentar() {
        super.apresentar();
        System.out.println("Disciplina: " + disciplina);
    }
}

// Classe principal
public class SistemaCadastro {
    public static void main(String[] args) {
        Pessoa p1 = new Pessoa("Carlos", 40);
        Aluno a1 = new Aluno("Ana", 20, "20231001");
        Professor prof1 = new Professor("Marcos", 50, "Matemática");

        System.out.println("Apresentação Pessoa:");
        p1.apresentar();

        System.out.println("\nApresentação Aluno:");
        a1.apresentar();

        System.out.println("\nApresentação Professor:");
        prof1.apresentar();
    }
}
