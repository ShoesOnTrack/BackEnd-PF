const { Zapatos } = require("../../DB/products.json");
const { Usuario } = require("../../DB/user.json");
const { Categorias } = require("../../DB/categories.json");
const { Products, Categories, Users } = require("../db");

exports.shoes = async (req, res) => {
  try {
    console.log("Creating Shoes");
    Zapatos.map(async (shoe) => {
      let categoryInstance = await Categories.findOne({
        where: { name: shoe.category },
      });
      let userInstance = await Users.findOne({
        where: { email: shoe.user },
      });

      await Products.create({
        name: shoe.name,
        brandName: shoe.brandName,
        image: shoe.image,
        price: shoe.price,
        color: shoe.color,
        sizes: shoe.sizes,
        stock: shoe.stock,
        description: shoe.description,
        details: shoe.details,
        CategoryId: categoryInstance.id,
      });
    });

    console.log("Shoes saved in DB");
  } catch (error) {
    console.log(error.message);
  }
};

exports.categories = async (req, res) => {
  try {
    console.log("Creating Categories");
    const categories = Categorias.map((category) => ({
      name: category.name,
    }));
    await Categories.bulkCreate(categories);
    console.log("Categories saved in DB");
  } catch (error) {
    console.log(error.message);
  }
};

exports.user = async (req, res) => {
  try {
    console.log("Creating User");
    const user = {
      name: Usuario.name,
      email: Usuario.email,
      email_verified: true,
    };
    await Users.create(user);
    console.log("User saved in DB");
  } catch (error) {
    console.log(error.message);
  }
};
