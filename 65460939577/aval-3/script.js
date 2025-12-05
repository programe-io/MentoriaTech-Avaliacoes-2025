function tryLoadImg(imgEl, debugEl){
      const raw = imgEl.getAttribute('data-srcs') || '';
        const urls = raw.split('|').map(s=>s.trim()).filter(Boolean);

          if(urls.length === 0){
              showPlaceholder(imgEl, debugEl, 'nenhuma url');
                  return;
                    }

                      let i = 0;

                        const attempt = () => {
                            if(i >= urls.length){
                                  showPlaceholder(imgEl, debugEl, 'nenhuma funcionou');
                                        return;
                                            }

                                                const url = urls[i];
                                                    const tester = new Image();

                                                        tester.onload = () => {
                                                              imgEl.src = url;
                                                                    if(debugEl) debugEl.textContent = 'carregou: ' + url;
                                                                        };

                                                                            tester.onerror = () => {
                                                                                  i++;
                                                                                        attempt();
                                                                                            };

                                                                                                tester.src = url + (url.includes('?') ? '&' : '?') + 'v=1';
                                                                                                  };

                                                                                                    attempt();
                                                                                                    }

                                                                                                    function showPlaceholder(imgEl, debugEl, msg){
                                                                                                      const wrap = imgEl.parentElement;
                                                                                                        imgEl.style.display = 'none';

                                                                                                          const ph = wrap.querySelector('.placeholder');
                                                                                                            if(ph) ph.style.display = 'flex';

                                                                                                              if(debugEl) debugEl.textContent = 'placeholder — ' + msg;
                                                                                                              }

                                                                                                              document.addEventListener('DOMContentLoaded', ()=>{
                                                                                                                const imgs = document.querySelectorAll('img[data-srcs]');

                                                                                                                  imgs.forEach((img, idx)=>{
                                                                                                                      const debugId = 'post'+(idx+1)+'-debug';
                                                                                                                          const debugEl = document.getElementById(debugId);
                                                                                                                              tryLoadImg(img, debugEl);
                                                                                                                                });

                                                                                                                                  const avatarUrls = [
                                                                                                                                      'https://images.unsplash.com/photo-1545996124-0b6f6a3d7b2a?auto=format&fit=crop&w=400&q=80',
                                                                                                                                          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
                                                                                                                                              'https://i.ibb.co/9wJ7f3Y/woman-profile.jpg'
                                                                                                                                                ];

                                                                                                                                                  const avatars = document.querySelectorAll('.avatar');

                                                                                                                                                    function tryAvatarLoad(i){
                                                                                                                                                        if(i >= avatarUrls.length){
                                                                                                                                                              const svg = 'data:image/svg+xml;utf8,' + encodeURIComponent(
                                                                                                                                                                      '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><rect width="120" height="120" fill="#ddd"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#999" font-size="16">User</text></svg>'
                                                                                                                                                                            );

                                                                                                                                                                                  avatars.forEach(a=>a.src = svg);

                                                                                                                                                                                        const ad = document.getElementById('avatar-debug');
                                                                                                                                                                                              if(ad) ad.textContent = 'avatar: placeholder';

                                                                                                                                                                                                    return;
                                                                                                                                                                                                        }

                                                                                                                                                                                                            const url = avatarUrls[i];
                                                                                                                                                                                                                const tester = new Image();

                                                                                                                                                                                                                    tester.onload = () => {
                                                                                                                                                                                                                          avatars.forEach(a=>a.src = url);

                                                                                                                                                                                                                                const ad = document.getElementById('avatar-debug');
                                                                                                                                                                                                                                      if(ad) ad.textContent = 'avatar carregou: ' + url;
                                                                                                                                                                                                                                          };

                                                                                                                                                                                                                                              tester.onerror = ()=> tryAvatarLoad(i+1);

                                                                                                                                                                                                                                                  tester.src = url + (url.includes('?')? '&':'?') + 'v=1';
                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                      tryAvatarLoad(0);
                                                                                                                                                                                                                                                      });
}