import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import letra1 from '../imagenes/letra.png';

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
      const response = await axios.post('http://localhost:5000/api/usuario/login', {
        loginusuario,
        loginclave
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
    <div className="mt-10 flex justify-center">
      <div className="max-w-md w-full bg-blue-500 p-16 border border-yellow-400 rounded-lg shadow-lg">
      <img src={letra1} alt="CiberKids Logo" className="w-40 font-bold ml-20 -mt-20 flex justify-center animate-pulse"/>

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
          <button type="submit" className="w-40 ml-20  bg-yellow-400 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline animate-pulse ">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
