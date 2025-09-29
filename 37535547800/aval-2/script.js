function carregarConteudo(secao) {
    const main = document.getElementById('conteudo-principal');
    main.innerHTML = ''; // Limpa o conteúdo anterior

    let htmlConteudo = '';

    switch (secao) {
        case 'entretenimento':
            htmlConteudo = `
                <h2>Entretenimento Geek e Pop</h2>
                <div class="secao-conteudo">
                    <div class="item-secao">
                        <h3>K-Pop e Doramas</h3>
                        <p>Meus grupos favoritos de K-Pop são *Stray Kids* e *TXT*.</p>
                        <p>No mundo dos Doramas, os favoritos são:</p>
                        <ul>
                            <li>Uma Classe de Heróis Fracos</li>
                            <li>Rainha das Lágrimas</li>
                            <li>Alice in Borderland</li>
                        </ul>
                        <img src="https://i.pinimg.com/736x/42/d5/d2/42d5d2f8c77c2dcbbc266fdf35ad49d3.jpg" alt="Imagem de K-Pop (Substituir)">
                        <img src="https://i.pinimg.com/1200x/4b/08/1e/4b081e46ae58b9fdf86800a8f70d2355.jpg" alt="Imagem de K-Pop (Substituir)">
                    </div>

                    <div class="item-secao">
                        <h3>Animes e Filmes</h3>
                        <p>Adoro os universos de super-heróis da *Marvel e DC*!</p>
                        <p>Meus Animes favoritos são:</p>
                        <ul>
                            <li>Haikyuu (Vôlei!)</li>
                            <li>Diário de uma Apotecaria</li>
                            <li>SPY family</li>
                            <li>Demon Slayer</li>
                            <li>The Fragrant Flower Blooms with Dignit</li>
                        </ul>
                       <img src="https://i.pinimg.com/1200x/8e/ea/c6/8eeac6b8bf0cfb344fc7561e01582f90.jpg" alt="Imagem dos Animes favoritos (Substituir)">
                        <img src="https://i.pinimg.com/736x/4c/8e/28/4c8e284550af115ed3f2a36cb84ae08f.jpg" alt="Imagem dos Animes favoritos (Substituir)">
                        </div>

                    <div class="item-secao">
                        <h3>Desenhos e Jogos</h3>
                        <p>Adoro a nostalgia de *Barbie* e *Tinker Bell*.</p>
                        <p>Também gosto de jogar *Jogos Mobile* online para me divertir.</p>
                        <img src="https://i.pinimg.com/1200x/ea/b8/c2/eab8c25fe4efb76c56eff5eb92fb3616.jpg" alt="Imagem de Barbie e Tinker Bell (Substituir)">
                    </div>

                    <div class="item-secao">
                        <h3>Esportes</h3>
                        <p>Sou super fã de *Fórmula 1*! Minha paixão é a *Ferrari* (sim, sou sofredora!).</p>
                        <p>Também acompanho e sei praticamente tudo sobre *Jogos de Vôlei*.</p>
                        <img src="https://i.pinimg.com/736x/cd/9c/ab/cd9cab152cdc22a4ebf9608351a096b2.jpg" alt="Imagem de F1 ou Vôlei (Substituir)">
                    </div>
                </div>
            `;
            break;

        case 'leitura':
            htmlConteudo = `
                <h2>Leitura e Hobbies</h2>
                <div class="secao-conteudo">
                    <div class="item-secao full-width">
                        <h3>Minha Autora Favorita: Ali Hazelwood</h3>
                        <p>Gosto de ler vários livros, mas a *Ali Hazelwood* é minha autora preferida. Meu favorito dela (e de lançamento) é **"A Hipótese do Amor"**.</p>
                        <p>Melhor leitura deste ano: "O Beijo da Neve" da Babi A. Sette.</p>
                        <img src="https://i.pinimg.com/1200x/8d/cc/0f/8dcc0f2f277fa0be654c8ed7c395bf94.jpg" alt="Imagem de Livros (Substituir)">
                    </div>

                    <div class="item-secao">
                        <h3>Outras Leituras de 2024</h3>
                        <ul>
                            <li>Uma Segunda Chance - Cooler Rover</li>
                            <li>O Lado Feio do Amor - Cooler Rover</li>
                            <li>Uma Farsa de Amor na Espanha - Elena Armas</li>
                            <li>Comprei mais dois livros da Ali Hazelwood!</li>
                        </ul>
                    </div>
                    <div class="item-secao">
                        <h3>Oportunidade na Escola (TEC)</h3>
                        <p>Atualmente, estou cursando o Tec. de Desenvolvimento de Sistemas no CETI Patronato Nossa Senhora de Lourdes!</p>
                    </div>
                
            `;
            break;

        case 'vida':
            htmlConteudo = `
                <h2>Vida, Fé e Futuro</h2>
                <div class="secao-conteudo">
                    <div class="item-secao">
                        <h3>Estudos e Amizades</h3>
                        <p>Estudo em período *integral* no CETI Patronato Nossa Senhora de Lourdes.</p>
                        <p>Tenho poucos amigos, mas valorizo muito os que estão comigo.</p>
                    </div>

                    <div class="item-secao">
                        <h3>Fé e Pets</h3>
                        <p>Sou batizada na **Congregação Cristã do Brasil**.</p>
                        <p>Minha família animal inclui:</p>
                        <ul>
                            <li>Dois cachorros: uma Lulu da Pomerânia (Sininho) e um Poodle (Ted).</li>
                            <li>Muitos *gatos*!</li>
                        </ul>
                    </div>
                    
                    <div class="item-secao full-width">
                        <h3>Sonhos e Futuro</h3>
                        <p>Ainda estou decidindo qual caminho seguir na faculdade. As opções são:</p>
                        <ol>
                            <li>Medicina</li>
                            <li>Engenharia</li>
                            <li>Bioquímica</li>
                        </ol>
                        <p>O foco é ingressar no ensino superior!</p>
                    </div>
                </div>
            `;
            break;

        default:
            htmlConteudo = `<h2>Seção não encontrada.</h2>`;
    }

    main.innerHTML = htmlConteudo;
}