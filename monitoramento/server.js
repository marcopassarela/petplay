const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // Isso permite requisições de qualquer origem.

app.get('/status', (req, res) => {
    // Aqui deve estar a lógica para checar os status e retornar um JSON
    res.json({
        'Meu Site': 'Online',
        'API Externa': 'Online'
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
