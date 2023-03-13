const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    role: DataTypes.STRING,
  },
  {
    timestamps: "false",
    tableName: "users",
  }
);
module.exports = User;
