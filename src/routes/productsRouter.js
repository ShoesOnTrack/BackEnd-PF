const { Router } = require("express");
const { getProducts } = require("../handlers/GET/getProducts");
// GET Handlers

// POST Handlers
const { createProduct } = require("../handlers/POST/createProduct");
const { getProductsById } = require("../handlers/GET/getProductsById");

// PUT Handlers

const productRouter = Router();

//Rutas

//Ruta de busqueda por ID
productRouter.get("/:id", getProductsById);
//Ruta de todos los productos con borrado logico
productRouter.get("/", getProducts);
//Ruta para crear productos
productRouter.post("/", createProduct);

module.exports = productRouter;
