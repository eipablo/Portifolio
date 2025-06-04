document.addEventListener('DOMContentLoaded', function() {
    // Controle de tema
    const themeButtons = document.querySelectorAll('.theme-btn');
    const body = document.body;
    
    // Ativa o tema escuro por padrão
    body.classList.add('dark-mode');
    
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            
            // Atualiza botões de tema
            themeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Alterna entre temas
            if (theme === 'light') {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
            } else {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
            }
        });
    });
    
    // Controle de idioma
    const languageButtons = document.querySelectorAll('.language-btn');
    
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            
            // Atualiza botões de idioma
            languageButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Alterna entre idiomas
            if (lang === 'pt') {
                document.querySelectorAll('.lang-pt').forEach(el => el.style.display = 'block');
                document.querySelectorAll('.lang-en').forEach(el => el.style.display = 'none');
            } else {
                document.querySelectorAll('.lang-pt').forEach(el => el.style.display = 'none');
                document.querySelectorAll('.lang-en').forEach(el => el.style.display = 'block');
            }
        });
    });
});
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
