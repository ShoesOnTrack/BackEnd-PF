const paginateAllProducts = require("../../controllers/GET/getFilteredController")

const getProductseHandler = async (req, res) => {
    try {
      paginateAllProducts(req, res, () => {
        res.status(200).json(res.paginatedResults);
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

module.exports = { getProductseHandler }