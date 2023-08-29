const express = require("express");
const con = require("./config");
const app = express();


app.get("/", (req, resp) => {
    resp.send('Connected');
    connection.query('SHOW TABLES', (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
        } else {
            console.log('Tables:', results);
        }
    }
    )
},
);

app.listen("5000")