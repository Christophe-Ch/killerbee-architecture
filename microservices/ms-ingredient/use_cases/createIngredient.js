const Ingredient = require("../repositories/ingredient");

module.exports = async (name, description) => {
  return await Ingredient.create({ name, description });
};
