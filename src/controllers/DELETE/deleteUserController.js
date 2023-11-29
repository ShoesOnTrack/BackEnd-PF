const users = require("../../models/users");

const deleteUser = (req, res) => {
    try {
      users.destroy({
        where: {
          id: req.params.id,
        },
      });
      return res.send({ message: "User deleted successfully" });
    } catch (error) {
      return res.send({ message: err }).status(400);
    }
  };

  module.exports = { deleteUser }