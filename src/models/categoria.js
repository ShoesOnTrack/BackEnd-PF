const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define( 'categoria', 
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {paranoid: true}
)
}