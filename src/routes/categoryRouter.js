const { Router } = require("express");
//Handlers
const {
  createCategory,
  getAllTypes,
  updateType,
  deleteType,
} = require("../controllers/categoriesControllers");

// const { getCategories } = require("../handlers/GET/getCategories");
// const { createCategories } = require("../handlers/POST/createCategories");

const categoryRouter = Router();

//Rutas
//Ruta de crear categorias
categoryRouter.get("/", getAllTypes);
//Ruta de crear categorias
categoryRouter.post("/", createCategory);
//Ruta de actualizar categorias
categoryRouter.put("/", updateType);
//Ruta de borrado
categoryRouter.delete("/", deleteType);

module.exports = categoryRouter;
