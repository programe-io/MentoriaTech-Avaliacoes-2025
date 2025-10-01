import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class GeradorDeHtmlComCss {
    public static void main(String[] args) {
        String nomeArquivo = "pagina.html";

        String html = """
            <!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Página Gerada em Java</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f0f0f0;
                        color: #333;
                        padding: 20px;
                    }
                    header, footer {
                        background-color: #0077cc;
                        color: white;
                        padding: 10px;
                        border-radius: 5px;
                    }
                    main {
                        background-color: white;
                        padding: 15px;
                        margin-top: 10px;
                        border-radius: 5px;
                    }
                </style>
            </head>
            <body>
                <header>
                    <h1>Página HTML Gerada com Java</h1>
                </header>
                <main>
                    <h2>Conteúdo Principal</h2>
                    <p>Este é um exemplo de HTML com CSS criado dinamicamente por um programa Java.</p>
                </main>
                <footer>
                    <p>&copy; 2025 - Sistema Gerador Java</p>
                </footer>
            </body>
            </html>
            """;

        try (BufferedWriter writer = new BufferedWriter(new FileWriter(nomeArquivo))) {
            writer.write(html);
            System.out.println("Arquivo HTML gerado com sucesso: " + nomeArquivo);
        } catch (IOException e) {
            System.err.println("Erro ao gerar o arquivo: " + e.getMessage());
        }
    }
}
