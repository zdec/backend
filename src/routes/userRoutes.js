const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/userController');

// Ruta para registrar un usuario
router.post('/register', register);

// Ruta para iniciar sesión
router.post('/login', login);

module.exports = router;
