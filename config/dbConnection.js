var mysql = require('mysql2');

var connMySQL = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234567890',
        database: 'portal_noticias',
    });
}

module.exports = function(){
    return connMySQL;
}