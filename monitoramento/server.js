const express = require('express');
const cors = require('cors');
const app = express();

// Use a variável de ambiente PORT ou 3000 como fallback
const port = process.env.PORT || 3000;

app.use(cors()); // Isso permite requisições de qualquer origem.

app.get('/status', (req, res) => {
    // Aqui deve estar a lógica para checar os status e retornar um JSON
    res.json({
        'Meu Site': 'Online',
        'API Externa': 'Online'
    });
});

// Para Vercel, usamos a função "listen" somente no desenvolvimento local
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
}

// Exporta a aplicação para o Vercel
module.exports = app;
