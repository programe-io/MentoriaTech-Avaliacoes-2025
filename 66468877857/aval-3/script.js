import java.util.Scanner;

public class ConversorTemperatura {

    public static void main(String[] args) {
        // Cria um objeto Scanner para ler a entrada do usuário
        Scanner scanner = new Scanner(System.in);

        // 1. Entrada de Dados
        System.out.println("--- Conversor de Temperatura (°C para °F e K) ---");
        System.out.print("Digite a temperatura em graus Celsius (°C): ");
        
        // Lê a temperatura em Celsius como um double para maior precisão
        double celsius = scanner.nextDouble();

        // 2. Cálculo das Conversões
        
        // Fórmula para Fahrenheit: (°C × 9/5) + 32
        // Utilizamos 9.0/5 para garantir que a divisão seja de ponto flutuante (double)
        double fahrenheit = (celsius * 9.0 / 5.0) + 32.0;

        // Fórmula para Kelvin: °C + 273.15
        double kelvin = celsius + 273.15;

        // Fecha o scanner para liberar os recursos do sistema
        scanner.close();

        // 3. Exibição dos Resultados
        
        System.out.println("\n--- Resultados da Conversão ---");
        
        // Usa System.out.printf para formatar a saída com duas casas decimais
        System.out.printf("Temperatura em Celsius: %.2f °C\n", celsius);
        System.out.printf("Temperatura em Fahrenheit: %.2f °F\n", fahrenheit);
        System.out.printf("Temperatura em Kelvin: %.2f K\n", kelvin);
        
        System.out.println("------------------------------");
    }
}