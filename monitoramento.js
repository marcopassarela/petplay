// Lista de serviços a serem monitorados
const services = {
    'Meu Site': 'https://petplay-rho.vercel.app/', // URL do seu site na Vercel
    'API Externa': 'https://petplay-rho.vercel.app/status', // URL do status da API na Vercel
};

async function getStatus() {
    try {
        const response = await fetch(services['API Externa']); // Mude para a URL do serviço

        // Verifica se a resposta é bem-sucedida (status 200)
        if (response.ok) {
            const data = await response.json();
            updateStatusDisplay(data);
        } else {
            // Se a resposta não for bem-sucedida, atualiza para offline
            updateStatusToOffline();
        }
    } catch (error) {
        console.error('Erro ao obter status:', error);
        updateStatusToOffline();
    }
}

// Atualiza a exibição de status com os dados obtidos
function updateStatusDisplay(data) {
    const statusElement = document.getElementById('status');
    statusElement.innerHTML = ''; // Limpa o conteúdo existente

    for (const [service, status] of Object.entries(data)) {
        const statusClass = status === 'Online' ? 'online' : 'offline';
        statusElement.innerHTML += `<p><strong>${service}:</strong> <span class="${statusClass}">${status}</span></p>`;
    }
}

// Função para atualizar o status para offline
function updateStatusToOffline() {
    const statusElement = document.getElementById('status');
    statusElement.innerHTML = ''; // Limpa o conteúdo existente
    // Adiciona todos os serviços como offline
    for (const service of Object.keys(services)) {
        statusElement.innerHTML += `<p><strong>${service}:</strong> <span class="offline">Offline</span></p>`;
    }
}

// Chama a função inicialmente e depois a cada 5 segundos (5000 milissegundos)
window.onload = () => {
    getStatus(); // Chama uma vez ao carregar a página
    setInterval(getStatus, 5000); // Chama a função a cada 5 segundos
};
