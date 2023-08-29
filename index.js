const express = require("express");
const connection = require("./db/config");
const app = express();


app.get("/", (req, resp) => {
    // resp.send('Connected');
    connection.query('select * from mytable', (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
        } else {
            resp.send(results);
            console.log('Tables:', results);
        }
    }
    )
},
);



app.listen("5000")