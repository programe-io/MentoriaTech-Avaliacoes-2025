const posts = [
    {
        nome: "Manomax",
        perfil: "https://yt3.googleusercontent.com/8lqtY6SS5cOl6RapF1BKlVXdhQMf2MBzn2TZpIB3izdLyYRS3mixvrNQ8YmunbCJPWR95LvzFA=s900-c-k-c0x00ffffff-no-rj",
        imagem: "https://kaleoz-media.seagmcdn.com/kaleoz-store/202407/oss-787364ef1b5e5051acc8788647a9c4ce.png",
        texto: "Rei do 4x4",
        tempo: "há 10 minutos"
    },
    {
        nome: "LevelUp",
        perfil: "https://yt3.googleusercontent.com/u9juATWi54PQsNo6CAwrokOsBARcs8TSU0m8Ng9BK9w7U9GdGy2WoS-caTzrwJMmEWWQCw975A=s900-c-k-c0x00ffffff-no-r",
        imagem: "https://play-lh.googleusercontent.com/fPV15zPzpECONm08K6BUS5EqD1A1Ir_hxsOaaJF7hOIK-BNDpFO-i3MAvUVM7952JJyGAhg1VJwzDKtYT2QB8Ns=w240-h480-rw",
        texto: "ganhou um mundial",
        tempo: "há 10 minutos"
    },
    {
        nome: "Apelapato",
        perfil: "https://i.pinimg.com/736x/f2/79/ef/f279efd36e6fe8e74ecf8b50e181dc88.jpg",
        imagem: "https://apkbomb.com/wp-content/uploads/2025/05/free-fire-max-1-3.png",
        texto: "criador da agachadinha",
        tempo: "há 10 minutos"
    }
];

const feed = document.getElementById("feed");

posts.forEach(post => {
    feed.innerHTML += `
    <div class="post">
        <div class="post-header">
            <img src="${post.perfil}" alt="">
            <span class="post-title">${post.nome}</span>
        </div>

        <img class="post-img" src="${post.imagem}" alt="Post Image">

        <p class="post-text">${post.texto}</p>

        <p class="post-time">${post.tempo}</p>
    </div>
    `;
});
