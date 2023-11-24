const { Router } = require("express");
const { getShoesByName } = require("../controllers/getShoesByName");
const { getShoesById } = require("../controllers/getShoesById");

const { updateShoes } = require("../controllers/updateShoes");
const { getShoesType } = require("../controllers/getShoesType");
const { createShoesType } = require("../controllers/createShoesType");
const { getAllTypes, createCategory, updateType, deleteType } = require("../controllers/categoriesControllers");


const router = Router();

router.get('/name', getShoesByName)
router.get('/shoes/:id', getShoesById)

router.put('/shoes/:id', updateShoes)
router.get('/type/:shoesType', getShoesType);
router.post('/type', createShoesType);

router.get('/categories', getAllTypes);
router.post('/categories', createCategory);
router.put('categories', updateType);
router.delete('categories', deleteType);


module.exports = router;
