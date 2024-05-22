// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState({
    imagen_alumno: '',
    tipo_sangre: '',
    lugar_familia: '',
    cod_rude: '',
    nro_hermanos: '',
    nombres: '',
    apellidos: '',
    documentodeidentidad: '',
    fechanacimiento: '',
    sexo: '',
    ciudad: '',
    direccion: '',
    estado: '',
    fecharegistro: '',
    idturno: '',
    nombre_madre: '',
    ci_madre: '',
    telefono_madre: '',
    trabajo_madre: '',
    nombre_padre: '',
    ci_padre: '',
    telefono_padre: '',
    trabajo_padre: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviar datos del alumno
      const alumnoResponse = await axios.post('http://localhost:5000/api/alumno', {
        imagen_alumno: formData.imagen_alumno,
        tipo_sangre: formData.tipo_sangre,
        lugar_familia: formData.lugar_familia,
        cod_rude: formData.cod_rude,
        nro_hermanos: formData.nro_hermanos,
        nombres: formData.nombres,
        apellidos: formData.apellidos,
        documentodeidentidad: formData.documentodeidentidad,
        fechanacimiento: formData.fechanacimiento,
        sexo: formData.sexo,
        ciudad: formData.ciudad,
        direccion: formData.direccion,
        estado: formData.estado,
        fecharegistro: formData.fecharegistro,
        idturno: formData.idturno
      });

      const idalumno = alumnoResponse.data.id; // Asumiendo que el ID del alumno es devuelto en la respuesta

      // Enviar datos de los tutores
      await axios.post('http://localhost:5000/api/tutores', {
        nombre_madre: formData.nombre_madre,
        ci_madre: formData.ci_madre,
        telefono_madre: formData.telefono_madre,
        trabajo_madre: formData.trabajo_madre,
        nombre_padre: formData.nombre_padre,
        ci_padre: formData.ci_padre,
        telefono_padre: formData.telefono_padre,
        trabajo_padre: formData.trabajo_padre,
        idalumno: idalumno
      });

      alert('Registro exitoso');
    } catch (error) {
      console.error('Error en el registro:', error);
      alert('Error en el registro');
    }
  };

  return (
    <div className="App">
      <h1>Formulario de Registro</h1>
      <form onSubmit={handleSubmit}>
        <h2>Información del Alumno</h2>
        <input type="file" name="imagen_alumno" onChange={handleChange} />
        <input type="text" name="tipo_sangre" placeholder="Tipo de Sangre" onChange={handleChange} />
        <input type="text" name="lugar_familia" placeholder="Lugar en la Familia" onChange={handleChange} />
        <input type="text" name="cod_rude" placeholder="Código RUDE" onChange={handleChange} />
        <input type="number" name="nro_hermanos" placeholder="Número de Hermanos" onChange={handleChange} />
        <input type="text" name="nombres" placeholder="Nombres" onChange={handleChange} />
        <input type="text" name="apellidos" placeholder="Apellidos" onChange={handleChange} />
        <input type="text" name="documentodeidentidad" placeholder="Documento de Identidad" onChange={handleChange} />
        <input type="date" name="fechanacimiento" onChange={handleChange} />
        <input type="text" name="sexo" placeholder="Sexo" onChange={handleChange} />
        <input type="text" name="ciudad" placeholder="Ciudad" onChange={handleChange} />
        <input type="text" name="direccion" placeholder="Dirección" onChange={handleChange} />
        <input type="text" name="estado" placeholder="Estado" onChange={handleChange} />
        <input type="date" name="fecharegistro" onChange={handleChange} />
        <input type="text" name="idturno" placeholder="ID Turno" onChange={handleChange} />
        
        <h2>Información de los Tutores</h2>
        <input type="text" name="nombre_madre" placeholder="Nombre de la Madre" onChange={handleChange} />
        <input type="text" name="ci_madre" placeholder="CI de la Madre" onChange={handleChange} />
        <input type="text" name="telefono_madre" placeholder="Teléfono de la Madre" onChange={handleChange} />
        <input type="text" name="trabajo_madre" placeholder="Trabajo de la Madre" onChange={handleChange} />
        <input type="text" name="nombre_padre" placeholder="Nombre del Padre" onChange={handleChange} />
        <input type="text" name="ci_padre" placeholder="CI del Padre" onChange={handleChange} />
        <input type="text" name="telefono_padre" placeholder="Teléfono del Padre" onChange={handleChange} />
        <input type="text" name="trabajo_padre" placeholder="Trabajo del Padre" onChange={handleChange} />

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default App;
