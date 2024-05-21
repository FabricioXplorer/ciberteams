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

/*------------------------------------------------ */
app.post('/api/alumno', (req, res) => {
    const { Turno, Imagen_Alumno, Tipo_sangre, Lugar_familia, Cod_rude, Nro_hermanos, Nombres, Apellidos, DocumentoIdentidad, FechaNacimiento, Sexo, Ciudad, Direccion, Nombre_madre, Documento_madre, Telefono_madre, Trabajo_madre, Nombre_padre, Documento_padre, Telefono_padre, Trabajo_padre, Activo, FechaRegistro } = req.body;

    const INSERT_QUERY = `INSERT INTO alumno (Turno, Imagen_Alumno, Tipo_sangre, Lugar_familia, Cod_rude, Nro_hermanos, Nombres, Apellidos, DocumentoIdentidad, FechaNacimiento, Sexo, Ciudad, Direccion, Nombre_madre, Documento_madre, Telefono_madre, Trabajo_madre, Nombre_padre, Documento_padre, Telefono_padre, Trabajo_padre, Activo, FechaRegistro) VALUES (?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?)`;

    connection.query(INSERT_QUERY, [Turno, Imagen_Alumno, Tipo_sangre, Lugar_familia, Cod_rude, Nro_hermanos, Nombres, Apellidos, DocumentoIdentidad, FechaNacimiento, Sexo, Ciudad, Direccion, Nombre_madre, Documento_madre, Telefono_madre, Trabajo_madre, Nombre_padre, Documento_padre, Telefono_padre, Trabajo_padre, Activo, FechaRegistro], (error, results, fields) => {
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

/*------------------------------------------------ */


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