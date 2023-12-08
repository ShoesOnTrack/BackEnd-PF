const { deleteProduct } = require("../../controllers/DELETE/deleteProductController");



const deleteProductseHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await deleteProduct(id); // Espera la respuesta de deleteProduct

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = { deleteProductseHandler }