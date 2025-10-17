const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'host.docker.internal', // ou 'localhost' se estiver usando Docker Compose depois
    user: 'root',
    password: 'root',
    database: 'loja'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao MySQL!');
});

module.exports = connection;