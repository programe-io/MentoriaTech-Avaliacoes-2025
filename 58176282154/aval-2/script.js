import java.util.Scanner;

public class ProjetoMentoriaSaebi {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int pontos = 0;

        // HEADER
        System.out.println("======================================");
        System.out.println("🧠 Meu Projeto de Programação - Java");
        System.out.println("Feito para a Mentoria Tech da Saebi");
        System.out.println("======================================\n");

        // NAV
        System.out.println("🔗 Navegação:");
        System.out.println("1. Sobre Mim");
        System.out.println("2. Projetos Recentes");
        System.out.println("3. Jogo com Imagem");
        System.out.println("4. Curiosidades");
        System.out.println("5. Sair\n");

        // MAIN
        boolean ativo = true;
        while (ativo) {
            System.out.print("Digite o número da seção que deseja acessar: ");
            int escolha = scanner.nextInt();
            scanner.nextLine(); // limpar buffer

            switch (escolha) {
                case 1:
                    // ARTICLE: Sobre Mim
                    System.out.println("\n🧍 Sobre Mim");
                    System.out.println("Olá! Sou um entusiasta da tecnologia, apaixonado por desenvolvimento web e sempre buscando aprender mais.\n");
                    break;

                case 2:
                    // ARTICLE: Projetos Recentes
                    System.out.println("\n💼 Projetos Recentes");
                    System.out.println("- Jogo \"Descubra sobre Mim\" em HTML");
                    System.out.println("- Site de portfólio pessoal");
                    System.out.println("- Aplicativo de tarefas com JavaScript\n");
                    break;

                case 3:
                    // ARTICLE: Jogo com Imagem (simulada)
                    System.out.println("\n🎮 Jogo com Imagem");
                    System.out.println("[Imagem simulada: 💻 Um computador com código na tela]");
                    System.out.println("Pergunta: Qual é o tema principal da imagem?");
                    System.out.println("a) Natureza");
                    System.out.println("b) Esporte");
                    System.out.println("c) Tecnologia");
                    System.out.print("Sua resposta: ");
                    String resposta = scanner.nextLine();

                    if (resposta.equalsIgnoreCase("c") || resposta.equalsIgnoreCase("tecnologia")) {
                        System.out.println("✅ Correto! A imagem representa tecnologia.\n");
                        pontos++;
                    } else {
                        System.out.println("❌ Ops! Tente novamente.\n");
                    }
                    break;

                case 4:
                    // ASIDE: Curiosidades
                    System.out.println("\n📚 Curiosidades");
                    System.out.println("💡 O primeiro site da história foi criado por Tim Berners-Lee em 1991.");
                    System.out.println("📌 Estou aprendendo HTML, CSS e JavaScript para construir meus próprios projetos!\n");
                    break;

                case 5:
                    // FOOTER
                    System.out.println("\n======================================");
                    System.out.println("📩 Contato: seunome@email.com");
                    System.out.println("© 2025 Meu Projeto de Programação");
                    System.out.println("Você acertou " + pontos + " pergunta(s) no jogo.");
                    System.out.println("======================================");
                    ativo = false;
                    break;

                default:
                    System.out.println("❗ Opção inválida. Tente novamente.\n");
            }
        }

        scanner.close();
    }
}
