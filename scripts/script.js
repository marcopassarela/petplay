const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburgerNav = document.querySelector('.hamburger-nav');
hamburgerIcon.addEventListener('click', () => {
    hamburgerNav.classList.toggle('active');
});

// Simulação de banco de dados de usuários
const users = {
    'admin': 'admin' // Nome de usuário e senha
};

// Função para exibir o formulário de login
function showLoginForm() {
    document.getElementById('login-form').classList.remove('hidden');
}

// Função para fechar o formulário de login
function closeLoginForm() {
    document.getElementById('login-form').classList.add('hidden');
}

// Função para capitalizar a primeira letra
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Função para realizar o login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (users[username] && users[username] === password) {
        document.getElementById('user-name').textContent = capitalizeFirstLetter(username);
        document.getElementById('user-info').classList.remove('hidden');
        document.getElementById('login-button').classList.add('hidden');
        document.getElementById('logout-button').classList.remove('hidden'); 
        closeLoginForm();
        localStorage.setItem('loggedInUser', username); 
    } else {
        alert('Usuário ou senha incorretos!');
    }
}

// Função para realizar o logout
function logout() {
    document.getElementById('user-info').classList.add('hidden');
    document.getElementById('login-button').classList.remove('hidden'); 
    document.getElementById('logout-button').classList.add('hidden'); 
    localStorage.removeItem('loggedInUser'); 
    document.getElementById('username').value = ''; 
    document.getElementById('password').value = ''; 
}

// Função para ativar o login ao pressionar Enter
function handleKeyDown(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        login();
    }
}

// Adiciona eventos aos botões
document.getElementById('login-button').addEventListener('click', showLoginForm);
document.getElementById('logout-button').addEventListener('click', logout);

// Adiciona o evento de keydown aos campos de entrada
document.getElementById('username').addEventListener('keydown', handleKeyDown);
document.getElementById('password').addEventListener('keydown', handleKeyDown);

// Inicializa o estado da interface
document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        document.getElementById('user-name').textContent = loggedInUser;
        document.getElementById('user-info').classList.remove('hidden');
        document.getElementById('login-button').classList.add('hidden');
        document.getElementById('logout-button').classList.remove('hidden');
    } else {
        document.getElementById('login-button').classList.remove('hidden');
        document.getElementById('logout-button').classList.add('hidden');
    }

    // Fecha o menu ao clicar em um item do menu
    document.querySelectorAll('.hamburger-nav a').forEach(item => {
        item.addEventListener('click', () => {
            hamburgerNav.classList.remove('active'); // Fecha o menu
        });
    });
});

// Ajusta a rolagem suave para levar em conta a altura do cabeçalho fixo
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = document.querySelector('#menu').offsetHeight;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
