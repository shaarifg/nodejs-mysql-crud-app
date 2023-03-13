const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");
class Book extends Model {}

Book.init(
  {
    // Model attributes are defined here
    bookName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.NUMBER,
      defaultValue: 1,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Book", // We need to choose the model name
  }
);

module.exports = Book;
