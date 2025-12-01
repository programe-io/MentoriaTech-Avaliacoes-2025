function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');

    sections.forEach(sec => {
        sec.classList.add('hidden');
    });

    document.getElementById(sectionId).classList.remove('hidden');
}
