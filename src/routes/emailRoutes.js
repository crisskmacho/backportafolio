const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

router.post('/enviar-correo', emailController.enviarCorreo);

module.exports = router