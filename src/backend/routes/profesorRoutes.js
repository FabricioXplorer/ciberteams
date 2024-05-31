const express = require('express');
const router = express.Router();
const Profesor = require('../models/Profesor');

router.post('/', async (req, res) => {
  try {
    const profesor = await Profesor.create(req.body);
    res.status(201).json(profesor);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al registrar profesor', error });
  }
});

router.get('/', async (req, res) => {
  try {
    const profesores = await Profesor.findAll();
    res.json(profesores);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al obtener los registros', error });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Profesor.update(req.body, { where: { id } });
    if (updated) {
      const updatedRecord = await Profesor.findOne({ where: { id } });
      res.status(200).json({ success: true, message: 'Registro modificado correctamente', data: updatedRecord });
    } else {
      res.status(404).json({ success: false, message: 'Registro no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al modificar el registro', error });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Profesor.destroy({ where: { id } });
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
