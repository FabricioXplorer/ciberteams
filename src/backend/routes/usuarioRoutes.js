const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');

// Ruta para registrar un nuevo usuario
router.post('/register', async (req, res) => {
  try {
    const { loginusuario, loginclave } = req.body;
    console.log('Datos recibidos para registro:', { loginusuario, loginclave });

    // Generar un hash de la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(loginclave, salt);
    console.log('Contraseña encriptada:', hashedPassword);

    // Crear el usuario con la contraseña hasheada y la original
    const usuario = await Usuario.create({
      loginusuario,
      loginclave: hashedPassword,
      originalPassword: loginclave
    });
    console.log('Usuario creado:', usuario);

    res.status(201).json({ success: true, message: 'Usuario registrado exitosamente', usuario });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ success: false, message: 'Error al registrar usuario', error });
  }
});

// Ruta para obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({
      attributes: ['loginusuario', 'loginclave', 'originalPassword'] // Seleccionar también la contraseña original
    });
    res.json(usuarios); // Asegúrate de devolver un array, incluso si está vacío
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).json({ success: false, message: 'Error al obtener los usuarios', error });
  }
});

// Ruta para iniciar sesión
router.post('/login', async (req, res) => {
  try {
    const { loginusuario, loginclave } = req.body;

    // Buscar el usuario por su nombre de usuario
    const usuario = await Usuario.findOne({ where: { loginusuario } });

    if (usuario) {
      // Verificar la contraseña
      const isMatch = await bcrypt.compare(loginclave, usuario.loginclave);

      if (isMatch) {
        res.json({ success: true, message: 'Inicio de sesión exitoso', usuario });
      } else {
        res.status(401).json({ success: false, message: 'Usuario o contraseña incorrectos' });
      }
    } else {
      res.status(401).json({ success: false, message: 'Usuario o contraseña incorrectos' });
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ success: false, message: 'Error al iniciar sesión', error });
  }
});

module.exports = router;
