const steps = [
  {
    title: "1️⃣ Limpeza e Hidratação",
    image: "https://cdn.pixabay.com/photo/2017/08/06/09/03/woman-2593366_1280.jpg",
    text: "Lave o rosto com sabonete facial e aplique hidratante. Isso prepara a pele e ajuda a maquiagem a durar mais."
  },
  {
    title: "2️⃣ Base e Corretivo",
    image: "https://cdn.pixabay.com/photo/2018/06/13/17/03/makeup-3478046_1280.jpg",
    text: "Aplique a base que combine com seu tom de pele e o corretivo nas olheiras e pequenas manchas."
  },
  {
    title: "3️⃣ Pó e Blush",
    image: "https://cdn.pixabay.com/photo/2017/08/06/09/03/makeup-2593368_1280.jpg",
    text: "Use o pó compacto para selar a pele e adicione blush nas maçãs do rosto para um ar saudável."
  },
  {
    title: "4️⃣ Olhos e Sobrancelhas",
    image: "https://cdn.pixabay.com/photo/2016/11/29/02/35/beauty-1867123_1280.jpg",
    text: "Aplique sombra neutra, rímel e preencha as sobrancelhas levemente para destacar o olhar."
  },
  {
    title: "5️⃣ Batom Final",
    image: "https://cdn.pixabay.com/photo/2017/03/06/21/44/lipstick-2121183_1280.jpg",
    text: "Finalize com um batom suave, como rosa ou nude, para um visual elegante e natural."
  }
];

let currentStep = 0;

const stepTitle = document.getElementById("step-title");
const stepImage = document.getElementById("step-image");
const stepText = document.getElementById("step-text");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

function showStep(index) {
  stepTitle.textContent = steps[index].title;
  stepImage.src = steps[index].image;
  stepText.textContent = steps[index].text;
}

nextBtn.addEventListener("click", () => {
  currentStep = (currentStep + 1) % steps.length;
  showStep(currentStep);
});

prevBtn.addEventListener("click", () => {
  currentStep = (currentStep - 1 + steps.length) % steps.length;
  showStep(currentStep);
});
