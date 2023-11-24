const { Router } = require("express");
const productRouter = require("./productsRouter");
const categoryRouter = require("./categoryRouter");
const userRouter = require("./userRouter");

const { updateShoes } = require("../controllers/updateShoes");
const { getShoesType } = require("../controllers/getShoesType");
const { createShoesType } = require("../controllers/createShoesType");
const { getAllTypes, createCategory, updateType, deleteType } = require("../controllers/categoriesControllers");


const router = Router();

router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/users", userRouter);

router.put('/shoes/:id', updateShoes)
router.get('/type/:shoesType', getShoesType);
router.post('/type', createShoesType);

router.get('/categories', getAllTypes);
router.post('/categories', createCategory);
router.put('categories', updateType);
router.delete('categories', deleteType);


module.exports = router;
