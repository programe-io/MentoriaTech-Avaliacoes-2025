// Criar elemento com função para facilitar
function create(tag, content = "", className = "") {
    const el = document.createElement(tag);
        if (content) el.innerHTML = content;
            if (className) el.className = className;
                return el;
                }

                // BODY
                document.body.style.margin = "0";
                document.body.style.fontFamily = "Arial";

                // HEADER
                const header = create("header");
                const h1 = create("h1", "Meu Site");
                const pHeader = create("p", "Meu site muito bom!");

                header.appendChild(h1);
                header.appendChild(pHeader);
                document.body.appendChild(header);

                // NAV
                const nav = create("nav");
                ["começo", "Pagina 2", "Pagina 3", "Pagina 4"].forEach(text => {
                    const a = create("a", text);
                        a.href = "#";
                            a.style.marginRight = "15px";
                                nav.appendChild(a);
                                });
                                document.body.appendChild(nav);

                                // SECTION (ROW)
                                const section = create("section");
                                section.id = "row";
                                section.style.display = "flex";

                                // ASIDE
                                const aside = create("aside");
                                aside.appendChild(create("h2", "Sobre Eu"));
                                aside.appendChild(create("h5", "Foto"));

                                aside.appendChild(create("div", "Imagem", "fakeimage"));

                                aside.appendChild(create("p", "Minha Bio"));
                                aside.appendChild(create("h3", "Minhas foto"));

                                aside.appendChild(create("div", "Imagem", "fakeimage"));
                                aside.appendChild(create("div", "Imagem", "fakeimage"));
                                aside.appendChild(create("div", "Imagem", "fakeimage"));

                                // MAIN + ARTICLE
                                const main = create("main");
                                const article = create("article");

                                article.appendChild(create("h2", "TITULO DA POSTAGEM"));
                                article.appendChild(create("h5", "Maria, 29 de out, 2025"));

                                const img = create("img");
                                img.src = "";
                                img.alt = "";
                                article.appendChild(img);

                                const pArticle = create("p", 
                                `
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Ex, minus aliquam nostrum, id veniam, repellat distinctio libero 
                                molestiae dicta labore veritatis dolore recusandae unde! 
                                Ipsum suscipit ducimus quo magni rerum.
                                `
                                );
                                article.appendChild(pArticle);
                                main.appendChild(article);

                                // Juntar aside + main
                                section.appendChild(aside);
                                section.appendChild(main);

                                document.body.appendChild(section);

                                // FOOTER
                                const footer = create("footer");
                                footer.appendChild(
                                    create("p", "CopyRight - Todos os Direitos Reservados - 2024 | programe.io")
                                    );
                                    document.body.appendChild(footer);

                                    // Pequeno estilo para as caixas fake
                                    document.querySelectorAll(".fakeimage").forEach(div => {
                                        div.style.background = "#ccc";
                                            div.style.padding = "20px";
                                                div.style.margin = "5px 0";
                                                });