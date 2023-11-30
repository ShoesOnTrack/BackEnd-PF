const { Products } = require("../../db")

const getAllUserProduct = async (idUser) => {
    const events = await Products.findAll({
      where: { UserId: idUser },
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