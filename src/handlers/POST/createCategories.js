const {
  createCategoriesController,
} = require("../../controllers/POST/createCategoryController");

exports.createCategories = async (req, res) => {
  const { name } = req.body;
  try {
    const response = await createCategoriesController(name);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
