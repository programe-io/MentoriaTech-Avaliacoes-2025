document.addEventListener('DOMContentLoaded', () => {
    const flowerContainer = document.getElementById('flower-container');
    
    
    const flowerEmojis = ['🌸', '🌺', '🌷', '💮', '🌼', '💐'];

    function createFlower() {
        
        const flower = document.createElement('div');
        flower.classList.add('flower');

        
        const randomEmoji = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
        flower.textContent = randomEmoji;

       
        flower.style.left = Math.random() * 95 + 'vw';
        
        
        const duration = Math.random() * 5 + 5;
        flower.style.animationDuration = duration + 's';
        
       
        flower.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
        
      
        flower.style.opacity = Math.random() * 0.5 + 0.4;

      
        flowerContainer.appendChild(flower);

       
        setTimeout(() => {
            flower.remove();
        }, duration * 1000);
    }

    
    setInterval(createFlower, 400);
});