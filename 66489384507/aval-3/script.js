// Dark mode toggle
const toggle = document.getElementById('toggle');
const html = document.querySelector('html');

// Check for saved user preference
if (localStorage.getItem('darkMode') === 'enabled') {
    html.classList.add('dark');
    toggle.checked = true;
}

toggle.addEventListener('change', function() {
    if (this.checked) {
        html.classList.add('dark');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        html.classList.remove('dark');
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Lamp icon animation
const lampIcon = document.querySelector('.lamp-icon');
lampIcon.addEventListener('mouseenter', function() {
    anime({
        targets: this,
        scale: [1, 1.2, 1],
        duration: 1000,
        easing: 'easeInOutQuad'
    });
});

// Card hover animations
const cards = document.querySelectorAll('.card-hover');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        anime({
            targets: this,
            scale: 1.02,
            duration: 300,
            easing: 'easeInOutQuad'
        });
    });
    
    card.addEventListener('mouseleave', function() {
        anime({
            targets: this,
            scale: 1,
            duration: 300,
            easing: 'easeInOutQuad'
        });
    });
});

// Initialize Feather Icons
feather.replace();
