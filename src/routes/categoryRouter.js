const { Router } = require("express");
// GET Handlers
const { getCategories } = require("../handlers/GET/getCategories");

// POST Handlers
const { createCategories } = require("../handlers/POST/createCategories");

// PUT Handlers

const categoryRouter = Router();

//Rutas
//Ruta de crear categorias
categoryRouter.get("/", getCategories);
//Ruta de crear categorias
categoryRouter.post("/", createCategories);

module.exports = categoryRouter;
