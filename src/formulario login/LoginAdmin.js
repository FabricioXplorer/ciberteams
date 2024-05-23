import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    loginusuario: '',
    loginclave: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { loginusuario, loginclave } = formData;

    if (!loginusuario || !loginclave) {
      alert('Por favor ingrese su usuario y contraseña.');
      return;
    }

    try {
      const response = await axios.get('http://localhost:5000/api/usuario', {
        params: { loginusuario, loginclave }
      });
      
      if (response.status === 200 && response.data.success) {
        alert('Inicio de sesión exitoso');
        navigate('/DashboardAlumno');
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      alert('Error en el inicio de sesión');
    }
  };

  return (
<div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-lime-300 p-8 border border-gray-300 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Formulario de Inicio de Sesión</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="loginusuario"
            placeholder="Usuario"
            value={formData.loginusuario}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="password"
            name="loginclave"
            placeholder="Clave"
            value={formData.loginclave}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
