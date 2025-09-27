import javax.swing.*;
import java.awt.*;

public class MusicaApp extends JFrame {

    public MusicaApp() {
        setTitle("🎶 Minhas Músicas Favoritas");
        setSize(1000, 600);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new BorderLayout());

        // <header> com <h1>
        JLabel titulo = new JLabel("🎶 Minhas Músicas Favoritas", JLabel.CENTER);
        titulo.setFont(new Font("Arial", Font.BOLD, 28));
        titulo.setBorder(BorderFactory.createEmptyBorder(20, 10, 10, 10));
        add(titulo, BorderLayout.NORTH);

        // <main>
        JPanel painelPrincipal = new JPanel(new GridLayout(1, 3, 15, 15));
        painelPrincipal.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));

        // <article> 1
        painelPrincipal.add(criarPainelMusica(
                "musica1.jpg",
                "Nome da Música 1",
                "Essa música traz uma vibe relaxante com batidas suaves e letras inspiradoras."
        ));

        // <article> 2
        painelPrincipal.add(criarPainelMusica(
                "musica2.jpg",
                "Nome da Música 2",
                "Um clássico do rock que marcou gerações. A guitarra poderosa e a voz marcante fazem dessa faixa inesquecível."
        ));

        // <article> 3
        painelPrincipal.add(criarPainelMusica(
                "musica3.jpg",
                "Nome da Música 3",
                "Com uma batida dançante e um refrão contagiante, essa música é perfeita para animar qualquer festa!"
        ));

        add(painelPrincipal, BorderLayout.CENTER);

        // <footer>
        JLabel rodape = new JLabel("© 2025 - Desenvolvido por Você", JLabel.CENTER);
        rodape.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
        rodape.setFont(new Font("Arial", Font.PLAIN, 12));
        add(rodape, BorderLayout.SOUTH);
    }

    private JPanel criarPainelMusica(String imagemPath, String tituloMusica, String descricao) {
        JPanel painel = new JPanel();
        painel.setLayout(new BorderLayout());
        painel.setBorder(BorderFactory.createLineBorder(Color.GRAY));
        painel.setBackground(Color.WHITE);

        // Imagem
        JLabel imagemLabel;
        try {
            ImageIcon icon = new ImageIcon(imagemPath);
            Image img = icon.getImage().getScaledInstance(250, 250, Image.SCALE_SMOOTH);
            imagemLabel = new JLabel(new ImageIcon(img));
        } catch (Exception e) {
            imagemLabel = new JLabel("Imagem não encontrada", JLabel.CENTER);
        }

        // Título (equivalente a <h3>)
        JLabel tituloLabel = new JLabel(tituloMusica, JLabel.CENTER);
        tituloLabel.setFont(new Font("Arial", Font.BOLD, 16));
        tituloLabel.setBorder(BorderFactory.createEmptyBorder(10, 0, 5, 0));

        // Descrição (parágrafo)
        JTextArea descricaoArea = new JTextArea(descricao);
        descricaoArea.setWrapStyleWord(true);
        descricaoArea.setLineWrap(true);
        descricaoArea.setEditable(false);
        descricaoArea.setBackground(Color.WHITE);
        descricaoArea.setFont(new Font("Arial", Font.PLAIN, 12));
        descricaoArea.setBorder(BorderFactory.createEmptyBorder(5, 10, 10, 10));

        // Montagem
        painel.add(imagemLabel, BorderLayout.NORTH);
        painel.add(tituloLabel, BorderLayout.CENTER);
        painel.add(descricaoArea, BorderLayout.SOUTH);

        return painel;
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            MusicaApp app = new MusicaApp();
            app.setVisible(true);
        });
    }
}
