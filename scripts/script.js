// Seleciona os elementos do DOM
const hamburgerIcon = document.querySelector('.hamburger-icon'); // Seleciona o ícone do menu hamburger
const hamburgerNav = document.querySelector('.hamburger-nav'); // Seleciona a nav do menu hamburger
const overlay = document.querySelector('.overlay'); // Seleciona o overlay

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
