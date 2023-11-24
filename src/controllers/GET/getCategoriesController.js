const { Categories } = require("../../db");

exports.getCategoriesController = async () => {
  const allCategories = await Categories.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt", "deletedAt"],
    },
  });

  return allCategories;
};
