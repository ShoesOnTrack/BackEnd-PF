const { Products, Categories } = require("../../db");
const { Op } = require("sequelize");
// const { expiredProducts } = require("../utiles/expiredProducts");

exports.getProductsController = async () => {
  // expiredProducts();
  const products = await Products.findAll({
    where: { status: "active" },
    attributes: {
      exclude: ["createdAt", "updatedAt", "deletedAt"],
    },
    include: {
      model: Categories,
      attributes: ["name"],
      exclude: ["createdAt", "updatedAt", "deletedAt"],
    },
  });

  const allProducts = products.map((product) => {
    return {
      id: product.id,
      creator: product.UserId,
      name: product.name,
      brandName: product.brandName,
      price: product.price,
      image: product.image,
      color: product.color,
      sizes: product.sizes,
      stock: product.stock,
      sold: product.sold,
      status: product.status,
      category: product.Category ? product.Category.name : null, //.toString()
      description: product.description,
      details: product.details,
    };
  });

  return allProducts;
};

exports.getProductsByName = async (name) => {
  const productsFound = await Products.findAll({
    where: {
      name: { [Op.iLike]: `%${name}%` },
    },
  });
  return [...productsFound];
};
