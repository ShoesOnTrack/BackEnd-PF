const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Products", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    brandName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sizes: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
    },
    details: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    sold: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active",
    },
  });
};
