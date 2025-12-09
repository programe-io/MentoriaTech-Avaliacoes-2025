public class Aluno {
    private String nome;
    private double nota1;
    private double nota2;
    private double nota3;

    // Construtor para inicializar o objeto Aluno
    public Aluno(String nome, double n1, double n2, double n3) {
        this.nome = nome;
        this.nota1 = n1;
        this.nota2 = n2;
        this.nota3 = n3;
    }

    // Método para calcular a média das notas
    public double calcularMedia() {
        return (nota1 + nota2 + nota3) / 3.0;
    }

    // Método para verificar se o aluno está aprovado (média >= 7.0)
    public String verificarStatus() {
        double media = calcularMedia();
        if (media >= 7.0) {
            return "Aprovado";
        } else if (media >= 5.0) {
            return "Recuperação";
        } else {
            return "Reprovado";
        }
    }

    // Getter para obter o nome (útil para exibição)
    public String getNome() {
        return nome;
    }

    // Método toString para representação de texto do objeto
    @Override
    public String toString() {
        return "Nome: " + nome + 
               " | Notas: (" + nota1 + ", " + nota2 + ", " + nota3 + ")" +
               " | Média: " + String.format("%.2f", calcularMedia()) +
               " | Status: " + verificarStatus();
    }
}
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Cálculo de Média Escolar</title>
    </head>
<body>

    <div class="container">
        
        <nav class="navegacao">
            </nav>

        <h1>📊 Cálculo de Média</h1>
        
        <aside style="padding: 10px; background-color: #ffe0b2; border-left: 5px solid #ff9800; margin-bottom: 20px;">
            <p style="margin: 0;">⚠️ **Regra:** Aprovado se a Média $\ge$ 7.0. Recuperação se $\ge$ 5.0.</p>
        </aside>
        
        <h3>Insira suas Notas Abaixo</h3> 
        <form id="formularioNotas">
            
            <div class="campo-nota">
                <label for="nota1">Nota 1 (Peso 1):</label>
                <input type="number" id="nota1" min="0" max="10" step="0.1" required>
            </div>
            
            <div class="campo-nota">
                <label for="nota2">Nota 2 (Peso 1):</label>
                <input type="number" id="nota2" min="0" max="10" step="0.1" required>
            </div>
            
            <div class="campo-nota">
                <label for="nota3">Nota 3 (Peso 1):</label>
                <input type="number" id="nota3" min="0" max="10" step="0.1" required>
            </div>
            
            <button type="submit">Calcular Média</button>
            
        </form>

        <h2>Resultado:</h2>
        <div id="resultado">
            <p>Insira as notas e clique em Calcular.</p>
        </div>

    </div>

</body>
</html>