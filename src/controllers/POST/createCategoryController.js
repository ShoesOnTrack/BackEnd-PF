const { Categories } = require("../../db");
const { Op } = require("sequelize");

exports.createCategoriesController = async (name) => {
  const existingCategory = await Categories.findOne({
    where: {
      name: { [Op.iLike]: `%${name}%` },
    },
  });
  if (existingCategory) {
    throw new Error("Category already exists");
  }
  const newCategory = await Categories.create({ name });

  return newCategory;
};
