const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
  loginusuario: { 
    type: DataTypes.STRING, 
    allowNull: false, 
    unique: true 
  },
  loginclave: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  originalPassword: { 
    type: DataTypes.STRING, 
    allowNull: false 
  }
}, {
  timestamps: true,
});

module.exports = Usuario;
