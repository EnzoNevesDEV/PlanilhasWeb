// Incluir a dependência MySQL 
const mysql = require('mysql2');

//Criar a conexão com o banco de dados MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '021202',
    database: 'planilhasWeb'
});

module.exports = connection