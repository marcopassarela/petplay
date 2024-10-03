// api/status.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/status', (req, res) => {
    res.json({
        'Meu Site': 'Online',
        'API Externa': 'Online'
    });
});

module.exports = app;
