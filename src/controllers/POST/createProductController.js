const { uploadImage } = require("../../config/cloudinary");
const { Products, Categories, Users } = require("../../db");

exports.createProductController = async (
  name,
  brandName,
  price,
  description,
  image,
  category,
  color,
  details,
  stock,
  sizes,
  user
) => {
  try {
    const existingProduct = await Products.findOne({
      where: { name: name, brandName: brandName, price: price },
    });
    if (existingProduct) {
      throw new Error("An product with the same name and price already exists");
    }

    let categoryInstance = await Categories.findOne({
      where: { name: category },
    });

    if (!categoryInstance) {
      categoryInstance = await Categories.create({ name: category });
    }

    let userInstance = await Users.findOne({
      where: { email: user },
    });

    const cloudinaryUpload = await uploadImage(`${image}`);

    const newProduct = await Products.upsert({
      name,
      brandName,
      description,
      price,
      image: cloudinaryUpload,
      color,
      details,
      sizes,
      stock,
      CategoryId: categoryInstance.id,
      UserId: userInstance.id,
    });

    const categoryData = {
      id: categoryInstance.id,
      name: categoryInstance.name,
    };

    const product = [newProduct, categoryData];

    return product;
  } catch (error) {
    throw new Error("Unable to create this event: " + error.message);
  }
};
