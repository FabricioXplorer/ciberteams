import React from 'react';
import { Link } from 'react-router-dom';
import letra1 from '../imagenes/letra.png';
import fondo from '../imagenes/ck.png';

function FormularioAlumno() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      
      <nav className="bg-blue-500 text-white p-5 flex justify-between items-center">
      
      <Link to="https://ciberkids.com.bo/#/">
      <img src={letra1} alt="CiberKids Logo" className="h-20 font-bold mb-2 animate-pulse"  />
      </Link>
       
        <ul className="flex space-x-6 text-lg">
          <li>
          <Link to="/paginainicio" className="hover:bg-yellow-400 p-2 rounded transition duration-300 transform hover:scale-110">Inicio</Link>
          </li>
          
          <li>
            <Link to="/formulariopreinscripcion" className="hover:bg-yellow-400 p-2 rounded transition duration-300 transform hover:scale-110">Pre inscripción</Link>
          </li>
          <li>
            <Link to="/gradoseccion" className="hover:bg-yellow-400 p-2 rounded transition duration-300 transform hover:scale-110">Grados</Link>
          </li>
          <li>
            <Link to="/loginadmin" className="hover:bg-yellow-400 p-2 rounded transition duration-300 transform hover:scale-110">Inicio de Sesión</Link>
          </li>
        </ul>
      </nav>
      <img src={fondo} alt="CiberKids Logo" className="w-full h-full object-cover p-50" />
      <div className="flex-grow p-6">
        
      </div>
    </div>
  );
}

export default FormularioAlumno;
