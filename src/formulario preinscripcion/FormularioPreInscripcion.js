
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState({
    carnet_identidad_dp: '',
    extension_carnet_dp: '',
    nombres_dp: '',
    primer_apellido_dp: '',
    segundo_apellido_dp: '',
    fecha_nacimiento_dp: '',
    correo_electronico_dp: '',
    genero_dp: '',
    telefono_dp: '',
    direccion_domicilio_dp: '',
    contato_dp: ''
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
      await axios.post('http://localhost:5000/api/datos_preinscripcion', formData);
      alert('Registro exitoso');
    } catch (error) {
      console.error('Error en el registro:', error);
      alert('Error en el registro');
    }
  };

  return (
<div className="App max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Formulario de Preinscripción</h1>
      <form onSubmit={handleSubmit} className="bg-lime-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="carnet_identidad_dp"
            placeholder="Carnet de Identidad"
            value={formData.carnet_identidad_dp}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="extension_carnet_dp"
            placeholder="Extensión del Carnet"
            value={formData.extension_carnet_dp}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="nombres_dp"
            placeholder="Nombres"
            value={formData.nombres_dp}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="primer_apellido_dp"
            placeholder="Primer Apellido"
            value={formData.primer_apellido_dp}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="segundo_apellido_dp"
            placeholder="Segundo Apellido"
            value={formData.segundo_apellido_dp}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            name="fecha_nacimiento_dp"
            value={formData.fecha_nacimiento_dp}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="correo_electronico_dp"
            placeholder="Correo Electrónico"
            value={formData.correo_electronico_dp}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="genero_dp"
            placeholder="Género"
            value={formData.genero_dp}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="telefono_dp"
            placeholder="Teléfono"
            value={formData.telefono_dp}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="direccion_domicilio_dp"
            placeholder="Dirección de Domicilio"
            value={formData.direccion_domicilio_dp}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="contato_dp"
            placeholder="Contacto"
            value={formData.contato_dp}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-end items-center mt-4">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
