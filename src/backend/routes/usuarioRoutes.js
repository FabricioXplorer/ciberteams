const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

router.post('/', async (req, res) => {
  try {
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al registrar usuario', error });
  }
});

router.get('/', async (req, res) => {
  try {
    const { loginusuario, loginclave } = req.query;
    const usuario = await Usuario.findOne({ where: { loginusuario, loginclave } });
    if (usuario) {
      res.json({ success: true, message: 'Inicio de sesión exitoso', usuario });
    } else {
      res.status(401).json({ success: false, message: 'Usuario o contraseña incorrectos' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al iniciar sesión', error });
  }
});

module.exports = router;
