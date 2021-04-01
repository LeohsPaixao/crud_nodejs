const express = require('express');
const router = express.Router();

router.get('/', (red, res) => {
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
        </form><br>
        <form action="admin/edit" methop="POST">
            <input type="submit" value="EDITAR" onclick="/admin/edit">
        </form>
    </body>
    
    </html>`);
});


router.get('/edit', (red, res) => {
    res.send(`<!DOCTYPE html>
    <html>
    
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Editar Dados Clientes</title>
    </head>
    
    <body>
        <form action="/info/update" method="POST">
            <table>
                <tr>
                    <td>Nome</td>
                    <td><input type="text" name="name" id="name" value="name"></td>
                </tr>
                <tr>
                    <td>Telefone</td>
                    <td><input type="text" name="phone" id="phone" value="phone"></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td><input type="email" name="email" id="email" value="email"></td>
                </tr>
                <tr>
                    <td>Idade</td>
                    <td><input type="text" name="idade" id="idade" value="idade"></td>
                </tr>
            </table>
            <br>
            <input type="submit" value="EDITAR">
            </table>
        </form>
    </body>
    
    </html>`);
})


module.exports = router;