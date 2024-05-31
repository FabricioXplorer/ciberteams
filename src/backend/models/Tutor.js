const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Tutor = sequelize.define('Tutor', {
  nombre_madre: { type: DataTypes.STRING, allowNull: false },
  ci_madre: { type: DataTypes.STRING, allowNull: false },
  telefono_madre: { type: DataTypes.STRING, allowNull: false },
  trabajo_madre: { type: DataTypes.STRING, allowNull: false },
  nombre_padre: { type: DataTypes.STRING, allowNull: false },
  ci_padre: { type: DataTypes.STRING, allowNull: false },
  telefono_padre: { type: DataTypes.STRING, allowNull: false },
  trabajo_padre: { type: DataTypes.STRING, allowNull: false },
}, {
  timestamps: true,
});

module.exports = Tutor;
