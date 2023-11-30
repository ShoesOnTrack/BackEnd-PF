const { getAllUserProductsController } = require("../../controllers/GET/getAllUserProductsController")

const getAllUserProductsHandler = async (req, res) => {
    const { idUser } = req.query;
    try {
      const data = await getAllUserProductsController(idUser);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = { getAllUserProductsHandler };