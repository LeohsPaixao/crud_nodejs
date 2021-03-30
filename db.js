const pgsql = require('pg').Client
const cliente = new pgsql({
    host: 'localhost',
    user: 'postgres',
    password: '96127748',
    port: '5432',
    database: 'crudnode'
})

cliente.connect();
cliente.query('SELECT * FROM clientes;')
    .then(results => {
        const result = results.rows
        console.log(result)
    })
    .finally(() => cliente.end())