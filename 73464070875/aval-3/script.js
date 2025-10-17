    // JavaScript para controlar o botão de curtir
    (function(){
        const likeBtn = document.getElementById('likeBtn');
        const likeCountEl = document.getElementById('likeCount');
  
        // Parse inicial do valor de likes (número no HTML)
        let likes = parseInt(likeCountEl.textContent.replace(/\D/g,''), 10) || 0;
        let liked = false;
  
        function updateUI(){
          likeCountEl.textContent = likes;
          likeBtn.setAttribute('aria-pressed', String(liked));
          if(liked){
            likeBtn.classList.add('liked');
            // animação adicional: pulso rápido
            const heart = likeBtn.querySelector('svg');
            heart.style.transform = 'scale(1.12)';
            setTimeout(()=> heart.style.transform = '', 180);
          } else {
            likeBtn.classList.remove('liked');
          }
        }
  
        likeBtn.addEventListener('click', function(e){
          liked = !liked;
          likes += liked ? 1 : -1;
          if(likes < 0) likes = 0;
          updateUI();
        });
  
        // atalhos: curtir com duplo-clique na imagem
        const postPhoto = document.getElementById('post-photo');
        postPhoto.addEventListener('dblclick', function(){
          if(!liked){
            liked = true;
            likes += 1;
            updateUI();
          } else {
            // opcional: manter igual se já curtido
          }
        });
  
        // Inicia UI
        updateUI();
  
        // Acessibilidade: ativar com teclado (Enter/Space)
        likeBtn.addEventListener('keydown', function(e){
          if(e.key === 'Enter' || e.key === ' '){
            e.preventDefault();
            likeBtn.click();
          }
        });
      })();