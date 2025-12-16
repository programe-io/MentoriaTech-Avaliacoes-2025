// Aguarda o carregamento do documento
document.addEventListener('DOMContentLoaded', () => {

    /* 1. FILTRO DE BUSCA (Para as Receitas) */
    const filtrarConteudo = () => {
        const buscaInput = document.createElement('input');
        buscaInput.type = 'text';
        buscaInput.placeholder = '🔍 Buscar no plano/receitas...';
        buscaInput.className = 'input-busca';
        
        // Estilo rápido via JS
        Object.assign(buscaInput.style, {
            padding: '8px',
            borderRadius: '20px',
            border: 'none',
            marginTop: '10px',
            width: '200px'
        });

        document.querySelector('nav').appendChild(buscaInput);

        buscaInput.addEventListener('input', (e) => {
            const termo = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('article');

            cards.forEach(card => {
                const texto = card.innerText.toLowerCase();
                card.style.display = texto.includes(termo) ? 'block' : 'none';
            });
        });
    };

    /* 2. MODO "FOCO" (Para o Plano de Estudos) */
    const alternarModoFoco = () => {
        const btnFoco = document.createElement('button');
        btnFoco.innerText = '🌙 Alternar Modo Foco';
        btnFoco.style.cssText = 'position:fixed; bottom:20px; right:20px; padding:10px; border-radius:50px; cursor:pointer; background:#333; color:#fff; border:none;';
        
        document.body.appendChild(btnFoco);

        btnFoco.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            
            // Aplica cores de foco (estudo)
            document.body.style.backgroundColor = isDark ? '#1a1a1a' : '#f0f2f5';
            document.body.style.color = isDark ? '#fff' : '#2d3436';
            
            const articles = document.querySelectorAll('article');
            articles.forEach(a => a.style.backgroundColor = isDark ? '#333' : '#fff');
        });
    };

    /* 3. LOG DE PROGRESSO (Dica de Estudo) */
    const registrarClique = () => {
        const links = document.querySelectorAll('article a');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const titulo = e.target.closest('article').querySelector('h3').innerText;
                console.log(`%c 📚 Estudando agora: ${titulo}`, 'color: #2ecc71; font-weight: bold;');
                alert(`Você iniciou o estudo de: ${titulo}`);
            });
        });
    };

    // Inicialização das funções
    filtrarConteudo();
    alternarModoFoco();
    registrarClique();
});