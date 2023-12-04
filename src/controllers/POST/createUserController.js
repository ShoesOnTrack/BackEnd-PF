const { Users } = require("../../db");

exports.createUserController = async (name, email, email_verified) => {
  try {
    const [newUser, created] = await Users.findOrCreate({
      where: { email },
      defaults: { name, email_verified },
    });

    if (created) {
      const creado = await this.createUserController(name, email, email_verified)

      return creado
    } else {
      // Si no se creó un nuevo usuario, significa que ya existe, entonces puedes lanzar un error o manejarlo de otra manera.
      let id = newUser.id;
      let name = newUser.name;
      let email = newUser.name;
      let isAdmin = newUser.isAdmin;
      let ban = newUser.ban;

      return {id, name, email, isAdmin, ban}
    }
  } catch (error) {
    return { error: error.message };
  }
};
