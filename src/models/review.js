const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define( 'review', 
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    calification: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {paranoid: true}
)
}