const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define(
    'users', 
    {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
    },
    isAdmin:{
        type:DataTypes.BOOLEAN,
        defaultValue: false,
    },
    ban: {
        type:DataTypes.BOOLEAN,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email_verify: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dni: {
        type: DataTypes.STRING,
      },
    genre: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    },
    adress: {
        type: DataTypes.STRING,
    },
    country: {
        type: DataTypes.STRING,
    },
    },
  {
    timestamps: false,
    freezeTableName: true,
  }
  );
}
 
