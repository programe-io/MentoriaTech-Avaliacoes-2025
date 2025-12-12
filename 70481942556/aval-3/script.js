// EsportesEscolares.java
import java.util.ArrayList;
import java.util.List;

class Esporte {
    private String nome;
    private String descricao;

    public Esporte(String nome, String descricao) {
        this.nome = nome;
        this.descricao = descricao;
    }

    public String getNome() {
        return nome;
    }

    public String getDescricao() {
        return descricao;
    }
}

class Equipe {
    private String nome;
    private List<String> membros;

    public Equipe(String nome) {
        this.nome = nome;
        this.membros = new ArrayList<>();
    }

    public void adicionarMembro(String nomeMembro) {
        membros.add(nomeMembro);
    }

    public void mostrarEquipe() {
        System.out.println("Equipe: " + nome);
        System.out.println("Membros: " + membros);
    }
}

class Evento {
    private String nome;
    private String data;

    public Evento(String nome, String data) {
        this.nome = nome;
        this.data = data;
    }

    public void mostrarEvento() {
        System.out.println("Evento: " + nome + " | Data: " + data);
    }
}

class Beneficio {
    private String descricao;

    public Beneficio(String descricao) {
        this.descricao = descricao;
    }

    public void mostrarBeneficio() {
        System.out.println("- " + descricao);
    }
}

public class EsportesEscolares {

    public static void main(String[] args) {
        // Movimento estudantil
        System.out.println("=== Movimento Estudantil ===");
        System.out.println("Incentivando a prática de esportes e integração entre alunos.\n");

        // Modalidades
        System.out.println("=== Modalidades ===");
        List<Esporte> esportes = new ArrayList<>();
        esportes.add(new Esporte("Futebol", "Esporte coletivo jogado com bola nos pés."));
        esportes.add(new Esporte("Vôlei", "Esporte coletivo jogado com bola nas mãos."));
        esportes.add(new Esporte("Atletismo", "Esportes individuais de corrida, salto e arremesso."));

        for (Esporte e : esportes) {
            System.out.println(e.getNome() + ": " + e.getDescricao());
        }

        // Benefícios
        System.out.println("\n=== Benefícios dos Esportes ===");
        List<Beneficio> beneficios = new ArrayList<>();
        beneficios.add(new Beneficio("Melhora da saúde física e mental"));
        beneficios.add(new Beneficio("Trabalho em equipe e cooperação"));
        beneficios.add(new Beneficio("Disciplina e responsabilidade"));
        beneficios.add(new Beneficio("Integração social"));

        for (Beneficio b : beneficios) {
            b.mostrarBeneficio();
        }

        // Equipes
        System.out.println("\n=== Equipes ===");
        Equipe equipeFutebol = new Equipe("Campeões do Campo");
        equipeFutebol.adicionarMembro("João");
        equipeFutebol.adicionarMembro("Maria");
        equipeFutebol.adicionarMembro("Lucas");
        equipeFutebol.mostrarEquipe();

        // Eventos
        System.out.println("\n=== Eventos ===");
        Evento campeonato = new Evento("Campeonato Escolar", "15/06/2025");
        Evento amistoso = new Evento("Jogo Amistoso", "22/06/2025");
        campeonato.mostrarEvento();
        amistoso.mostrarEvento();

        // Participação
        System.out.println("\n=== Participar ===");
        System.out.println("Para participar, procure o professor de educação física e escolha uma modalidade.");
    }
}
