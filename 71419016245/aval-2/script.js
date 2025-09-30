import java.util.Scanner;

public class SistemaEscolarJava {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double[] notas = new double[8];
        System.out.println("Digite as 8 notas (0 a 10):");
        for(int i = 0; i < 8; i++) {
            System.out.print("Nota " + (i+1) + ": ");
            notas[i] = scanner.nextDouble();
        }
        double[] mediasBimestrais = new double[4];
        for(int i = 0; i < 4; i++) {
            mediasBimestrais[i] = (notas[i*2] + notas[i*2+1]) / 2;
        }
        double mediaSemestre1 = (mediasBimestrais[0] + mediasBimestrais[1]) / 2;
        double mediaSemestre2 = (mediasBimestrais[2] + mediasBimestrais[3]) / 2;
        double mediaFinal = (mediaSemestre1 + mediaSemestre2) / 2;

        System.out.println("\nResultados:");
        System.out.println("1º Bimestre: " + mediasBimestrais[0]);
        System.out.println("2º Bimestre: " + mediasBimestrais[1]);
        System.out.println("1º Semestre: " + mediaSemestre1);
        System.out.println("--------------------");
        System.out.println("3º Bimestre: " + mediasBimestrais[2]);
        System.out.println("4º Bimestre: " + mediasBimestrais[3]);
        System.out.println("2º Semestre: " + mediaSemestre2);
        System.out.println("--------------------");
        System.out.println("Média Final: " + mediaFinal);

        scanner.close();
    }
}
