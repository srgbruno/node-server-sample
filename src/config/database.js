const mysql = require('promise-mysql');

const connection = mysql.createPool({
   host: 'localhost',
   port: '3306',
   user: 'feed_admin',
   password: 'feed',
   database: 'Feed',
   socketPath: '/opt/lampp/var/mysql/mysql.sock',
   multipleStatements: true
});

module.exports = connection;