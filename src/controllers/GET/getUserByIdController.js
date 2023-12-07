const { Users } = require("../../db");

const getUserById = async (req, res) => {
  console.log(req.params.id);
  try {
    const oneUser = await Users.findByPk(req.params.id);
    res.send(oneUser);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { getUserById };
