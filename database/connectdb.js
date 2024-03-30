const mysql = require('mysql');

const connectionDb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'flutterturizmdb',
});

module.exports = connectionDb;