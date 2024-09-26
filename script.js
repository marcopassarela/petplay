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

// Função para realizar o login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (users[username] && users[username] === password) {
        document.getElementById('user-name').textContent = username;
        document.getElementById('user-info').classList.remove('hidden');
        document.getElementById('login-button').classList.add('hidden');
        document.getElementById('logout-button').classList.remove('hidden'); // Exibe o botão de logout
        closeLoginForm();
        localStorage.setItem('loggedInUser', username); // Salva o usuário logado
    } else {
        alert('Usuário ou senha incorretos!');
    }
}

// Função para realizar o logout
function logout() {
    document.getElementById('user-info').classList.add('hidden');
    document.getElementById('login-button').classList.remove('hidden'); // Exibe o botão de login
    document.getElementById('logout-button').classList.add('hidden'); // Oculta o botão de logout
    localStorage.removeItem('loggedInUser'); // Remove o usuário logado
    document.getElementById('username').value = ''; // Limpa o campo de usuário
    document.getElementById('password').value = ''; // Limpa o campo de senha
}

// Função para ativar o login ao pressionar Enter
function handleKeyDown(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evita a ação padrão do Enter
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
        document.getElementById('logout-button').classList.remove('hidden'); // Garante que o botão de logout apareça
    } else {
        document.getElementById('login-button').classList.remove('hidden');
        document.getElementById('logout-button').classList.add('hidden');
    }
});

// Deslocamento suave do menu!
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });