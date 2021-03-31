const {Pool} = require('pg')
const express = require("express");
const app = express();
const morgan = require("morgan");

let pool = new Pool();

app.use(morgan('dev'));

const port = process.env.PORT;
app.listen(port, function () {
    console.log(`Server started on port ${port}`);
});

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <form method="GET" action="info/get"></form>
    </body>
    </html>`)
});

app.get("/info/get", (req, res) => {
    try {
            pool.connect((error, client, release) => {
            let resp = client.query("SELECT * FROM clientes;")
            res.send(resp.rows);
        })
    } catch (error) {
        console.log(error);
    }

})