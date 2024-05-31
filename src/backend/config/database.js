// database.js

const { Sequelize } = require('sequelize');

// Configura tu instancia de Sequelize aquí
const sequelize = new Sequelize('ciberkids', 'root', '', {
    host: 'localhost',
    dialect: 'mysql', // El dialecto de tu base de datos (MySQL en este caso)
});

module.exports = sequelize;
