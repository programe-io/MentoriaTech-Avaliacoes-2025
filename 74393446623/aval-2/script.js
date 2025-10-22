// =================================================================
// 1. CARROSSEL SIMPLES (SLIDESHOW) PARA A SEÇÃO HERO
//    (Assumindo que você adicione mais divs para os slides no HTML)
// =================================================================

const heroSection = document.querySelector('.hero');
const slides = [
    {
        title: "Encontre o Carro Perfeito para Você!",
        text: "Os melhores veículos novos e seminovos com as melhores condições do mercado.",
        image: "url('banner-carro-1.jpg')" // Substitua pela sua URL
    },
    {
        title: "OFERTA IMPERDÍVEL DA SEMANA!",
        text: "Zero Km com taxa zero e primeira parcela só em 90 dias.",
        image: "url('banner-carro-2.jpg')" // Substitua pela sua URL
    },
    {
        title: "Seu Usado Vale Mais Aqui!",
        text: "Avaliação justa e troca facilitada no seu novo veículo.",
        image: "url('banner-carro-3.jpg')" // Substitua pela sua URL
    }
];

let currentSlide = 0;

function updateSlide() {
    // Aplica a imagem de fundo e as cores
    heroSection.style.backgroundImage = slides[currentSlide].image;

    // Atualiza o texto, mantendo a estrutura do botão
    heroSection.querySelector('h2').textContent = slides[currentSlide].title;
    heroSection.querySelector('p').textContent = slides[currentSlide].text;

    // Passa para o próximo slide
    currentSlide = (currentSlide + 1) % slides.length;
}

// Inicia o carrossel e troca a cada 5 segundos
// NOTA: Para este carrossel funcionar, você deve ter as imagens:
// 'banner-carro-1.jpg', 'banner-carro-2.jpg', e 'banner-carro-3.jpg'
// na pasta do seu projeto.
if (heroSection) {
    // Chama a função imediatamente para carregar o primeiro slide
    updateSlide(); 
    // Define o intervalo para trocar o slide automaticamente
    setInterval(updateSlide, 5000); 
}


// =================================================================
// 2. VALIDAÇÃO SIMPLES DO FORMULÁRIO DE CONTATO
// =================================================================

const formContato = document.querySelector('.formulario-contato');

if (formContato) {
    formContato.addEventListener('submit', function(event) {
        
        // Impede o envio padrão do formulário (para validar primeiro)
        event.preventDefault(); 
        
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        let isValid = true;
        let errorMessage = '';

        // Validação de Nome
        if (nome === '' || nome.length < 2) {
            isValid = false;
            errorMessage += '• O campo Nome é obrigatório e deve ter pelo menos 2 caracteres.\n';
        }
        
        // Validação de Email (Regex simples para verificar o formato básico)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            errorMessage += '• Por favor, insira um endereço de e-mail válido.\n';
        }

        // Validação de Mensagem
        if (mensagem.length < 10) {
            isValid = false;
            errorMessage += '• A Mensagem é obrigatória e deve ter pelo menos 10 caracteres.\n';
        }

        if (isValid) {
            // Se tudo estiver OK, exibe uma mensagem de sucesso
            alert('Mensagem enviada com sucesso! Em breve, um consultor entrará em contato.');
            
            // Aqui, você faria o envio real dos dados (via AJAX/fetch)
            // Para simplificar, vamos apenas limpar o formulário.
            formContato.reset();

        } else {
            // Se houver erros, exibe a mensagem com todos os problemas
            alert('Atenção, corrija os seguintes erros no formulário:\n\n' + errorMessage);
        }
    });
}


// =================================================================
// 3. EFEITO DE SCROLL SUAVE (Smooth Scroll)
// =================================================================
// Faz com que os links internos (como os do menu) rolem a página suavemente

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});