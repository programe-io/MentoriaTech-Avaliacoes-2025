/*
 * HistoriaFutsalApp.java
 * Aplicativo Swing simples que apresenta seções sobre a História do Futsal.
 *
 * Para compilar:
 *   javac HistoriaFutsalApp.java
 * Para executar:
 *   java HistoriaFutsalApp
 *
 * Requer Java 8+ (funciona em versões mais recentes também).
 */

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class HistoriaFutsalApp {
    private JFrame frame;
    private JPanel cards; // painel com CardLayout

    public static void main(String[] args) {
        // Executa a GUI na EDT (Event Dispatch Thread)
        SwingUtilities.invokeLater(() -> new HistoriaFutsalApp().createAndShowGUI());
    }

    private void createAndShowGUI() {
        frame = new JFrame("História do Futsal");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(900, 600);
        frame.setLocationRelativeTo(null);

        // Painel principal com BorderLayout
        JPanel main = new JPanel(new BorderLayout(10, 10));
        main.setBorder(BorderFactory.createEmptyBorder(10,10,10,10));

        // Cabeçalho
        JLabel header = new JLabel("<html><h1>História do Futsal</h1>"
                + "<p style='font-size:10pt;'>Da invenção no Uruguai à consagração mundial do esporte</p></html>");
        header.setHorizontalAlignment(SwingConstants.CENTER);
        main.add(header, BorderLayout.NORTH);

        // Painel de navegação lateral (botões)
        JPanel nav = new JPanel();
        nav.setLayout(new GridLayout(0, 1, 5, 5));
        nav.setPreferredSize(new Dimension(170, 0));
        String[] sections = {"Inicio", "Origens", "Regras", "Brasil", "Competicoes", "Idolos", "Curiosidades"};
        for (String s : sections) {
            JButton b = new JButton(formatLabel(s));
            b.setFocusPainted(false);
            b.addActionListener(e -> showCard(s));
            nav.add(b);
        }
        main.add(nav, BorderLayout.WEST);

        // Cards (conteúdo das seções)
        cards = new JPanel(new CardLayout());
        cards.add(makeCard("Inicio", 
                "<h2>Bem-vindo ao Mundo do Futsal</h2>"
                + "<p>O futsal é muito mais do que uma variação do futebol. É um esporte com história própria, "
                + "identidade única e um papel fundamental no desenvolvimento de atletas e comunidades. "
                + "Presente em escolas, clubes e torneios profissionais, o futsal combina velocidade, técnica e emoção.</p>"),
            "Inicio");
        cards.add(makeCard("Origens",
                "<h2>As Origens do Futsal</h2>"
                + "<h4>Montevidéu, Uruguai – Década de 1930</h4>"
                + "<p>O futsal nasceu nos anos 1930 com Juan Carlos Ceriani (ACM) como uma forma de praticar 'futebol' "
                + "em espaços pequenos e cobertos. A modalidade se espalhou rapidamente pela América do Sul.</p>"),
            "Origens");
        cards.add(makeCard("Regras",
                "<h2>Regras Básicas</h2>"
                + "<ul>"
                + "<li>Times de 5 jogadores (inclui goleiro).</li>"
                + "<li>Quadra menor, bola com menos quique.</li>"
                + "<li>Substituições ilimitadas.</li>"
                + "<li>Partidas divididas em dois tempos (normalmente 20 minutos cada, no futsal profissional com tempo parado).</li>"
                + "</ul>"),
            "Regras");
        cards.add(makeCard("Brasil",
                "<h2>Futsal no Brasil</h2>"
                + "<p>O Brasil tornou-se uma potência do futsal, produzindo talentos que migraram ao futebol de campo (e vice-versa). "
                + "O esporte é amplamente praticado em escolas e clubes e tem forte tradição em competições nacionais.</p>"),
            "Brasil");
        cards.add(makeCard("Competicoes",
                "<h2>Competições</h2>"
                + "<p>Existem competições continentais e mundiais organizadas por confederações e pela FIFA. No Brasil, torneios estaduais e nacionais fomentam a base.</p>"),
            "Competicoes");
        cards.add(makeCard("Idolos",
                "<h2>Ídolos</h2>"
                + "<p>Vários jogadores se tornaram ícones — tanto do futsal quanto do futebol — graças à técnica e criatividade desenvolvidas na quadra pequena.</p>"),
            "Idolos");
        cards.add(makeCard("Curiosidades",
                "<h2>Curiosidades</h2>"
                + "<ul>"
                + "<li>O nome 'futsal' vem de 'futebol de salão' (português/espanhol) ou 'futsal' (inglês, mashup 'fut' + 'sal').</li>"
                + "<li>Muitos grandes jogadores de futebol começaram no futsal — a modalidade ajuda na coordenação e visão de jogo.</li>"
                + "</ul>"),
            "Curiosidades");

        main.add(cards, BorderLayout.CENTER);

        // Rodapé
        JLabel footer = new JLabel("© 2025 História do Futsal – Aplicativo educativo");
        footer.setHorizontalAlignment(SwingConstants.CENTER);
        main.add(footer, BorderLayout.SOUTH);

        frame.setContentPane(main);
        frame.setVisible(true);

        // mostra a tela inicial
        showCard("Inicio");
    }

    // Helper: cria um painel com texto HTML exibido dentro de JScrollPane
    private JScrollPane makeCard(String title, String htmlContent) {
        String html = "<html><div style='font-family:Arial,Helvetica,sans-serif;padding:12px;'>"
                + htmlContent
                + "<p style='margin-top:12px;font-size:9pt;color:#555;'>Seção: " + title + "</p>"
                + "</div></html>";
        JLabel lbl = new JLabel(html);
        lbl.setVerticalAlignment(SwingConstants.TOP);

        // Container para centralizar e limitar largura
        JPanel container = new JPanel(new BorderLayout());
        container.add(lbl, BorderLayout.NORTH);

        JScrollPane scroll = new JScrollPane(container);
        scroll.getVerticalScrollBar().setUnitIncrement(12);
        return scroll;
    }

    // Exibe o card cujo nome foi fornecido
    private void showCard(String name) {
        CardLayout cl = (CardLayout)(cards.getLayout());
        cl.show(cards, name);
    }

    // Ajusta o rótulo do botão para ter espaços (opcional)
    private String formatLabel(String raw) {
        switch (raw) {
            case "Inicio": return "Início";
            case "Origens": return "Origens";
            case "Regras": return "Regras";
            case "Brasil": return "Futsal no Brasil";
            case "Competicoes": return "Competições";
            case "Idolos": return "Ídolos";
            case "Curiosidades": return "Curiosidades";
            default: return raw;
        }
    }
}
