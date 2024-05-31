const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DatosPreinscripcion = sequelize.define('DatosPreinscripcion', {
  
  carnet_identidad_dp: { type: DataTypes.STRING, allowNull: false },
  extension_carnet_dp: { type: DataTypes.STRING, allowNull: false },
  nombres_dp: { type: DataTypes.STRING, allowNull: false },
  primer_apellido_dp: { type: DataTypes.STRING, allowNull: false },
  segundo_apellido_dp: { type: DataTypes.STRING, allowNull: false },
  fecha_nacimiento_dp: { type: DataTypes.DATE, allowNull: false },
  correo_electronico_dp: { type: DataTypes.STRING, allowNull: false },
  genero_dp: { type: DataTypes.STRING, allowNull: false },
  telefono_dp: { type: DataTypes.STRING, allowNull: false },
  direccion_domicilio_dp: { type: DataTypes.STRING, allowNull: false },
  contato_dp: { type: DataTypes.STRING, allowNull: false },
}, {
  timestamps: true,
});

module.exports = DatosPreinscripcion;
