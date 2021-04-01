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
        <form action="/info/add" method="POST">
            <label for="add">CADASTRAR: </label>
            <table>
                <tr>
                    <td><input type="text" name="id" id="id"></td>
                </tr>
                <tr>
                    <td><input type="text" name="name" id="name"></td>
                </tr>
                <tr>
                    <td><input type="text" name="phone" id="phone"></td>
                </tr>
                <tr>
                    <td><input type="email" name="email" id="email"></td>
                </tr>
                <tr>
                    <td><input type="text" name="idade" id="idade"></td>
                </tr>
            </table><br>
            <input type="submit" value="REGISTRAR">
        </form>
        <br>
        <form action="/info/delete" method="POST">
            <label for="delete">DELETAR: </label>
            <table>
                <tr>
                    <td><input type="text" name="id" id="id"></td>
                </tr>
            </table>
            <input type="submit" value="DELETAR">
        </form>
    </body>
    
    </html>`);
});

app.get("/info/get", (req, res) => {
    try {
        db.connect();
        let resp = db.query(`SELECT * FROM clientes`);
        res.send(resp.rows);
        release();

    } catch (ex) {
        console.error(404);
    }

});

app.post("/info/add", (req, res) => {
    try {
        db.connect();
        let resp = db.query(`INSERT INTO clientes (id, name, phone, email, idade) VALUES ('${req.body.id}', '${req.body.name}', '${req.body.phone}', '${req.body.email}', '${req.body.year}')`);
        console.log(resp);
        res.redirect('/info/get');

    } catch (ex) {
        console.error(404);
    } finally {
        db.end();
        console.log("Disconnected!!");
    }

});

app.post("/info/delete", (req, res) => {
    try {
        db.connect();
        let resp = db.query(`DELETE FROM clientes WHERE id = '${req.body.id}'`);
        console.log(resp);
        res.redirect('/info/get');

    } catch (ex) {
        console.error(404);
    } finally {
        db.end();
        console.log("Disconnected!!");
    }

});

app.post("/info/update", (req, res) => {
    try {
        db.connect();
        let resp = db.query(`UPDATE clientes SET id = '${req.body.newValue}' WHERE id = '${req.body.oldValue}'`);
        console.log(resp);
        res.redirect('/info/get');

    } catch (ex) {
        console.error(404);
    } finally {
        db.end();
        console.log("Disconnected!!");
    }

})