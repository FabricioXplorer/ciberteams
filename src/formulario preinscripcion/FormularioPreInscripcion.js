
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
    <div className="App">
      <h1>Formulario de Preinscripción</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="carnet_identidad_dp"
          placeholder="Carnet de Identidad"
          value={formData.carnet_identidad_dp}
          onChange={handleChange}
        />
        <input
          type="text"
          name="extension_carnet_dp"
          placeholder="Extensión del Carnet"
          value={formData.extension_carnet_dp}
          onChange={handleChange}
        />
        <input
          type="text"
          name="nombres_dp"
          placeholder="Nombres"
          value={formData.nombres_dp}
          onChange={handleChange}
        />
        <input
          type="text"
          name="primer_apellido_dp"
          placeholder="Primer Apellido"
          value={formData.primer_apellido_dp}
          onChange={handleChange}
        />
        <input
          type="text"
          name="segundo_apellido_dp"
          placeholder="Segundo Apellido"
          value={formData.segundo_apellido_dp}
          onChange={handleChange}
        />
        <input
          type="date"
          name="fecha_nacimiento_dp"
          value={formData.fecha_nacimiento_dp}
          onChange={handleChange}
        />
        <input
          type="email"
          name="correo_electronico_dp"
          placeholder="Correo Electrónico"
          value={formData.correo_electronico_dp}
          onChange={handleChange}
        />
        <input
          type="text"
          name="genero_dp"
          placeholder="Género"
          value={formData.genero_dp}
          onChange={handleChange}
        />
        <input
          type="text"
          name="telefono_dp"
          placeholder="Teléfono"
          value={formData.telefono_dp}
          onChange={handleChange}
        />
        <input
          type="text"
          name="direccion_domicilio_dp"
          placeholder="Dirección de Domicilio"
          value={formData.direccion_domicilio_dp}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contato_dp"
          placeholder="Contacto"
          value={formData.contato_dp}
          onChange={handleChange}
        />

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default App;
