import javax.swing.*;
import java.awt.*;

public class HelloKittyPostcard {

    public static void main(String[] args) {
        // Cria a janela
        JFrame frame = new JFrame("Post Card - Hello Kitty");
        frame.setSize(450, 500);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(new BorderLayout());
        frame.getContentPane().setBackground(new Color(255, 225, 240));

        // Painel principal
        JPanel panel = new JPanel();
        panel.setBackground(Color.WHITE);
        panel.setBorder(BorderFactory.createLineBorder(new Color(255, 140, 200), 5));
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));

        // Imagem da Hello Kitty
        ImageIcon kittyIcon = new ImageIcon(
                "https://upload.wikimedia.org/wikipedia/en/0/05/Hello_Kitty.png"
        );
        JLabel kittyLabel = new JLabel(kittyIcon);
        kittyLabel.setAlignmentX(Component.CENTER_ALIGNMENT);

        // Título
        JLabel title = new JLabel("Hello Kitty");
        title.setAlignmentX(Component.CENTER_ALIGNMENT);
        title.setFont(new Font("Arial", Font.BOLD, 28));
        title.setForeground(new Color(255, 80, 160));
        title.setBorder(BorderFactory.createEmptyBorder(10, 0, 10, 0));

        // Mensagem
        JLabel message = new JLabel("<html><center>Que seu dia seja cheio de fofura,<br>"
                + "carinho e energia cor-de-rosa! 💖</center></html>");
        message.setFont(new Font("Arial", Font.PLAIN, 16));
        message.setForeground(new Color(80, 80, 80));
        message.setAlignmentX(Component.CENTER_ALIGNMENT);
        message.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));

        // Rodapé
        JLabel footer = new JLabel("— Com carinho, Hello Kitty ✨");
        footer.setAlignmentX(Component.CENTER_ALIGNMENT);
        footer.setFont(new Font("Arial", Font.ITALIC, 14));
        footer.setForeground(new Color(255, 80, 160));
        footer.setBorder(BorderFactory.createEmptyBorder(10, 0, 20, 0));

        // Adiciona tudo ao painel
        panel.add(Box.createVerticalStrut(20));
        panel.add(kittyLabel);
        panel.add(title);
        panel.add(message);
        panel.add(footer);

        frame.add(panel, BorderLayout.CENTER);

        // Exibe a janela
        frame.setVisible(true);
    }
}
