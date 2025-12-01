import java.util.Scanner;

public class Atividade2 {

    public static void main(String[] args) {
            // Inicializa o Scanner para leitura
                    Scanner entrada = new Scanner(System.in);
                            
                                    // Declaração da variável Celsius
                                            double celsius; 

                                                    System.out.println("Bem-vindo ao Conversor de Temperatura Divertido!");
                                                            System.out.print("Digite a temperatura em Celsius: ");
                                                                    
                                                                            // Leitura da entrada
                                                                                    celsius = entrada.nextDouble();
                                                                                            
                                                                                                    // CÁLCULOS: FÓRMULAS CORRETAS
                                                                                                            // 1. Fahrenheit: (°C * 9.0 / 5.0) + 32
                                                                                                                    double fahrenheit = (celsius * 9.0 / 5.0) + 32; 
                                                                                                                            
                                                                                                                                    // 2. Kelvin: °C + 273.15
                                                                                                                                            double kelvin = celsius + 273.15;
                                                                                                                                                    
                                                                                                                                                            
                                                                                                                                                                    // EXIBIÇÃO DOS RESULTADOS NO FORMATO PEDIDO
                                                                                                                                                                            System.out.println("\nResultados da conversão:");
                                                                                                                                                                                    
                                                                                                                                                                                            System.out.printf("Temperatura em Celsius:    %.2f °C%n", celsius);
                                                                                                                                                                                                    System.out.printf("Temperatura em Fahrenheit: %.2f °F%n", fahrenheit);
                                                                                                                                                                                                            System.out.printf("Temperatura em Kelvin:     %.2f K%n", kelvin);

                                                                                                                                                                                                                    // Fechando o Scanner para liberar recursos
                                                                                                                                                                                                                            entrada.close();
                                                                                                                                                                                                                                } // FIM DO MÉTODO MAIN
                                                                                                                                                                                                                                } // FIM DA CLASSE ATIVIDADE