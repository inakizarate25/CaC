const {DataTypes} = require('sequelize')
const sequelize = require("./connection")

const Licence = sequelize.define('Licence', {
    licence_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    licence_description: {
        type: DataTypes.STRING,
        allowNull: true,
    }
})

module.exports = Licence