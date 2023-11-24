const { Products } = require("../../db");

exports.getProductByIdController = async (id) => {
  const product = Products.findOne({ where: { id: id } });
  return product;
};
