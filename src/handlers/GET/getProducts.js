const {
  getProductsController,
  getProductsByName,
} = require("../../controllers/GET/getProductsController");

exports.getProducts = async (req, res) => {
  const { name, category, brand } = req.query;

  if (name) {
    try {
      const response = await getProductsByName(name);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    try {
      const response = await getProductsController();

      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  //  else if (brand) {
  //   try {
  //     const response = await filterByBrand(brand);
  //     res.status(201).json(response);
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // } else if (category) {
  //   try {
  //     const response = await filterByCategory(category);
  //     res.status(201).json(response);
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // } else if (category && brand) {
  //   try {
  //     const response = await filterByCategoryAndBrand(category, brand);
  //     res.status(201).json(response);
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
};
