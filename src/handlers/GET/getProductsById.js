const {
  getProductByIdController,
} = require("../../controllers/GET/getProductsByIdController");

exports.getProductsById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await getProductByIdController(id);

    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
