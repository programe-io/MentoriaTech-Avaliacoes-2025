import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDate;
import java.util.*;

/**
 * HelloKittyInfoApp.java
 *
 * Aplicação console em Java que apresenta informações sobre Hello Kitty.
 * - Menu interativo
 * - Busca por palavra-chave
 * - Exportar para arquivo TXT
 *
 * Requisitos: Java 8+
 *
 * Para compilar:
 *   javac HelloKittyInfoApp.java
 *
 * Para executar:
 *   java HelloKittyInfoApp
 *
 * Observação: Conteúdo descreve a personagem de forma informativa; se precisar de imagens oficiais
 * (licenciamento), substitua as URLs por versões licenciadas.
 */
public class HelloKittyInfoApp {
    // Objeto que guarda as informações principais
    static class CharacterInfo {
        String name;
        String realName;
        LocalDate birthDate;     // interpretativo (aniversário simbólico)
        String origin;
        String description;
        List<String> traits = new ArrayList<>();

        CharacterInfo(String name, String realName, LocalDate birthDate, String origin, String description) {
            this.name = name;
            this.realName = realName;
            this.birthDate = birthDate;
            this.origin = origin;
            this.description = description;
        }

        void addTrait(String t) { traits.add(t); }

        String asText() {
            StringBuilder sb = new StringBuilder();
            sb.append("=== ").append(name).append(" ===\n");
            sb.append("Nome oficial: ").append(realName).append("\n");
            sb.append("Aniversário simbólico: ").append(birthDate).append("\n");
            sb.append("Origem: ").append(origin).append("\n\n");
            sb.append(description).append("\n\n");
            sb.append("Características:\n");
            for (String t : traits) sb.append(" - ").append(t).append("\n");
            sb.append("\n");
            return sb.toString();
        }
    }

    // Linha do tempo
    static class TimelineEntry {
        int year;
        String event;
        TimelineEntry(int year, String event) { this.year = year; this.event = event; }
        String asText() { return year + " — " + event; }
    }

    // Perguntas frequentes
    static class FAQEntry {
        String question;
        String answer;
        FAQEntry(String q, String a) { question = q; answer = a; }
        String asText() { return "Q: " + question + "\nA: " + answer + "\n"; }
    }

    // Galeria (apenas URLs e legendas)
    static class GalleryImage {
        String url;
        String caption;
        GalleryImage(String url, String caption) { this.url = url; this.caption = caption; }
        String asText() { return caption + " — " + url; }
    }

    // Dados estáticos (podem ser carregados de JSON/DB posteriormente)
    private final CharacterInfo info;
    private final List<TimelineEntry> timeline;
    private final List<FAQEntry> faq;
    private final List<GalleryImage> gallery;
    private final Map<String, String> relatedCharacters;

    public HelloKittyInfoApp() {
        info = new CharacterInfo(
                "Hello Kitty",
                "Kitty White",
                LocalDate.of(1974, 11, 1),
                "Japão (biografia oficial: Londres)",
                "Hello Kitty é uma personagem criada pela Sanrio em 1974. " +
                        "Com um design minimalista e traços kawaii, tornou-se um fenômeno global " +
                        "aparecendo em diversos produtos, colaborações e eventos."
        );
        info.addTrait("Design simples e reconhecível");
        info.addTrait("Sem boca — permite projeção de emoções");
        info.addTrait("Item de assinatura: laço (bow)");
        info.addTrait("Ícone da estética kawaii");
        info.addTrait("Presença em produtos, moda e cultura pop");

        timeline = new ArrayList<>();
        timeline.add(new TimelineEntry(1974, "Criação pela Sanrio; primeiros produtos (porta-moedas)"));
        timeline.add(new TimelineEntry(1976, "Entrada em mercados internacionais"));
        timeline.add(new TimelineEntry(1980, "Difusão na cultura pop e colecionáveis"));
        timeline.add(new TimelineEntry(2000, "Colaborações de moda e produtos premium"));
        timeline.add(new TimelineEntry(2014, "40 anos: exposições e coleções comemorativas"));
        timeline.add(new TimelineEntry(2020, "Expansão digital, jogos e parcerias globais"));

        faq = new ArrayList<>();
        faq.add(new FAQEntry("Hello Kitty é um gato?", "Oficialmente, Sanrio descreve Hello Kitty como uma garotinha humana (Kitty White)."));
        faq.add(new FAQEntry("Por que ela não tem boca?", "A ausência de boca foi uma escolha de design para que pessoas possam 'projetar' suas próprias emoções na personagem."));
        faq.add(new FAQEntry("Posso vender produtos com a Hello Kitty?", "Para uso comercial é necessário licenciamento da Sanrio. Este guia é apenas informativo."));

        gallery = new ArrayList<>();
        // URLs de exemplo — trocar por imagens licenciadas se necessário
        gallery.add(new GalleryImage("https://i.imgur.com/EkE3K0u.jpeg", "Ilustração estilo kawaii 1"));
        gallery.add(new GalleryImage("https://i.imgur.com/ZxVwU54.jpeg", "Ilustração estilo kawaii 2"));
        gallery.add(new GalleryImage("https://i.imgur.com/YCgMAz1.jpeg", "Arte livre inspirada"));

        relatedCharacters = new LinkedHashMap<>();
        relatedCharacters.put("Dear Daniel", "Amigo de infância / interesse romântico em algumas versões");
        relatedCharacters.put("My Melody", "Personagem doce também da Sanrio");
        relatedCharacters.put("Kuromi", "Rival / personagem com estética punk");
        relatedCharacters.put("Charmmy Kitty", "Gata de estimação ligada à família White");
    }

    // Apresenta o menu principal
    private void startInteractiveConsole() {
        Scanner sc = new Scanner(System.in, "UTF-8");
        System.out.println("=========================================");
        System.out.println("   Hello Kitty — Guia informativo (Java)  ");
        System.out.println("=========================================\n");

        boolean running = true;
        String lastDisplayed = ""; // guarda última seção para permitir exportar
        while (running) {
            System.out.println("Escolha uma opção:");
            System.out.println("1) Visão geral (personagem e características)");
            System.out.println("2) Linha do tempo");
            System.out.println("3) Personagens relacionados");
            System.out.println("4) Curiosidades e fatos");
            System.out.println("5) Galeria (URLs)");
            System.out.println("6) FAQ (perguntas frequentes)");
            System.out.println("7) Buscar por palavra-chave");
            System.out.println("8) Exportar última seção mostrada para TXT");
            System.out.println("0) Sair");
            System.out.print("> ");

            String choice = sc.nextLine().trim();
            System.out.println();

            switch (choice) {
                case "1":
                    lastDisplayed = displayOverview();
                    break;
                case "2":
                    lastDisplayed = displayTimeline();
                    break;
                case "3":
                    lastDisplayed = displayRelatedCharacters();
                    break;
                case "4":
                    lastDisplayed = displayCuriosities();
                    break;
                case "5":
                    lastDisplayed = displayGallery();
                    break;
                case "6":
                    lastDisplayed = displayFAQ();
                    break;
                case "7":
                    System.out.print("Digite palavra-chave para buscar: ");
                    String kw = sc.nextLine().trim();
                    lastDisplayed = search(kw);
                    break;
                case "8":
                    if (lastDisplayed.isEmpty()) {
                        System.out.println("Nenhuma seção foi exibida ainda. Primeiro visualize uma seção para então exportar.\n");
                    } else {
                        System.out.print("Nome do arquivo de saída (ex: hello_kitty.txt): ");
                        String filename = sc.nextLine().trim();
                        if (filename.isEmpty()) filename = "hello_kitty_export.txt";
                        try {
                            exportToFile(lastDisplayed, filename);
                            System.out.println("Exportado com sucesso para '" + filename + "'.\n");
                        } catch (IOException e) {
                            System.out.println("Falha ao exportar: " + e.getMessage() + "\n");
                        }
                    }
                    break;
                case "0":
                    running = false;
                    break;
                default:
                    System.out.println("Opção inválida. Tente novamente.\n");
            }
        }
        System.out.println("Encerrando aplicação. Até logo!");
        sc.close();
    }

    // Exibir visão geral / overview
    private String displayOverview() {
        String txt = info.asText();
        System.out.println(txt);
        return txt;
    }

    // Exibir timeline
    private String displayTimeline() {
        StringBuilder sb = new StringBuilder();
        sb.append("=== Linha do tempo ===\n");
        for (TimelineEntry t : timeline) {
            sb.append(t.asText()).append("\n");
        }
        sb.append("\n");
        String out = sb.toString();
        System.out.println(out);
        return out;
    }

    // Exibir personagens relacionados
    private String displayRelatedCharacters() {
        StringBuilder sb = new StringBuilder();
        sb.append("=== Personagens relacionados / Universo Sanrio ===\n");
        for (Map.Entry<String, String> e : relatedCharacters.entrySet()) {
            sb.append("- ").append(e.getKey()).append(": ").append(e.getValue()).append("\n");
        }
        sb.append("\n");
        String out = sb.toString();
        System.out.println(out);
        return out;
    }

    // Exibir curiosidades/fatos (vários parágrafos)
    private String displayCuriosities() {
        StringBuilder sb = new StringBuilder();
        sb.append("=== Curiosidades e fatos ===\n");
        sb.append("• Hello Kitty foi criada em 1974 e seu design foi pensado para ser facilmente aplicável em produtos.\n");
        sb.append("• A personagem não apresenta boca — explicação estética para que o público projete emoções.\n");
        sb.append("• Nome oficial: Kitty White. Em algumas histórias, ela vive em Londres.\n");
        sb.append("• Itens icônicos: laço (bow), visual minimalista e cores pastéis.\n");
        sb.append("\n");
        // adicionar curiosidades extras para tornar o texto maior
        sb.append("Notas adicionais:\n");
        sb.append("- A imagem de Hello Kitty foi adaptada para diversas culturas e colaborações de moda.\n");
        sb.append("- Existem exposições, cafés temáticos e eventos de fãs ao redor do mundo.\n");
        sb.append("\n");
        String out = sb.toString();
        System.out.println(out);
        return out;
    }

    // Exibir galeria (apenas URLs e legendas)
    private String displayGallery() {
        StringBuilder sb = new StringBuilder();
        sb.append("=== Galeria (URLs ilustrativas) ===\n");
        for (GalleryImage g : gallery) {
            sb.append("- ").append(g.asText()).append("\n");
        }
        sb.append("\nObservação: substitua por imagens oficiais licenciadas, se necessário.\n\n");
        String out = sb.toString();
        System.out.println(out);
        return out;
    }

    // Exibir FAQ
    private String displayFAQ() {
        StringBuilder sb = new StringBuilder();
        sb.append("=== FAQ (Perguntas Frequentes) ===\n");
        for (FAQEntry f : faq) {
            sb.append(f.asText()).append("\n");
        }
        String out = sb.toString();
        System.out.println(out);
        return out;
    }

    // Busca simples por palavra-chave em todas as seções
    private String search(String kw) {
        if (kw == null || kw.trim().isEmpty()) {
            String msg = "Palavra-chave vazia. Tente novamente.\n";
            System.out.println(msg);
            return msg;
        }
        kw = kw.toLowerCase(Locale.ROOT);
        StringBuilder sb = new StringBuilder();
        sb.append("=== Resultados da busca por: '").append(kw).append("' ===\n\n");
        // Overview
        if (info.asText().toLowerCase(Locale.ROOT).contains(kw)) {
            sb.append("[Encontrado na visão geral]\n").append(info.asText()).append("\n");
        }
        // Timeline
        for (TimelineEntry t : timeline) {
            if (t.asText().toLowerCase(Locale.ROOT).contains(kw)) {
                sb.append("[Encontrado na timeline] ").append(t.asText()).append("\n");
            }
        }
        // related
        for (Map.Entry<String, String> e : relatedCharacters.entrySet()) {
            if (e.getKey().toLowerCase(Locale.ROOT).contains(kw) || e.getValue().toLowerCase(Locale.ROOT).contains(kw)) {
                sb.append("[Encontrado em personagens relacionados] ").append(e.getKey()).append(" — ").append(e.getValue()).append("\n");
            }
        }
        // FAQ
        for (FAQEntry f : faq) {
            if (f.question.toLowerCase(Locale.ROOT).contains(kw) || f.answer.toLowerCase(Locale.ROOT).contains(kw)) {
                sb.append("[Encontrado no FAQ] ").append(f.question).append("\n").append("Resposta: ").append(f.answer).append("\n");
            }
        }
        // gallery
        for (GalleryImage g : gallery) {
            if (g.caption.toLowerCase(Locale.ROOT).contains(kw) || g.url.toLowerCase(Locale.ROOT).contains(kw)) {
                sb.append("[Encontrado na galeria] ").append(g.asText()).append("\n");
            }
        }

        String result = sb.toString();
        if (result.trim().equals("=== Resultados da busca por: '" + kw + "' ===")) {
            result = "Nenhum resultado encontrado para: " + kw + "\n";
        }
        System.out.println(result);
        return result;
    }

    // Exporta texto para arquivo
    private void exportToFile(String text, String filename) throws IOException {
        try (FileWriter fw = new FileWriter(filename)) {
            fw.write(text);
            fw.flush();
        }
    }

    // Main
    public static void main(String[] args) {
        HelloKittyInfoApp app = new HelloKittyInfoApp();
        app.startInteractiveConsole();
    }
}
