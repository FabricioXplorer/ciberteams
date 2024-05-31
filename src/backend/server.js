const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const alumnoRoutes = require('./routes/alumnoRoutes');
const tutorRoutes = require('./routes/tutorRoutes');
const datosPreinscripcionRoutes = require('./routes/datospreinscripcionRoutes');
const profesorRoutes = require('./routes/profesorRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api/alumno', alumnoRoutes);
app.use('/api/tutor', tutorRoutes);
app.use('/api/datos_preinscripcion', datosPreinscripcionRoutes);
app.use('/api/profesor', profesorRoutes);
app.use('/api/usuario', usuarioRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
    console.log('Conexión exitosa a la base de datos MySQL');
  });
});
