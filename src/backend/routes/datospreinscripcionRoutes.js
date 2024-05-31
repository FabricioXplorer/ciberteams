const express = require('express');
const router = express.Router();
const DatosPreinscripcion = require('../models/DatosPreinscripcion');

// Crear un nuevo registro
router.post('/', async (req, res) => {
  try {
    const datosPreinscripcion = await DatosPreinscripcion.create(req.body);
    res.status(201).json(datosPreinscripcion);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al registrar los datos', error });
  }
});

// Obtener todos los registros
router.get('/', async (req, res) => {
  try {
    const datosPreinscripcion = await DatosPreinscripcion.findAll();
    res.json(datosPreinscripcion);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al obtener los registros', error });
  }
});

// Modificar un registro existente
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await DatosPreinscripcion.update(req.body, { where: { id } });
    if (updated) {
      const updatedRecord = await DatosPreinscripcion.findOne({ where: { id } });
      res.status(200).json({ success: true, message: 'Registro modificado correctamente', data: updatedRecord });
    } else {
      res.status(404).json({ success: false, message: 'Registro no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al modificar el registro', error });
  }
});

// Eliminar un registro existente
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await DatosPreinscripcion.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ success: true, message: 'Registro eliminado correctamente' });
    } else {
      res.status(404).json({ success: false, message: 'Registro no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al eliminar el registro', error });
  }
});

module.exports = router;