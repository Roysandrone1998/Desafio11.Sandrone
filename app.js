const express = require("express");
const app = express();
const PUERTO = 8080; 
const usuariosRouter = require("./src/routes/usuario.router.js");

//Ruta

app.use("/", usuariosRouter);

app.listen(PUERTO, () => {
    console.log("Escuchando en el Puerto de Paraná");
})