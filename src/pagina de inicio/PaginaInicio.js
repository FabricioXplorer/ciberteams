import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../Imagenes/policia1.png'; // Descomenta y usa si tienes un logo

function FormularioAlumno() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-green-500 text-white p-4 shadow-lg">
        {/* <img src={logo} alt="Logo" className="h-10 w-10" /> */}
        <h2 className='text-xl font-bold'>CiberKids</h2>
        <ul className='flex justify-around mt-4'>
          <li>
            <Link to="/formularioregistro" className="hover:text-gray-200">Registro estudiante nuevo</Link>
          </li>
          <li>
            <Link to="/formularioprofesor" className="hover:text-gray-200">Registro profesor nuevo</Link>
          </li>
          <li>
            <Link to="/formulariopreinscripcion" className="hover:text-gray-200">Pre inscripción</Link>
          </li>
          <li>
            <Link to="/gradoseccion" className="hover:text-gray-200">Grados</Link>
          </li>
          <li>
            <Link to="/loginadmin" className="hover:text-gray-200">Inicio de Sesión</Link>
          </li>
        </ul>
      </nav>
      <div className="flex-grow p-6">
      </div>
    </div>
  );
}

export default FormularioAlumno;
