const { Products } = require("../../db");


const deleteProduct = async (id) => {
    try {
        const deletedRows = await Products.destroy({
            where: {
                id: id,
            }
        });

        
        if (deletedRows > 0) {
            return { message: 'Producto eliminado correctamente' };
        } else {
            throw new Error('Producto no encontrado');
        }
    } catch (error) {
        throw new Error("No se pudo eliminar el producto: " + error.message);
    }
}


module.exports = { deleteProduct }