const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
    },
    email: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING },
    password: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: "users",
  }
);
module.exports = User;
