import java.util.Scanner;

public class SistemaEscolarETemperatura {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int opcao;

        do {
            System.out.println("\n=== MENU ===");
            System.out.println("1 - Calcular médias escolares");
            System.out.println("2 - Converter temperatura Celsius");
            System.out.println("0 - Sair");
            System.out.print("Escolha uma opção: ");
            opcao = sc.nextInt();

            switch (opcao) {
                case 1:
                    calcularMedias(sc);
                    break;
                case 2:
                    converterTemperatura(sc);
                    break;
                case 0:
                    System.out.println("Saindo...");
                    break;
                default:
                    System.out.println("Opção inválida! Tente novamente.");
            }

        } while (opcao != 0);

        sc.close();
    }

    public static void calcularMedias(Scanner sc) {
        double[] notas = new double[8];
        System.out.println("\nDigite as 8 notas anuais:");

        for (int i = 0; i < 8; i++) {
            System.out.print("Nota " + (i + 1) + ": ");
            notas[i] = sc.nextDouble();
        }

        // Médias bimestrais (2 notas por bimestre)
        double b1 = (notas[0] + notas[1]) / 2;
        double b2 = (notas[2] + notas[3]) / 2;
        double b3 = (notas[4] + notas[5]) / 2;
        double b4 = (notas[6] + notas[7]) / 2;

        // Médias semestrais (2 bimestres por semestre)
        double s1 = (b1 + b2) / 2;
        double s2 = (b3 + b4) / 2;

        // Média final (média dos semestres)
        double mf = (s1 + s2) / 2;

        // Apresentar resultados
        System.out.println("\nPráticas\n");
        System.out.printf("1º Bimestre: %.1f\n", b1);
        System.out.printf("2º Bimestre: %.1f\n", b2);
        System.out.printf("1º Semestre: %.1f\n", s1);
        System.out.println("----------------------");
        System.out.printf("3º Bimestre: %.1f\n", b3);
        System.out.printf("4º Bimestre: %.1f\n", b4);
        System.out.printf("2º Semestre: %.1f\n", s2);
        System.out.println("----------------------");
        System.out.printf("Média Final: %.1f\n", mf);
    }

    public static void converterTemperatura(Scanner sc) {
        System.out.print("\nDigite a temperatura em Celsius (°C): ");
        double celsius = sc.nextDouble();

        double fahrenheit = (celsius * 9 / 5) + 32;
        double kelvin = celsius + 273.15;

        System.out.println("\nTemperatura em Celsius: " + celsius + " °C");
        System.out.println("Temperatura em Fahrenheit: " + String.format("%.2f", fahrenheit) + " °F");
        System.out.println("Temperatura em Kelvin: " + String.format("%.2f", kelvin) + " K");
    }
}
