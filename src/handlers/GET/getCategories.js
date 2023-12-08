const {
  getCategoriesController,
} = require("../../controllers/GET/getCategoriesController");

exports.getCategories = async (req, res) => {
  try {
    const response = await getCategoriesController();
    res.status(200).send(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
