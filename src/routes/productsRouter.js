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
const { deleteProductseHandler } = require("../handlers/DELETE/deleteProductHandler");

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
//Ruta para buscar los productos de un user
productRouter.get("/all", getAllUserProductsHandler);
//Ruta para modificar los productos
productRouter.put("/change", updateProduct);
//Ruta para eliminar productos
productRouter.delete("/:id", deleteProductseHandler);

module.exports = productRouter;
