const {
  updateProductController,
} = require("../../controllers/PUT/updateProductController");

exports.updateProduct = async (req, res) => {
  const { id, name, image, description, price, stock, sizes, category } =
    req.body;

  try {
    const response = await updateProductController(
      id,
      name,
      image,
      description,
      price,
      sizes,
      stock,
      category
    );

    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
