const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Reviews",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      contenido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      puntuacion: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    }, {
    sequelize,
    modelName: 'Reviews',
  });
  { paranoid: true }
};
