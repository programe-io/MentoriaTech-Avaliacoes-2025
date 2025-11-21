// Dados simulados para o feed (simula a resposta de uma API)
const feedData = [
    {
        username: "MerchOficialBR",
        avatar: "https://tfcprw.vtexassets.com/arquivos/ids/368127-800-auto?v=638733150107370000&width=800&height=auto&aspect=true",
        title: "NOVO Vinil - 'Hit Me Hard and Soft'",
        text: "Garanta já a edição limitada em vinil! Qualidade de áudio impecável e arte exclusiva.",
        image: "https://universalmusic.vtexassets.com/arquivos/ids/187259/vinil-billie-eilish-hit-me-hard-and-soft-lp-standard-importado-vinil-billie-eilish-hit-me-hard-and-so-00602465223651-00060246522365.jpg?v=638575359569070000",
        price: "R$ 350,00",
        type: "venda"
    },
    {
        username: "FanArt_Lover",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxeWTCAeEVfLxTOHcvEYxE3k8IQuGbkniouQ&s",
        title: "Minha arte inspirada em 'Bad Guy'!",
        text: "Fiz essa pintura digital. Alguém mais ama a fase 'Where Do We Go?'",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/92/9f/69/929f69f1-9977-3a44-d674-11f70c852d1b/24UMGIM36186.rgb.jpg/486x486bb.png",
        price: "N/A",
        type: "fã"
    },
    {
        username: "CDsRarosSP",
        avatar: "https://mundoavatar.com.br/wp-content/uploads/2023/10/AVATAR-THE-LAST-AIRBENDER-Digital-Vinyl-Album-Score-scaled-1.jpeg",
        title: "CD 'WHEN WE ALL FALL ASLEEP' Autografado!",
        text: "Item de colecionador! CD autografado, em perfeito estado. Última unidade.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGSkkRK1iEEv6rzAxpoJvTu6EO1SGSydQ4mQ&s",
        price: "R$ 780,00",
        type: "venda"
    }
    // Adicione mais objetos aqui para mais postagens
];

document.addEventListener('DOMContentLoaded', () => {
    const feedContainer = document.getElementById('feed-container');
    const postTemplate = document.getElementById('post-template');

    feedData.forEach(postData => {
        // Clonar o conteúdo do template
        const postClone = postTemplate.content.cloneNode(true);
        
        // Mapear os elementos dentro do clone
        const postElement = postClone.querySelector('.post');
        const usernameEl = postClone.querySelector('.post-username');
        const avatarEl = postClone.querySelector('.post-avatar');
        const titleEl = postClone.querySelector('.post-title');
        const textEl = postClone.querySelector('.post-text');
        const imageEl = postClone.querySelector('.post-image');
        const priceEl = postClone.querySelector('.post-price');
        const buyButton = postClone.querySelector('.buy-button');

        // Preencher os dados
        usernameEl.textContent = postData.username;
        avatarEl.src = postData.avatar; // Lembre-se de criar essa imagem
        avatarEl.alt = `Avatar de ${postData.username}`;

        titleEl.textContent = postData.title;
        textEl.textContent = postData.text;
        
        // Configurar a imagem
        if (postData.image) {
            imageEl.src = postData.image; // Lembre-se de criar essa imagem
            imageEl.alt = postData.title;
        } else {
            imageEl.style.display = 'none'; // Esconde a imagem se não houver URL
        }

        // Configurar o preço e botão
        priceEl.textContent = postData.price;
        if (postData.type === 'venda') {
            buyButton.textContent = 'Comprar Agora';
            // Adicionar lógica de compra (simulada)
            buyButton.addEventListener('click', () => {
                alert(`Você clicou para comprar: ${postData.title}`);
            });
        } else {
            // Se for postagem de fã, muda o botão e preço
            priceEl.textContent = 'Fã Post';
            buyButton.textContent = 'Curtir';
            buyButton.style.backgroundColor = 'var(--secondary-accent)';
            buyButton.addEventListener('click', () => {
                alert(`Você curtiu a postagem de ${postData.username}!`);
            });
        }

        // Inserir a postagem completa no feed
        feedContainer.appendChild(postClone);
    });
});