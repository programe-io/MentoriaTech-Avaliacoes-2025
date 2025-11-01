const postsContainer = document.getElementById('posts');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const newPostBtn = document.getElementById('newPostBtn');
const savePost = document.getElementById('savePost');
const titleInput = document.getElementById('titleInput');
const contentInput = document.getElementById('contentInput');
const imageInput = document.getElementById('imageInput');
const searchInput = document.getElementById('searchInput');
const themeToggle = document.getElementById('themeToggle');

function createInitialPosts(){
  const posts=[
    {title:"🌅 Um novo começo", content:"Todo dia é uma chance de recomeçar.", image:"https://via.placeholder.com/600x250", date:new Date().toLocaleDateString('pt-BR'), comments:[]},
    {title:"💡 Reflexão da semana", content:"A beleza está no percurso.", image:"https://via.placeholder.com/600x250", date:new Date().toLocaleDateString('pt-BR'), comments:[]}
  ];
  localStorage.setItem('posts',JSON.stringify(posts));
  return posts;
}

function loadPosts(){
  const posts = JSON.parse(localStorage.getItem('posts')) || createInitialPosts();
  postsContainer.innerHTML='';
  posts.forEach((post,index)=>{
    const article = document.createElement('article');
    article.className='post';
    article.innerHTML=`
      <h2>${post.title}</h2>
      <small>${post.date}</small>
      ${post.image? `<img src="${post.image}" alt="Imagem do post">` : ''}
      <p>${post.content}</p>
      <button class="delete-post" onclick="deletePost(${index})">🗑️ Apagar Post</button>
      <div class="comment-box">
        <input type="text" id="comment-${index}" placeholder="Escreva um comentário...">
        <button onclick="addComment(${index})">Comentar</button>
        <div id="comments-${index}" class="comments">
          ${(post.comments||[]).map(c=>`<div class="comment">💬 ${c}</div>`).join('')}
        </div>
      </div>
    `;
    postsContainer.appendChild(article);
  });
  updateRecentPosts();
}

function saveNewPost(){
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();
  const image = imageInput.value.trim();
  if(!title || !content) return alert("Preencha todos os campos.");
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.unshift({title,content,image,date:new Date().toLocaleDateString('pt-BR'),comments:[]});
  localStorage.setItem('posts',JSON.stringify(posts));
  titleInput.value=''; contentInput.value=''; imageInput.value='';
  modal.style.display='none';
  loadPosts();
}

function deletePost(index){
  if(!confirm("Deseja realmente apagar este post?")) return;
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.splice(index,1);
  localStorage.setItem('posts',JSON.stringify(posts));
  loadPosts();
}

function addComment(index){
  const input = document.getElementById(`comment-${index}`);
  const text = input.value.trim();
  if(!text) return;
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts[index].comments.push(text);
  localStorage.setItem('posts',JSON.stringify(posts));
  input.value='';
  loadPosts();
}

function updateRecentPosts(){
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  const recentList = document.getElementById('recentPosts');
  recentList.innerHTML='';
  posts.slice(0,5).forEach(post=>{
    const li = document.createElement('li');
    li.innerHTML=`<a href="#">${post.title}</a>`;
    recentList.appendChild(li);
  });
}

// EVENTOS
searchInput.addEventListener('input',e=>{
  const term=e.target.value.toLowerCase();
  document.querySelectorAll('.post').forEach(p=>{
    p.style.display=p.innerText.toLowerCase().includes(term)?'block':'none';
  });
});

themeToggle.addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  const icon=themeToggle.querySelector('i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});

newPostBtn.addEventListener('click',()=> modal.style.display='flex');
closeModal.addEventListener('click',()=> modal.style.display='none');
window.addEventListener('click', e=>{if(e.target===modal) modal.style.display='none';});
savePost.addEventListener('click', saveNewPost);

loadPosts();
