const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Payments",
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
      date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { paranoid: true }
  );
};
