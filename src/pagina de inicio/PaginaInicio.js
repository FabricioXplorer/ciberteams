import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../Imagenes/policia1.png'; // Descomenta y usa si tienes un logo

function FormularioAlumno() {
  return (
    <div className="min-h-screen flex flex-row bg-gray-100">
    <nav className="bg-green-500 w-64 text-white min-h-screen p-5">
      <h2 className='text-xl font-bold mb-10'>CiberKids</h2>
      <ul className='flex flex-col'>
        <li className='mb-4'>
          <Link to="/formularioregistro" className="hover:bg-gray-700 p-2 rounded">Registro estudiante nuevo</Link>
        </li>
        <li className='mb-4'>
          <Link to="/formularioprofesor" className="hover:bg-gray-700 p-2 rounded">Registro profesor nuevo</Link>
        </li>
        <li className='mb-4'>
          <Link to="/formulariopreinscripcion" className="hover:bg-gray-700 p-2 rounded">Pre inscripción</Link>
        </li>
        <li className='mb-4'>
          <Link to="/gradoseccion" className="hover:bg-gray-700 p-2 rounded">Grados</Link>
        </li>
        <li className='mb-4'>
          <Link to="/loginadmin" className="hover:bg-gray-700 p-2 rounded">Inicio de Sesión</Link>
        </li>
      </ul>
    </nav>
    <div className="flex-grow p-6">
      {/* Aquí iría el contenido principal de la página */}
    </div>
  </div>
  );
}

export default FormularioAlumno;
