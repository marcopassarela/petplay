const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburgerNav = document.querySelector('.hamburger-nav');
hamburgerIcon.addEventListener('click', () => {
    hamburgerNav.classList.toggle('active');
});