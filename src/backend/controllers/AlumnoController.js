// AlumnoController.js

const Alumno = require('../models/Alumno');

// Función para crear un nuevo alumno
exports.createAlumno = async (req, res) => {
    try {
        const nuevoAlumno = await Alumno.create(req.body);
        res.status(201).json({ success: true, data: nuevoAlumno });
    } catch (error) {
        console.error('Error al crear un nuevo alumno:', error);
        res.status(500).json({ success: false, message: 'Error al crear un nuevo alumno' });
    }
};

// Otras funciones para manejar las operaciones CRUD relacionadas con los alumnos
