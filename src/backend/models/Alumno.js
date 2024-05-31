const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Alumno = sequelize.define('Alumno', {
  imagen_alumno: { type: DataTypes.STRING, allowNull: false },
  tipo_sangre: { type: DataTypes.STRING, allowNull: false },
  lugar_familia: { type: DataTypes.STRING, allowNull: false },
  cod_rude: { type: DataTypes.STRING, allowNull: false },
  nro_hermanos: { type: DataTypes.INTEGER, allowNull: false },
  nombres: { type: DataTypes.STRING, allowNull: false },
  apellidos: { type: DataTypes.STRING, allowNull: false },
  documentodeidentidad: { type: DataTypes.STRING, allowNull: false },
  fechanacimiento: { type: DataTypes.DATE, allowNull: false },
  sexo: { type: DataTypes.STRING, allowNull: false },
  ciudad: { type: DataTypes.STRING, allowNull: false },
  direccion: { type: DataTypes.STRING, allowNull: false },
  estado: { type: DataTypes.STRING, allowNull: false },
  fecharegistro: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, {
  timestamps: true,
});

module.exports = Alumno;
