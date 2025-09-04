document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;

    // ========== Tema ==========
    const themeButtons = document.querySelectorAll('.theme-btn');

    body.classList.add('dark-mode'); // Tema escuro por padrão

    themeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const theme = this.getAttribute('data-theme');

            themeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            if (theme === 'light') {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
            } else {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
            }
        });
    });

    // ========== Idioma ==========
    const languageButtons = document.querySelectorAll('.language-btn');

    languageButtons.forEach(button => {
        button.addEventListener('click', function () {
            const lang = this.getAttribute('data-lang');

            languageButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            document.querySelectorAll('.lang-pt').forEach(el => {
                el.classList.remove('active');
            });
            document.querySelectorAll('.lang-en').forEach(el => {
                el.classList.remove('active');
            });

            if (lang === 'pt') {
                document.querySelectorAll('.lang-pt').forEach(el => el.classList.add('active'));
            } else {
                document.querySelectorAll('.lang-en').forEach(el => el.classList.add('active'));
            }
        });
    });

    // ========== Comportamento dos Cards ==========
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });

    // Idioma padrão: PT
    document.querySelectorAll('.lang-pt').forEach(el => el.classList.add('active'));
    document.querySelectorAll('.lang-en').forEach(el => el.classList.remove('active'));
});

// ========== Botão "Voltar ao Topo" ==========
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

// Função para mostrar o Toast
function showToast(message, isSuccess = true) {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");
  
  // Atualiza mensagem e cor do toast (sucesso/erro)
  toastMessage.textContent = message;
  toast.style.background = isSuccess ? "#4CAF50" : "#F44336"; // Verde ou Vermelho
  
  // Mostra o toast
  toast.classList.add("toast-visible");
  
  // Esconde após 3 segundos
  setTimeout(() => {
    toast.classList.remove("toast-visible");
  }, 3000);
}

// Função principal para copiar e-mail
function copyEmailToClipboard(email) {
  navigator.clipboard.writeText(email)
    .then(() => {
      showToast(`📋 E-mail copiado: ${email}`, true);
    })
    .catch((err) => {
      console.error("Falha ao copiar:", err);
      // Fallback para navegadores antigos
      const input = document.createElement("input");
      input.value = email;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      showToast("✅ E-mail copiado (método alternativo)!", true);
    });
}

// Configura os listeners de clique
document.querySelectorAll(".copy-email").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const email = link.getAttribute("data-email");
    copyEmailToClipboard(email);
  });
});

// ====== Menu Hamburguer ======
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

hamburgerBtn.addEventListener('click', function () {
  hamburgerBtn.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});

// Fecha o menu ao clicar em um link
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburgerBtn.classList.remove('active');
    mobileMenu.classList.remove('open');
  });
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', function (e) {
  if (
    mobileMenu.classList.contains('open') &&
    !mobileMenu.contains(e.target) &&
    !hamburgerBtn.contains(e.target)
  ) {
    hamburgerBtn.classList.remove('active');
    mobileMenu.classList.remove('open');
  }
});