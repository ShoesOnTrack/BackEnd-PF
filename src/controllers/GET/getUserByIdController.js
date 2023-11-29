const users = require("../../models/users");

const getUserById = async (req, res) => {
    try {
      const oneUser = await users.findByPk(req.params.id);
      res.send(oneUser);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  module.exports = { getUserById }