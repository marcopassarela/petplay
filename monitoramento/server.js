const express = require('express');
const cors = require('cors'); // Certifique-se de que esta linha está presente
const axios = require('axios');

const app = express();
const port = 3000;

// Usar CORS
app.use(cors()); // Certifique-se de que esta linha está presente

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
