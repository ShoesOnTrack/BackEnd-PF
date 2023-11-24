const { Router } = require("express");
const { createUser } = require("../handlers/POST/createUser");
// GET Handlers

// POST Handlers

// PUT Handlers

const userRouter = Router();

//Rutas
//Ruta de todos los productos con borrado logico
userRouter.post("/", createUser);

module.exports = userRouter;
