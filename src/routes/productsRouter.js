const { Router } = require("express");
// GET Handlers
const { getProducts } = require("../handlers/GET/getProducts");
const { getProductsById } = require("../handlers/GET/getProductsById");
const { getProductseHandler } = require("../handlers/GET/getFiltros");

// POST Handlers
const { createProduct } = require("../handlers/POST/createProduct");

// PUT Handlers
const { updateProduct } = require("../handlers/PUT/updateProduct");
const { getAllUserProductsHandler } = require("../handlers/GET/getProductsUser");

const productRouter = Router();

//Rutas

//Ruta para buscar los productos de un user
productRouter.get("/all", getProducts);
//Ruta de busqueda por ID
productRouter.get("/:id", getProductsById);
//Ruta de todos los productos con borrado logico
productRouter.put("/", updateProduct);
//Ruta de todos los productos con borrado logico
productRouter.get("/", getProductseHandler);
//Ruta para crear productos
productRouter.post("/", createProduct);
<<<<<<< HEAD
//Ruta para buscar los productos de un user
productRouter.get("/all", getAllUserProductsHandler)
=======
>>>>>>> 73b0ac1276c18fa455195ed3ef64c3dc984de988

module.exports = productRouter;
