function showSection(sectionId) {
  const sections = document.querySelectorAll('main section');
  sections.forEach(section => {
    if(section.id === sectionId) {
      section.classList.add('active');
      section.classList.remove('hidden');
    } else {
      section.classList.add('hidden');
      section.classList.remove('active');
    }
  });
}
