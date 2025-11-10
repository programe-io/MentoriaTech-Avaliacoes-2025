import java.util.Scanner; // Importa a classe Scanner para ler entrada do usuário

/**
 * CalculadoraAreaCirculo.java
 * Pede o raio ao usuário e calcula a área do círculo.
 */
public class CalculadoraAreaCirculo {

    // Constante para o valor de Pi (usamos 'final' para constantes)
    private static final double PI = 3.14159;

    // Método que calcula a área
    public static double calcularArea(double raio) {
        // A área é dada por: Área = π * raio²
        return PI * raio * raio;
    }

    public static void main(String[] args) {
        
        // 1. Configura a leitura da entrada do usuário
        Scanner scanner = new Scanner(System.in);
        
        // 2. Solicita o raio
        System.out.println("--- Calculadora de Área de Círculo ---");
        System.out.print("Digite o valor do raio (em cm): ");
        
        // 3. Lê o valor e armazena em uma variável double
        double raio = scanner.nextDouble();
        
        // 4. Fecha o objeto Scanner (boa prática)
        scanner.close();
        
        // 5. Chama o método de cálculo
        double area = calcularArea(raio);
        
        // 6. Exibe o resultado formatado
        System.out.printf("O raio digitado foi: %.2f cm%n", raio);
        System.out.printf("A área do círculo é: %.2f cm²%n", area);
    }
}