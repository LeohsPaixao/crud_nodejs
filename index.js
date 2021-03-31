const db = require("./db.js");
const express = require("express");
const app = express();
const morgan = require("morgan");
require('dotenv').config();


app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

const port = process.env.PORT;
app.listen(port, function () {
    console.log(`Server started on port ${port}`);
});

app.get('/', (red, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cadastrar Clientes</title>
    </head>
    
    <body>
        <h1 id="title">Cadastrar Clientes</h1>
        <form action="/info/get" method="GET">
        <input type="submit" value="GET">
        </form>
        <form action="/info/add" method="POST">
        <label for="add">ADD: </label>
        <input type="text" name="name" id="name">
        <input type="text" name="phone" id=phone">
        <input type="email" name="email" id="email">
        <input type="text" name="idade" id="year">
        <input type="submit" value="REGISTRAR">
        </form>
    </body>
    
    </html>`);
});

app.get("/info/get", (req, res) => {
    try {
        db.connect();
        let resp = db.query(`SELECT * FROM clientes;`);
        res.send(resp.rows);
        release();

    } catch (ex) {
        console.log(404);
    }

});

app.post("/info/add", (req, res) => {
    try {
        db.connect();
        db.query(`INSERT INTO clientes (name, phone, email, idade) VALUES ('${req.body.name}', '${req.body.phone}', '${req.body.email}', '${req.body.year}');`);
        console.log(resp);
        res.redirect('/info/get');

    } catch (ex) {
        console.log(404);
    }

})