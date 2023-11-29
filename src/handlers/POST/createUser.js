const {
  createUserController,
} = require("../../controllers/POST/createUserController");

exports.createUser = async (req, res) => {
  const { name, email, email_verified } = req.body;

  try {
    const newUser = await createUserController(name, email, email_verified);

    console.log("User created successfully:", newUser);

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
