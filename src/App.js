import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PaginaInicio from './pagina de inicio/PaginaInicio';
import FormularioRegistroAlumno from './formulario alumno/FormularioRegistroAlumno';
import LoginAdmin from './formulario login/LoginAdmin';
import FormularioPreInscripcion from './formulario preinscripcion/FormularioPreInscripcion';
import GradoSeccion from './Grado seccion/GradoSeccion';
import FormularioRegistroProfesor from './preformulario profesor/FormularioRegistroProfesor';
import DashboardAlumno from './dashboard alumno/DashboardAlumno';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PaginaInicio/>} />
          <Route path="/paginainicio" element={<PaginaInicio/>} />
          <Route path="/formularioregistro" element={<FormularioRegistroAlumno/>} />
          <Route path="/formularioprofesor" element={<FormularioRegistroProfesor/>} />
          <Route path="/formulariopreinscripcion" element={<FormularioPreInscripcion/>} />
          <Route path="/loginadmin" element={<LoginAdmin/>} />
          <Route path="/gradoseccion" element={<GradoSeccion/>} />
          <Route path="/dashboardalumno" element={<DashboardAlumno/>} />
          
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
