const images=[
      {src:'https://source.unsplash.com/1600x900/?helicopter,aircraft,1',title:'Helicóptero de patrulha',type:'military',sub:'Foto aérea'},
        {src:'https://source.unsplash.com/1600x900/?helicopter,rescue,2',title:'Resgate em ação',type:'rescue',sub:'Operação'},
          {src:'https://source.unsplash.com/1600x900/?helicopter,city,3',title:'Sobrevoando a cidade',type:'civil',sub:'Centro urbano'},
            {src:'https://source.unsplash.com/1600x900/?helicopter,night,4',title:'Helicóptero noturno',type:'civil',sub:'Missão noturna'},
              {src:'https://source.unsplash.com/1600x900/?helicopter,military,5',title:'Exército em prontidão',type:'military',sub:'Treinamento'},
                {src:'https://source.unsplash.com/1600x900/?helicopter,coast,6',title:'Resgate costeiro',type:'rescue',sub:'Costa'},
                  {src:'https://source.unsplash.com/1600x900/?helicopter,transport,7',title:'Transporte VIP',type:'civil',sub:'Passageiros'},
                    {src:'https://source.unsplash.com/1600x900/?helicopter,sky,8',title:'Acima das nuvens',type:'civil',sub:'Voo alto'}
                    ];

                    const gallery=document.getElementById('gallery');
                    const search=document.getElementById('search');
                    const filter=document.getElementById('filter');
                    const shuffle=document.getElementById('shuffle');
                    let current=[...images];

                    function render(list){
                      gallery.innerHTML='';
                        list.forEach((img,i)=>{
                            const card=document.createElement('div');
                                card.className='card';
                                    card.dataset.idx=i;

                                        card.innerHTML=
                                            `<img src="${img.src}" alt="${img.title}">
                                                 <div class='overlay'>
                                                        <div class='caption'>${img.title}</div>
                                                               <div class='sub'>${img.sub}</div>
                                                                    </div>`;

                                                                        card.onclick=()=>openLB(i,list);
                                                                            gallery.appendChild(card);
                                                                              });
                                                                              }
                                                                              render(current);

                                                                              function apply(){
                                                                                const q=search.value.toLowerCase();
                                                                                  const t=filter.value;

                                                                                    current=images.filter(i=>{
                                                                                        const okT=t==='all'||i.type===t;
                                                                                            const okQ=(i.title+i.sub+i.type).toLowerCase().includes(q);
                                                                                                return okT&&okQ;
                                                                                                  });

                                                                                                    render(current);
                                                                                                    }

                                                                                                    search.oninput=apply;
                                                                                                    filter.onchange=apply;

                                                                                                    shuffle.onclick=()=>{
                                                                                                      current.sort(()=>Math.random()-.5);
                                                                                                        render(current);
                                                                                                        }

                                                                                                        const lb=document.getElementById('lightbox');
                                                                                                        const lbImg=document.getElementById('lb-image');
                                                                                                        const lbTitle=document.getElementById('lb-title');
                                                                                                        const lbSub=document.getElementById('lb-sub');
                                                                                                        const download=document.getElementById('download');
                                                                                                        let active=0;

                                                                                                        function openLB(i,list){
                                                                                                          active=i;
                                                                                                            const img=list[i];
                                                                                                              lbImg.src=img.src;
                                                                                                                lbTitle.textContent=img.title;
                                                                                                                  lbSub.textContent=img.sub+" • Tipo: "+img.type;
                                                                                                                    download.href=img.src;
                                                                                                                      lb.classList.add('show');
                                                                                                                      }

                                                                                                                      function closeLB(){ lb.classList.remove('show'); }

                                                                                                                      function nav(d){
                                                                                                                        active=(active+d+current.length)%current.length;
                                                                                                                          openLB(active,current);
                                                                                                                          }

                                                                                                                          document.getElementById('prev').onclick=()=>nav(-1);
                                                                                                                          document.getElementById('next').onclick=()=>nav(1);

                                                                                                                          lb.onclick=e=>{if(e.target===lb)closeLB();};

                                                                                                                          window.onkeydown=e=>{
                                                                                                                            if(!lb.classList.contains('show'))return;
                                                                                                                              if(e.key==='ArrowLeft')nav(-1);
                                                                                                                                if(e.key==='ArrowRight')nav(1);
                                                                                                                                  if(e.key==='Escape')closeLB();
                                                                                                                                  };
]