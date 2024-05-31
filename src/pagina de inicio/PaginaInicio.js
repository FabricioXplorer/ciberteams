import React from 'react';
import { Link } from 'react-router-dom';

function FormularioAlumno() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <nav className="bg-blue-500 text-white p-5 flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">CiberKids</h2>
        <ul className="flex space-x-6 text-lg">
          
          <li>
            <Link to="/formulariopreinscripcion" className="hover:bg-blue-700 p-2 rounded">Pre inscripción</Link>
          </li>
          <li>
            <Link to="/gradoseccion" className="hover:bg-blue-700 p-2 rounded">Grados</Link>
          </li>
          <li>
            <Link to="/loginadmin" className="hover:bg-blue-700 p-2 rounded">Inicio de Sesión</Link>
          </li>
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
