const posts = [
    {
        user: "FroJho",
        avatar: "https://i.imgur.com/7k12F.png",
        image: "https://kaleoz-media.seagmcdn.com/kaleoz-store/202407/oss-787364ef1b5e5051acc8788647a9c4ce.png",
        time: "há 10 minutos"
    },
    {
        user: "FroJho",
        avatar: "https://i.imgur.com/7k12F.png",
        image: "https://apkbomb.com/wp-content/uploads/2025/05/free-fire-max-1-3.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod beatae quas nihil sed fugit voluptatibus repellat delectus ut tempora debitis est dolorum deserunt.",
        time: "há 10 minutos"
    },
    {
        user: "FroJho",
        avatar: "https://i.imgur.com/7k12F.png",
        image: "https://play-lh.googleusercontent.com/fPV15zPzpECONm08K6BUS5EqD1A1Ir_hxsOaaJF7hOIK-BNDpFO-i3MAvUVM7952JJyGAhg1VJwzDKtYT2QB8Ns=w240-h480-rw",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod beatae quas nihil sed fugit voluptatibus repellat delectus ut tempora debitis est dolorum deserunt.",
        time: "há 10 minutos"
    }
];

const container = document.querySelector(".feed-container");

posts.forEach(post => {
    container.innerHTML += `
        <div class="card">
            <div class="card-header">
                <img src="${post.avatar}" alt="avatar">
                <h3>${post.user}</h3>
            </div>

            <img src="${post.image}" class="post-image">

            <div class="card-content">
                ${post.text}
            </div>

            <div class="card-footer">
                ${post.time}
            </div>
        </div>
    `;
});
