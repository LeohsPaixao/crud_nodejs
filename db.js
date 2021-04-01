const cliente = require('pg').Client
const db = new cliente({
    host: 'localhost',
    user: 'postgres',
    password: '96127748',
    port: 5432,
    database: 'crudnode'
})

module.exports = db;