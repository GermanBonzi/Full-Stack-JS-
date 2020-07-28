const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/ClienteControllers");

module.exports = function () {
  // AGREGA NUEVOS CLIENTES VIA POST
  router.post("/clientes", clienteController.nuevoCliente);

  // OBTIENE LOS REGISTROS DE LOS CLIENTES QUE ESTAN EN LA BBDD
  router.get("/clientes", clienteController.obtenerCliente);

  // OBTENER UN CLIENTE EN ESPECIFICO POR ID
  router.get("/clientes/:id", clienteController.obtenerClienteporId);

  // Actualizar un registro de un cliente con id especifico
  router.put("/clientes/:id", clienteController.actualizarCliente);

  // ELIMINAR UN CLIENTE
  router.delete("/clientes/:id", clienteController.eliminarCliente);

  return router;
};
