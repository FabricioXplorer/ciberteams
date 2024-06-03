import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../navbar contex/AuthContext'; // Asegúrate de importar correctamente el contexto
import letra1 from '../imagenes/letra.png';

function FormularioAlumno() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userToken'); // Elimina el token de autenticación
    setIsLoggedIn(false); // Actualiza el estado de autenticación
    navigate('/'); // Redirige al usuario a la página de inicio
  };
  return (
    
    <div className="min-h-screen flex flex-col bg-gray-100">
      <nav className="bg-blue-500 text-white p-5 flex justify-between items-center">
      <Link to="https://ciberkids.com.bo/#/">
      <img src={letra1} alt="CiberKids Logo" className="h-20 font-bold mb-2 animate-pulse"  />
      </Link>
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link to="/formularioregistro" className="hover:bg-yellow-400 p-2 rounded transition duration-300 transform hover:scale-110">Registro estudiante nuevo</Link>
          </li>
          <li>
            <Link to="/formularioprofesor" className="hover:bg-yellow-400 p-2 rounded transition duration-300 transform hover:scale-110">Registro profesor nuevo</Link>
          </li>
          <li>
            <Link to="/formulariopreinscripcion" className="hover:bg-yellow-400 p-2 rounded transition duration-300 transform hover:scale-110">Pre inscripción</Link>
          </li>
          <li>
            <Link to="/gradoseccion" className="hover:bg-yellow-400 p-2 rounded transition duration-300 transform hover:scale-110">Grados</Link>
          </li>
          <li>
          <Link to="/dashboardpreinscripcion" className="hover:bg-yellow-400 p-2 rounded transition duration-300 transform hover:scale-110">Usuarios</Link>
          </li>
          <li><button onClick={handleLogout} className="hover:bg-yellow-400 p-2 rounded -mt-20 mr-10 ">Cerrar Sesión</button></li>
        </ul>
      </nav>
      <div className="flex-grow p-6">
        <div className="carousel relative">
          <div className="carousel-inner relative overflow-hidden w-full">
            <input className="carousel-open" type="radio" id="carousel-1" name="carousel" hidden defaultChecked />
            <div className="carousel-item absolute opacity-0" style={{ height: '50vh' }}>
              <div className="block h-full w-full bg-blue-500 text-white text-center p-4">
                <img src="/ck1.jpg" alt="Slide 1" className="h-full w-full object-cover"/>
              </div>
            </div>
            <label htmlFor="carousel-2" className="carousel-control next control-1 w-10 h-10 bg-blue-500 text-white text-center leading-10 cursor-pointer hover:bg-blue-700 absolute right-0 top-0 bottom-0 my-auto">›</label>

            <input className="carousel-open" type="radio" id="carousel-2" name="carousel" hidden />
            <div className="carousel-item absolute opacity-0" style={{ height: '50vh' }}>
              <div className="block h-full w-full bg-blue-500 text-white text-center p-4">
                <img src="/path-to-your-image2.jpg" alt="Slide 2" className="h-full w-full object-cover"/>
              </div>
            </div>
            <label htmlFor="carousel-1" className="carousel-control prev control-2 w-10 h-10 bg-blue-500 text-white text-center leading-10 cursor-pointer hover:bg-blue-700 absolute left-0 top-0 bottom-0 my-auto">‹</label>
            <label htmlFor="carousel-3" className="carousel-control next control-2 w-10 h-10 bg-blue-500 text-white text-center leading-10 cursor-pointer hover:bg-blue-700 absolute right-0 top-0 bottom-0 my-auto">›</label>

            <input className="carousel-open" type="radio" id="carousel-3" name="carousel" hidden />
            <div className="carousel-item absolute opacity-0" style={{ height: '50vh' }}>
              <div className="block h-full w-full bg-blue-500 text-white text-center p-4">
                <img src="/path-to-your-image3.jpg" alt="Slide 3" className="h-full w-full object-cover"/>
              </div>
            </div>
            <label htmlFor="carousel-2" className="carousel-control prev control-3 w-10 h-10 bg-blue-500 text-white text-center leading-10 cursor-pointer hover:bg-blue-700 absolute left-0 top-0 bottom-0 my-auto">‹</label>

            <ol className="carousel-indicators">
              <li className="inline-block mr-3">
                <label htmlFor="carousel-1" className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-800">•</label>
              </li>
              <li className="inline-block mr-3">
                <label htmlFor="carousel-2" className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-800">•</label>
              </li>
              <li className="inline-block mr-3">
                <label htmlFor="carousel-3" className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-800">•</label>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormularioAlumno;
