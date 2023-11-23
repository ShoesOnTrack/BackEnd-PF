const { shoes } = require("../db");

const getShoesType = async (req, res) => {
  const { shoesType: type } = req.params;

  try {
    const response = await shoes.findAll({
      where: {
        type,
      },
    });

    if (response.length > 0) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: error.message });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getShoesType };
