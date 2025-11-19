// ----- GERA 3 CARDS AUTOMATICAMENTE -----
const cardsContainer = document.getElementById('cardsContainer');

const imgMcQueen = "https://s3.amazonaws.com/blog.dentrodahistoria.com.br/wp-content/uploads/2022/09/14102229/relampago-mcqueen.png";

const cardData = [{}, {}, {}];

cardData.forEach(() => {
    cardsContainer.innerHTML += `
    <div class="card">
        <div class="topo-card">
            <img class="avatar" src="https://via.placeholder.com/40" alt="avatar">
            <span>FroJho</span>
        </div>

        <div class="img-section">
            <img src="${imgMcQueen}" alt="Relâmpago McQueen">
            <img src="${imgMcQueen}" alt="Relâmpago McQueen">
            <img src="${imgMcQueen}" alt="Relâmpago McQueen">
        </div>

        <p class="texto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quod beatae quas nihil sed fugit voluptatibus repellat 
            delectus ut tempora debitis est dolorum deserunt.
        </p>

        <p class="tempo">há <span>10 minutos</span></p>
    </div>
    `;
});
