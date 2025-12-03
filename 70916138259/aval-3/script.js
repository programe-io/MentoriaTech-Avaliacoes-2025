document.addEventListener('DOMContentLoaded', () => {
        // 1. Dados para Skins Populares
            const popularSkins = [
                    { name: "AK-47 | Redline", desc: "Uma skin clássica, conhecida por seu estilo preto e vermelho.", img: "caminho/para/ak47_redline.jpg" }, // Dados baseados em pesquisa
                            { name: "AWP | Asiimov", desc: "Design futurista e arrojado em cores branco, preto e laranja.", img: "caminho/para/awp_asiimov.jpg" },
                                    { name: "Desert Eagle | Printstream", desc: "Design minimalista e brilhante em preto e branco.", img: "caminho/para/deagle_printstream.jpg" },
                                            { name: "M4A4 | The Emperor", desc: "Inspirada em cartas de tarô, com detalhes em ouro.", img: "caminho/para/m4a4_emperor.jpg" }
                                                ];

                                                    // 2. Dados para Mapas Competitivos (Active Duty Pool - Exemplo)
                                                        const competitiveMaps = [
                                                                { name: "Mirage", desc: "Um mapa clássico e bem equilibrado, ambientado em um cenário do Oriente Médio.", img: "caminho/para/mapa_mirage.jpg" },
                                                                        { name: "Inferno", desc: "Ambientado em uma pitoresca vila italiana, conhecido por seus corredores apertados.", img: "caminho/para/mapa_inferno.jpg" },
                                                                                { name: "Nuke", desc: "Único por ter dois *bomb sites* em níveis diferentes, em uma usina nuclear.", img: "caminho/para/mapa_nuke.jpg" },
                                                                                        { name: "Anubis", desc: "Um mapa mais recente, com tema egípcio, introduzido no *map pool* competitivo.", img: "caminho/para/mapa_anubis.jpg" }
                                                                                            ];

                                                                                                // 3. Função para Inserir Dados no HTML
                                                                                                    function createCard(data, containerId) {
                                                                                                            const container = document.getElementById(containerId);
                                                                                                                    data.forEach(item => {
                                                                                                                                const card = document.createElement('div');
                                                                                                                                            card.className = 'card';
                                                                                                                                                        card.innerHTML = `
                                                                                                                                                                        <img src="${item.img}" alt="${item.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x200/333333/FFFFFF?text=IMAGEM+${item.name.split(' ')[0]}'">
                                                                                                                                                                                        <div class="card-content">
                                                                                                                                                                                                            <h3>${item.name}</h3>
                                                                                                                                                                                                                                <p>${item.desc}</p>
                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                            `;
                                                                                                                                                                                                                                                                        container.appendChild(card);
                                                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                        // 4. Inserir Skins e Mapas
                                                                                                                                                                                                                                                                                            createCard(popularSkins, 'skins-container');
                                                                                                                                                                                                                                                                                                createCard(competitiveMaps, 'maps-container');

                                                                                                                                                                                                                                                                                                    // 5. Funcionalidade de Scroll (Botão Hero)
                                                                                                                                                                                                                                                                                                        const scrollButton = document.getElementById('scrollToSkins');
                                                                                                                                                                                                                                                                                                            const skinsSection = document.getElementById('skins-section');

                                                                                                                                                                                                                                                                                                                scrollButton.addEventListener('click', () => {
                                                                                                                                                                                                                                                                                                                        skinsSection.scrollIntoView({ behavior: 'smooth' });
                                                                                                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                                                                                                            
})