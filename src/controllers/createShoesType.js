const { shoes } = require("../db");

const createShoesType = async (req, res) => {
  const { type } = req.body;

  try {
    // Verificar si el tipo de zapato ya existe
    const existingShoes = await shoes.findOne({
      where: {
        type,
      },
    });

    if (existingShoes) {
      return res.status(400).json({ error: "El tipo de zapato ya existe." });
    }

    // Crear un nuevo tipo de zapato
    const newShoesType = await shoes.create({
      type,
    });

    res.status(201).json(newShoesType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createShoesType };
