const { Router } = require("express");
const { getShoesByName } = require("../controllers/getShoesByName");
const { getShoesById } = require("../controllers/getShoesById");

const { updateShoes } = require("../controllers/updateShoes");
const { getShoesType } = require("../controllers/getShoesType");
const { createShoesType } = require("../controllers/createShoesType");


const router = Router();

router.get('/name', getShoesByName)
router.get('/shoes/:id', getShoesById)

router.put('/shoes/:id', updateShoes)
router.get('/type/:shoesType', getShoesType);
router.post('/type', createShoesType);


module.exports = router;
