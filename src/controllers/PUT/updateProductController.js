const { Products, Categories } = require("../../db");

exports.updateProductController = async (
  id,
  name,
  image,
  description,
  price,
  sizes,
  stock,
  category
) => {
  try {
    const updatedProduct = await Products.findOne({ where: { id } });
    const newCategory = await Categories.findOne({
      where: { name: category },
    });

    sizes.sort();

    const updates = {
      ...(name !== undefined && { name }),
      ...(image !== undefined && { image }),
      ...(price !== undefined && { price }),
      ...(price !== undefined && { price }),
      ...(sizes !== undefined && { sizes }),
      ...(stock !== undefined && {
        stock: updatedProduct.stock + stock,
      }),
      ...(description !== undefined && { description }),
      ...(newCategory !== undefined && {
        CategoryId: newCategory.id,
      }),
    };

    await updatedProduct.update(updates);

    return updatedProduct;
  } catch (error) {
    throw new Error("Unable to update this event:" + error.message);
  }
};
