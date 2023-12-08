const { Products, Categories } = require("../../db");
const { uploadImage } = require("../../config/cloudinary");

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

    // Subir nueva imagen a Cloudinary si se proporciona una nueva URL
    let cloudinaryUpload;
    if (image !== undefined) {
      cloudinaryUpload = await uploadImage(`${image}`);
    }

    const updates = {
      ...(name !== undefined && { name }),
      ...(image !== undefined && { image:cloudinaryUpload  }),
      ...(price !== undefined && { price }),
      ...(price !== undefined && { price }),
      ...(sizes !== undefined && { sizes }),
      ...(stock !== undefined && {
        stock: updatedProduct.stock,
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
