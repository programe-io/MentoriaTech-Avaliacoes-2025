function toggleSidebar(){
  const s = document.getElementById('sidebar');
  s.classList.toggle('open');
}

function closeAllDropdowns(){
  document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
}

function toggleDropdown(e, id){
  e.stopPropagation();
  const drop = document.getElementById(id);
  const isOpen = drop.classList.contains('open');
  closeAllDropdowns();
  if(!isOpen) drop.classList.add('open');
}

window.addEventListener('click', function(){
  closeAllDropdowns();
});

document.querySelectorAll('.dropdown').forEach(d => {
  d.addEventListener('click', function(e){ e.stopPropagation(); });
});