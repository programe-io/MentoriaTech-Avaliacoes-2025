import java.util.Scanner;
public class Prova_01 {
    public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            double[] notas = new double[8];
            double[] mediasBimestrais = new double[4];
            double[] mediasSemestrais = new double[2];
            double mediaFinal;

            // Receber as 8 notas
            System.out.println("Digite as 8 notas do aluno:");
            for (int i = 0; i < 8; i++) {
                System.out.print("Nota " + (i + 1) + ": ");
                notas[i] = scanner.nextDouble();
            }

            // Calcular médias bimestrais
            for (int i = 0; i < 4; i++) {
                mediasBimestrais[i] = (notas[i * 2] + notas[i * 2 + 1]) / 2;
            }

            // Calcular médias semestrais
            mediasSemestrais[0] = (mediasBimestrais[0] + mediasBimestrais[1]) / 2;
            mediasSemestrais[1] = (mediasBimestrais[2] + mediasBimestrais[3]) / 2;

            // Calcular média final
            mediaFinal = (mediasSemestrais[0] + mediasSemestrais[1]) / 2;

            // Apresentar os resultados
            System.out.println("\n--- Resultados ---");
            for (int i = 0; i < 4; i++) {
                System.out.printf("Média do %dº bimestre: %.2f%n", i + 1, mediasBimestrais[i]);
            }

            System.out.printf("Média do 1º semestre: %.2f%n", mediasSemestrais[0]);
            System.out.printf("Média do 2º semestre: %.2f%n", mediasSemestrais[1]);
            System.out.printf("Média final: %.2f%n", mediaFinal);

            scanner.close();
        }
    }