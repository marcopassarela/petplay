const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3000;

// Habilitar CORS
app.use(cors());

// Lista de serviços a serem monitorados
const services = {
    'Meu Site': 'https://seusite.com',
    'API Externa': 'https://api.externa.com',
};

app.get('/status', async (req, res) => {
    const status = {};

    for (const [name, url] of Object.entries(services)) {
        try {
            const response = await axios.get(url);
            status[name] = response.status === 200 ? 'Online' : 'Offline';
        } catch (error) {
            status[name] = 'Offline';
        }
    }

    res.json(status);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
