const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
});

const Usuario = mongoose.model('Usuario', usuarioSchema,'clientes');

module.exports = Usuario;