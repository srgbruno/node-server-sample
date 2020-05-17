const mysql = require('promise-mysql');

const connection = mysql.createPool({
   host: 'db',
   port: '3306',
   user: 'root',
   password: 'root',
   database: 'Feed',
   multipleStatements: true
});

module.exports = connection;