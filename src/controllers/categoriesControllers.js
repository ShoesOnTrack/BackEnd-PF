const { Categories } = require("../db");

const updateType = async (req, res) => {
  const data = req.body;

  try {
    const categorieUpdate = await Categories.findByPk(data.id);

    if (!categorieUpdate) {
      throw new Error(`Categoria con ID ${data.id} no encontrada.`);
    }

    const updatedData = {
      name: data.name,
    };

    await categorieUpdate.update(updatedData);

    res.status(200).json("Categoria actualizada correctamente");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllTypes = async (req, res) => {
  try {
    let types = await Categories.findAll({
      attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
    });

    res.status(200).json(types);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteType = async (req, res) => {
  const data = req.body;

  try {
    const categoryToDelete = await Categories.findByPk(data.id);

    if (!categoryToDelete) {
      throw new Error(`Categoría con ID ${data.id} no encontrada.`);
    }

    await categoryToDelete.destroy();

    return res
      .status(200)
      .json({ message: `Categoría con ID ${data.id} eliminada exitosamente.` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createCategory = async (req, res) => {
  const data = req.body;

  try {
    const existingCategory = await Categories.findOne({
      where: { name: data.name },
    });

    if (existingCategory) {
      throw new Error(`La categoría "${data.name}" ya existe.`);
    }

    const newCategory = await Categories.create({ name: data.name });

    return res.status(201).json({
      message: `Categoría "${data.name}" creada con éxito.`,
      category: newCategory,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { updateType, getAllTypes, deleteType, createCategory };
