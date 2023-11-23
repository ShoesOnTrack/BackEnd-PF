const { Router } = require("express");
const { getShoesByName } = require("../controllers/getShoesByName");
const { getShoesById } = require("../controllers/getShoesById");
const { updateShoes } = require("../controllers/updateShoes");

const router = Router();

router.get('/name', getShoesByName)
router.get('/shoes/:id', getShoesById)
router.put('/shoes/:id', updateShoes)

module.exports = router;
