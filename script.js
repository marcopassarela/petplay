// Seleciona os elementos do menu
const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburgerNav = document.querySelector('.hamburger-nav');

// Adiciona um evento de clique ao ícone do menu
hamburgerIcon.addEventListener('click', () => {
    // Alterna a classe 'active' para mostrar/ocultar o menu
    hamburgerNav.classList.toggle('active');
});
