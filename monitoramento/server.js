const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3000;

// Habilitar CORS
app.use(cors());

// Lista de serviços a serem monitorados
const services = {
    'Meu Site': 'https://petplay-rho.vercel.app/', // URL do seu site
    'API Externa': 'https://petplay-rho.vercel.app/status', // URL do status
};

// Endpoint para obter o status dos serviços
app.get('/status', async (req, res) => {
    const status = {};

    // Verifica o status de cada serviço
    for (const [name, url] of Object.entries(services)) {
        try {
            const response = await axios.get(url);
            status[name] = response.status === 200 ? 'Online' : 'Offline';
        } catch (error) {
            console.error(`Erro ao verificar ${name}:`, error.message);
            status[name] = 'Offline'; // Se houver erro, marca como offline
        }
    }

    res.json(status); // Retorna o status em JSON
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
