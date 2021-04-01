const db = require("./db.js");
const express = require("express");
const app = express();
const morgan = require("morgan");
require('dotenv').config();
const route = require("./routes/routes.js");


app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


app.post("/info/add", (req, res) => {
    try {
        db.connect();
        let resp = db.query(`INSERT INTO clientes (id, name, phone, email, idade) VALUES (${req.body.id}, '${req.body.name}', '${req.body.phone}', '${req.body.email}', '${req.body.idade}')`);
        console.log(resp);
        res.redirect('/info/get');

    } catch (ex) {
        console.error(404);
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
    }

});

app.post("/info/update", (req, res) => {
    try {
        db.connect();
        let resp = db.query(`UPDATE clientes SET id = '${req.body.odl_id}' WHERE id = '${req.body.new_id}'`);
        console.log(resp);
        res.redirect('/info/get');

    } catch (ex) {
        console.log(404);
    }

});
// Routes
app.use('/admin', route);

// connect in the Port to Node
const port = process.env.PORT;
app.listen(port, function () {
    console.log(`Server started on port ${port}`);
});