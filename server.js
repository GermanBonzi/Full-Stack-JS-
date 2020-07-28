const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/index");
const bodyParser = require("body-parser");
const cors = require("cors");
// crear el servidor
const app = express();

// habilitar cors
app.use(cors());

// conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/turno", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// habilitar el body-parser, body-parser extrae lo que el usuario envia en una peticion
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// habilitar routing
app.use("/", routes());

// levantar el servidor
app.listen(4200, function () {
  console.log("servidor funcionando");
});
