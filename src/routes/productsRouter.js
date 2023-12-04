const { Router } = require("express");
// GET Handlers
const { getProducts } = require("../handlers/GET/getProducts");
const { getProductsById } = require("../handlers/GET/getProductsById");
const { getProductseHandler } = require("../handlers/GET/getFiltros");


// POST Handlers
const { createProduct } = require("../handlers/POST/createProduct");

// PUT Handlers
const { updateProduct } = require("../handlers/PUT/updateProduct");

const productRouter = Router();

//Rutas

//Ruta de busqueda por ID
productRouter.get("/:id", getProductsById);
//Ruta de todos los productos con borrado logico
productRouter.put("/", updateProduct);
//Ruta de todos los productos con borrado logico
productRouter.get("/", getProductseHandler);
//Ruta para crear productos
productRouter.post("/", createProduct);
//Ruta para buscar los productos de un user
productRouter.get("/all", )

module.exports = productRouter;
