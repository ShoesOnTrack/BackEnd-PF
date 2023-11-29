const { Users } = require("../../db");

const getAllUsers = async (req, res) => {
  try {
    const allUser = await Users.findAll();
    res.send(allUser);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { getAllUsers };
