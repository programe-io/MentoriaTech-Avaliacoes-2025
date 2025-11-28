// Configuração Tailwind customizada
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
                'logo': ['Pacifico', 'cursive'],
            },
            colors: {
                'bg-light': '#FFF5F7',
                'primary-dark': '#4B2B3A',
                'accent-pink': '#FF3366',
                'text-muted': '#6B7280',
                'card-bg': '#FFFFFF',
                'border-light': '#F3E8EE',
            },
            boxShadow: {
                'card': '0 10px 25px rgba(255, 51, 102, 0.1)',
            },
        },
    },
};
