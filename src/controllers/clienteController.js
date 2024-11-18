const Cliente = require('../models/clienteModel');

// Controlador para crear un nuevo cliente
const crearCliente = async (req, res) => {
  try {
    const { nombre, email, telefono, contraseña } = req.body;

    // Validación básica de entrada
    if (!nombre || !email || !telefono || !contraseña) {
      return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
    }

    // Crear un nuevo cliente
    const nuevoCliente = new Cliente(req.body);
    await nuevoCliente.save();
    res.status(201).json({ mensaje: 'Cliente creado con éxito', cliente: nuevoCliente });
  } catch (error) {
    console.error('Error al crear cliente:', error);
    res.status(500).json({ mensaje: 'Error al crear cliente', error });
  }
};

module.exports = { crearCliente };