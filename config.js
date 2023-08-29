const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,     // Your MySQL host
    user: 'root',       // Your MySQL username
    password: '',   // Your MySQL password
    database: 'test'      // Your MySQL database name
});

connection.connect((error) => {
    if (error) {
        console.error('Error connecting to MySQL database:', error);
    } else {
        console.log('Connected to MySQL database');
    }
});


module.exports = connection;