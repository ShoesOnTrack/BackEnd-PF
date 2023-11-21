const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define(
    'shoes',
    {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true       
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
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    stock_total: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    waist: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    material: {
        type: DataTypes.STRING,
    },
    sold: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    details: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    },
  )
}


