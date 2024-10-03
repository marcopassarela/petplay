// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000; // Usar a porta definida no ambiente ou 3000 por padrão

app.use(cors()); // Permite requisições de qualquer origem

// Endpoint para checar os status
app.get('/status', (req, res) => {
    // Aqui você pode adicionar lógica para verificar o status real de seus serviços
    res.json({
        'Meu Site': 'Online', // Você pode mudar isso para lógica real
        'API Externa': 'Online' // Você pode mudar isso para lógica real
    });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
