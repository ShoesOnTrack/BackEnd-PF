const { Products } = require("../../db");

const getAllUserProduct = async () => {
  const events = await Products.findAll({
    include: {
      attributes: [
        "id",
        "name",
        "brandName",
        "price",
        "stock",
        "description",
        "image",
        "status",
        "color",
        "sizes",
        "details",
        "sold",
      ],
    },
  });
  return events;
};

module.exports = { getAllUserProduct };
