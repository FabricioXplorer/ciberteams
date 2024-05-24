import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState({
    // Inicializa todos tus campos aquí como antes
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

  const handleFocus = (e) => {
    e.target.type = 'date';
  };

  const handleBlur = (e) => {
    if (e.target.value === '') e.target.type = 'text';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviar datos del alumno
      const alumnoResponse = await axios.post('http://localhost:5000/api/alumno', formData);
      const idalumno = alumnoResponse.data.id;

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
    <div className="App max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Formulario de Registro</h1>
      <form onSubmit={handleSubmit} className="bg-lime-300 shadow-lg rounded-lg p-6 space-y-4">
        <h2 className="text-xl font-semibold">Información del Alumno</h2>
        <div className="space-y-3">
          <input type="file" name="imagen_alumno" onChange={handleChange} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"/>
          {/* Repite el patrón abajo para otros campos del formulario */}
          {['tipo_sangre', 'lugar_familia', 'cod_rude', 'nro_hermanos', 'nombres', 'apellidos', 'documentodeidentidad', 'sexo', 'ciudad', 'direccion'].map((item) => (
            <input type="text" name={item} placeholder={item.split('_').join(' ')} onChange={handleChange} className="w-full py-2 px-3 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"/>
          ))}
          <input type="text" name="fechanacimiento" placeholder="Fecha de nacimiento" onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} className="w-full py-2 px-3 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"/>
          <input type="text" name="fecharegistro" placeholder="Fecha de registro" onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} className="w-full py-2 px-3 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"/>
        </div>
        
        <h2 className="text-xl font-semibold">Información de los Tutores</h2>
        <div className="space-y-3">
          {['nombre_madre', 'ci_madre', 'telefono_madre', 'trabajo_madre', 'nombre_padre', 'ci_padre', 'telefono_padre', 'trabajo_padre'].map((item) => (
            <input type="text" name={item} placeholder={item.split('_').join(' ')} onChange={handleChange} className="w-full py-2 px-3 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"/>
          ))}
        </div>

        <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Registrar</button>
      </form>
    </div>
  );
};

export default App;
