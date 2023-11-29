const {
  createProductController,
} = require("../../controllers/POST/createProductController");

exports.createProduct = async (req, res) => {
  const {
    name,
    brandName,
    price,
    description,
    image,
    category,
    color,
    details,
    stock,
    sizes,
    user,
  } = req.body;
  try {
    const response = await createProductController(
      name,
      brandName,
      price,
      description,
      image,
      category,
      color,
      details,
      stock,
      sizes,
      user
    );

    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
