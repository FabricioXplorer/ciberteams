import React, { useState, useEffect } from 'react';

function CntUsr() {
  const [loginusuario, setLoginUsuario] = useState('');
  const [loginclave, setLoginClave] = useState('');
  const [message, setMessage] = useState('');
  const [usuarios, setUsuarios] = useState([]); // Inicializa como array vacío

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/usuario');
      const data = await response.json();

      // Asegúrate de que data es un array antes de establecer el estado
      if (Array.isArray(data)) {
        const usuariosConEstado = data.map(usuario => ({
          ...usuario,
          showEncryptedPassword: false,
          showOriginalPassword: false
        }));
        setUsuarios(usuariosConEstado);
      } else {
        console.error('La respuesta de la API no es un array:', data);
      }
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/usuario/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ loginusuario, loginclave }),
      });

      const data = await response.json();
      setMessage(data.message);

      if (data.success) {
        setLoginUsuario('');
        setLoginClave('');
        fetchUsuarios();
      }
    } catch (error) {
      console.error('Error al registrar el usuario', error);
      setMessage('Error al registrar el usuario');
    }
  };

  const toggleEncryptedPassword = (index) => {
    setUsuarios((prevUsuarios) =>
      prevUsuarios.map((usuario, i) =>
        i === index ? { ...usuario, showEncryptedPassword: !usuario.showEncryptedPassword } : usuario
      )
    );
  };

  const toggleOriginalPassword = (index) => {
    setUsuarios((prevUsuarios) =>
      prevUsuarios.map((usuario, i) =>
        i === index ? { ...usuario, showOriginalPassword: !usuario.showOriginalPassword } : usuario
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Registro de Usuario</h2>
      <form onSubmit={handleRegister} className="mb-4">
        <div className="mb-2">
          <label className="block">Usuario:</label>
          <input
            type="text"
            value={loginusuario}
            onChange={(e) => setLoginUsuario(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-2">
          <label className="block">Contraseña:</label>
          <input
            type="password"
            value={loginclave}
            onChange={(e) => setLoginClave(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Registrar
        </button>
      </form>
      {message && <p className="mb-4">{message}</p>}
      <h2 className="text-2xl font-bold mb-4">Usuarios Registrados</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Usuario</th>
            <th className="py-2 px-4 border-b">Contraseña Encriptada</th>
            <th className="py-2 px-4 border-b">Contraseña Original</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={usuario.loginusuario}>
              <td className="py-2 px-4 border-b">{usuario.loginusuario}</td>
              <td className="py-2 px-4 border-b">
                <span onClick={() => toggleEncryptedPassword(index)} className="cursor-pointer">
                  {usuario.showEncryptedPassword ? usuario.loginclave : '********'}
                </span>
              </td>
              <td className="py-2 px-4 border-b">
                <span onClick={() => toggleOriginalPassword(index)} className="cursor-pointer">
                  {usuario.showOriginalPassword ? usuario.originalPassword : '********'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CntUsr;
