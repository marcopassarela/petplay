// Seleciona os elementos do DOM
const hamburgerIcon = document.querySelector('.hamburger-icon'); // Seleciona o ícone do menu hamburger
const hamburgerNav = document.querySelector('.hamburger-nav'); // Seleciona a nav do menu hamburger
const overlay = document.querySelector('.overlay'); // Seleciona o overlay

// Função para fechar o menu hamburger
function closeHamburgerMenu() {
    hamburgerNav.classList.remove('active');
    overlay.classList.remove('active'); // Também fecha o overlay
}

// Evento para abrir e fechar o menu hamburger
hamburgerIcon.addEventListener('click', () => {
    hamburgerNav.classList.toggle('active');
    overlay.classList.toggle('active'); // Adiciona ou remove a classe active do overlay
});

// Fecha o menu ao clicar em um item do menu e rola suavemente
document.querySelectorAll('.hamburger-nav a').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault(); // Previne o comportamento padrão do link

        const targetId = item.getAttribute('href'); // Obtém o ID do elemento alvo
        const targetElement = document.querySelector(targetId); // Seleciona o elemento alvo

        if (targetElement) { // Verifica se o elemento alvo existe
            // Ajusta a rolagem suave para levar em conta a altura do cabeçalho fixo
            const headerOffset = document.querySelector('.hamburger-menu').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }

        // Fecha o menu após clicar em um item
        closeHamburgerMenu(); // Chama a função para fechar o menu
    });
});

// Inicializa o estado da interface
document.addEventListener('DOMContentLoaded', () => {
    // O código acima já garante que tudo seja executado após o carregamento do DOM
});
