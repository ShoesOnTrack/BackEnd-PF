const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Categories",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    { paranoid: true }
  );
};
