const { Products } = require("../../db");

exports.getProductByIdController = async (id) => {
  const product = Products.findOne({
    where: { id: id },
    attributes: {
      exclude: ["createdAt", "updatedAt", "deletedAt"],
    },
  });
  return product;
};
