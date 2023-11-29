const { Users } = require("../../db");

exports.createUserController = async (name, email, email_verified) => {
  try {
    const [newUser, created] = await Users.findOrCreate({
      where: { email },
      defaults: { name, email_verified },
    });

    if (created) {
      // Si se creó un nuevo usuario, devuelve el nuevo usuario creado
      return "Se creo el nuevo usuario";
    } else {
      // Si no se creó un nuevo usuario, significa que ya existe, entonces puedes lanzar un error o manejarlo de otra manera.
      throw new Error("Este usuario ya está registrado.");
    }
  } catch (error) {
    return { error: error.message };
  }
};
