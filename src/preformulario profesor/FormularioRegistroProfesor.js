// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidopaterno: '',
    apellidomaterno: '',
    profesion: '',
    antecedentes: '',
    añosexperiencia: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Datos a enviar:', formData); // Para depuración
    try {
      const response = await axios.post('http://localhost:5000/api/profesor', formData);
      console.log('Respuesta de la API:', response); // Para depuración
      alert('Registro exitoso');
    } catch (error) {
      console.error('Error en el registro:', error.response ? error.response.data : error.message);
      alert('Error en el registro');
    }
  };

  return (
    <div className="App">
      <h1>Formulario de Registro de Profesor</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombres"
          placeholder="Nombres"
          value={formData.nombres}
          onChange={handleChange}
        />
        <input
          type="text"
          name="apellidopaterno"
          placeholder="Apellido Paterno"
          value={formData.apellidopaterno}
          onChange={handleChange}
        />
        <input
          type="text"
          name="apellidomaterno"
          placeholder="Apellido Materno"
          value={formData.apellidomaterno}
          onChange={handleChange}
        />
        <input
          type="text"
          name="profesion"
          placeholder="Profesión"
          value={formData.profesion}
          onChange={handleChange}
        />
        <textarea
          name="antecedentes"
          placeholder="Antecedentes"
          value={formData.antecedentes}
          onChange={handleChange}
        />
        <input
          type="number"
          name="añosexperiencia"
          placeholder="Años de Experiencia"
          value={formData.añosexperiencia}
          onChange={handleChange}
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default App;
