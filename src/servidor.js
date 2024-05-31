const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const moment = require('moment');
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Tu usuario de MySQL
    password: '', // Tu contraseña de MySQL
    database: 'ciberkids'
});

/*----------------------------------------------------------------------------------------------------------- */
app.post('/api/alumno', (req, res) => {
    const { imagen_alumno, tipo_sangre, lugar_familia, cod_rude, nro_hermanos, nombres, apellidos, documentodeidentidad, fechanacimiento, sexo, ciudad, direccion, estado, fecharegistro } = req.body;

    const INSERT_QUERY = `INSERT INTO alumno ( imagen_alumno, tipo_sangre, lugar_familia, cod_rude, nro_hermanos, nombres, apellidos, documentodeidentidad, fechanacimiento, sexo, ciudad, direccion, estado, fecharegistro ) VALUES (?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?,?, ?, ?)`;

    connection.query(INSERT_QUERY, [imagen_alumno, tipo_sangre, lugar_familia, cod_rude, nro_hermanos, nombres, apellidos, documentodeidentidad, fechanacimiento, sexo, ciudad, direccion, estado, fecharegistro], (error, results, fields) => {
        if (error) {
            console.error('Error al realizar el registro:', error);
            res.status(500).json({ success: false, message: 'Error al registrar usuario' });
        } else {
            res.json({ success: true, message: 'Registro exitoso' });
        }
    });
});
app.get('/api/alumno', (req, res) => {

    const sql = 'SELECT * FROM alumno';

    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error al obtener los registros:', err);
            res.status(500).json({ success: false, message: 'Error al obtener los registros' });
            return;
        }
        res.json(results);
    });
});

/*----------------------------------------------------------------------------------------------------------- */
app.post('/api/tutores', (req, res) => {
    const {nombre_madre, ci_madre, telefono_madre, trabajo_madre, nombre_padre, ci_padre, telefono_padre,trabajo_padre} = req.body;

    const INSERT_QUERY = `INSERT INTO tutores (nombre_madre, ci_madre, telefono_madre, trabajo_madre, nombre_padre, ci_padre, telefono_padre,trabajo_padre ) VALUES (?, ?, ?, ?, ?,?, ?, ?)`;

    connection.query(INSERT_QUERY, [nombre_madre, ci_madre, telefono_madre, trabajo_madre, nombre_padre, ci_padre, telefono_padre,trabajo_padre ], (error, results, fields) => {
        if (error) {
            console.error('Error al realizar el registro:', error);
            res.status(500).json({ success: false, message: 'Error al registrar usuario' });
        } else {
            res.json({ success: true, message: 'Registro exitoso' });
        }
    });
});


app.get('/api/tutores', (req, res) => {

    const sql = 'SELECT * FROM tutores';

    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error al obtener los registros:', err);
            res.status(500).json({ success: false, message: 'Error al obtener los registros' });
            return;
        }
        res.json(results);
    });
});
/*----------------------------------------------------------------------------------------------------------- */

app.post('/api/datos_preinscripcion', (req, res) => {
    const { carnet_identidad_dp, extension_carnet_dp, nombres_dp, primer_apellido_dp, segundo_apellido_dp, fecha_nacimiento_dp, correo_electronico_dp, genero_dp, telefono_dp, direccion_domicilio_dp, contato_dp } = req.body;

    const INSERT_QUERY = `INSERT INTO datos_preinscripcion ( carnet_identidad_dp, extension_carnet_dp, nombres_dp, primer_apellido_dp, segundo_apellido_dp, fecha_nacimiento_dp, correo_electronico_dp, genero_dp, telefono_dp, direccion_domicilio_dp, contato_dp ) VALUES (?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?)`;

    connection.query(INSERT_QUERY, [carnet_identidad_dp, extension_carnet_dp, nombres_dp, primer_apellido_dp, segundo_apellido_dp, fecha_nacimiento_dp, correo_electronico_dp, genero_dp, telefono_dp, direccion_domicilio_dp, contato_dp], (error, results, fields) => {
        if (error) {
            console.error('Error al realizar el registro:', error);
            res.status(500).json({ success: false, message: 'Error al registrar usuario' });
        } else {
            res.json({ success: true, message: 'Registro exitoso' });
        }
    });
});
app.get('/api/datos_preinscripcion', (req, res) => {

    const sql = 'SELECT * FROM datos_preinscripcion';

    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error al obtener los registros:', err);
            res.status(500).json({ success: false, message: 'Error al obtener los registros' });
            return;
        }
        res.json(results);
    });
});
/*----------------------------------------------------------------------------------------------------------- */

app.post('/api/profesor', (req, res) => {
    const { nombres, apellidopaterno, apellidomaterno, profesion, antecedentes, añosexperiencia } = req.body;

    const INSERT_QUERY = `INSERT INTO profesor ( nombres, apellidopaterno, apellidomaterno, profesion, antecedentes, añosexperiencia ) VALUES (?, ?, ?, ?, ?, ?)`;

    connection.query(INSERT_QUERY, [nombres, apellidopaterno, apellidomaterno, profesion, antecedentes, añosexperiencia], (error, results, fields) => {
        if (error) {
            console.error('Error al realizar el registro:', error);
            res.status(500).json({ success: false, message: 'Error al registrar usuario' });
        } else {
            res.json({ success: true, message: 'Registro exitoso' });
        }
    });
});
app.get('/api/profesor', (req, res) => {

    const sql = 'SELECT * FROM profesor';

    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error al obtener los registros:', err);
            res.status(500).json({ success: false, message: 'Error al obtener los registros' });
            return;
        }
        res.json(results);
    });
});
/*----------------------------------------------------------------------------------------------------------- */

app.post('/api/usuario', (req, res) => {
    const { loginusuario, loginclave } = req.body;

    const INSERT_QUERY = `INSERT INTO usuario ( loginusuario, loginclave ) VALUES (?, ?)`;

    connection.query(INSERT_QUERY, [loginusuario, loginclave], (error, results, fields) => {
        if (error) {
            console.error('Error al realizar el registro:', error);
            res.status(500).json({ success: false, message: 'Error al registrar usuario' });
        } else {
            res.json({ success: true, message: 'Registro exitoso' });
        }
    });
});
app.get('/api/usuario', (req, res) => {
    const { loginusuario, loginclave } = req.query; // Cambia a req.query para obtener los parámetros de consulta
  
    // Realiza la consulta para recuperar los datos del usuario
    const SELECT_QUERY = 'SELECT * FROM usuario WHERE loginusuario = ? AND loginclave = ?';
    connection.query(SELECT_QUERY, [loginusuario, loginclave], (error, results, fields) => {
      if (error) {
        console.error('Error al realizar la consulta:', error);
        return res.status(500).json({ success: false, message: 'Error al iniciar sesión.' });
      }
  
      // Verifica si se encontró un usuario con las credenciales proporcionadas
      if (results.length === 0) {
        // No se encontró ningún usuario con las credenciales proporcionadas
        return res.status(401).json({ success: false, message: 'Usuario o contraseña incorrectos.' });
      }
  
      // El inicio de sesión fue exitoso
      res.status(200).json({ success: true, message: 'Inicio de sesión exitoso.', usuario: results[0] });
    });
  });
  
/*----------------------------------------------------------------------------------------------------------- */




























/*----------------------------------------------------------------------------------------------------------- */


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
    
    // Conectar a la base de datos MySQL
    connection.connect((err) => {
        if (err) {
            console.error('Error al conectar a la base de datos MySQL:', err);
            return;
        }
        console.log('Conexión exitosa a la base de datos MySQL');
    });
});


/*----------------------------------------------------------------------------------------------------------- */