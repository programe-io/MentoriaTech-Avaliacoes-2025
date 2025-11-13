import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class SistemaSolar extends JPanel implements ActionListener {
    private double anguloTerra = 0;
    private double anguloMercurio = 0;
    private Timer timer;

    public SistemaSolar() {
        timer = new Timer(20, this); // Atualiza a cada 20ms (~50fps)
        timer.start();
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        Graphics2D g2 = (Graphics2D) g;

        // Centraliza
        int cx = getWidth() / 2;
        int cy = getHeight() / 2;

        // Antialiasing
        g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);

        // Fundo
        g2.setColor(Color.BLACK);
        g2.fillRect(0, 0, getWidth(), getHeight());

        // Sol
        g2.setColor(Color.YELLOW);
        g2.fillOval(cx - 30, cy - 30, 60, 60);

        // Mercúrio
        int rMercurio = 50;
        int mercX = cx + (int)(rMercurio * Math.cos(anguloMercurio)) - 4;
        int mercY = cy + (int)(rMercurio * Math.sin(anguloMercurio)) - 4;
        g2.setColor(Color.GRAY);
        g2.fillOval(mercX, mercY, 8, 8);

        // Terra
        int rTerra = 100;
        int terraX = cx + (int)(rTerra * Math.cos(anguloTerra)) - 8;
        int terraY = cy + (int)(rTerra * Math.sin(anguloTerra)) - 8;
        g2.setColor(Color.BLUE);
        g2.fillOval(terraX, terraY, 16, 16);

        // Órbitas (opcional)
        g2.setColor(new Color(255,255,255,50));
        g2.drawOval(cx - rMercurio, cy - rMercurio, rMercurio*2, rMercurio*2);
        g2.drawOval(cx - rTerra, cy - rTerra, rTerra*2, rTerra*2);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        anguloTerra += 0.02;      // Velocidade da Terra
        anguloMercurio += 0.05;   // Velocidade de Mercúrio (mais rápido)
        repaint();
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Sistema Solar");
        SistemaSolar painel = new SistemaSolar();
        frame.add(painel);
        frame.setSize(600, 600);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLocationRelativeTo(null);
        frame.setVisible(true);
    }
}
