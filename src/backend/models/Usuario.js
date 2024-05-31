const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
  loginusuario: { type: DataTypes.STRING, allowNull: false },
  loginclave: { type: DataTypes.STRING, allowNull: false },
}, {
  timestamps: true,
});

module.exports = Usuario;
