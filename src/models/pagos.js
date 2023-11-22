const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "pagos",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      ref: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { paranoid: true }
  );
};
