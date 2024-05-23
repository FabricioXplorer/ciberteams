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
    <div className="App px-4 py-2 flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-2xl font-bold text-gray-800 mb-6">Formulario de Registro de Profesor</h1>
    <form onSubmit={handleSubmit} className="w-full max-w-lg bg-lime-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        type="text"
        name="nombres"
        placeholder="Nombres"
        value={formData.nombres}
        onChange={handleChange}
      />
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        type="text"
        name="apellidopaterno"
        placeholder="Apellido Paterno"
        value={formData.apellidopaterno}
        onChange={handleChange}
      />
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        type="text"
        name="apellidomaterno"
        placeholder="Apellido Materno"
        value={formData.apellidomaterno}
        onChange={handleChange}
      />
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        type="text"
        name="profesion"
        placeholder="Profesión"
        value={formData.profesion}
        onChange={handleChange}
      />
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        name="antecedentes"
        placeholder="Antecedentes"
        value={formData.antecedentes}
        onChange={handleChange}
      />
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        type="number"
        name="añosexperiencia"
        placeholder="Años de Experiencia"
        value={formData.añosexperiencia}
        onChange={handleChange}
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Registrar
      </button>
    </form>
  </div>
  );
};

export default App;
