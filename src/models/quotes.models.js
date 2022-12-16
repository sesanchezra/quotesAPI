const db = require('../utils/database')

const { DataTypes } = require('sequelize')
// {
//     id: 1,
//     phrase: 'La cita texto texto texto',
//     author: 'Benjamin Florez',
//     year: 2022
// }


const Quotes = db.define(
    'quotes',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        phrase:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year:{
            type: DataTypes.STRING,
        }

    },
    {
        timestamps: false
    }
)

module.exports = Quotes