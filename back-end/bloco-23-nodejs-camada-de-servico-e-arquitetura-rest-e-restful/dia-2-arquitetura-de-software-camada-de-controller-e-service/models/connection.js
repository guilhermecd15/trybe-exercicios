const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'devigili',
  password: 'Trybe123!',
  database: 'cep_lookup'
});

module.exports = connection;