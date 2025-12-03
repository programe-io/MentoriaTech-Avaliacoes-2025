function toggleOpiniao(id) {
  const opiniao = document.getElementById(id);
  if (opiniao.style.display === "none" || opiniao.style.display === "") {
    opiniao.style.display = "block";
  } else {
    opiniao.style.display = "none";
  }
}
