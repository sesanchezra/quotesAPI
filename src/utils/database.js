const {Sequelize} = require('sequelize')


const db = new Sequelize({
    dialect:'postgres',
    host: 'localhost',
    database: 'quotesdb',
    username: 'postgres',
    password: '',
    port: 5432
})

module.exports = db