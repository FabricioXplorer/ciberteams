const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Profesor = sequelize.define('Profesor', {
  nombres: { type: DataTypes.STRING, allowNull: false },
  apellidopaterno: { type: DataTypes.STRING, allowNull: false },
  apellidomaterno: { type: DataTypes.STRING, allowNull: false },
  profesion: { type: DataTypes.STRING, allowNull: false },
  antecedentes: { type: DataTypes.STRING, allowNull: false },
  añosexperiencia: { type: DataTypes.INTEGER, allowNull: false },
}, {
  timestamps: true,
});

module.exports = Profesor;
