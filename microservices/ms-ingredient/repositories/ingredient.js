const { DataTypes, Deferrable } = require("sequelize");
const sequelize = require("../db/sql_server");

const Ingredient = sequelize.define("Ingredient", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
});

module.exports = Ingredient;
