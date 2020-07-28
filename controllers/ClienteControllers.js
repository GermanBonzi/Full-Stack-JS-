const Cliente = require("../models/Cliente");
// cuando se crea un nuevo cliente

exports.nuevoCliente = async function (req, res, next) {
  // TODO: INSERTAR VALORES EN LA BASE DE DATOS

  // crear el objeto cliente con los datos de req.body
  const cliente = new Cliente(req.body);
  try {
    await cliente.save();
    res.json({ mensaje: "el cliente se agrego correctamente" });
  } catch (error) {
    console.log(error);
    next();
  }
};

// OBTIENE LOS CLIENTES DE LA BBDD
exports.obtenerCliente = async function (req, res, next) {
  try {
    const clienteconsulta = await Cliente.find({});
    res.json(clienteconsulta);
  } catch (error) {
    console.log(error);
    next();
  }
};

// OBTIENE UN CLIENTE EN ESPECIFICO POR EL ID
exports.obtenerClienteporId = async function (req, res, next) {
  try {
    const clienteid = await Cliente.findById(req.params.id);
    res.json(clienteid);
  } catch (error) {
    console.log(error);
    next();
  }
};

// ACTUALIZA UN CLIENTE POR ID
exports.actualizarCliente = async function (req, res, next) {
  try {
    const cliente = await Cliente.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.json(cliente);
  } catch (error) {
    console.log(error);
    next();
  }
};

// ELIMINA UN CLIENTE ESPECIFICO
exports.eliminarCliente = async function (req, res, next) {
  try {
    const clienteeliminado = await Cliente.findOneAndDelete({
      _id: req.params.id,
    });
    res.json(clienteeliminado + " cliente eliminado");
  } catch (error) {
    console.log(error);
  }
};
