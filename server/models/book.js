const sequelize = require("../db");
const { DataTypes, Model } = require("sequelize");

class Book extends Model {}

Book.init(
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: DataTypes.STRING,
    price: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Book", // We need to choose the model name
    timestamps: false,
  }
);

module.exports = Book;
