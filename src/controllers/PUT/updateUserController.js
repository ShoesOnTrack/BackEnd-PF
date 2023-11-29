const users = require("../../models/users");

const updateUser = async (req, res) => { 
    const {
      name,
      email,
      password,
      lastname,
      genre,
      phone,
      address,
      country,
      isAdmin,
    } = req.body;
    console.log(req.body);
    try {
      await users.update(
        {
          name: name,
          email: email,
          password: password,
          lastname: lastname,
          genre: genre,
          phone: phone,
          address: address,
          country: country,
          isAdmin: isAdmin,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).send({ message: "User updated" });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  };


module.exports = { updateUser}