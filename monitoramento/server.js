const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3000;

// Habilitar CORS
app.use(cors());

// Lista de serviços a serem monitorados
const services = {
    'Meu Site': 'https://petplay-rho.vercel.app/', // Atualizado para seu site
    'API Externa': 'https://petplay-rho.vercel.app/status', // URL do status
};

app.get('/status', async (req, res) => {
    const status = {};

    for (const [name, url] of Object.entries(services)) {
        try {
            const response = await axios.get(url);
            status[name] = response.status === 200 ? 'Online' : 'Offline';
        } catch (error) {
            status[name] = 'Offline'; // Se houver erro, marca como offline
        }
    }

    res.json(status); // Retorna o status em JSON
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
