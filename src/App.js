import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './navbar contex/AuthContext';
import PaginaInicio from './pagina de inicio/PaginaInicio';
import FormularioRegistroAlumno from './formulario alumno/FormularioRegistroAlumno';
import LoginAdmin from './formulario login/LoginAdmin';
import FormularioPreInscripcion from './formulario preinscripcion/FormularioPreInscripcion';
import GradoSeccion from './Grado seccion/GradoSeccion';
import FormularioRegistroProfesor from './preformulario profesor/FormularioRegistroProfesor';
import DashboardAlumno from './dashboard alumno/DashboardAlumno';
import DashboardPreinscripcion from './dashboard pre inscripcion/DashboardPreinscripcion'
function App() {
  return (
    <AuthProvider>
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
          <Route path="/dashboardpreinscripcion" element={<DashboardPreinscripcion/>}/>
          
          
          
        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
}



export default App;
