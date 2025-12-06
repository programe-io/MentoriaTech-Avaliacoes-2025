document.getElementById("year").textContent = new Date().getFullYear();

function showModal(title, body){
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-body").textContent = body;
  document.getElementById("modal").style.display = "flex";
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}

function filterPosts(){
  const q = document.getElementById("q").value.toLowerCase();
  document.querySelectorAll(".post").forEach(p => {
    const title = p.dataset.title.toLowerCase();
    const tags = p.dataset.tags.toLowerCase();
    p.style.display = (title.includes(q) || tags.includes(q)) ? "" : "none";
  });
}

function resetFilter(){
  document.getElementById("q").value = "";
  filterPosts();
}

function filterByTag(tag){
  document.querySelectorAll(".post").forEach(p=>{
    p.style.display = p.dataset.tags.includes(tag.toLowerCase()) ? "" : "none";
  });
}

function scrollToPosts(){
  window.scrollTo({top:300, behavior:"smooth"});
}

function openContact(){
  alert("E-mail: angela@exemplo.com");
}
