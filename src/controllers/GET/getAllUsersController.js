const users = require("../../models/users");


const getAllUsers = async (req, res) => {
  try {
    const allUser = await users.findAll();
    res.send(allUser);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { getAllUsers }