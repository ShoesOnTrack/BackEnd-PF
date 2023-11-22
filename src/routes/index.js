const { Router } = require("express");
const { getShoesByName } = require("../controllers/getShoesByName");
const { getShoesById } = require("../controllers/getShoesById");

const router = Router();

router.get('/name', getShoesByName)
router.get('/shoes/:id', getShoesById)

module.exports = router;
