const express = require('express');
const app = express();
const db = require('./db/connection');

const port = 3000;

app.get('/', (req, res) => {
    res.send('Olá Mundo!');
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log("Conexão com o banco de dados realizado com sucesso!");
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});
