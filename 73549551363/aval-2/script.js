/**
 * =======================================
 * JAVASCRIPT PRINCIPAL (main.js)
 * Interações, Lógica de Formulários e Animações
 * =======================================
 */

// Garante que o script só será executado quando todo o HTML estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    
    // ----------------------------------------------------------------------
    // 1. Variáveis Globais (DOM Elements)
    // ----------------------------------------------------------------------
    const menuLinks = document.querySelectorAll('.menu-navegacao a');
    const emailInput = document.getElementById('email-news');
    const submitButton = document.querySelector('#inscricao-newsletter button[type="submit"]');
    const equipeMembros = document.querySelectorAll('.membro-equipe');
    const newsletterForm = document.querySelector('#inscricao-newsletter form');


    // ----------------------------------------------------------------------
    // 2. FUNÇÃO: Manipulação de Scroll Suave para Links Internos
    // ----------------------------------------------------------------------

    menuLinks.forEach(link => {
        // Verifica se o link é interno (começa com # e não é o link de contato.html)
        if (link.getAttribute('href').startsWith('#') || link.getAttribute('href').includes('sobre.html#')) {
            link.addEventListener('click', function(event) {
                // Previne o comportamento padrão do link (navegação instantânea)
                event.preventDefault(); 
                
                // Determina o ID do elemento de destino (ajusta para links como sobre.html#missao)
                const targetId = this.getAttribute('href').split('#').pop();
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    // Rola a página suavemente até o elemento
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Subtrai o tamanho do cabeçalho fixo
                        behavior: 'smooth'
                    });
                }
            });
        }
    });


    // ----------------------------------------------------------------------
    // 3. FUNÇÃO: Validação e Ativação do Botão de Formulário (Interatividade)
    // ----------------------------------------------------------------------

    /**
     * Verifica se o campo de e-mail é válido e habilita/desabilita o botão.
     * Esta função é crucial para a usabilidade e para demonstrar controle de estado.
     */
    function toggleSubmitButton() {
        // 'validity.valid' é uma propriedade nativa do JS para checar se o input atende aos requisitos 'type="email"' e 'required'
        if (emailInput.validity.valid) {
            submitButton.removeAttribute('disabled');
        } else {
            submitButton.setAttribute('disabled', 'disabled');
        }
    }

    // Inicializa a função ao carregar a página (o botão começa desabilitado no HTML)
    toggleSubmitButton(); 

    // Adiciona o listener para checar a validação a cada tecla digitada
    emailInput.addEventListener('input', toggleSubmitButton);
    

    // ----------------------------------------------------------------------
    // 4. FUNÇÃO: Processamento do Formulário (Evita Recarregar a Página)
    // ----------------------------------------------------------------------
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault(); // IMPEDE o envio tradicional do formulário (recarregar a página)
            
            const email = emailInput.value;
            const frequencia = document.getElementById('frequencia').value;
            
            console.log("-----------------------------------------");
            console.log("Simulação de Inscrição Enviada:");
            console.log(`E-mail: ${email}`);
            console.log(`Frequência: ${frequencia}`);
            console.log("-----------------------------------------");
            
            // Simula uma resposta de sucesso para o usuário
            alert(`Obrigado por se inscrever, ${email}! Você receberá nossa newsletter ${frequencia}.`);
            
            // Limpa o campo e desabilita o botão após o "envio"
            newsletterForm.reset(); 
            toggleSubmitButton(); 
        });
    }

    // ----------------------------------------------------------------------
    // 5. FUNÇÃO: Interagindo com Data Attributes (Para Logística e Análise)
    // ----------------------------------------------------------------------
    
    /**
     * Adiciona um listener de evento a cada membro da equipe para registrar o clique 
     * e mostrar a função lida diretamente do atributo 'data-funcao'.
     */
    equipeMembros.forEach(membro => {
        membro.addEventListener('click', function() {
            // dataset é a coleção de todos os atributos 'data-*'
            const funcao = this.dataset.funcao; 
            
            if (funcao) {
                console.log(`[DATA-ANÁLISE] Membro da equipe clicado. Função: ${funcao}`);
                
                // Exemplo de como um JS poderia alterar o CSS dinamicamente com base no data attribute:
                if (funcao === 'Desenvolvimento') {
                    this.style.backgroundColor = '#e6f7ff'; // Azul claro para devs
                }
            } else {
                console.log('[DATA-ANÁLISE] Membro da equipe clicado, mas sem função definida.');
            }
        });
    });
});