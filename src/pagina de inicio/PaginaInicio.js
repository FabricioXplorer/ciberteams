import React from 'react';
import './PaginaInicio.css';
import { Link } from 'react-router-dom';
// import logo from '../Imagenes/policia1.png';


function FormularioAlumno() {
  return (
    <div className="PaginaInicio">
      <div className="content">,.
        <nav className="navbar-green">
          <h2 className='titulohh'>CiberKids</h2>
          <ul className='links'>
            <li className='navbar-item'>
              <Link to="/formularioregistro" className="navbar-link">Registro estudiante nuevo</Link>
            </li>
            <li className='navbar-item'>
              <Link to="/formularioprofesor" className="navbar-link">Registro profesor nuevo</Link>
            </li>
            <li className='navbar-item'>
              <Link to="/formulariopreinscripcion" className="navbar-link">Pre inscripcion</Link>
            </li>
            <li className='navbar-item'>
              <Link to="/gradoseccion" className="navbar-link">Grados</Link>
            </li>
            
            <li className='navbar-item'>
              <Link to="/loginadmin" className="navbar-link">Inicio de Sesion</Link>
            </li>
          </ul> 
        </nav>
        <div className="video-container">
         
          <div className="video-message">
          <div className="text-container">
  </div>
  {/* <div className="navbar-logo">
    <img src={logo} alt="Logo" className="navbar-logo-imggg moneda-animation" />
  </div> */}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormularioAlumno;
