const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'vue_login',
  password: '123456789'
});
connection.connect();
module.exports = connection;