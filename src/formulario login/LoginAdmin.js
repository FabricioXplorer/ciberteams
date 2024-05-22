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
    <div>
      <h1>Formulario de Inicio de Sesión</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="loginusuario"
          placeholder="Usuario"
          value={formData.loginusuario}
          onChange={handleChange}
        />
        <input
          type="password"
          name="loginclave"
          placeholder="Clave"
          value={formData.loginclave}
          onChange={handleChange}
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;
